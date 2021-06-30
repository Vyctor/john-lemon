// Declarando variáveis do slider
const sliderContainer = document.querySelector(".jl-slider-container")
const sliderList = document.querySelector(".jl-slider-list")
const sliderItem = document.querySelectorAll(".jl-slider-item")
let sliderListWidth = 0

// Capturando larguras individuais
const containerWidth = sliderContainer.parentElement.offsetWidth

// Capturando itens de navegação do Slider
const prevItem = document.querySelector(".jl-item-prev")
const nextItem = document.querySelector(".jl-item-next")
let sliderPosition = 0

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + "px"
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.width = containerWidth + "px"
  let sliderItemWidth = sliderItem[index].offsetWidth
  sliderListWidth += sliderItemWidth
}

sliderList.style.width = sliderListWidth + "px"

// HANDLERS
const handleNextSlideAnimation = () => {
  const lastItem = sliderListWidth - containerWidth
  if (sliderPosition * -1 === lastItem) {
    return
  }

  sliderPosition -= containerWidth

  anime({
    targets: sliderList,
    translateX: sliderPosition,
  })
}
const handlePrevSlideAnimation = () => {
  if (sliderPosition === 0) {
    return
  }

  sliderPosition += containerWidth

  anime({
    targets: sliderList,
    translateX: sliderPosition,
  })
}

nextItem.addEventListener("click", handleNextSlideAnimation)
prevItem.addEventListener("click", handlePrevSlideAnimation)
