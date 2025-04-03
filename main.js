document.getElementById("calculate-change").addEventListener("click", function() {
    calculateChange();
});

function calculateChange() {
    const amountDue = parseFloat(document.getElementById("amount-due").value);
    const amountReceived = parseFloat(document.getElementById("amount-received").value);

    let change = Math.round((amountReceived - amountDue) * 100);

    if (isNaN(change) || change < 0) {
        alert("Please enter valid amounts.");
        return;
    }

    const dollars = Math.floor(change / 100);
    change %= 100;
    const quarters = Math.floor(change / 25);
    change %= 25;
    const dimes = Math.floor(change / 10);
    change %= 10;
    const nickels = Math.floor(change / 5);
    change %= 5;
    const pennies = change;

    document.getElementById("dollars-output").innerText = dollars;
    document.getElementById("quarters-output").innerText = quarters;
    document.getElementById("dimes-output").innerText = dimes;
    document.getElementById("nickels-output").innerText = nickels;
    document.getElementById("pennies-output").innerText = pennies;
}