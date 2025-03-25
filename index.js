document.addEventListener("DOMContentLoaded", () => {


let productContainer = document.querySelector("#featured-products")
function renderOneProduct(product){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
    <img src = "${product.image}">
    <h4>${product.name}</h4>
    <p class="price"> KSH ${product.price}</p>
    <button class="btn">Add to Cart</button>
    `;

productContainer.append(div);

let button = div.querySelector(".btn")
button.addEventListener("click", () => {
    button.disabled = true
    button.textContent = "Added to Cart"
    button.style.background = "gold"
    button.style.color = "black"

    setTimeout(() => {
        button.disabled = false
        button.textContent = "Add to Cart"
        button.style.background = "black"
        button.style.color = "white"
    },1000);
})
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



 let latestContainer = document.querySelector("#latest-products")
 function renderLatest(latest){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
    <img src = "${latest.image}">
    <h4>${latest.name}</h4>
    <p class="price"> KSH ${latest.price}</p>
    <button class="btn">Add to Cart</button>
    `;

    latestContainer.append(div);

    let button = div.querySelector(".btn")
button.addEventListener("click", () => {
    button.disabled = true
    button.textContent = "Added to Cart"
    button.style.background = "gold"
    button.style.color = "black"

    setTimeout(() => {
        button.disabled = false
        button.textContent = "Add to Cart"
        button.style.background = "black"
        button.style.color = "white"
    },2000);
})
 }

 function getLatestProducts(){
    fetch("http://localhost:3000/latestProducts")
    .then(res => res.json())
    .then(latestProducts => {
        console.log(latestProducts)
        latestProducts.forEach(latest => 
            renderLatest(latest))
    })
 }

 getLatestProducts();


 let offerContainer = document.querySelector("#offer-section")
 function renderOffer(offer){
    let div = document.createElement("div");
    div.className = "col-2"
    div.innerHTML = `
     <p>Exclusively Available on VougeNest</p>
     <h1>Rolex Daytona - The triumph of endurance</h1>
     <img src = "${offer.image}" class="offer-img">
     <small"> ${offer.description}</small><br>
      <button class="btn">Buy Now</button>
    `;
    
    offerContainer.append(div);
    
    let button = div.querySelector(".btn")
button.addEventListener("click", () => {
    button.disabled = true
    button.textContent = "Added to Cart"
    button.style.background = "gold"
    button.style.color = "black"


    setTimeout(() => {
        button.disabled = false
        button.textContent = "Add to Cart"
        button.style.background = "black"
        button.style.color = "white"
    },2000);
})
 }

 function getOffer(){
    fetch("http://localhost:3000/offerSection")
    .then(res => res.json())
    .then(offerSection => {
        console.log(offerSection)
        offerSection.forEach(offer =>
            renderOffer(offer))
    })
 }

 getOffer()

 
})