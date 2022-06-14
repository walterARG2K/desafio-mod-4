(function () {   
    const header = document.querySelector(".services-header");
    const footer = document.querySelector(".services-footer");
    headerComponent(header);
    headerBurgerMenuFuncionality()
    footerComponent(footer);
})()


function services() { 
    const templateEl = document.querySelector(".services-template").content;
    const fragment = document.createDocumentFragment();
    
    fetch("https://cdn.contentful.com/spaces/yp6krsp2k65g/environments/master/entries?access_token=7aiOVWjryIemw-TDkK4ko22PevzDhANpWvZ0ReuQaRg")
    .then(response => {  
        response.json().then(res => {   
            for (const iterator in res.items) {
                templateEl.querySelector(".services__service-image").setAttribute("src", res.includes.Asset[iterator].fields.file.url);
                templateEl.querySelector(".services__service-title").textContent = res.items[iterator].fields.title;
                templateEl.querySelector(".services__service-description").textContent = res.items[iterator].fields.descriptionService;
                let clone = document.importNode(templateEl, true);
                fragment.appendChild(clone);
            }
            document.querySelector(".services__container").appendChild(fragment)
        })

    })
}

services()