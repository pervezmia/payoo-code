document.getElementById("cashout-btn")
    .addEventListener("click", function(){
        //get number
        const cashOutNumber = getValueFromInput("cashout-number");

        //get amount
        const cashOutAmount = getValueFromInput("cashout-amount");

        //get pin
        const pin = getValueFromInput("cashout-pin");

        // get current balance
        const balance = getBalance();
        

        //new balace
        const newBalance = balance - Number(cashOutAmount);

        //Number validation
        if(cashOutNumber.length !== 11){
            alert("Invalid Agent Number");
            return;
        }
        //Amount validation
        if(newBalance<0){
            alert("Invalid Amount");
            return;
        }
        //pin validation
        if(pin === "1234"){
            alert("Withdraw successful")
            setBalance(newBalance);
        } else {
            alert ("Invalid Pin");
            return;
        }
    })







// document.getElementById("cashout-btn")
//     .addEventListener('click', function(){
//         //get number and validation
//         const cashoutNumberInput = document.getElementById("cashout-number");
//         const cashOutNumber = cashoutNumberInput.value;
//         if(cashOutNumber.length !== 11){
//             alert("Invalid agent number");
//             return;
//         }

//         //get amount and validation
//         const cashoutAmountInput = document.getElementById("cashout-amount");
//         const cashoutAmount = cashoutAmountInput.value;
        
//         //current balance
//         const currentBalanceElement = document.getElementById("balance");
//         const currentBalance = currentBalanceElement.innerText;

//         //new balance 
//         const newBalance = Number(currentBalance) - Number(cashoutAmount);
//         // console.log(newBalance);
        
//         if(newBalance<0){
//             alert("Insufficient Balance");
//             return;
//         }

//         //get pin and validation
//         const cashOutPin = document.getElementById("cashout-pin");
//         const pin = cashOutPin.value;
//         if(pin==="1234"){
//             alert("Cash Out successful");
//             currentBalanceElement.innerHTML = newBalance;
//         } else {
//             alert("Invalid Pin");
//             return
//         }


        

//     })