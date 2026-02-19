document.getElementById("add-money-btn").addEventListener("click", function () {
    //1.get bank 
    const bank = getValueFromInput('add-money-bank');

    if (bank === "Select a Bank") {
        alert("Please select a bank");
        return;
    }

    //2 get bank account number
    const bankAccount = getValueFromInput("add-money-number");
    if (bankAccount.length !== 11) {
        alert("Invalid Number");
        return;
    }

    //3 add amount 
    const addAmount = getValueFromInput("add-money-amount");
    const amount = Number(addAmount);
    if (amount < 1) {
        alert("please give valid input amount ")
        return;
    }

    //4 new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance + amount;


    // get pin 
    const pin = getValueFromInput("add-money-pin");

    if (pin === "1234") {
        alert(`add amount successfully from ${bank} and time ${Date()}`);
        setBalance(newBalance);

        //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");
        //2- new div create korbo
        const newHistory = document.createElement("div");
        //3- new div a innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-[12px]">
                ${addAmount} added successfully from ${bank}, account-no ${bankAccount} and time ${Date()}
            </div>
       `;
        //4- history container e newDiv append korbo
        history.append(newHistory);
    } else {
        alert("Invalid pin");
        return;
    }


})