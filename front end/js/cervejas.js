const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

axios
  .get(`http://localhost:3000/beer/${id}`)
  .then(function (response) {
    const beer = response.data; // Se é apenas um objeto, não precisa do map

    document.getElementById("product-details").innerHTML = `
      <div class="box-container">
        <div class="box">
          <div class="image">
            <img src=${beer.imagem} alt="Nome do Produto" />
          </div>
          <div class="content">
            <h3>${beer.nome}</h3>
            <p>${beer.descricao}</p>
            <p class="price">R$${beer.preco}</p>
            <a href="#" class="btn">Adicionar ao Carrinho</a>
          </div>
        </div>
      </div>
    `;
  })
  .catch(function (err) {
    console.log(err);
  });
