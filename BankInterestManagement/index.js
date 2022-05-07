/* // let bankBalances = prompt("Enter the bank balance of 5 members with comma ','").split(",")
temp = Number(temp)
for (let i = 0; i < bankBalances.length; i++) {
    if (temp > 200000) {
        
        temp = temp + temp * 0.1
        temp = temp - temp * 0.02
    }
    else if (temp > 100000) {
        temp = temp + temp * 0.05
        temp = temp - temp * 0.0005
    }
    else {
        temp = temp + temp * 0.03
    }

    alert(bankBalances)
} */

/* function calculateInterest() {
    let bankBalance1 = Number(document.getElementById("bank-balance-1").value)
    let bankBalance2 = Number(document.getElementById("bank-balance-2").value)
    let bankBalance3 = Number(document.getElementById("bank-balance-3").value)
    let bankBalance4 = Number(document.getElementById("bank-balance-4").value)
    let bankBalance5 = Number(document.getElementById("bank-balance-5").value)

    let updatedBankBalance1 = document.getElementById("updated-Bank-Balance-1")
    let updatedBankBalance2 = document.getElementById("updated-Bank-Balance-2")
    let updatedBankBalance3 = document.getElementById("updated-Bank-Balance-3")
    let updatedBankBalance4 = document.getElementById("updated-Bank-Balance-4")
    let updatedBankBalance5 = document.getElementById("updated-Bank-Balance-5")
    let bankBalances = [bankBalance1, bankBalance2, bankBalance3, bankBalance4, bankBalance5]

    
    

    updatedBankBalance1.value = bankBalances[0]
    updatedBankBalance2.value = bankBalances[1]
    updatedBankBalance3.value = bankBalances[2]
    updatedBankBalance4.value = bankBalances[3]
    updatedBankBalance5.value = bankBalances[4]
} */

function calculateInterest() {
    let inputBalanceNodes = document.getElementsByClassName("input-balance")
    let displayUpdatedBalance = document.getElementsByClassName("output-balance")
    
    let bankBalances = []
    for (let i = 0; i < inputBalanceNodes .length; i++) {
        temp = Number(inputBalanceNodes[i].value)
         if (temp > 200000) {
            
                temp = temp + temp * 0.1
                temp = temp - temp * 0.02
            }
            else if (temp > 100000) {
                temp = temp + temp * 0.05
                temp = temp - temp * 0.0005
            }
            else {
                temp = temp + temp * 0.03
            }
        displayUpdatedBalance[i].value = temp
        
    }
    console.log(bankBalances)
//     for (let i = 0; i < inputBalanceNodes.length; i++){
//         console.log(inputBalanceNodes[i].value)
//     }

//     let displayUpdatedBalance = document.getElementsByClassName("output-balance")

//     for (let i = 0; i < displayUpdatedBalance; i++){
//         displayUpdatedBalance[i].value = 2000;
//     }
}

