let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let cube = document.getElementById('cube');
let face = document.querySelectorAll('.face');

let color1btn = document.getElementById('color1');
let color2btn = document.getElementById('color2');

startbtn.addEventListener("click", () => {
    cube.classList.add('Cubeanime');
});

stopbtn.addEventListener("click", () => {
    cube.classList.remove('Cubeanime');
});


face.forEach((e) => {
    color1btn.addEventListener("click", () => {
        e.classList.add('Color1');
        e.classList.remove('Color2');
        // console.log(e)
    });
    color2btn.addEventListener("click", () => {
        e.classList.add('Color2');
        e.classList.remove('Color1');
    });
        
});


