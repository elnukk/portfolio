// ============================================================
//  RENDERING — reads from portfolioData (data.js)
// ============================================================

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderCards(containerId, items) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    grid.innerHTML = items.map(item => `
        <div class="polaroid-card">
            <div class="polaroid-image">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="polaroid-photo">
            </div>
            <div class="polaroid-caption">
                <h3 class="polaroid-title">${escapeHtml(item.title)}</h3>
                <p class="polaroid-tech">${escapeHtml(item.tech)}</p>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.polaroid-card').forEach((card, i) => {
        card.addEventListener('click', () => openModal(items[i]));
    });
}

function renderExperience() {
    const list = document.getElementById('experience-list');
    if (!list) return;

    list.innerHTML = portfolioData.experience.map(item => `
        <div class="experience-item">
            <div class="experience-header">
                <div>
                    <h3 class="experience-role">${escapeHtml(item.role)}</h3>
                    <p class="experience-company">${escapeHtml(item.company)}</p>
                </div>
                <span class="experience-date">${escapeHtml(item.date)}</span>
            </div>
            <p class="experience-description">${escapeHtml(item.description)}</p>
        </div>
    `).join('');
}

function renderAwardList(containerId, items) {
    const list = document.getElementById(containerId);
    if (!list) return;

    list.innerHTML = items.map(item => `
        <div>
            <h4 class="award-name">${escapeHtml(item.name)}</h4>
            <p class="award-description">${escapeHtml(item.description)}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards('highlights-grid', portfolioData.highlights);
    renderExperience();
    renderCards('projects-grid', portfolioData.projects);
    renderAwardList('honors-list', portfolioData.honors);
});

// ============================================================
//  MODAL
// ============================================================

function openModal(item) {
    const modal      = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTech  = document.getElementById('modal-tech');
    const modalBullets = document.getElementById('modal-bullets');
    const modalLink  = document.getElementById('modal-link');

    modalTitle.textContent = item.title;
    modalTech.textContent  = item.tech;

    modalBullets.innerHTML = '';
    item.bullets.forEach(bullet => {
        const li = document.createElement('li');
        li.textContent = bullet;
        modalBullets.appendChild(li);
    });

    if (item.link) {
        modalLink.href = item.link;
        modalLink.style.display = 'inline-block';
    } else {
        modalLink.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// ============================================================
//  GEOGUESSR GAME
// ============================================================

const photos = [
    {
        image: 'src/paris.jpeg',
        location: 'Paris, France',
        fact: 'The view from my hostel... Felt super lucky to wake up to this everyday during my week-long stay in Paris!'
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
        fact: 'This one is from when I visited with my dad! The best san sebastian cake you will ever have can be found in a cafe called Viyana right next to the Galata Tower.'
    },
    {
        image: 'src/la.jpeg',
        location: 'Los Angeles, CA',
        fact: 'My friend and I pulled an all-nighter to catch this in Venice Beach.'
    },
    {
        image: 'src/amsterdam.jpeg',
        location: 'Amsterdam, Netherlands',
        fact: 'Amsterdam has so much to offer...but the best thing it offers is the fries. With truffle.'
    }
];

let currentPhotoIndex = 0;
let timer;
let timeLeft = 5;

const startScreen      = document.getElementById('start-screen');
const gameScreen       = document.getElementById('game-screen');
const endScreen        = document.getElementById('end-screen');
const startBtn         = document.getElementById('start-btn');
const nextBtn          = document.getElementById('next-btn');
const restartBtn       = document.getElementById('restart-btn');
const nextBtnContainer = document.getElementById('next-btn-container');
const photoElement     = document.getElementById('geoguessr-photo');
const timerDisplay     = document.getElementById('timer-display');
const revealOverlay    = document.getElementById('reveal-overlay');
const locationReveal   = document.getElementById('location-reveal');
const factReveal       = document.getElementById('fact-reveal');

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextPhoto);
restartBtn.addEventListener('click', restartGame);

function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display  = 'block';
    currentPhotoIndex = 0;
    showPhoto();
}

function showPhoto() {
    const photo = photos[currentPhotoIndex];
    photoElement.src = photo.image;
    revealOverlay.style.display    = 'none';
    nextBtnContainer.style.display = 'none';
    timerDisplay.style.display     = 'flex';
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
    timerDisplay.style.display     = 'none';
    revealOverlay.style.display    = 'flex';
    nextBtnContainer.style.display = 'block';
    locationReveal.textContent     = photo.location;
    factReveal.textContent         = photo.fact;
}

function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        gameScreen.style.display = 'none';
        endScreen.style.display  = 'block';
    } else {
        showPhoto();
    }
}

function restartGame() {
    endScreen.style.display  = 'none';
    startScreen.style.display = 'block';
    currentPhotoIndex = 0;
}
