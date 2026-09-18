const menu = document.querySelector(".menuDropDown");
const botao = document.querySelector(".menu-toggle");

botao.addEventListener("click", () => {

    menu.classList.toggle("ativo");
    document.body.style.overflow = "hidden";

});

menu.addEventListener("click", (l) => {
    document.body.style.overflow = "auto";
    menu.classList.remove("ativo");
})

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !botao.contains(e.target)
    ) {
        document.body.style.overflow = "auto";
        menu.classList.remove("ativo");
    }
});

const footer = document.querySelector('.footer');
const whatsapp = document.querySelector('.whatsapp-float');
const btnSubir = document.querySelector('.btn-subir');

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        whatsapp.classList.add('hide');
        btnSubir.classList.add('hide');

    } else {

        whatsapp.classList.remove('hide');
        btnSubir.classList.remove('hide');

    }

}, {
    threshold: 0.1
});

observer.observe(footer);