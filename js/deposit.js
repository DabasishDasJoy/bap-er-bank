document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueByID('deposit-field');
    
    if(!isNaN(newDepositAmount)){
        const prevDepositAmount = getElementValueById('total-deposit-amount');
        const prevTotalBalance = getElementValueById('total-ac-balance');
        setElementValueById('total-deposit-amount', newDepositAmount + prevDepositAmount);
        setElementValueById('total-ac-balance', prevTotalBalance + newDepositAmount);
    }
    else{
        alert("Invalid operation");
    }
    
});

// document.getElementById('btn-deposit').addEventListener('click', function () {
//     console.log('clicked');
//     const newDepositAmount = document.getElementById('deposit-field');
//     const depositAmountElement = document.getElementById('deposit-amount');
//     const balanceAmoutElement = document.getElementById('ac-balance');

//     const currentDepositAmount = depositAmountElement.innerText;
//     const currentBalanceAmount = balanceAmoutElement.innerText;

//     const newDepositAmountValue = parseFloat(newDepositAmount.value);
//     const currentBalanceAmountValue = parseFloat(currentBalanceAmount);
//     const currentDepositAmountValue = parseFloat(currentDepositAmount);

    
//     if(!isNaN(newDepositAmountValue)){
//         depositAmountElement.innerText = currentDepositAmountValue + newDepositAmountValue;
//         balanceAmoutElement.innerText = currentBalanceAmountValue + newDepositAmountValue;
        
//     }
//     else{
//         // document.getElementById('btn-deposit').setAttribute('data-bs-toggle', 'modal');
//         // document.getElementById('btn-deposit').setAttribute('data-bs-target', "#exampleModalCenter");
//         alert('Invalid');
//     }
    
//     newDepositAmount.value = "";
// });





