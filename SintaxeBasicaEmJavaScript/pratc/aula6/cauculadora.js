function cauculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+) \n 2 - subtração (-)\n 3 - multiplicação (*) \n 4 - divisão Real (/) \n 5 - Divisão inteira (%) \n 6 - potenciação (**) '));
console.log(operacao);
if (!operacao || operacao >= 7){
    alert('Erro ... Operação invalida')
    cauculadora();
}else {

    let n1 = Number(prompt('Insira o primeiro Valor: ')) 
let n2 = Number(prompt('Insira o Segundo Valor: ')) 
let resultado;

function soma(){
    resultado = n1 + n2
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
}

function subtracao(){
    resultado = n1 - n2
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
}



function multiplicacao(){
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
}


function divisaoreal(){
    resultado = n1 / n2
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
}


function divisaointeira(){
    resultado = n1 % n2
    alert(`${n1} % ${n2} = ${resultado}`)
    novaOperacao();
}


function potenciacao(){
    resultado = n1 ** n2
    alert(`${n1} ** ${n2} = ${resultado}`)
    novaOperacao();
}

function novaOperacao(){
    let opcao = prompt('Deseja fazer outra operação ? \n 1 - sim \n 2 - não')
    if(opcao == 1 ){
        cauculadora();
    }else if (opcao == 2 ){
        alert('Até mais ')
    }else {
        alert('Digite uma opção valida ')
        novaOperacao();
    }
}



// if (operacao == 1){
// soma();
// }else if (operacao == 2){
// subtracao();
// } else if (operacao == 3){
//     multiplicacao();
// }else if (operacao == 4){
//     divisao();
// }else if ( operacao == 5){
//     divisaointeira();
// }else if (operacao == 6){
//     potenciacao();
// }

switch (operacao){
    case 1 :
        soma();
        break;
        case 2:
            subtracao();
            break;
            case 3:
                multiplicacao();
                break
                case 4:
                    divisaoreal();
                    break;
                    case 5:
                        divisaointeira();
                        break;
                        case 6:
                            potenciacao();
                            break
}


}

}

cauculadora();



