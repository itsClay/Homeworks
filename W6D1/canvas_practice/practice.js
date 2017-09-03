document.addEventListener("DOMContentLoaded", function(){

});

const canvas = document.getElementById('mycanvas');
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext('2d');

ctx.fillStyle= 'rgb(192,192,192)';
ctx.fillRect(0,0,500,500);
ctx.beginPath();
ctx.arc(75, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = 'rgb(255, 255, 192)';
ctx.fill();


ctx.fillRect(150, 150, 100, 100);
ctx.clearRect(175, 175, 50, 50);
ctx.strokeRect(180, 180, 40, 40);
