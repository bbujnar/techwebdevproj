let links = document.querySelectorAll(".menu-items a");
let checkbox = document.querySelector('input[type="checkbox"]');

links.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});
