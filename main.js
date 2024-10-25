function criaCartão (categoria, pergunta, reposta) {
    let container = document.getElementById('container');
    let cartão = document.createElement('article')
    cartão.className = 'cartão';
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

    let respostaEstainvisivel=false;

  function viraCartão(){
        respostaEstavisivel = !respostaEstavisivel;
        cartão.classList.toggle('active', respostaEstavisivel);
  }

  cartão.addEventListener('click', viraCartão);


    container.appendChild(cartão);
}