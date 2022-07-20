const createToDoDiv = (toDoInput, valueSelected, toDoDeadline) => {
    
    let toDoCardDiv = document.createElement("div")
    let cardHeaderDiv = document.createElement("div")
    let prioritySpan = document.createElement("span")
    let deadlineSpan = document.createElement("span")
    let cardBodyDiv = document.createElement("div")
    let cardTitleH5 = document.createElement("h5")
    let cardButtonCancel = document.createElement("a")
        
    

    toDoCardDiv.classList = "card"
    cardHeaderDiv.classList = "card-header"
   
    cardBodyDiv.classList = "card-body"
    cardTitleH5.classList = "card-title"
    cardButtonCancel.classList = "btn btn-danger cancel-btn"
        
    prioritySpan.innerText = valueSelected + " Priority"
    deadlineSpan.innerText = toDoDeadline
    cardTitleH5.innerText = toDoInput
    cardButtonCancel.innerText = "Delete Event"
        
        
    toDoCardDiv.appendChild(cardHeaderDiv)
    cardHeaderDiv.appendChild(prioritySpan)
    cardHeaderDiv.appendChild(deadlineSpan)
    toDoCardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild(cardButtonCancel)
          toDoBlock.appendChild(toDoCardDiv)              
                
    switch (valueSelected) {
        case 'High': 
            prioritySpan.classList = "badge rounded-pill bg-danger"
            break
        
        case 'Medium':
            prioritySpan.classList = "badge rounded-pill bg-warning text-dark"
            break
        case 'Low':
            prioritySpan.classList = "badge rounded-pill bg-info text-dark"
            
    }

    cardButtonCancel.addEventListener('click', () => {
        toDoCardDiv.style.display = 'none'
    })

/*                     <div class="card">
                        <div class="card-header">
                            <span class="badge rounded-pill bg-danger">High Priority</span>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Special title treatment</h5>
                          <a href="#" class="btn btn-danger cancel-btn">Cancel</a>
                        </div>
                    </div> */
}