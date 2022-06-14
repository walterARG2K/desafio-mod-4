(function () {   
    const header = document.querySelector(".portfolio-header");
    const footer = document.querySelector(".portfolio-footer");

    headerComponent(header);
    footerComponent(footer);
    headerBurgerMenuFuncionality();
})()


function portfolio() {    
    const templateEl = document.querySelector(".template").content;
    const fragment = document.createDocumentFragment();

    fetch("https://cdn.contentful.com/spaces/3x44p900js51/environments/master/entries?access_token=m61-tTXrP6i_MlezpgIMqpDQbbj-A6vgX8WZNkrQf7g")
        .then(response => { 
            response.json().then(res => {   
                for (const iterator in res.items) {
                    templateEl.querySelector(".portfolio__job-image").setAttribute("src", res.includes.Asset[iterator].fields.file.url);
                    templateEl.querySelector(".portfolio__job-title").textContent = res.items[iterator].fields.title;
                    templateEl.querySelector(".portfolio__job-description").textContent = res.items[iterator].fields.description;
                    templateEl.querySelector(".portfolio__job-link").setAttribute("href", res.items[iterator].fields.urlJobPage);

                    let clone = document.importNode(templateEl, true);
                    fragment.appendChild(clone);
                }
                document.querySelector(".portfolio__content").appendChild(fragment);
            })
    })
}

portfolio()