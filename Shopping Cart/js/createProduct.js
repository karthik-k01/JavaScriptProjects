const parentDiv = document.getElementById('products-display')

const createProductDiv = (product) => {
    let colDiv = document.createElement('div')
    let cardProductDiv = document.createElement('div')
    let cardImage = document.createElement('img')
    let cardBodyDiv = document.createElement('div')
    let productHeaderDiv = document.createElement('div')
    let cardTitleH5 = document.createElement('h6')
    let cardTitlePriceH4 = document.createElement('h5')
    let cardDescriptionP = document.createElement('p')
    let starSpan1 = document.createElement('span')
    let starSpan2 = document.createElement('span')
    let starSpan3 = document.createElement('span')
    let starSpan4 = document.createElement('span')
    let starSpan5 = document.createElement('span')
    let numberOfRatingsSpan = document.createElement('span')
    let outerBtnDiv = document.createElement('div')
    let AddToCartBtn = document.createElement('a')
    let BuyNowBtn = document.createElement('a')



    parentDiv.appendChild(colDiv)
    colDiv.appendChild(cardProductDiv)
    cardProductDiv.appendChild(cardImage)
    cardProductDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(productHeaderDiv)
    productHeaderDiv.appendChild(cardTitleH5)
    productHeaderDiv.appendChild(cardTitlePriceH4)
    cardBodyDiv.appendChild(cardDescriptionP)
    
    cardBodyDiv.appendChild(outerBtnDiv)
    outerBtnDiv.appendChild(AddToCartBtn)
    outerBtnDiv.appendChild(BuyNowBtn)

    const ratingStars = Math.ceil(product.rating.rate)
    ratingStars >= 1 && cardBodyDiv.appendChild(starSpan1)
    ratingStars >= 2 && cardBodyDiv.appendChild(starSpan2)
    ratingStars >= 3 && cardBodyDiv.appendChild(starSpan3)
    ratingStars >= 4 && cardBodyDiv.appendChild(starSpan4)
    ratingStars >= 5 && cardBodyDiv.appendChild(starSpan5)
    cardBodyDiv.appendChild(numberOfRatingsSpan)

    AddToCartBtn.addEventListener('click', function () {
        addToCart(product.id);
        this.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    } )

    colDiv.classList = "col-md-3"
    cardProductDiv.classList = "card product"
    cardImage.classList = "card-img-top"
    
    cardBodyDiv.classList = "card-body"
    productHeaderDiv.classList = "product-header"
    cardTitleH5.classList = "card-title"
    cardTitlePriceH4.classList = "card-title price-title"
    cardDescriptionP.classList = "card-text"
    starSpan1.classList = "fa fa-star checked"
    starSpan2.classList = "fa fa-star checked"
    starSpan3.classList = "fa fa-star checked"
    starSpan4.classList = "fa fa-star checked"
    starSpan5.classList = "fa fa-star checked"
    outerBtnDiv.classList = "btn-outer"
    AddToCartBtn.classList = "btn btn-primary add-to-cart-btn"
    BuyNowBtn.classList = "btn btn-primary btn-buy"
    numberOfRatingsSpan.classList = "rating-count"

    colDiv.id = `product-${product.id}`
    cardDescriptionP.innerText = `${product.description.slice(0,50)}...`
    cardImage.src = product.image
    cardTitlePriceH4.innerText = `$${product.price}`
    cardTitleH5.innerText = `${product.title.slice(0,20)}...`
    numberOfRatingsSpan.innerText = `(${product.rating.count})`

    // cardTitleH5.innerText = "Product 1"
    // cardTitlePriceH4.innerText = "$123"
    // cardDescriptionP.innerText = "Some quick example text to build on the card title"
    // numberOfRatingsSpan.innerText = "(57)"
    AddToCartBtn.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>'
    BuyNowBtn.innerText = "Buy Now"

    // cardImage.src = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    // cardImage.alt = "Image"
}

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating:
// count: 120
// rate: 3.9
// [[Prototype]]: Object
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15


{/* <div class="col-md-3">
                <div class="card product">
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="product-header">
                            <h5 class="card-title">Card title</h5>
                            <h4 class="card-title price-title">$300</h4>
                        </div>
                        
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span>(57)</span>
                            <div class="btn-outer">
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                <a href="#" class="btn btn-primary btn-buy">Buy Now</a>
                            </div>
                        
                    </div>
                </div>
            </div> */}