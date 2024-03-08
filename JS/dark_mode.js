let darkness;
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
});
if (JSON.parse(localStorage.getItem("dark_mode"))) {
    console.log("dark");
    dm.style.display = "none"
    darkMode.style.display = "none"
    lm.style.display = "block"
    lightMode.style.display = "block"
    document.body.classList.add("dark-mode"); 
} else {
    console.log("light");
    dm.style.display = "block"
    darkMode.style.display = "block"
    lm.style.display = "none"
    lightMode.style.display = "none"
    document.body.classList.remove("dark-mode");
    document.body.style.background = "#f7fafd"

}