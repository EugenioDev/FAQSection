const items = document.querySelectorAll(".item");
console.log(items);
items.forEach((item) => {
  item.addEventListener("click", function () {
    const target = item.getAttribute("data-target");
    const id = "faq_" + target;

    let showBox = document.getElementById(id);
    const boxes = document.querySelectorAll(".big-section-container");
    boxes.forEach(box => {
      box.style.display = "none";
    });

    showBox.style.display = "block";
    // console.log(showBox);
  });
});

const titles = document.querySelectorAll(".faq-title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle("is-active");
    title.lastElementChild.classList.toggle("rotate");
  });
});
