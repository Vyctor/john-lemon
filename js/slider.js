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
const currentSlideNavigation = document.querySelector(".jl-current-slide")
const totalSlideNavitagion = document.querySelector(".jl-total-slide")
const totalSliderItem = sliderItem.length
let currentCounter = 1

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

// CONTENT FORMATTER
const counterFormatter = (number) => {
  return number >= 1 && number < 10 ? `0${number}` : number
}

const counterAdd = () => {
  if (currentCounter >= 0 && currentCounter < totalSliderItem) {
    currentCounter++
    currentSlideNavigation.innerHTML = counterFormatter(currentCounter)
  }
}

const counterSubtract = () => {
  if (currentCounter > 1 && currentCounter <= totalSliderItem) {
    currentCounter--
    currentSlideNavigation.innerHTML = counterFormatter(currentCounter)
  }
}

// ACTIONS
nextItem.addEventListener("click", () => {
  handleNextSlideAnimation()
  counterAdd()
})
prevItem.addEventListener("click", () => {
  handlePrevSlideAnimation()
  counterSubtract()
})
totalSlideNavitagion.innerHTML = counterFormatter(totalSliderItem)
