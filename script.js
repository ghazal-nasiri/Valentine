// /////////////rotateCube
document.addEventListener("mousemove", (e) => {
    let cube = document.querySelector(".cube");
    let x = e.clientX - window.innerWidth / 2;
    let y = e.clientY - window.innerHeight / 2;
    x = x * .1;
    y = -y * .1;
    cube.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
document.addEventListener("touchmove", (e) => {
    let cube = document.querySelector(".cube");
    let x = e.clientX - window.innerWidth / 2;
    let y = e.clientY - window.innerHeight / 2;
    x = x * .1;
    y = -y * .1;
    cube.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});



// ///////////////stars
function stars() {
    let count = 150;
    let section = document.querySelector("section");

    for (let i = 0; i < count; i++) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 2;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = 5 + size + "s";
        star.style.animationDelay = 5 + size + "s";
        section.appendChild(star);
    }
}
stars();

// loading

let load = document.querySelector(".loading");

window.addEventListener("load", () => {
    load.style = "visibility: hidden";
})