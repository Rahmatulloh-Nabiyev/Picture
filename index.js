// const listItemlar = document.querySelectorAll(".list__item");
// const box = document.getElementById("box");

// for (let li of listItemlar) {
//     li.addEventListener("click", () => li.classList.add("active"));
//     li.addEventListener("mouseleave", () => li.classList.remove("active"));
// };

// box.addEventListener("dragover", (event) => {
//     event.preventDefault();
//     box.style.backgroundColor = "red"
// });










// const hashColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];


// const rangQaytar = () => hashColors[Math.floor(Math.random() * 16)];

// window.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = 
//     '#' + 
//     rangQaytar() + 
//     rangQaytar() + 
//     rangQaytar() + 
//     rangQaytar() + 
//     rangQaytar();
// });



// const hashColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', ()=>{
    removeActiveClasses()
    panel.classList.add('active');
}))

function removeActiveClasses(){
    panels.forEach(panel => panel.classList.remove('active'))
}