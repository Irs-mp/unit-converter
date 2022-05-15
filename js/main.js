const inputNum = document.getElementById('input-num')
const meter = document.getElementById('meter')
const meterToFeet = document.getElementById('meterToFeet')
const feet = document.getElementById('feet')
const feetToMeter = document.getElementById('feetToMeter')
const liter = document.getElementById('liter')
const literToGallon = document.getElementById('literToGallon')
const gallon = document.getElementById('gallon')
const gallonToLiter = document.getElementById('gallonToLiter')
const kilo = document.getElementById('kilo')
const kiloToPound = document.getElementById('kiloToPound')
const pound = document.getElementById('pound')
const poundToKilo = document.getElementById('poundToKilo')

const btn = document.getElementById('btn')

window.addEventListener('load', () => {
  inputNum.focus()
})

inputNum.addEventListener('keypress', (e) => {
  let inputVal = inputNum.value

  if (e.key == 'Enter') {


    if (inputVal < 0) {
      alert('Enter a number greater than zero')
      inputNum.value = ''
    } else {
    meter.textContent = inputVal
    feet.textContent = inputVal
    liter.textContent = inputVal
    gallon.textContent = inputVal
    kilo.textContent = inputVal
    pound.textContent = inputVal


    meterToFeet.textContent = (inputVal * 3.28084).toFixed(3)
    feetToMeter.textContent = (inputVal * 0.3048).toFixed(3)

    literToGallon.textContent = (inputVal * 0.264172).toFixed(3)
    gallonToLiter.textContent = (inputVal * 3.78541).toFixed(3)

    kiloToPound.textContent = (inputVal * 2.20462).toFixed(3)
    poundToKilo.textContent = (inputVal * 0.453592).toFixed(3)
  }
  }
})

btn.addEventListener('click', (e) => {
  e.preventDefault
  inputNum.value = ''
  meter.textContent = '0'
  meterToFeet.textContent = '0.000'
  feet.textContent = '0'
  feetToMeter.textContent = '0.000'
  liter.textContent = '0'
  literToGallon.textContent = '0.000'
  gallon.textContent = '0'
  gallonToLiter.textContent = '0.000'
  kilo.textContent = '0'
  kiloToPound.textContent = '0.000'
  pound.textContent = '0'
  poundToKilo.textContent = '0.000'
  inputNum.focus()
})