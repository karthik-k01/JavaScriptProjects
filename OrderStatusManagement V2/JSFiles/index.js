





let parentDiv = document.getElementById("parent-div")

let emptyOrderStatus = document.getElementById("empty-order-status-gif")
/* Basic method to add on upto 6 elements 

const executeOrder = () => {
    let orderIDInput = document.getElementById("order-id-input").value
    cardHeaders[orderNo].innerText = "Order ID: " + orderIDInput
    orderBlocks[orderNo].style.display = "block"
    orderNo++
} */

/* Shown how to add text node and create n number of divs 

const executeOrder = () => {
    let orderIDInput = document.getElementById("order-id-input").value
    let newDiv = document.createElement('div')
    let newH5 = document.createElement('h5')
    let newH5Text = document.createTextNode('We created this HTML using JS')

    parentDiv.appendChild(newDiv)
    newDiv.appendChild(newH5)
    newH5.appendChild(newH5Text)
} */

const createNewOrderColumn = (orderIDInput) => {
    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeaderDiv = document.createElement('div')
    let cardBodyDiv = document.createElement('div')
    
    let cardTitleH5 = document.createElement('h5')
    let cardTextP = document.createElement('p')
    let cardBodySpan = document.createElement('span')
    let cardButtonA = document.createElement('a')
    let cardFooterDiv = document.createElement('div')
    
    
    let cardHeaderText = document.createTextNode('Order ID: ' + orderIDInput)
    let cardTitleH5Text = document.createTextNode("Bill Amount: $152")
    let cardTextPText = document.createTextNode('Corn Delight Large Size Pizza: 2 nos')
    let cardButtonAText = document.createTextNode('Cancel Order')
    let cardOrderStatusText = document.createTextNode('Pizza Baked!')

   


    parentDiv.appendChild(colDiv)
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardHeaderDiv)
    cardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild(cardTextP)
    cardBodyDiv.appendChild(cardBodySpan)
    cardBodyDiv.appendChild(cardButtonA)
    cardDiv.appendChild(cardFooterDiv)
    
    cardHeaderDiv.appendChild(cardHeaderText)
    cardTitleH5.append(cardTitleH5Text)
    cardTextP.append(cardTextPText)
    cardButtonA.append(cardButtonAText)
    cardFooterDiv.appendChild(cardButtonA)
    cardBodySpan.appendChild(cardOrderStatusText)
    
    

    colDiv.classList = 'col-md-4 col-xs-12 order-block'
    cardDiv.classList = 'card text-center'
    cardHeaderDiv.classList = 'card-header'
    cardBodyDiv.classList = 'card-body'
    cardTitleH5.classList = 'card-title'
    cardTextP.classList = 'card-text'
    cardButtonA.classList = 'btn btn-danger cancel-button'
    cardFooterDiv.classList = 'card-footer'
    cardBodySpan.classList = 'badge rounded-pill bg-success order-status'
    cardBodySpan.id = orderIDInput


    cardButtonA.addEventListener('click', () => {
        colDiv.style.display = 'none'
    })
}



const executeOrder = () => {
    emptyOrderStatus.style.display = "none"
    let orderIDInput = document.getElementById("order-id-input").value

    if(!orderIDInput.length){
		alert('Please enter a valid order ID')
		return
    }
    
    createNewOrderColumn(orderIDInput)

    document.getElementById(orderIDInput).innerText = 'Order Placed!'

    chefReceived(orderIDInput)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAdded)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIDInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}