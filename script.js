// @ts-check
'use strict';


function myFunction () {
    let celsius = prompt("Enter temperature in Celsius: ");
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}`);
}

function FahFunction() {
    document.getElementById("Fahrenheit").innerHTML = "The symbol for degree Fahrenheit is °F.";
  }

  function CelFunction() {
    document.getElementById("Celsius").innerHTML = "The symbol for degree Celsius is °C.";
  }  

