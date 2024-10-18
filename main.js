function criaCartão (categoria, pergunta, reposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article')
    cartao.className = 'cartao';
    cartao.innerHTML = `

    `
    container.appendChild(cartao);
}