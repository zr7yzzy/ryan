function criaCartão (categoria, pergunta, reposta) {
    let container = document.getElementById('container');
    let cartão = document.createElement('article')
    cartão.className = 'cartao';
    cartão.innerHTML = `
    <div class="conteudo-cartão">
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