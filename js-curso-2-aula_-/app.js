//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
gerarNumeroDeTentativas(numeroLimite);
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function gerarNumeroDeTentativas(total){
    document.getElementById('totalNaSelecao').setAttribute('max', total);
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}.`);
};

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
    }
    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let numeroDeElementosNaLista = listaDeNumerosSorteados.length;
    if (numeroDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*Desafios
1 - Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo (){
    console.log('Olá, mundo!');
}

olaMundo();

2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

olaNome('Guilherme');

3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrar(numero) {
    let dobro = numero * 2;
    return dobro;
}

console.log(dobrar(5));

4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media3Numeros(num1, num2, num3) {
    let media = (num1 + num2 + num3)/3;
    return media;
}
console.log(media3Numeros(3, 6, 9))

5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorEntreDois (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maiorEntreDois(8,2));

6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero){
    return numero * numero;
}

console.log(quadrado(10));
*/

/*Desafios parte 2
1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(peso, altura) {
    let imc = parseFloat(peso)/(parseFloat(altura) * parseFloat(altura));
    return imc.toFixed(2);
}

console.log(imc(80, 1.75));

2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(num) {
    let contador = num-1;
    let fatorial = num;
    while (contador > 0){
        fatorial *= contador;
        contador --;
    }
    return fatorial;
}

console.log(fatorial(10));

3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolarEmReais(valor) {
    let resultado = parseFloat(valor * 4.80);
    return 'R$ ' + resultado.toFixed(2);
}
console.log(converteDolarEmReais(5));

4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetroRetangulo (altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura *2);
    alert(`A área da sala retangular de altura ${altura} e largura ${largura} é igual a ${area}`);
    alert(`O perímetro da sala retangular de altura ${altura} e largura ${largura} é igual a ${perimetro}`);
}
areaEPerimetroRetangulo(5,10);

5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaEPerimetroCirculo(raio) {
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;
    alert(`A área do círculo de raio ${raio} é igual a ${area.toFixed(2)}.`);
    alert(`O perímetro do círculo de raio ${raio} é igual a ${perimetro.toFixed(2)}.`);
}
areaEPerimetroCirculo(5);

6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function taboada(num){
    let contador = 1;
    while(contador <= num) {
        alert(`${num} x ${contador} = ` + num * contador);
        contador ++;
    }
}
taboada(3);
*/

/*Lista de Desafios 3
1 - Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C','C++', 'Kotlin', 'Python'];


3 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagensDeProgramacao = ['JavaScript', 'C','C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaDeNomes = ['Guilherme','Roberto', 'João'];
console.log(listaDeNomes[0]);

5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaDeNomes = ['Guilherme','Roberto', 'João'];
console.log(listaDeNomes[1]);

6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaDeNomes = ['Guilherme','Roberto', 'João'];
console.log(listaDeNomes[listaDeNomes.length - 1]);
*/

