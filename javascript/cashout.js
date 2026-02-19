document.getElementById('cashout-btn').addEventListener('click', function(){

    //get the number 
    const cashOutNumberInput = document.getElementById("cashout-number");
    const cashOutNumber = cashOutNumberInput.value;
    console.log(cashOutNumber.length);
    if(cashOutNumber.length != 11){
        alert("Invalid agent number");
        return;
    }
    
    //get the amount 
    const  cashOutInput= document.getElementById("cashout-amount").value;
    const cashOut = Number(cashOutInput);
    console.log(cashOut);

    //current balance
    const balanceElement = document.getElementById("balance");
    const balance = Number(balanceElement.innerText);
    console.log(balance);
    
    const newBalance = balance-cashOut;
    console.log(newBalance);
    if(newBalance < 0){
        alert("Insufficient Amount");
        return;
    }
    // if(cashOut<=balance){
    //     alert(newBalance);
        
    // }

    //get the pin
    const cashOutPinInput = document.getElementById("cashout-pin");
    const pin = cashOutPinInput.value;
    if(pin === "1234"){
        alert("cash out successful");
        console.log("new balance", newBalance);
        balanceElement.innerText = newBalance;
    } else {
        alert("Your pin is incorrect");
        return;
    }
    
})