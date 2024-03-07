fetch("https://fakestoreapi.com/products").then((data) => {
    data.json().then((finalData)=>{
   
generate(finalData)    
        
})})
function reset() {
    let cont  = document.getElementById("container");
cont.innerHTML = "";
}
let search = document.getElementById("search-text");
search.addEventListener('input',() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
        data.json().then((finalData)=>{
reset()
            generate(finalData.filter((p) => p.title.toLowerCase().includes(search.value.toLowerCase())))
            
            
        })
    })
})
function generate(arr) {
    let cont  = document.getElementById("container");

    for (let i = 0; i < arr.length   ; i++) {
        let product = document.createElement("div");
        product.className = "item";
            product.innerHTML = `<div class = "image"><img src="${arr[i].image}" alt=""></div>
            <div class = "info"> <p class="piece">${arr[i].title}</p>
        <p class="describe">${arr[i].description}</p>
        <p class="price">${arr[i].price}L.E</p>
        </div>
        <button class="button-1" id = "item-${i}-btn">
            Add to cart                          
        </button>`;
        cont.appendChild(product)
        document.getElementById(`item-${i}-btn`).addEventListener(`click`,() => {
            const cart = localStorage.getItem("cart")
            if(cart){
                const cartArr =JSON.parse(cart);
                cartArr.push(arr[i]);
                localStorage.setItem('cart',JSON.stringify(cartArr))
            } else {
                localStorage.setItem('cart',JSON.stringify([arr[i]]))

            }
        })
    }
}
 
