export const translations = {};
export default translations;

export let langSelect = null;

export function initLangSelector() {
  langSelect = document.getElementById("langSelect");

  if (!langSelect) {
    console.error("langSelect element not found.");
    return;
  }

  // 初期表示の言語設定
  const savedLang = localStorage.getItem("lang") || "ja";
  langSelect.value = savedLang;
}
