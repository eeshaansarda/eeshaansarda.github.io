// script.js
const canvas = document.getElementById('starryBg');
const ctx = canvas.getContext('2d');
const numStars = 50; // Adjust the number of stars here
const stars = [];
const maxDirectionChange = 0.01; // Maximum change in direction % of change
const speedFactor = 0.1; // Adjust this to control the speed of movement

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function initStars() {
    for (let i = 0; i < numStars; i++) {
        const star = {
            x: getRandomFloat(0, canvas.width),
            y: getRandomFloat(0, canvas.height),
            dx: getRandomFloat(-1, 1),
            dy: getRandomFloat(-1, 1)
        };
        stars.push(star);
    }
}

function randomMovement(star) {
    const newDeltaX = star.dx + getRandomFloat(-1, 1) * maxDirectionChange;
    const newDeltaY = star.dy + getRandomFloat(-1, 1) * maxDirectionChange;

    // Normalize the direction vector to maintain constant speed
    const magnitude = Math.sqrt(newDeltaX * newDeltaX + newDeltaY * newDeltaY);
    star.dx = (newDeltaX / magnitude) || 0; // Avoid division by zero
    star.dy = (newDeltaY / magnitude) || 0;

    let newX = star.x + star.dx * speedFactor;
    let newY = star.y + star.dy * speedFactor;

    // Reverse direction at edges
    if (newX < 0 || newX > canvas.width) {
        star.dx = -star.dx;
        newX = star.x + star.dx * speedFactor;
    }

    if (newY < 0 || newY > canvas.height) {
        star.dy = -star.dy;
        newY = star.y + star.dy * speedFactor;
    }

    star.x = newX;
    star.y = newY;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        randomMovement(star);
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#3aa8ff';
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas(); // Set initial canvas size
initStars();
draw();

window.addEventListener('resize', () => {
    resizeCanvas();
    stars.length = 0; // Clear existing stars
    initStars(); // Reinitialize stars
    draw(); // Redraw canvas
});
