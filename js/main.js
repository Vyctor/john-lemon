const btnContact = document.querySelector(".jl-btn-contact");

btnContact.addEventListener("click", function () {
  const boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
