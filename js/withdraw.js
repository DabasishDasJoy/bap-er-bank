document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueByID('withdraw-field');
    const prevTotalBalance = getElementValueById('total-ac-balance');
    
    if(!isNaN(newWithdrawAmount) && newWithdrawAmount <= prevTotalBalance){
        const prevWithdrawAmount = getElementValueById('total-withdraw-amount');
        setElementValueById('total-withdraw-amount', newWithdrawAmount + prevWithdrawAmount);
        setElementValueById('total-ac-balance', prevTotalBalance - newWithdrawAmount);
    }
    else{
        alert('Invalid');
    }
})



// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     const newWithdrawAmount = document.getElementById('withdraw-field');
//     const withdrawAmountElement = document.getElementById('withdraw-amount');
//     const balanceAmoutElement = document.getElementById('ac-balance');

//     const currentWithdrawAmount = withdrawAmountElement.innerText;
//     const currentBalanceAmount = balanceAmoutElement.innerText;

//     const newWithdrawAmountValue = parseFloat(newWithdrawAmount.value);
//     const currentBalanceAmountValue = parseFloat(currentBalanceAmount);
//     const currentWithdrawAmountValue = parseFloat(currentWithdrawAmount);

//     if(newWithdrawAmountValue <= currentBalanceAmountValue){
//         withdrawAmountElement.innerText = currentWithdrawAmountValue + newWithdrawAmountValue;
//         balanceAmoutElement.innerText = currentBalanceAmountValue - newWithdrawAmountValue;
//     }
//     else if(isNaN(newWithdrawAmountValue)){
        
//         alert('Invalid input');
//     }
//     else{
//         alert("Insufficient Amount");
//     }
    
//     newWithdrawAmount.value = "";
// });





