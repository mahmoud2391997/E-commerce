let darkness;
let Total = document.getElementById(`total`);
let empty = document.getElementById("empty")
let brand = document.getElementById("brand");
let home = document.getElementById("home");
let products = document.getElementById("products");
let featured = document.getElementById("featured");
let category = document.getElementById("category");
let asc = document.getElementById("ascending");
let desc = document.getElementById("descending");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let darkMode = document.getElementById("dark_mode");
let lightMode = document.getElementById("light_mode");
let dm = document.getElementById("dm");
let lm = document.getElementById("lm");
dark.addEventListener("click",()=>{
    darkness = true;
    localStorage.setItem("dark_mode",JSON.stringify(darkness));
    console.log(JSON.parse(localStorage.getItem("dark_mode")));
    dm.style.display = "none"
    darkMode.style.display = "none"
    lm.style.display = "block"
    lightMode.style.display = "block"
    document.body.classList.toggle("dark-mode");
    brand.classList.toggle("dark-mode-text");
    home.classList.toggle("dark-mode-text");
    products.classList.toggle("dark-mode-text");
    featured?.classList.toggle("dark-mode-text");
    category?.classList.toggle("dark-mode-text");
    asc?.classList.toggle("dark-mode-text");
    desc?.classList.toggle("dark-mode-text");
    empty?.classList.toggle("dark-mode-text");
    Total?.classList.toggle("dark-mode-text");
});
darkMode.addEventListener("click",()=>{
    darkness = true;
    localStorage.setItem("dark_mode",JSON.stringify(darkness));
    console.log(JSON.parse(localStorage.getItem("dark_mode")));
    
    dm.style.display = "none"
    darkMode.style.display = "none"
    lm.style.display = "block"
    lightMode.style.display = "block"
    document.body.classList.toggle("dark-mode");
    brand.classList.toggle("dark-mode-text");
    home.classList.toggle("dark-mode-text");
    products.classList.toggle("dark-mode-text");
    featured?.classList.toggle("dark-mode-text");
    category?.classList.toggle("dark-mode-text");
    asc?.classList.toggle("dark-mode-text");
    desc?.classList.toggle("dark-mode-text");
    empty?.classList.toggle("dark-mode-text");
    Total?.classList.toggle("dark-mode-text");
});
light.addEventListener("click",()=>{
    darkness = false;
    localStorage.setItem("dark_mode",JSON.stringify(darkness));
    console.log(JSON.parse(localStorage.getItem("dark_mode")));
    
    dm.style.display = "block"
    darkMode.style.display = "block"
    lm.style.display = "none"
    lightMode.style.display = "none"
    document.body.classList.toggle("dark-mode"); 
    brand.classList.toggle("dark-mode-text");
    home.classList.toggle("dark-mode-text");
    products.classList.toggle("dark-mode-text");
    featured?.classList.toggle("dark-mode-text");
    category?.classList.toggle("dark-mode-text");
    asc?.classList.toggle("dark-mode-text");
    desc?.classList.toggle("dark-mode-text");
    empty?.classList.toggle("dark-mode-text");
    Total?.classList.toggle("dark-mode-text");
});
lightMode.addEventListener("click",()=>{
    darkness = false;
    localStorage.setItem("dark_mode",JSON.stringify(darkness));
    console.log(JSON.parse(localStorage.getItem("dark_mode")));
    
    dm.style.display = "block"
    darkMode.style.display = "block"
    lm.style.display = "none"
    lightMode.style.display = "none"
    document.body.classList.toggle("dark-mode"); 
    brand.classList.toggle("dark-mode-text");
    home.classList.toggle("dark-mode-text");
    products.classList.toggle("dark-mode-text");
    featured?.classList.toggle("dark-mode-text");
    category?.classList.toggle("dark-mode-text");
    asc?.classList.toggle("dark-mode-text");
    desc?.classList.toggle("dark-mode-text");
    empty?.classList.toggle("dark-mode-text");
    Total?.classList.toggle("dark-mode-text");
});
if (JSON.parse(localStorage.getItem("dark_mode"))) {
    console.log("dark");
    dm.style.display = "none"
    darkMode.style.display = "none"
    lm.style.display = "block"
    lightMode.style.display = "block"
    document.body.classList.add("dark-mode"); 
    brand.classList.toggle("dark-mode-text");
    home.classList.toggle("dark-mode-text");
    products.classList.toggle("dark-mode-text");
    featured?.classList.toggle("dark-mode-text");
    category?.classList.toggle("dark-mode-text");
    asc?.classList.toggle("dark-mode-text");
    desc?.classList.toggle("dark-mode-text");
    empty?.classList.toggle("dark-mode-text");
    Total?.classList.toggle("dark-mode-text");
} else {
    console.log("light");
    dm.style.display = "block"
    darkMode.style.display = "block"
    lm.style.display = "none"
    lightMode.style.display = "none"
    document.body.classList.remove("dark-mode");
   

}