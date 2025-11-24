// /* Add your JavaScript to this file */
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('.newsletter form');
//     const emailInput = document.getElementById('email');
//     const messageDiv = document.getElementById('message');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const email = emailInput.value. trim();
//         if (email === '') {
//             messageDiv.textContent = 'Please enter a valid email address.';
//         } else{
//             messageDiv.textContent = 'Thank you! Your email address ${email} has been added to our mailing list!`';
//             emailInput.value = '';
//         } 
//     });    
// });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (email === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailInput.value = '';
        }
    });
});