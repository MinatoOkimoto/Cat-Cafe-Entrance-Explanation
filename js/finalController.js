function displayData(id, key) {
    const value = localStorage.getItem(key);
    document.getElementById(id).textContent = value !== null ? value : "0";
}

displayData("age3", "age3");
displayData("age4to12", "age4to12");
displayData("age13", "age13");

displayData("snack200", "snack200");
displayData("snack500", "snack500");
displayData("ticket600", "ticket600");
displayData("ticket1000", "ticket1000");