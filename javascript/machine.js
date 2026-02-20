//machine-1. ->input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
    
}


//machine-2. ->balance
function getBalance (){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    // console.log(balance);
    return Number(balance);

}

//machine value-3. -> set balance
function setBalance (value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//machine value-4 -> hidden all show only

function showOnly (id){
    const cashout = document.getElementById('cashout');
    const addMoney = document.getElementById('add-money-section');
    const transaction = document.getElementById("transfer-Money");
    const getBonus = document.getElementById("get-coupon");
    const payBill = document.getElementById("pay-Bil");
    const history = document.getElementById("history");
    // console.log(`${cashout} 
    //     ${addMoney}`);
    

    //sobai k hide koro
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transaction.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    history.classList.add("hidden");


    //id wala element ta ke tumi show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}