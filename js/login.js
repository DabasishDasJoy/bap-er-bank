console.log('Js file');

// ----------------------grab button--------------
const btnSubmit = document.getElementById('btn-submit');

//addEvent to the button
btnSubmit.addEventListener('click', function(event){
    //grab email field data & password field data
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    //Bad approach.. Never compare email password in client side.
    if(userEmail.value === 'dabdas@gmail.com' && userPassword.value === 'secret'){
        //refer to another page if valid.
        window.location.href = 'bank.html';
    }

    else{
        alert('Invalid User!');
    }
});

