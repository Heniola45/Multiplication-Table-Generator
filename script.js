const submit = document.getElementById("submitBtn");
const inputNumber = document.getElementById("enterNumber");
const table = document.getElementById("generatedTable");

submit.addEventListener("click", generateTable);


function generateTable() {
    const number = Number(inputNumber.value);
    table.innerHTML = "";

    if (!number || number < 1 || number > 1000) {
        table.textContent = "Please enter a number between 1 and 1000.";
        return;
    }

    const list = document.createElement("ul");

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");
        item.textContent = `${number} × ${i} = ${number * i}`;
        list.appendChild(item);
    }

    table.appendChild(list);
}

