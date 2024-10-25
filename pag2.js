function criaCartão (categoria, pergunta, reposta) {
    let container = document.getElementById('container');
    let cartão = document.createElement('article')
    cartão.className = 'cartão';
    cartão.innerHTML = `
    <div class="conteudo-cartão" onclick="mostrarRespostas(this)">
    <h3>${categoria}</h3>
    <div class="pergunta-cartão">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartão">
        <p>${reposta}</p>
    </div>
</div>
    `
    container.appendChild(cartão);
}

function mostrarRespota(card){
    const reposta = card.querySelector('.resposta.cartão');
    if(reposta.style.display === 'none'){
        reposta.style.display = 'block'

    }
    else{
        reposta.style.display = 'none'

    }
}