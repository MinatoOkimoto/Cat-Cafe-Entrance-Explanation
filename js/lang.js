import translations from './globals.js';

function loadLanguage(lang) {
  // console.log(lang)
  fetch(`./script/${lang}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${lang}.json`);
      }
      return response.json();
    })
    .then(dictionary => {
      // グローバル変数にjsonから読み込んだ値を格納
      translations[lang] = dictionary;

      // console.log("Loaded dictionary:", dictionary);
      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dictionary[key]) {
          // console.log(`Replacing "${key}": "${el.textContent}" → "${dictionary[key]}"`);
          el.textContent = dictionary[key];
        }
      });

      // カスタムイベントを発火（他のモジュールに知らせる）
      const event = new CustomEvent("languageLoaded", { detail: lang });
      document.dispatchEvent(event);
    })
    .catch(error => {
      console.error('Language load error:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('langSelect');

  // localStorage から保存済み言語を取得（なければ 'ja' を使う）
  const savedLang = localStorage.getItem('lang') || 'ja';

  // セレクトボックスの値を保存された言語に設定
  select.value = savedLang;

  // 初期言語を適用
  loadLanguage(savedLang);

  // 言語選択が変更されたら、localStorage に保存して適用
  select.addEventListener('change', () => {
    const selectedLang = select.value;
    localStorage.setItem('lang', selectedLang); // 選んだ言語を保存
    loadLanguage(selectedLang);                 // 表示を更新
  });
});

const openLangPopup = document.getElementById("openLangPopup");
const closeLangPopup = document.getElementById("closeLangPopup");
const languagePopup = document.getElementById("languagePopup");

openLangPopup.addEventListener("click", () => {
  languagePopup.style.display = "flex";
});

closeLangPopup.addEventListener("click", () => {
  languagePopup.style.display = "none";
});