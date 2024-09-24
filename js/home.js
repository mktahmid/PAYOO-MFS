// add money to the account

// setp-1: add an event handler to the add money button inside the form and prevent page reload after form submit
// setp-2: get money to be the acount balance

// setp-1: add an event handler to the add money button inside the form  
document.getElementById('btn-add-money').addEventListener('click', function(event){
  // prevent page reload after form submit
  event.preventDefault()

  // setp-2: get money to be the acount balance
  const addMoneyInput = document.getElementById('input-add-money').value
  console.log(addMoneyInput);
  // get the pin number provided
  const pinNumberInput = document.getElementById('input-add-pin').value
  console.log(pinNumberInput);
})