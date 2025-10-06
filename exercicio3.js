/*Exercício 3: Calculadora de Dano em Jogo RPG (Foco: Lógica com &&) 
Em um jogo de RPG, o dano de um ataque mágico depende do elemento do ataque e da fraqueza 
do inimigo. Crie um programa que receba o elemento do ataque ("fogo", "agua", "terra") e o 
elemento do inimigo. O dano base é 100. Aplique as seguintes regras: 
    - Se o ataque for "fogo" e o inimigo for "terra", o dano é dobrado (200). 
    - Se o ataque for "agua" e o inimigo for "fogo", o dano é dobrado (200). 
    - Se o ataque for "terra" e o inimigo for "agua", o dano é dobrado (200). 
Em qualquer outra combinação, o dano é o normal (100). 
Exiba o dano final causado. */



var dano = 100;
var ataque = "fogo";
var inimigo = "fogo";

ataque ==["fogo", "agua", "terra"];
inimigo ==["fogo", "agua", "terra"];

if (ataque=="fogo" && inimigo   =="terra"){
     dano= dano*2 
    console.log("O dano foi dobrado:", dano)
} else if (ataque=="agua" && inimigo   =="fogo"){
    dano= dano*2    
    console.log("O dano foi dobrado:", dano)
} else if (ataque=="terra" && inimigo   =="agua"){
    dano= dano*2
    console.log("O dano foi dobrado:", dano)
}else{
    dano= dano
    console.log("Não houve acréscimo de dano:", dano)
}