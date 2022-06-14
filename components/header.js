function headerComponent(header) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<header class="header">
    <a href="./index.html"><img class="header__logo" src="./images/logoPage.png" alt=""></a>
    <button class="header__menu-burger"><img class="header__img-button-burger" src="./images/burger.svg" alt=""></button>
    <div class="menu-open">
        <button class="menu-open__button"><img class="menu-open__xMenu" src="./images/xMenu.svg" alt=""></button>
        <a href="./index.html" class="menu-open__links">Home</a>
        <a href="./portfolio.html" class="menu-open__links">Portfolio</a>
        <a href="./services.html" class="menu-open__links">Servicios</a>
        <a href="./contact.html" class="menu-open__links">Contacto</a>
    </div>
</header>`
    header.appendChild(newElement);
}

function headerBurgerMenuFuncionality() {  
    const headerBurgerButtonEl = document.querySelector(".header__menu-burger");
    const headerMenuOpenEl = document.querySelector(".menu-open");
    const headerXButtonEl = document.querySelector(".menu-open__button");

    headerBurgerButtonEl.addEventListener("click", () => {
        headerMenuOpenEl.style.display = "flex";
    });

    headerXButtonEl.addEventListener("click", () => {
        headerMenuOpenEl.style.display = "";
    });
}
