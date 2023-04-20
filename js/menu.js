//Para abrir o cerrar menuMobile

const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

/*Button para mostrar categoria de mates pampas y camioneros(imperiales) */
const buttonDesplegarMates = document.querySelector("#mostrarMates");
const divMenuMates = document.querySelector(".menu-mates");
const buttonOcultarMates = document.querySelector("#ocultar-mates");
const buttonTermos = document.querySelector("#combos");

buttonDesplegarMates.addEventListener("click",()=>{
    divMenuMates.classList.add("menu-mates-visible");


    buttonTermos.classList.add("margin");
    buttonDesplegarMates.classList.add("disabled");
    buttonOcultarMates.classList.remove("disabled");
   
})
buttonOcultarMates.addEventListener("click",()=>{
    divMenuMates.classList.remove("menu-mates-visible");
    buttonDesplegarMates.classList.remove("disabled");
    buttonOcultarMates.classList.add("disabled");
    buttonTermos.classList.remove("margin");
})