document.getElementById("add-money-btn").addEventListener("click", function(){
    //1.get bank 
    const bank = getValueFromInput('add-money-bank');
    
    if(bank === "Select a Bank"){
        alert("Please select a bank");
        return;
    }

    //2 get bank account number
    const bankAccount = getValueFromInput("add-money-number");
    if(bankAccount.length !== 11){
        alert("Invalid Number");
        return;
    }

    //3 add amount 
    const addAmount = getValueFromInput("add-money-amount");
    const amount = Number(addAmount);
    if(amount < 1){
        alert("please give valid input amount ")
        return;
    }
    
    //4 new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance + amount;
    

    // get pin 
    const pin = getValueFromInput("add-money-pin");
    
    if(pin === "1234"){
        alert(`add amount successfully from ${bank} and time ${Date()}`)
        
        setBalance(newBalance);
    }else{
        alert("Invalid pin");
        return;
    }
    

})