const checkboxes = document.querySelectorAll(".check");
const finishBtn = document.getElementById("finishBtn");

function validate() {
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    finishBtn.disabled = !allChecked;
}

checkboxes.forEach(cb => cb.addEventListener("change", validate));

finishBtn.addEventListener("click", () => {
    window.location.href = "final.html"; // ← 最後の完了画面に変更してください
});