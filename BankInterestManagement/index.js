// // let bankBalances = prompt("Enter the bank balance of 5 members with comma ','").split(",")
// bankBalances[i] = Number(bankBalances[i])
// for (let i = 0; i < bankBalances.length; i++) {
//     if (bankBalances[i] > 200000) {
        
//         bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
//         bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.02
//     }
//     else if (bankBalances[i] > 100000) {
//         bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
//         bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
//     }
//     else {
//         bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
//     }

//     alert(bankBalances)
// }

function calculateInterest() {
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

    
    for (let i = 0; i < bankBalances.length; i++) {
        bankBalances[i] = Number(bankBalances[i])
        if (bankBalances[i] > 200000) {
        
            bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
            bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.02
        }
        else if (bankBalances[i] > 100000) {
            bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
            bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
        }
        else {
            bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
        }
        
        
    }

    updatedBankBalance1.value = bankBalances[0]
    updatedBankBalance2.value = bankBalances[1]
    updatedBankBalance3.value = bankBalances[2]
    updatedBankBalance4.value = bankBalances[3]
    updatedBankBalance5.value = bankBalances[4]
}