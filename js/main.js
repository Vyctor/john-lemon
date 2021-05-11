const btnContact = document.querySelector(".jl-btn-contact");
const toggleModal = document.querySelectorAll(".jl-toggle-modal");
const myScrollDown = document.querySelector(".jl-scroll-down");

window.addEventListener("load", function() {
    var pagePreloader = document.querySelector(".jl-preloader");
    pagePreloader.classList.add("jl-fade-out");

    setTimeout(function() {
        pagePreloader.style.display = "none";
    }, 2000);
});

// Abrindo e fechando informacoes de contato
btnContact.addEventListener("click", function() {
    const boxContact = document.querySelector(".jl-contact-info");
    boxContact.classList.toggle("jl-is-open");
    this.classList.toggle("jl-change-icon");
});

// Abrindo e fechando modal de orcamento
for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function() {
        const overlay = document.querySelector(".jl-overlay");
        const modalOrcamento = document.querySelector("#jl-modal-orcamento");

        overlay.classList.toggle("jl-is-open");
        modalOrcamento.classList.toggle("jl-is-open");
        modalOrcamento.classList.toggle("jl-slideTopIn");
    });
}

// Animando Elementos on Scrool com Waypoints
const waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
        myScrollDown.classList.toggle("jl-fade-out");
    },
    offset: "80%",
});

// Slider Porfolio

// Declarando variáveis do slider
const sliderContainer = document.querySelector(".jl-slider-container");
const sliderList = document.querySelector(".jl-slider-list");
const sliderItem = document.querySelectorAll(".jl-slider-item");
let sliderListWidth = 0;

// Capturando larguras individuais
const containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + "px";
for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.width = containerWidth + "px";
    let sliderItemWidth = sliderItem[index].offsetWidth;
    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + "px";