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
const buttonDesplegarAccesorios = document.querySelector("#mostrarAccesorios");
const divMenuMates = document.querySelector(".menu-mates");
const divMenuAccesorios = document.querySelector(".menu-accesorios");
const buttonOcultarMates = document.querySelector("#ocultar-mates");
const buttonOcultarAccesorios = document.querySelector("#ocultarAccesorios");
const buttonCombos = document.querySelector("#combos");
const buttonVasosJarras = document.getElementById("vasos-jarras");
const buttonTermos = document.getElementById("termos");
const buttonAccesorios = document.querySelector(".accesorios");
const yerberas = document.getElementById("yerberas");
const materas = document.getElementById("materas");
const bombillas = document.getElementById("bombillas");
const bolucompras = document.getElementById("bolucompras");


buttonDesplegarMates.addEventListener("click",()=>{
    divMenuMates.classList.add("menu-mates-visible");


    buttonCombos.classList.add("margin");
    buttonDesplegarMates.classList.add("disabled");
    buttonOcultarMates.classList.remove("disabled");
    buttonVasosJarras.classList.add("translate");
    buttonTermos.classList.add("translate");
    buttonAccesorios.classList.add("translate");
    yerberas.classList.add("translate");
    materas.classList.add("translate");
    bombillas.classList.add("translate");
    bolucompras.classList.add("translate");
   
})
buttonOcultarMates.addEventListener("click",()=>{
    divMenuMates.classList.remove("menu-mates-visible");
    buttonDesplegarMates.classList.remove("disabled");
    buttonOcultarMates.classList.add("disabled");
    buttonCombos.classList.remove("margin");
    buttonVasosJarras.classList.remove("translate");
    buttonTermos.classList.remove("translate");
    buttonAccesorios.classList.remove("translate");
    yerberas.classList.remove("translate");
    materas.classList.remove("translate");
    bombillas.classList.remove("translate");
    bolucompras.classList.remove("translate");
})

buttonDesplegarAccesorios.addEventListener("click",() => {
    divMenuAccesorios.classList.add("menu-accesorios-visible");
    buttonDesplegarAccesorios.classList.add("disabled");
    buttonOcultarAccesorios.classList.remove("disabled");
});
buttonOcultarAccesorios.addEventListener("click",()=>{
    divMenuAccesorios.classList.remove("menu-accesorios-visible");
    buttonDesplegarAccesorios.classList.remove("disabled");
    buttonOcultarAccesorios.classList.add("disabled");
})