/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Length (Meter/Feet)
// 20 meters = 65.616 feet | 20 feet = 6.096 meters

// Volume (Liters/Gallons)
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters

// Mass (Kilograms/Pounds)
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const input = document.getElementById("input-nr");
const convertBtn = document.getElementById("convert-btn");
const divList = document.getElementById("items-list");
// const errorParagraph = document.getElementById("error-message");

/* Item example
  <div class="item">
<div class="item-title">title</div>
<div class="item-description">description</div>
</div> */

convertBtn.addEventListener("click", () => {
  console.log("Entered on  click " + input.value);
  const number = input.value;

  console.log(!isNaN(number));
  if (!isNaN(number)) {
    console.log("Add items");
    const myArray = generate(number);
    // add interHtml into DOM
    let innerEl = "";
    for (let i = 0; i < myArray.length; i++) {
      innerEl += myArray[i];
    }
    divList.innerHTML = innerEl;
  }
});

// input.addEventListener('input', ()=>{
//     console.log("Reset items list")
//     if(divList.innerHTML !== ""){
//         console.log("Remove all items")
//     }
// })

input.addEventListener("focus", () => {
  if (divList.innerHTML !== "") {
    clear()
  }
});

// input.addEventListener("keydown", (event) => {
//     if (divList.innerHTML !== "" && event.key === 'Enter') {
//       clear()
//     }
//   });


function clear() {
  //clear input
  input.value = "";
  //clear list of items
  divList.innerHTML= "";
}

// window.addEventListener("load", () => {
//   console.log("load ");
// });

// convert units and generate div-s (text) to display
function generate(number) {
  let arr = [];
  if (!isNaN(number)) {
    arr.push(generateLength(number));
    arr.push(generateVolume(number));
    arr.push(generateMass(number));
  }
  return arr;
}

function generateLength(number) {
  let metersToFeet = (Number(number) * 3.281).toFixed(3);
  let feetToMeters = (Number(number) / 3.281).toFixed(3);

  return `<div class="item">
    <div class="item-title">Length (Meter/Feet)</div>
    <div class="item-description">${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters</div>
    </div>`;
}

function generateVolume(number) {
  let litersToGallons = (Number(number) * 0.264).toFixed(3);
  let gallonsToLiters = (Number(number) / 0.264).toFixed(3);

  return `<div class="item">
  <div class="item-title">Volume (Liters/Gallons)</div>
  <div class="item-description">${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters</div>
  </div>`;
}

function generateMass(number) {
  let kilosToPounds = (Number(number) * 2.204).toFixed(3);
  let poundsToKilos = (Number(number) / 2.204).toFixed(3);

  return `<div class="item">
    <div class="item-title">Mass (Kilograms/Pounds)</div>
    <div class="item-description">${number} kilos = ${kilosToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos</div>
    </div>`;
}
