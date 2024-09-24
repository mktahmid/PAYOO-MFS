document.getElementById('btn-cash-out').addEventListener('click' ,function(event){
  event.preventDefault()

  const cashOut = document.getElementById('input-cash-out').value
  const cashOutNumber = parseFloat(cashOut)
  const pinNumber = document.getElementById('input-cash-out-pin').value
  if(pinNumber === '12'){
    const balance = document.getElementById('ac-balance').innerText
    const balanceNumber = parseFloat(balance)

    const newBalance = balanceNumber - cashOutNumber
    document.getElementById('ac-balance').innerText = newBalance
  }
  else{
    alert('failed')
  }
})
