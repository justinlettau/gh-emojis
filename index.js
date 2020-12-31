"use strict";
(function () {
    var root = document.getElementById('root');
    fetch('https://api.github.com/emojis')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        var keys = Object.keys(res);
        root.innerHTML = '';
        keys.forEach(function (key) {
            var value = res[key];
            var item = document.createElement('div');
            item.classList.add('list__item');
            var img = document.createElement('img');
            img.setAttribute('src', value);
            img.setAttribute('alt', key);
            var title = document.createElement('code');
            title.textContent = ":" + key + ":";
            item.appendChild(img);
            item.appendChild(title);
            root.appendChild(item);
        });
    });
})();
//# sourceMappingURL=index.js.map