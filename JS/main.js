
const categories = new Set();
const copyArr = [];
fetch("https://fakestoreapi.com/products").then((data) => {
    data.json().then((finalData)=>{
        
generate(finalData)    
generateCategory(categories, finalData)
        
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
    let asc = document.getElementById("asc");
    asc.addEventListener("click",()=>{
        let sortAsec = () => arr.sort((item1,item2)=>{
            let item1one = item1.price;
            let item2two= item2.price;
            if(item1one<item2two){
                return -1;
            }
            if(item1one>item2two){
                return 1;
            }
            return 0;
        })
        reset()
        generate(sortAsec(arr))
        
    })
    let desc = document.getElementById("des");
    desc.addEventListener("click",()=>{
        let sortDesc = () => arr.sort((item1,item2)=>{
            let item1one = item1.price;
            let item2two= item2.price;
            if(item1one>item2two){
                return -1;
            }
            if(item1one<item2two){
                return 1;
            }
            return 0;
        })
        reset()
        generate(sortDesc(arr))
        
    })
   
    // let sortFlavorDesec = () => iceCreams.sort((iceCream1,iceCream2)=>{
        //     let iceCreamFlavor1 = iceCream1.flavor;
    //     let iceCreamFlavor2 = iceCream2.flavor;
    //     if(iceCreamFlavor1<iceCreamFlavor2){
    //         return 1;
    //     }
    //     if(iceCreamFlavor1>iceCreamFlavor2){
    //         return -1;
    //     }
    //     return 0;
    // })
    for (let i = 0; i < arr.length   ; i++) {
        categories.add(arr[i].category);
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
 function generateCategory(categories,arr) {
    let dropCategory = document.getElementById("drop-cat");
    for (let j = 0; j < Array.from(categories).length; j++) {
        
        let anchor = document.createElement("a");
        let category = document.createElement("button");
        category.className = "button";
        category.id = `category-${j}`
        category.innerHTML = Array.from(categories)[j];
        anchor.appendChild(category);
        dropCategory.appendChild(anchor);
    let cat = document.getElementById(`category-${j}`);
    cat.addEventListener("click",()=>{
        const filteredCategory =[]
        for (let q = 0; q < arr.length; q++) {
if(arr[q].category == cat.innerHTML )      {
    filteredCategory.push(arr[q])
}      
}
reset()
generate(filteredCategory)
    })
        
    }
 }
 let allCat = document.getElementById("all");
        allCat.addEventListener("click",()=>{
            fetch("https://fakestoreapi.com/products").then((data) => {
                data.json().then((finalData)=>{
                    reset()
            generate(finalData)    
                    
            })})
        })
