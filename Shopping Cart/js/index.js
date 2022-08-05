let spinner = document.getElementById("product-spinner")

const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    spinner.style.display = 'none'
    
    data.forEach(product => createProductDiv(product))
}



// fetch('https://fakestoreapi.com/products')
//         .then(res => { return res.json() })
//         .then(data => console.log(data))
//         .catch(err => console.log(err))