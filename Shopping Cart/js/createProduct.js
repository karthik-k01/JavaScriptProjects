let parentDiv = document.getElementById('products-display')

const productDiv = () => {
    let colDiv = document.createElement('div')
    let cardProductDiv = document.createElement('div')
    let cardImage = document.createElement('img')
    let cardBodyDiv = document.createElement('div')
    let productHeaderDiv = document.createElement('div')
    let cardTitleH5 = document.createElement('h5')
    let cardTitlePriceH4 = document.createElement('h4')
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
    cardBodyDiv.appendChild(starSpan1)
    cardBodyDiv.appendChild(starSpan2)
    cardBodyDiv.appendChild(starSpan3)
    cardBodyDiv.appendChild(starSpan4)
    cardBodyDiv.appendChild(starSpan5)
    cardBodyDiv.appendChild(numberOfRatingsSpan)
    cardBodyDiv.appendChild(outerBtnDiv)
    outerBtnDiv.appendChild(AddToCartBtn)
    outerBtnDiv.appendChild(BuyNowBtn)
}

<div class="col-md-3">
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
            </div>