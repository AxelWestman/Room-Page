/*Código para abrir y cerrar la nav-bar*/

const nav = document.querySelector(".main__nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {

    nav.style.visibility = "visible";
    nav.classList.toggle("animate__fadeInLeft");
    nav.classList.remove("animate__fadeOutLeft");

})

cerrar.addEventListener("click", () => {

    nav.classList.add("animate__fadeOutLeft");
    nav.classList.remove("animate__fadeInLeft");

})

/*Código para que al apretar cualquier opción de la navbar, la navbar se cierre*/
document.querySelectorAll(".main__link").forEach(n => n.addEventListener("click", () => {
    nav.classList.add("animate__fadeOutLeft");
    nav.classList.remove("animate__fadeInLeft");

}))



/*Código para slider de fotos*/

const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];


const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-217%";
    slider.style.transition = "all 0.50s ease-in";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-110%";
    }, 500);

}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "-1%";
    slider.style.transition = "all 0.50s ease-in";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-108%";
    }, 500);

}

derecha.addEventListener('click', function () {
    Next();
});

izquierda.addEventListener('click', function () {
    Prev();
});