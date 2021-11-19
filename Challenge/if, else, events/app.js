const h1 = document.querySelector("h1");

function handleInnerwidth() {
  if (window.innerWidth < 300) {
    h1.classList.toggle("step1");
  } else if (window.innerWidth > 300 && window.innerwidth < 600) {
    h1.classList.toggle("step2");
  } else h1.classList.toggle("step3");
}

window.addEventListener("resize", handleInnerwidth);