initialPrice = document.querySelector("#initial-price");
quantityOfStocks = document.querySelector("#quantity");
finalPrice = document.querySelector("#final-price");
btnRef = document.querySelector("#tell-me");
outputDivRef = document.querySelector(".output");
bgRef = document.querySelector(".bg");


function calculateProfitAndLoss() {
    var buyingPrice = Number(initialPrice.value);
    var quantity = Number(quantityOfStocks.value);
    var currentPrice = Number(finalPrice.value);
    if(buyingPrice!==0 && quantity !==0){
    
     if (currentPrice > buyingPrice) {
        var profitPerShare = (currentPrice - buyingPrice);
        var profit = ((currentPrice - buyingPrice) * quantity).toFixed(2);
        var profitPercentage = ((profitPerShare / buyingPrice) * 100).toFixed(2);
        outputDivRef.innerText = `Yayyy your protfolio is net positive with a profit of ${profit} and the percentage of profit is ${profitPercentage}`;
        if (profitPercentage>50){
            bgRef.style.backgroundColor="green"
        }


    }
     else if (buyingPrice > currentPrice) {
        var lossPerShare = buyingPrice - currentPrice;
        var loss = ((buyingPrice - currentPrice) * quantity).toFixed(2);
        var lossPercentage = ((lossPerShare / buyingPrice) * 100).toFixed(2);
        outputDivRef.innerText = `Whoops your protfolio is net negative with a loss of ${loss} and the percentage of loss is ${lossPercentage}`;
        
        if (lossPercentage>50){
            bgRef.style.backgroundColor="red"
        }
    }
        else  {
       outputDivRef.innerText = `You have no profit no loss`;
    } 
}
else{
    outputDivRef.innerText="";
    
}
   
}
function hidebgcolor(){
    bgRef.style.backgroundColor="white";
}

function clickhandler() {

    hidebgcolor();
    calculateProfitAndLoss();
    

}

btnRef.addEventListener("click", clickhandler);