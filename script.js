const submit = document.getElementById("submitBtn");
const inputNumber = document.getElementById("enterNumber");
const table = document.getElementById("generatedTable");

submit.addEventListener("click", generateTable);


function generateTable() {
    const number = Number(inputNumber.value);
    table.innerHTML = "";


    const header = document.createElement("h2");
    header.textContent = "Result";
    table.appendChild(header);

    
    if (!number || number < 1 || number > 1000) {
        const error = document.createElement("p");
        error.textContent = "Please enter a number between 1 and 1000.";
        table.appendChild(error);
        return;
    }


    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("h4");
        item.textContent = `${number} × ${i} = ${number * i}`;
        table.appendChild(item);
    }
}

