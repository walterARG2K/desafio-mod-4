function componentContact(contact) {  
    const newElement = document.createElement("div");

    newElement.innerHTML = `<section class="contact">
    <h3 class="contact__title">Escribime</h3>
    <form class="contact__contact-form">
        <div class="contact-form__container">
            <label for="contact-form__name-input" class="contact-form__label">NOMBRE</label>
            <input id="contact-form__name-input" type="text" class="contact-form__input">
            <span id="validate-name"></span>
        </div>
        <div class="contact-form__container">
            <label for="contact-form__email-input" class="contact-form__label">EMAIL</label>
            <input id="contact-form__email-input" type="email" class="contact-form__input">
            <span id="validate-email"></span>
        </div>
        <div class="contact-form__container">
            <label for="contact-form__textarea" class="contact-form__label">MENSAJE</label>
            <textarea class="contact-form__textarea" name="contact-form__textarea" id="contact-form__textarea" cols="30" rows="10"></textarea>
            <span id="validate-message"></span>
        </div>
        <span id="send-message"></span>
        <button type="submit" class="contact-form__button">Enviar</button>
    </form>
</section>
`
    contact.appendChild(newElement)
}

function fetchForm() {   
    const inputEmailEl = document.getElementById("contact-form__email-input");
    const inputMessageEl = document.getElementById("contact-form__textarea");
    fetch("https://apx-api.vercel.app/api/utils/dwf", {    
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify({
                    "to":`${inputEmailEl.value}`,
                    "message":`${inputMessageEl.value}`
                })
            })
}


function validateForm() {
    const formContactEl = document.querySelector(".contact__contact-form");
    const validateName = document.getElementById("validate-name");
    const inputNameEl = document.getElementById("contact-form__name-input");
    const validateEmail = document.getElementById("validate-email");
    const inputEmailEl = document.getElementById("contact-form__email-input");
    const validateMessage = document.getElementById("validate-message");
    const inputMessageEl = document.getElementById("contact-form__textarea");
    const FormSend = document.getElementById("send-message");

    formContactEl.addEventListener("submit", (e) => { 
        e.preventDefault()
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputEmailEl.value.match(mailformat) && inputMessageEl.value !== "" && inputNameEl.value !== "") {
            FormSend.innerHTML = "Su mensaje ha sido enviado con éxito";
            FormSend.style.textAlign = "center";
            FormSend.style.fontWeight = "700";
            formContactEl.style.color = "#00ff00"
            validateName.innerHTML = "";
            validateEmail.innerHTML = "";
            validateMessage.innerHTML = "";

            inputNameEl.style.border = "none";
            inputEmailEl.style.border = "none";
            inputMessageEl.style.border = "none";
            fetchForm()
        }

        else if (inputNameEl.value == "") {    
            validateName.innerHTML = "Escriba su nombre!";
            validateName.style.color = "#ff0000"
            validateEmail.innerHTML = "";
            validateMessage.innerHTML = "";
            FormSend.innerHTML = ""

            inputNameEl.style.border = "solid 1px #ff0000";
            inputEmailEl.style.border = "none";
            inputMessageEl.style.border = "none";
        }
            
        else if (!inputEmailEl.value.match(mailformat)) {
            validateEmail.innerHTML = "Su email es inválido!";
            validateEmail.style.color = "#ff0000"
            validateName.innerHTML = "";
            validateMessage.innerHTML = "";
            FormSend.innerHTML = ""

            inputNameEl.style.border = "none";
            inputEmailEl.style.border = "solid 1px #ff0000";
            inputMessageEl.style.border = "none";

        }
        
        else if (inputMessageEl.value == "") {   
            validateMessage.innerHTML = "Escriba su mensaje!";
            validateMessage.style.color = "#ff0000"
            validateEmail.innerHTML = "";
            validateName.innerHTML = "";
            FormSend.innerHTML = ""

            inputNameEl.style.border = "none";
            inputEmailEl.style.border = "none";
            inputMessageEl.style.border = "solid 1px #ff0000";
        } 
        
    })
}

(function () {
    if (document.URL == "http://127.0.0.1:8080/contact.html") {
        const footer = document.querySelector(".contact-footer");
        const header = document.querySelector(".contact-header");
        const contact = document.querySelector(".section-contact");

        headerComponent(header)
        footerComponent(footer)
        componentContact(contact)
        headerBurgerMenuFuncionality()
        validateForm()
        document.querySelector(".contact").style.backgroundColor = "initial"
    }
    
    
})()


