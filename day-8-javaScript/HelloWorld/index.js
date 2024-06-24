// script.js 
// Seleciona o elemento HTML com o id 'mensagem'
const mensagemElemento = document.getElementById('mensagem');
// let nome = "João"; //Variável mutável
const IDADE = 25; //variável imutável



//FUNÇÃO
function saudacao(nome) { return `Olá, ${nome}!`; } console.log(saudacao("Maria")); //Saída Olá Maria!



// Modifica o texto do elemento 
mensagemElemento.textContent = 'Olá, Mundo! Este é meu primeiro Hello World com JavaScript!';


let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}


let dia = 2;
switch (dia) {
    case 1: console.log("Domingo");
        break;
    case 2: console.log("Segunda-feira");
        break;
    case 3: console.log("Terça-feira");
        break;
    default: console.log("Dia inválido");
}

for (let i = 0; i < 5; i++) {
    console.log(i); // Saída: 0, 1, 2, 3, 4 
}


let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}


// fetch('https://api.exemplo.com/dados')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Erro:', error));


const carro = { marca: "Toyota", modelo: "Corolla" };
carro.modelo = "Camry"; // Permitido



let a = 10;
let b = 5;
let soma = a + b; // 15 
let subtracao = a - b; // 5 
let multiplicacao = a * b; // 50 
let divisao = a / b; // 2 
let modulo = a % b; // 0 
console.log(`Soma: ${soma}`); console.log(`Subtração: ${subtracao}`); console.log(`Multiplicação: ${multiplicacao}`); console.log(`Divisão: ${divisao}`); console.log(`Módulo: ${modulo}`);


// Solicita ao usuário que insira seu nome 
let nome = prompt("Digite seu nome:");
// Exibe o nome no console 
console.log("Olá, " + nome + "!");


let x = 5; 
let y = 0; 
console.log("Valor de x: " + x); 
console.log("Valor de y: " + y); 
let resultado = x / y; 
console.log("Resultado: " + resultado);

let valorPrincipal = 20; let valorModificado = Number(valorPrincipal);
console.log(valorModificado);