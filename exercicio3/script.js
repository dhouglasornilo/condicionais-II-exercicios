//Exercício 3

/* Reescreva os códigos abaixo utilizando o if ternário.

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

Relembrando o if ternário

condição ? expr1 : expr2

Onde :
`condição` é uma expressão que é avaliada como `true` ou `false`.
`expr1`, `expr2` são expressões com valores de qualquer tipo. */

const nome = prompt("Digite o seu primeiro nome!").toLowerCase()
const idade = Number(prompt("Digite sua idade!"))

nome === "dhouglas" ? console.log(`E ai DhogãO!`) : console.log(`Olá ${nome}!`)

idade >= 18 ? console.log(`Você pode tirar carteira de motorista!`) : console.log(`Você ainda não pode tirar carteira de motorista!`)
