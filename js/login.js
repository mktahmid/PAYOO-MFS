// console.log('js file added')


// document.getElementById('id').addEventListener('click' , function() )

/* --------------HW--------------- */
// search: form submit reloading the page 

// // step-1 set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
//   // step-2 prevent default behaviour(prevent reloading browser) 
//   event.preventDefault();
//   console.log('login button clicked')

//   // step-3 get the phone number 
//   const phoneNumber = document.getElementById('phone-number').value;
//   const pinNumber = document.getElementById('pin-number').value;
//   console.log(phoneNumber,pinNumber)
// // step-4: validete phone and pin 
//   if(phoneNumber === '5' && pinNumber === '1234'){
//     console.log('you are logged in');
//     // step-5: allow user to use the website
// }
// else{
//   alert('Wrong phone number or Pin')
// }   
//

document.getElementById('button-login').addEventListener('click', function(event){
  event.preventDefault()

  // get the phone number and pin
  const phoneNumber =document.getElementById('phone-number').value
  const pinNumber =document.getElementById('pin-number').value
  console.log(phoneNumber,pinNumber)
})

  if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html'
}
else{
  alert('Wrong phone number or Pin.')
}   