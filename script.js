// const h1 = document.querySelector("h1");

// function handleTitleClick() {
//     const clickedClass = "clicked"
//     if(h1.classList.contains(clickedClass)){ /*h1.className == clickedClass*/ 
//         h1.classList.remove(clickedClass) /*h1.className = "";*/
//     } else{
//         h1.classList.add(clickedClass); /*h1.className = clickedClass;*/
//     }
// }

// h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);