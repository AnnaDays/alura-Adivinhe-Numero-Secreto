alert('Boas Vindas!! Quer tentar acertar o nº secreto?');
let numeroMax = 1000;
let numero = parseInt(Math.random() * numeroMax + 1); //gera um nº aleatório entre 1 e 100
let chute;
let tentativa = 1;

while (chute != numero) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);

    if(chute == numero){
        break;
    } else {
        if (chute > numero) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }

    tentativa++;
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

//mensagem quando o nº for o CORRETO!!
alert(`Boa! Você descobriu o número secreto -> ${numero} com ${tentativa} ${palavraTentativa}!!`);
