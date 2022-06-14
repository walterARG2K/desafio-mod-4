function myServicesCreateElement() { 
    const templateEl = document.querySelector(".my-services__template").content;
    const fragment = document.createDocumentFragment()
    
    fetch("https://cdn.contentful.com/spaces/yp6krsp2k65g/environments/master/entries?access_token=7aiOVWjryIemw-TDkK4ko22PevzDhANpWvZ0ReuQaRg")
    .then(response => {  
        response.json().then(res => {   
            for (const iterator in res.items) {
                templateEl.querySelector(".my-services__service-title").textContent = res.items[iterator].fields.title;
                templateEl.querySelector(".my-services__service-description").textContent = res.items[iterator].fields.descriptionService;
                templateEl.querySelector(".my-services__my-service-img").setAttribute("src", res.includes.Asset[iterator].fields.file.url);
                let clone = document.importNode(templateEl, true);
                fragment.appendChild(clone);
            }
            document.querySelector(".my-services__services").appendChild(fragment)
        })

    })
};

function main() {    
    const header = document.querySelector(".main-header");
    const footer = document.querySelector(".main-footer");
    const contactSection = document.querySelector(".main-contact");
    headerComponent(header);
    footerComponent(footer);
    componentContact(contactSection);
    validateForm();
    headerBurgerMenuFuncionality();
    myServicesCreateElement();
}

main()