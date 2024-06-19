//declarar 3 variaveis
// 1 - preço combustivel
// 2 - KM/L
// 3 - Distância em KM da viagem
// 
// Imprima no console o valor que será gasto de combustível para realizar essa viagem

const precoCombustivel = 5.59;
const KM_L = 12;
let distancia = 234;

let gasto = distancia/KM_L;
let valorgasto = gasto * precoCombustivel;

console.log("Foi gasto : " + gasto + " de combustivel, e o preço foi : " + valorgasto.toFixed(2)  )

