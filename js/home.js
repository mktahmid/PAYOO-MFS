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

  // step-3: verify pin number
  // wrong eay to validate pin number
  if(pinNumberInput === '1234'){
    console.log('adding money to your account');
    // step-4: get the current balance
    const balance =document.getElementById('ac-balance').innerText
    console.log(balance);
    // step-5: add addMoneyInput with balance
    const addMoneyNumber = parseFloat(addMoneyInput)
    const balanceNumber = parseFloat(balance)
    const newBalance = balanceNumber + addMoneyNumber
    console.log(newBalance);

    // step-6: update the balance in the UI/DOM
    document.getElementById('ac-balance').innerText = newBalance

  }
  else(
    alert('failed to add money!')
  )
})