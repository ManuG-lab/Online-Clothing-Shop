document.addEventListener("DOMContentLoaded", () => {

    //--------load featured products-----------
let carts =[];
//let cartContent = document.querySelector(".cart-content")
let cartNumber = document.querySelector(".cart-number")


let productContainer = document.querySelector("#featured-products")
function renderOneProduct(product){
    let div = document.createElement("div");
    div.dataset.id = product.id
    div.className = "col-4"
    div.innerHTML = `
    <img src = "${product.image}" class = "img-box">
    <h4 class ="product-title">${product.name}</h4>
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

//------------load latest products------------------------------

 let latestContainer = document.querySelector("#latest-products")
 function renderLatest(latest){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
    <img src = "${latest.image}" class = "img-box">
    <h4 class = "product-title">${latest.name}</h4>
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

 //-------------------load offer section-----------------------------

 let offerContainer = document.querySelector("#offer-section")
 function renderOffer(offer){
    let div = document.createElement("div");
    div.className = "col-2"
    div.innerHTML = `
     <p>Exclusively Available on VougeNest</p>
     <h1>Rolex Daytona - The triumph of endurance</h1>
     <img src = "${offer.image}" class="offer-img">
     <small"> ${offer.description}</small><br>
      <button class = "btn">Buy Now</button>
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

//---------------------pants products------------------------------------

 let pantsContainer = document.querySelector("#pants-container")
 function renderPants(pants){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
     <img src = "${pants.image}" class = "img-box">
    <h4 class = "product-title">${pants.name}</h4>
    <p class="price"> KSH ${pants.price}</p>
    <button class="btn">Add to Cart</button>
    `;
    
    pantsContainer.append(div);


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

 function getPants(){
    fetch("http://localhost:3000/pants")
    .then(res => res.json())
    .then(pantsProducts => {
        console.log(pantsProducts)
        pantsProducts.forEach(pants =>
            renderPants(pants))
    })
 }

 getPants()


 //---------------------shoes products------------------------------------

 let shoesContainer = document.querySelector("#shoes-container")
 function renderShoes(shoes){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
     <img src = "${shoes.image}" class = "img-box">
    <h4 class = "product-title">${shoes.name}</h4>
    <p class="price"> KSH ${shoes.price}</p>
    <button class="btn">Add to Cart</button>
    `;
    
    shoesContainer.append(div);


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

 function getShoes(){
    fetch("http://localhost:3000/shoes")
    .then(res => res.json())
    .then(shoeProducts => {
        console.log(shoeProducts)
        shoeProducts.forEach(shoes =>
            renderShoes(shoes))
    })
 }

 getShoes()


 //---------------------suits products------------------------------------

 let suitsContainer = document.querySelector("#suits-container")
 function renderSuits(suits){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
     <img src = "${suits.image}" class = "img-box">
    <h4 class = "product-title">${suits.name}</h4>
    <p class="price"> KSH ${suits.price}</p>
    <button class="btn">Add to Cart</button>
    `;
    
    suitsContainer.append(div);


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

 function getSuits(){
    fetch("http://localhost:3000/suits")
    .then(res => res.json())
    .then(suitsProducts => {
        console.log(suitsProducts)
        suitsProducts.forEach(suits =>
            renderSuits(suits))
    })
 }

 getSuits()


 //---------------------accessories products------------------------------------

 let accessoriesContainer = document.querySelector("#accessories-container")
 function renderAccessories(accessories){
    let div = document.createElement("div");
    div.className = "col-4"
    div.innerHTML = `
     <img src = "${accessories.image}" class = "img-box">
    <h4 class = "product-title">${accessories.name}</h4>
    <p class="price"> KSH ${accessories.price}</p>
    <button class="btn">Add to Cart</button>
    `;
    
    accessoriesContainer.append(div);


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

 function getAccessories(){
    fetch("http://localhost:3000/accessories")
    .then(res => res.json())
    .then(accessoriesProducts => {
        console.log(accessoriesProducts)
        accessoriesProducts.forEach(accessories =>
            renderAccessories(accessories))
    })
 }

 getAccessories()


//------------------------------cart section-----------------------------------------------


const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector(".cart")
const cartClose = document.querySelector("#cart-close")

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));





//--------------------login page------------------

const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btnPopUp = document.querySelector(".btnPopUp")
const iconClose = document.querySelector(".icon-close")

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

btnPopUp.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
    })
})

const apiUrl = "http://localhost:3000/users"


const username = document.getElementById('register-username').value;
const password = document.getElementById('register-password').value;

document.querySelector(".form-box-register").addEventListener("submit",function(event){
    event.preventDefault();


fetch(apiUrl)
.then(response => response.json())
.then(users => {
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        document.getElementById('message').innerText = 'User  already exists!';
    } else {
        // Save new user
        const newUser  = { username, password };
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser )
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerText = 'Signup successful!';
        })
        .catch(error => {
            document.getElementById('message').innerText = 'Error creating user';
        });
    }
});
})

document.querySelector('.form-box-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Fetch users from the JSON server
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            // Check if the user exists and the password matches
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                document.getElementById('message').innerText = 'Login successful!';
                // You can redirect the user or perform other actions here
            } else {
                document.getElementById('message').innerText = 'Invalid username or password!';
            }
        })
        .catch(error => {
            document.getElementById('message').innerText = 'Error fetching users';
        });
});
});