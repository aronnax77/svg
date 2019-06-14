var el = document.querySelector(".container");

window.addEventListener("resize", function() {
  if(window.innerWidth <= window.innerHeight) {
    el.style.width = "100vw";
    el.style.height = "100vw";
  } else {
    el.style.width = "100vh";
    el.style.height = "100vh";
  }
});
