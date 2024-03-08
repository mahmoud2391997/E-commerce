
const cart = JSON.parse(localStorage.getItem("cart"));

const quantities = JSON.parse(localStorage.getItem("quantity"));

let total = document.getElementById(`total`);

let carts  = document.getElementById("cart-items");
let checkout  = document.getElementById("checkout");
if (cart){
for (let i = 0; i < cart.length; i++) {
    // const quantity = localStorage.getItem("quantity")
    // if(quantity){
    //     const itemQuantity = JSON.parse(quantity);
    //     itemQuantity.push(1);
    // localStorage.setItem('quantity',JSON.stringify(itemQuantity))
    // } else {
    // localStorage.setItem('quantity',JSON.stringify([1]))
    
    // }
    console.log(quantities);
    let item = document.createElement("div");
    item.className = "cart-item";
    item.id = `item-${i}`;
    item.innerHTML = `
    <div class="item-img">
    <img src="${cart[i].image}" alt="">
    </div>
    <div class="item-title">
    ${cart[i].title}
    </div>
    <div class="quantity">
    <button class="minus" id="minus-item-${i}">-</button>
    <div id = "num-item-${i}">${quantities[i]}</div>
    <button class="plus" id="plus-item-${i}">+</button>
    </div>
    <div class = "item-price"  id="item-${i}-price">
    ${cart[i].price * quantities[i]}                  </div>
    <button class="trash button-1" id="item-${i}-btn">
    remove           </button>
    
    `
    
    carts.appendChild(item);
    document.getElementById(`item-${i}-btn`).addEventListener("click",()=> {
        let price = document.getElementById(`item-${i}-price`);
        
        removeItem(price.innerHTML)
        
        localStorage.setItem('cart',JSON.stringify(cart))
        document.getElementById(`item-${i}`).remove();
        console.log(carts.innerHTML)
        if (carts.innerHTML === "") {
            localStorage.removeItem('cart')
            localStorage.removeItem('quantity')
            empty.style.display = "block";
            checkout.style.display = "none";
            
        }
        
    })
    let num  = document.getElementById(`num-item-${i}`);
    let price = document.getElementById(`item-${i}-price`);
    document.getElementById(`plus-item-${i}`).addEventListener("click",()=>{
        
        num.innerHTML = ++quantities[i] ;
        
        price.innerHTML = +(num.innerHTML) * +(cart[i].price);
        printSum();
        ;
        localStorage.setItem('quantity',JSON.stringify(quantities))
        
    })
    document.getElementById(`minus-item-${i}`).addEventListener("click",()=>{
        if(+num.innerHTML > 1){
            
            num.innerHTML = --quantities[i];
            price.innerHTML = +(num.innerHTML) * +(cart[i].price);
            printSum();
            localStorage.setItem('quantity',JSON.stringify(quantities))
            
        } else{
            
        }
    })
}

if (cart) {
    empty.style.display = "none";
    checkout.style.display = "flex";
    
}}
let sum;
function printSum() {
    if (cart) {
    sum = 0
    for (let j = 0; j < cart.length; j++) { 
        let price = document.getElementById(`item-${j}-price`);
        if (price == null) {
            continue
        }
        sum += +price.innerHTML 
        total.innerHTML = `Your Total is:${sum}L.E`
        
    }}
}
printSum()
function removeItem(value) {
    console.log(value);
    sum -= +value;
    console.log(sum);
    total.innerHTML = `Your Total is:${sum}L.E`
    
}


