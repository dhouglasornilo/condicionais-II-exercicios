/* Exercício 1

Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3 */

const randomNumber = Number(prompt("Digite um número aleatório!"))

// 1) Utilizando ifs aninhados

if(randomNumber % 2 === 0){
    if(randomNumber % 3 === 0){
        console.log(`O número ${randomNumber} é divisível por 2 e por 3!`)
    }else{
        console.log(`O número ${randomNumber} é divisível por 2 mas não é por 3!`)
    }
}else if(randomNumber % 3 === 0){
    console.log(`O número ${randomNumber} não é divisível por 2 mas é por 3!`)
}else{
    console.log(`O número ${randomNumber} não é divisível nem por 2 e nem por 3!`)
}

// 2. Utilizando um operador lógico para unir duas operações relacionais.

if(randomNumber % 2 === 0 && randomNumber % 3 === 0){
    console.log(`O número ${randomNumber} é divisível por 2 e por 3!`)
}else if(randomNumber % 2 === 0 && randomNumber % 3 !== 0){
    console.log(`O número ${randomNumber} é divisível por 2 mas não é por 3!`)
}else if(randomNumber % 2 !== 0 && randomNumber % 3 === 0){
    console.log(`O número ${randomNumber} não é divisível por 2 mas é por 3!`)
}else{
    console.log(`O número ${randomNumber} não é divisível nem por 2 e nem por 3!`)
}
