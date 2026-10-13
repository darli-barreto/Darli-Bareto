import { execFileSync, spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const cwd = process.cwd();
const args = process.argv.slice(2);
const onWsl = process.platform === "linux" && (
  Boolean(process.env.WSL_DISTRO_NAME) ||
  (existsSync("/proc/sys/kernel/osrelease") && /microsoft/i.test(readFileSync("/proc/sys/kernel/osrelease", "utf8")))
);
let executable = process.platform === "win32" ? (process.env.PORTFOLIO_WINDOWS_NODE || "node") : "node";
let command = [resolve("node_modules/next/dist/bin/next"), "dev", ...args];

// WSL does not reliably receive Windows file-change events on /mnt/<drive>.
// Run the watcher on the same OS as the files; Linux-native checkouts stay on Linux.
if (onWsl && /^\/mnt\/[a-z]\//i.test(cwd)) {
  try {
    const windowsNode = process.env.PORTFOLIO_WINDOWS_NODE || execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", [
      "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8",
      "$node = Get-Command node.exe -ErrorAction SilentlyContinue",
      "if ($node) { $node.Source } else { exit 1 }",
    ].join("; ")], { encoding: "utf8" }).trim().replace(/^\uFEFF/, "");
    executable = execFileSync("wslpath", ["-u", windowsNode], { encoding: "utf8" }).trim();
    const windowsCwd = execFileSync("wslpath", ["-w", cwd], { encoding: "utf8" }).trim();
    command = [`${windowsCwd}\\node_modules\\next\\dist\\bin\\next`, "dev", ...args];
    console.log("Proyecto en Windows: iniciando Next.js con Node nativo para activar Fast Refresh.");
  } catch {
    console.error("No se encontró Node para Windows. Instala Node LTS o define PORTFOLIO_WINDOWS_NODE en .env.local con la ruta a node.exe.");
    process.exit(1);
  }
}

const child = spawn(executable, command, { cwd, stdio: "inherit", env: process.env });
child.on("error", (error) => { console.error(error.message); process.exitCode = 1; });
child.on("exit", (code) => { process.exitCode = code ?? 0; });
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
