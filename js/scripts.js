// script.js
/*
document.addEventListener('DOMContentLoaded', () => {
    const brand = document.getElementById('brand');
    const fullText = 'eeshaan sarda';
    const targetText = 'es.';
    let currentText = fullText;

    const interval = setInterval(() => {
        if (currentText === targetText) {
            clearInterval(interval);
            return;
        }

        let words = currentText.split(' ');
        if (words.length > 1 && words[1].length > 1) {
            words[1] = words[1].substring(0, words[1].length - 1);
        } else if (words[0].length > 1) {
            words[0] = words[0].substring(0, words[0].length - 1);
        }
        currentText = words.join(' ');
        brand.innerHTML = `${currentText}<span>.</span>`;
    }, 200); // Adjust time as needed
});

const starryBg = document.querySelector('.starry-bg');
const numStars = 200; // Adjust the number of stars here

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Randomize animation duration
    starryBg.appendChild(star);
}
*/

/*
const starryBg = document.querySelector('.starry-bg');
const numStars = 200; // Adjust the number of stars here
const stars = [];

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Randomize animation duration
    starryBg.appendChild(star);
    stars.push(star);
}

function randomMovement(star) {
    const deltaX = (Math.random() - 0.5) * 2;
    const deltaY = (Math.random() - 0.5) * 2;
    const newX = parseFloat(star.style.left) + deltaX;
    const newY = parseFloat(star.style.top) + deltaY;
    star.style.left = `${newX}%`;
    star.style.top = `${newY}%`;
}

setInterval(() => {
    stars.forEach(star => randomMovement(star));
}, 100);


const starryBg = document.querySelector('.starry-bg');
const numStars = 200; // Adjust the number of stars here
const stars = [];

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Randomize animation duration
    starryBg.appendChild(star);
    stars.push(star);
}


function randomMovement(star) {
    const deltaX = (Math.random() - 0.5) * 2;
    const deltaY = (Math.random() - 0.5) * 2;
    const newX = parseFloat(star.style.left) + deltaX;
    const newY = parseFloat(star.style.top) + deltaY;
    star.style.left = `${newX}%`;
    star.style.top = `${newY}%`;
}

setInterval(() => {
    stars.forEach(star => randomMovement(star));
}, 1000); // Adjust the interval to match the transition duration

*/

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
