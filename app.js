const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector(".error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000, 500, 100, 20, 10,5,1];
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMsg();
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("The cash given should atleast be equal to the bill amount");
        }
    } else{
        showMessage("Invalid bill amount");
    }
});
function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned %=availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
function hideMsg(){
    message.style.display = "none";
}
function showMessage(errmsg){
    message.style.display ="block";
    message.innerText = errmsg;
}