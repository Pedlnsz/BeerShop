let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

axios.get("http://localhost:3000/beer")
        .then(function (response) {
            document.getElementById("box-container").innerHTML = response.data
                .map(function (beer) 
                
                {   
                    console.log(beer);
                    return `
                    <div class="box">
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-cart"></a>
                        
                        <a href="#" onclick = "showProductDetails('${beer._id}')"class="fas fa-eye"></a>
                    </div>
                    <div class="image">
                        <img src=${beer.imagem} alt="">
                    </div>
                    <div class="content">
                        <h3>${beer.nome}</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="price">R$${beer.preco} <span>R$20.99</span></div>
                    </div>
                </div>
            
                `;
                
                })
                .join("");
        })
        .catch(function (err) {
            console.log(err);
        });
        

function showProductDetails(productId) {
   
    window.location.href = `cervejas.html?id=${productId}`;
}
