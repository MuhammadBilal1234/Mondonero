export const loadTheoPlayer = (callback) => {
  const existingScript = document.getElementById('theoPlayer');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src =
      'https://cdn.myth.theoplayer.com/fa5b2259-6715-4ed8-9b0f-90a197cc8f25/THEOplayer.js';
    script.id = 'theoPlayer';
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};
