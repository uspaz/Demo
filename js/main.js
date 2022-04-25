let menu = document.querySelector("#nav--menu");
let ham = document.getElementById("menu")
let close = document.querySelector(".close--menu");


document.getElementById("menu").addEventListener("click", ()=>{
  menu.classList.add("active");
  close.style.display = "flex";
  ham.style.display = "none";
});

close.addEventListener("click", ()=>{
  menu.classList.remove("active");
  ham.style.display = "flex";
  close.style.display = "none";
})