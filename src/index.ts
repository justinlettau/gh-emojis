(() => {
  const root = document.getElementById('root') as HTMLElement;

  fetch('https://api.github.com/emojis')
    .then((res) => res.json())
    .then((res) => {
      const keys = Object.keys(res);
      root.innerHTML = '';

      keys.forEach((key) => {
        const value = res[key];

        const item = document.createElement('div');
        item.classList.add('list__item');

        const img = document.createElement('img');
        img.setAttribute('src', value);
        img.setAttribute('alt', key);

        const title = document.createElement('code');
        title.textContent = `:${key}:`;

        item.appendChild(img);
        item.appendChild(title);
        root.appendChild(item);
      });
    });
})();
