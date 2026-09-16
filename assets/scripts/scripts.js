const menu = document.querySelector(".menuDropDown");
const botao = document.querySelector(".menu-toggle");

botao.addEventListener("click", () => {

    menu.classList.toggle("ativo");
    document.body.style.overflow = "hidden";

});

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !botao.contains(e.target)
    ) {
        document.body.style.overflow = "auto";
        menu.classList.remove("ativo");
    }
});