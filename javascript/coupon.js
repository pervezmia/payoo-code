document.getElementById("coupon-btn").addEventListener("click", function(){
    const getCoupon = getValueFromInput("coupon");
    const currentBanlance = getBalance();
    
    const newBalance = currentBanlance + 500;
    if(getCoupon === "AbCD"){
        alert("Bonus 500 $ added");
        setBalance(newBalance);

        //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");
        //2- new div create korbo
        const newHistory = document.createElement("div");
        //3- new div a innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-[12px]">
                500 $ Bonus added successfully used coupon code: ${getCoupon} at ${Date()}
            </div>
        `;
        //4- history container e newDiv append korbo
        history.append(newHistory);
    }else{
        alert("Invalid coupon");
    }
})