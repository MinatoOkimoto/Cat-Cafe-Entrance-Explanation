import { langSelect, initLangSelector, translations } from './globals.js';

initLangSelector();
// 変更イベントのリスナー登録
langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    localStorage.setItem("lang", selectedLang);
});

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const nextBtn = document.getElementById("nextBtn");

function validate() {
    if (check1.checked && check2.checked && check3.checked && check4.checked) {
    nextBtn.disabled = false;
    } else {
    nextBtn.disabled = true;
    }
}

check1.addEventListener("change", validate);
check2.addEventListener("change", validate);
check3.addEventListener("change", validate);
check4.addEventListener("change", validate);

document.getElementById("checkForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // 次のページに遷移（例：最終確認 or チェックイン）
    window.location.href = "collar.html";
});