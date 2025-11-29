// GeoGuessr Game Data
const photos = [
    {
        image: 'src/paris.jpeg', 
        location: 'Paris, France',
        fact: 'The view from my hostel... Convinced the baker right next door to say "hi" to me in English after a week of "bonjour".'
    },
    {
        image: 'src/lisbon.jpeg',
        location: 'Lisbon, Portugal',
        fact: 'Spent a day in Cascais, got the WORST sunburn of my life, but the train back to Lisbon to enjoy this was worth it.'
    },

    {
        image: 'src/rotterdam.jpeg',
        location: 'Rotterdam, Netherlands',
        fact: 'A failed attempt at surfing in a canal in Rotterdam. Had a full audience of locals cheering me on though!'
    },

    {
        image: 'src/istanbul.jpeg',
        location: 'Istanbul, Turkey',
        fact: 'This one is from when I visited with my dad! The best san sebastian cake you will ever have can be found in a cafe called Viyana (Vienna) right next to the Galata Tower.'
    },
    {
        image: 'src/la.jpeg',
        location: 'Los Angeles, CA, USA',
        fact: 'The California sunrises are as beautiful as the sunsets! My friend and I pulled an all-nighter to catch this in Venice Beach.'    
    },
    {
        image: 'src/amsterdam.jpeg',
        location: 'Amsterdam, Netherlands',
        fact: 'Amsterdam has so much to offer...but the best thing it offers is the fries. With truffle. Mmm.'
    }
];

// Game State
let currentPhotoIndex = 0;
let timer;
let timeLeft = 5;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const nextBtnContainer = document.getElementById('next-btn-container');
const photoElement = document.getElementById('geoguessr-photo');
const timerDisplay = document.getElementById('timer-display');
const revealOverlay = document.getElementById('reveal-overlay');
const locationReveal = document.getElementById('location-reveal');
const factReveal = document.getElementById('fact-reveal');

// Event Listeners
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextPhoto);
restartBtn.addEventListener('click', restartGame);

// Game Functions
function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    currentPhotoIndex = 0;
    showPhoto();
}

function showPhoto() {
    const photo = photos[currentPhotoIndex];
    photoElement.src = photo.image;
    revealOverlay.style.display = 'none';
    nextBtnContainer.style.display = 'none';
    timerDisplay.style.display = 'flex';
    timeLeft = 5;
    timerDisplay.textContent = timeLeft;
    
    startCountdown();
}

function startCountdown() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            revealAnswer();
        }
    }, 1000);
}

function revealAnswer() {
    const photo = photos[currentPhotoIndex];
    timerDisplay.style.display = 'none';
    revealOverlay.style.display = 'flex';
    nextBtnContainer.style.display = 'block';
    locationReveal.textContent = photo.location;
    factReveal.textContent = photo.fact;
}

function nextPhoto() {
    currentPhotoIndex++;
    
    if (currentPhotoIndex >= photos.length) {
        gameScreen.style.display = 'none';
        endScreen.style.display = 'block';
    } else {
        showPhoto();
    }
}

function restartGame() {
    endScreen.style.display = 'none';
    startScreen.style.display = 'block';
    currentPhotoIndex = 0;
}


function openModal(title, tech, bullets, link) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTech = document.getElementById('modal-tech');
    const modalBullets = document.getElementById('modal-bullets');
    const modalLink = document.getElementById('modal-link');

    modalTitle.textContent = title;
    modalTech.textContent = tech;
    
    modalBullets.innerHTML = '';
    bullets.forEach(bullet => {
        const li = document.createElement('li');
        li.textContent = bullet;
        modalBullets.appendChild(li);
    });

    modalLink.href = link;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});