document.addEventListener("DOMContentLoaded", () => {


let productContainer = document.querySelector("#featured-products")
function renderOneProduct(product){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
    <img src = "${product.image}">
    <h4>${product.name}</h4>
    <p class="price">${product.price}</p>
    <button class="btn">Add to Cart</button>
    `;

productContainer.append(div);
}


function getAllProducts(){
    fetch("http://localhost:3000/featuredProducts")
    .then(res => res.json())
    .then(featuredProducts =>{
        console.log(featuredProducts);
        featuredProducts.forEach(product => 
            renderOneProduct(product))
    });
}


 getAllProducts()

})