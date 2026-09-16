const menu = document.querySelector(".menuDropDown");
const botao = document.querySelector(".menu-toggle");

botao.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !botao.contains(e.target)
    ) {
        menu.classList.remove("ativo");
    }
});