

function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    console.log(`quantidade de numeros: ${quantidadeNumeros}`);
    let inicio = parseInt(document.getElementById('de').value);
    console.log(`numero inicial: ${inicio}`);
    let final = parseInt(document.getElementById('ate').value);
    console.log(`numero final ${final}`);

    if (inicio > final){
        alert(`Opa, o número final é maior que o inicial`);
        reiniciar()
    } else {
        numeros = escolherNumeros(inicio, final, quantidadeNumeros);
        console.log(numeros)
        alterarTextoResultados(numeros)
        alterarStatusBotao();
    }

    

}

function reiniciar(){
    let quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';
    let inicio = document.getElementById('de');
    inicio.value = '';
    let final = document.getElementById('ate');
    final.value = '';

    alterarTextoResultados(`nenhum até agora`);

    alterarStatusBotao();

}

function escolherNumeros(min, max, qtde){
    let listaNumeros = []
    for (let i = 0; i < qtde; i++){
        let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        while (listaNumeros.includes(numeroSorteado)){
            numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        listaNumeros.push(numeroSorteado);
    }
    return listaNumeros;
}


function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

function alterarTextoResultados(mudanca){
    let numerosSorteados = document.getElementById('resultado');
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${mudanca}</label>`

}