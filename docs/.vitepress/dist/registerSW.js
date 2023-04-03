if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/utils/sw.js', { scope: '/utils/' });
  });
}
