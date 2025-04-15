(function loopVideo() {
  const tryLoop = () => {
    const video = document.querySelector('video');
    if (video) {
      video.loop = true;
    }
  };
  // Tenta imediatamente e observa mudanças na página
  tryLoop();
  new MutationObserver(tryLoop).observe(document.body, { childList: true, subtree: true });
})();

