const contextMenu = document.querySelector(".wrapper");

// document.addEventListener("contextmenu", e =>{
//     e.preventDefault(); //preventing default context menu 
// });

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();

    let x = e.offsetX, y = e.offsetY;
    contextMenu.style.left = `${x}px`;
    contextMenu.style.right = `${y}px`;

    contextMenu.style.visibility = "visible";
});