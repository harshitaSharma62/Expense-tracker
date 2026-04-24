let total = 0;

function addExpense() {
    let desc = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (desc === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("expenseTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = desc;
    cell2.innerHTML = amount;
    cell3.innerHTML = category;

    total += parseFloat(amount);
    document.getElementById("total").innerHTML = "Total: ₹" + total;

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}