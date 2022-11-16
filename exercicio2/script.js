/* # Exercício 2

Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case.
No arquivo `script.js` existe uma versão do código já escrita, mas você pode colar o exercício
que você fez na última prática!

-> Relembrando o enunciado.

Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga:
"Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade,
é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console.
O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda
a nenhum dos valores.

*/

// Verificar nacionalidade usando função e if's

const nacionalidade = prompt("Qual é a sua nacionalidade?").toLowerCase()

const verificarNacionalidade = (nacionalidade) => {
    if(nacionalidade === "brasileiro" || nacionalidade === "brasileira"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "argentino" || nacionalidade === "argentina"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "uruguaio" || nacionalidade === "uruguaia"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "chileno" || nacionalidade === "chilena"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "colombiano" || nacionalidade === "colombiana"){
        console.log(`Você é ${nacionalidade}!`)
    }else{
        console.log(`Nacionalidade não encontrada!`)
    }
}

verificarNacionalidade(nacionalidade)

// Verificar nacionalidade utilizando switch-case.

    switch (nacionalidade) {
        case "brasileiro":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "brasileira":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "argentino":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "argentina":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "uruguaio":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "uruguaia":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "chileno":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "chilena":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "colombiano":
            console.log(`Você é ${nacionalidade}!`)
            break
        case "colombiana":
            console.log(`Você é ${nacionalidade}!`)
            break
        default:
            console.log("Nacionalidade não encontrada!")
    }