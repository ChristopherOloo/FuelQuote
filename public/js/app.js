function closeBtn() {
  const divError = document.querySelector(".error")
  divError.style.display="none"
}

function setPriceFuelType() {
  const fuelType = document.getElementById('fuelType').value
  const priceElement = document.getElementById('price')
  let price = null
  if(fuelType === 'kerosene') {
    price = 1.688
  }else if(fuelType === 'diesel'){
    price = 1.713
  }else if(fuelType === 'gasoline'){
    price = 1.986
  }else if(fuelType === 'propane'){
    price = 0.902
  }
  priceElement.value = price
  setTotalPrice(price)
}

function getGallons(){
  const gallons= document.getElementById('gallons').value
  return gallons
}

function setTotalPrice(price) {
  const totalAmountElement = document.getElementById('totalAmount')
  totalAmountElement.value = (parseInt(getGallons()) * parseFloat(price)).toFixed(2)
}
