import { langSelect, initLangSelector, translations } from './globals.js';

function validate() {
    const num3 = parseInt(age3.value) || 0;
    const num4to12 = parseInt(age4to12.value) || 0;
    const num13 = parseInt(age13.value) || 0;

    const totalKids = num3 + num4to12;
    const guardiansNeeded = Math.ceil(totalKids / 3);

    if (totalKids > 0 && num13 < guardiansNeeded) {
    // 13歳未満の子供の入園条件を満たさないため、次へ進まないようにする
    error.textContent = translations[langSelect.value].error || translations["ja"].error;
    nextBtn.disabled = true;
    }
    else if (num3 == 0 && num4to12 == 0 && num13 == 0){
    // 未入力の場合、次へ進まないようにする
    nextBtn.disabled = true;
    } else {
    // 条件を満たすため、次へ進む
    error.textContent = "";
    nextBtn.disabled = false;
    }
}

function applyTranslation(lang) {
    //console.log(lang)
    //console.log(translations[lang])
    const t = translations[lang] || translations["ja"];
    //validate(); // エラーメッセージも言語対応
}

const age3 = document.getElementById("age3");
const age4to12 = document.getElementById("age4to12");
const age13 = document.getElementById("age13");
const error = document.getElementById("error");
const nextBtn = document.getElementById("nextBtn");

initLangSelector();
validate(); // エラーメッセージも言語対応
// 変更イベントのリスナー登録
langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    localStorage.setItem("lang", selectedLang);
    applyTranslation(selectedLang);  // この関数が他で定義されている前提
});

// 言語がロードされたタイミングで applyTranslation を実行
document.addEventListener("languageLoaded", (e) => {
  const lang = e.detail;
  applyTranslation(lang);
  validate(); // エラーメッセージも言語対応
});

age3.addEventListener("input", validate);
age4to12.addEventListener("input", validate);
age13.addEventListener("input", validate);

nextBtn.addEventListener("click", () => {
    localStorage.setItem("age3", age3.value);
    localStorage.setItem("age4to12", age4to12.value);
    localStorage.setItem("age13", age13.value);
    window.location.href = "snack.html";
});