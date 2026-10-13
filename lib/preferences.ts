export const preferenceScript = `(() => {
  try {
    document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.motion = localStorage.getItem('portfolio-motion') === 'paused' ? 'paused' : 'running';
  } catch {}
})();`;
