let dark = document.getElementById("dark");
let light = document.getElementById("light");
let darkMode = document.getElementById("dark_mode");
let lightMode = document.getElementById("light_mode");
let dm = document.getElementById("dm");
let lm = document.getElementById("lm");
dark.addEventListener("click",()=>{
    dm.style.display = "none"
    darkMode.style.display = "none"
    lm.style.display = "block"
    lightMode.style.display = "block"
    document.body.style.backgroundColor = "#000d1a";
});
darkMode.addEventListener("click",()=>{
    dm.style.display = "none"
    darkMode.style.display = "none"
    lm.style.display = "block"
    lightMode.style.display = "block"
    document.body.style.backgroundColor = "#000d1a";
});
light.addEventListener("click",()=>{
    dm.style.display = "block"
    darkMode.style.display = "block"
    lm.style.display = "none"
    lightMode.style.display = "none"
    document.body.style.backgroundColor = "#f7fafd";
});
lightMode.addEventListener("click",()=>{
    dm.style.display = "block"
    darkMode.style.display = "block"
    lm.style.display = "none"
    lightMode.style.display = "none"
    document.body.style.backgroundColor = "#f7fafd";
});