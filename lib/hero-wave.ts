import { vertexShader, fragmentShader } from "./wave-shaders";

export function startHeroWave(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
  if (!gl) return () => {};
  const program = gl.createProgram();
  if (!program) return () => {};
  const shaders: WebGLShader[] = [];
  for (const [type, source] of [[gl.VERTEX_SHADER, vertexShader], [gl.FRAGMENT_SHADER, fragmentShader]] as const) {
    const shader = gl.createShader(type);
    if (!shader) return () => {};
    shaders.push(shader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    shaders.forEach((shader) => gl.deleteShader(shader));
    gl.deleteProgram(program);
    return () => {};
  }
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const texture = gl.createTexture();
  const time = gl.getUniformLocation(program, "time");
  const resolution = gl.getUniformLocation(program, "resolution");
  const picture = new Image();
  let frame = 0, last = 0, elapsed = 0;
  let ready = false, visible = true, disposed = false;

  function draw(now: number) {
    if (disposed || !gl) return;
    frame = requestAnimationFrame(draw);
    if (now - last < 33) return;
    const delta = Math.min(now - last, 50);
    last = now;
    if (!visible || document.hidden || !ready) return;
    elapsed += delta / 1000;
    gl.uniform1f(time, elapsed);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    canvas.dataset.ready = "true";
  }
  const resize = new ResizeObserver(() => {
    const { width, height } = canvas.getBoundingClientRect();
    const scale = Math.min(1, 1920 / Math.max(width, height));
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, canvas.width, canvas.height);
  });
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
  resize.observe(canvas);
  observer.observe(canvas);
  picture.onload = () => {
    if (disposed) return;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, picture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    ready = true;
  };
  const contextLost = () => { canvas.dataset.ready = "false"; ready = false; };
  canvas.addEventListener("webglcontextlost", contextLost);
  picture.src = "/hero-bg.webp";
  frame = requestAnimationFrame(draw);
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect();
    observer.disconnect();
    canvas.removeEventListener("webglcontextlost", contextLost);
    canvas.dataset.ready = "false";
    gl.deleteTexture(texture);
    gl.deleteBuffer(buffer);
    shaders.forEach((shader) => gl.deleteShader(shader));
    gl.deleteProgram(program);
  };
}
