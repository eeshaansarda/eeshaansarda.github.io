// script.js
const starryBg = document.querySelector('.starry-bg');
const numStars = 50; // Adjust the number of stars here
const stars = [];
const maxDirectionChange = 0.7; // Maximum change in direction (40%)

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Randomize animation duration
    star.dataset.dx = (Math.random() - 0.5) * 2; // Initial direction x
    star.dataset.dy = (Math.random() - 0.5) * 2; // Initial direction y
    starryBg.appendChild(star);
    stars.push(star);
}

function randomMovement(star) {
    let deltaX = parseFloat(star.dataset.dx);
    let deltaY = parseFloat(star.dataset.dy);

    // Generate new direction with limited change
    const newDeltaX = deltaX + (Math.random() - 0.5) * 2 * maxDirectionChange;
    const newDeltaY = deltaY + (Math.random() - 0.5) * 2 * maxDirectionChange;

    // Update direction
    star.dataset.dx = newDeltaX;
    star.dataset.dy = newDeltaY;

    // Update position
    const newX = parseFloat(star.style.left) + newDeltaX;
    const newY = parseFloat(star.style.top) + newDeltaY;
    star.style.left = `${newX}%`;
    star.style.top = `${newY}%`;
}

setInterval(() => {
    stars.forEach(star => randomMovement(star));
}, 1000); // Adjust the interval to match the transition duration
