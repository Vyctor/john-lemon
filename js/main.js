const btnContact = document.querySelector(".jl-btn-contact");

window.addEventListener("load", function () {
  var pagePreloader = document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");

  setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 2000);
});

btnContact.addEventListener("click", function () {
  const boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
