alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let contadorTentativas = 1;

// enquanto chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 até ${numeroMaximo}.`);
    // se chute for igual ao número screto
    if(chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        // contadorTentativas = contadorTentativas +1;
        contadorTentativas ++;
    }
}
// usando o operador ternario
let palavraTentativa = contadorTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí!!! Você acertou o número secreto é ${numeroSecreto} e você descobriu com ${contadorTentativas} ${palavraTentativa}.`);


// if(contadorTentativas > 1){
//     alert(`Isso aí!!! Você acertou o número secreto é ${numeroSecreto} e você descobriu com ${contadorTentativas} tentativas.`);
// } else {
//     alert(`Isso aí!!! Você acertou o número secreto é ${numeroSecreto} e você descobriu com ${contadorTentativas} tentativa.`);
// }
