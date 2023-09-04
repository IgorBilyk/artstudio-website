const bars = document.querySelector("#bars");
const navmenu = document.querySelector("#navmenu");

document.addEventListener("click", (e) => {
  const targetElement = e.target.classList.value;
  targetElement === "fa-solid fa-bars"
    ? navmenu.classList.toggle("visible")
    : navmenu.classList.remove("visible");
});
