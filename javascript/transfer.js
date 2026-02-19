document.getElementById("transfer-btn").addEventListener("click", function(){
    //get number and validation
    const userNumber = getValueFromInput("transfer-number");
    if(userNumber.length !== 11){
        alert("Invalid number");
        return;
    }

    //current balance 
    const currentBalance = getBalance();

    //get amount and validation
    const userSandAmount = getValueFromInput("transfer-amount");
    const sandAmount = Number(userSandAmount);
    if(sandAmount>getBalance() || sandAmount < 1){
        alert("Invalid Amount");
        return;
    } 
    //new balance 
    const newBalance = currentBalance - sandAmount;
    console.log(newBalance);

    // get pin and validation
    const transferPin = getValueFromInput("transfer-pin");
    if(transferPin === "1234"){
        alert("successfully transfer");
        setBalance(newBalance);

        // //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");
        //2- new div create korbo
        const newHistory = document.createElement("div");
        //3- new div a innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-[12px]">
                ${sandAmount} transfer successfully user account-no ${userNumber} and time ${Date()}
            </div>
       `;
        //4- history container e newDiv append korbo
        history.append(newHistory);

    } else {
        alert("Invalid Pin");
        return;
    }
})