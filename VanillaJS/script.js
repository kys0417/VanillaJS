const h1 = document.querySelector(".hello h1");
const superEventHandler = {
    handleEnter: function() {
        h1.innerText = "The mouse is here!";
        h1.style.color = colors[0];
    },
    handleLeave: function() {
        h1.innerText = "The mouse is gone!";
        h1.style.color = colors[1];
    },
    handleResize: function() {
        h1.innerText = "You just resized!";
        h1.style.color = colors[2];
    },
    handleContextMenu: function() {
        h1.innerText = "That was a right click!";
        h1.style.color = colors[3];
    }
}

h1.addEventListener("mouseenter", superEventHandler.handleEnter);
h1.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("contextmenu", superEventHandler.handleResize);
window.addEventListener("resize",superEventHandler.ha);

