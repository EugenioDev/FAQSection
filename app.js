const titles = document.querySelectorAll(".faq-title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle("is-active");
    title.lastElementChild.classList.toggle("rotate");
  });
});
