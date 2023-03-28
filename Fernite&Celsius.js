let tempInCelcius = 10;
let tempInFerenheit = 30;

let degF = tempInCelcius * (9 / 5) + 32;
let degC = (tempInFerenheit - 32) * (5 / 9);
console.log(`Temp ${tempInCelcius} in ferenheit ` + degF);
console.log(`Temp ${tempInFerenheit} in celcius ` + degC);