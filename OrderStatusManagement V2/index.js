let orderNo = 0

let orderBlocks = document.getElementsByClassName("order-block")

let cardHeaders= document.getElementsByClassName("card-header")
const executeOrder = () => {
    let orderIDInput = document.getElementById("order-id-input").value
    cardHeaders[orderNo].innerText = "Order ID: " + orderIDInput
    orderBlocks[orderNo].style.display = "block"
    orderNo++
}