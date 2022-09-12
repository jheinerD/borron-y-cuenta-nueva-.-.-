const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("EPA SABIA Q IBAS A DECIR Q SI AHORA ¿CUANTAS VECES TRATASTE DE DARLE AL  NO? DALE EN ACEPTAR PARA LOS SIGUIENTES MENSAJES")
});
yesBtn.addEventListener("click",function(){
    alert("NO AHORA ENSERIO SI QUIERES HACER UN BORRON Y CUENTA NUEVA ME MANDAS UN SI PERO SI NO QUIERES NO HAY PROBLEMA ME MANDAS UN NO POR WHATZAPP OBVIAMENTE  ")
});
yesBtn.addEventListener("click",function(){
    alert("SOY MUY CREATIVO O ¿NO? (⁠◠⁠‿⁠◕⁠) ")
});
const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})