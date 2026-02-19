

document.getElementById("pay-btn").addEventListener("click", function(){
    const currentBalance = getBalance();
    const payBill = getValueFromInput("pay-money-bill");
    if(payBill === "Select back"){
        alert("Invalid pay Select");
        return;
    }
    const userNumber = getValueFromInput("pay-number");
    if(userNumber.length !== 11){
        alert("Invalid Number");
        return;
    }
    const payAmount = getValueFromInput("pay-amount");
    const pAmount = Number(payAmount);
    const newAmount = currentBalance - pAmount;
    if(pAmount<1 || pAmount>currentBalance){
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("pay-pin");
    if(pin === "1234"){
        alert("payment is successfully");
        setBalance(newAmount);

        //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");
        //2- new div create korbo
        const newHistory = document.createElement("div");
        //3- new div a innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-[12px]">
                ${userNumber} $ payment successfully to ${payBill} at ${Date()}
            </div>
        `;
        //4- history container e newDiv append korbo
        history.append(newHistory);
    } else {
        alert("Invalid Pin");
        return;
    }
})