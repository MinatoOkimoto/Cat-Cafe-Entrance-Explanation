document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('langSelect');
  select.addEventListener('change', () => {
    loadLanguage(select.value);
  });

  // 初期言語を設定（例：英語）
  loadLanguage('en');
});

function loadLanguage(lang) {
  /* console.log(lang) */
  fetch(`./script/${lang}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${lang}.json`);
      }
      return response.json();
    })
    .then(dictionary => {
      /* console.log("Loaded dictionary:", dictionary); */
      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dictionary[key]) {
          /* console.log(`Replacing "${key}": "${el.textContent}" → "${dictionary[key]}"`); */
          el.textContent = dictionary[key];
        }
      });
    })
    .catch(error => {
      console.error('Language load error:', error);
    });
}
