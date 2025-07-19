import { langSelect, initLangSelector, translations } from './globals.js';

initLangSelector();
// 変更イベントのリスナー登録
langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    localStorage.setItem("lang", selectedLang);
});

document.getElementById("toCaution").addEventListener("click", function() {
    window.location.href = "caution.html";
});

document.getElementById("toCaution").addEventListener("click", function() {
    localStorage.setItem("snack200", document.getElementById("snack200").value);
    localStorage.setItem("snack500", document.getElementById("snack500").value);
    localStorage.setItem("ticket600", document.getElementById("ticket600").value);
    localStorage.setItem("ticket1000", document.getElementById("ticket1000").value);
    window.location.href = "caution.html";
});