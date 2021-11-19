const body = document.querySelector("body");

function handleInnerwidth() {
  if (window.innerWidth < 500) {
    body.classList.add("step1");
    body.classList.remove("step2");
    body.classList.remove("step3");
  } else if (window.innerWidth > 501 && window.innerWidth < 1000) {
    body.classList.add("step2");
    body.classList.remove("step1");
    body.classList.remove("step3");
  } else if (window.innerWidth > 1001){
    body.classList.add("step3");
    body.classList.remove("step1");
    body.classList.remove("step2");
  }
}

window.addEventListener("resize", handleInnerwidth);