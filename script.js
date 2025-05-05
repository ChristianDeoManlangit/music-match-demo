// Sample music data
const musicCards = [
  {
    cover: 'mp3/peklat-cream.jpeg',
    title: 'Peklat Cream',
    album: 'Peklat Cream - 2019',
    artist: 'Bita and the Botflies',
    src: 'mp3/peklat-cream.mp3',
    spotifyUrl: 'https://open.spotify.com/track/5MR9UNcJkBHCDoapv0Pqes?si=37a3249a44824168'
  },
  {
    cover: 'mp3/selos.jpeg',
    title: 'Selos',
    album: 'Selos - 2019',
    artist: 'The Vowels they Orbit',
    src: 'mp3/selos.mp3',
    spotifyUrl: 'https://open.spotify.com/track/2ID1EiBXH8qdiaaqmdKVuS?si=f5dffef96ce246f9'
  },
  {
    cover: 'mp3/one-night-stand.jpeg',
    title: 'One Night Stand',
    album: 'One Night Stand - 2018',
    artist: 'FourPlay MNL',
    src: 'mp3/one-night-stand.mp3',
    spotifyUrl: 'https://open.spotify.com/track/0NEeCTndCmmu14EICjNETP?si=c46dd88359374612'
  },
  {
    cover: 'mp3/maybe-maybe.jpeg',
    title: 'Maybe Maybe',
    album: 'Don’t Look Back - 2017',
    artist: 'Lola Amour',
    src: 'mp3/maybe-maybe.mp3',
    spotifyUrl: 'https://open.spotify.com/track/0HAciULA3lNbyp0kCBrJnC?si=c4809a37198145fa'
  },
  {
    cover: 'mp3/taya.jpeg',
    title: 'Taya',
    album: 'Bipolar - 2009',
    artist: 'Up Dharma Down',
    src: 'mp3/taya.mp3',
    spotifyUrl: 'https://open.spotify.com/track/3yL9do2z6xjKRJPlRir5tk?si=afc1351999ec4d48'
  },
  {
    cover: 'mp3/potion.jpeg',
    title: 'Potion',
    album: 'Aurora - 2018',
    artist: 'Maude',
    src: 'mp3/potion.mp3',
    spotifyUrl: 'https://open.spotify.com/track/3uIb2XguAOUadOAbrb20tD?si=ae70a7af42234cf5'
  },
  {
    cover: 'mp3/real.jpeg',
    title: 'Real',
    album: 'Spellbound',
    artist: 'Alpha Yand, Anne Chan',
    src: 'mp3/real.mp3',
    spotifyUrl: 'https://open.spotify.com/track/2T2xTwRRCte5vQ3iptj0Yb?si=4fa9647216314c2d'
  },
  {
    cover: 'mp3/halika-na.jpeg',
    title: 'Halika Na',
    album: 'Halika Na -',
    artist: 'Ippo Huwano',
    src: 'mp3/halika-na.mp3',
    spotifyUrl: 'https://open.spotify.com/track/2Jh7V0RVCWuPLTTPuS7NRO?si=425aae9828ed4685'
  },
  {
    cover: 'mp3/parisukat-sa-bilog.jpeg',
    title: 'Parisukat Sa Bilog',
    album: 'Parisukat Sa Bilog - 2021',
    artist: '46th Hope St.',
    src: 'mp3/parisukat-sa-bilog.mp3',
    spotifyUrl: 'https://open.spotify.com/track/6VNkLhRlIvoElySnZ8mpUx?si=c8192edb1b944a03'
  },
  {
    cover: 'mp3/she-was.jpeg',
    title: 'She Was',
    album: 'She Was - 2018',
    artist: 'Serotonin',
    src: 'mp3/she-was.mp3',
    spotifyUrl: 'https://open.spotify.com/track/5Gd6hn16MIvP3Tn1NzAuas?si=57fb671ae3814e79'
  },
  {
    cover: 'mp3/bangin.jpeg',
    title: 'Bangin',
    album: 'Bangin - 2021',
    artist: 'Paul Pablo',
    src: 'mp3/bangin.mp3',
    spotifyUrl: 'https://open.spotify.com/track/0ZVXBU8LCG0HutT5Oa8eI4?si=cfb79af6c64c443d'
  },
  {
    cover: 'mp3/easy.jpeg',
    title: 'Easy',
    album: 'Easy - 2023',
    artist: 'Sansette',
    src: 'mp3/easy.mp3',
    spotifyUrl: 'https://open.spotify.com/track/0t4yopXQW1ObWhhT5FQGzZ?si=6444f20809bd41e4'
  },
  {
    cover: 'mp3/hinga.jpeg',
    title: 'Hinga',
    album: 'Hinga - 2021',
    artist: 'Minaw',
    src: 'mp3/hinga.mp3',
    spotifyUrl: 'https://open.spotify.com/track/3hrkPBNoXAasNErj9ATIve?si=48643e5a499a4b38'
  },
  {
    cover: 'mp3/roots.jpeg',
    title: 'Roots',
    album: 'Roots - 2023',
    artist: 'Armi Millare',
    src: 'mp3/roots.mp3',
    spotifyUrl: 'https://open.spotify.com/track/2f10y3Q1P9UFJPj7cGCBj8?si=c9cbf2bf0495454b'
  },
  {
    cover: 'mp3/passerby.jpeg',
    title: 'Passerby',
    album: 'Passerby - 2023',
    artist: 'Mayarie',
    src: 'mp3/passerby.mp3',
    spotifyUrl: 'https://open.spotify.com/track/0RwDxYyETCfTaSGeJumGeL?si=07b388323b5041a9'
  }
];

// Core state management
let currentCards = [...musicCards]; // Working copy of music cards
let currentIndex = 0;
let likedMusic = JSON.parse(localStorage.getItem('likedMusic') || '[]');

// DOM Elements
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title').querySelector('.label-text');
const albumName = document.getElementById('album-name').querySelector('.label-text');
const artistName = document.getElementById('artist-name').querySelector('.label-text');
const removeBtn = document.getElementById('remove-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const likeBtn = document.getElementById('like-btn');
const musicCard = document.getElementById('music-card');
const audioPlayer = document.getElementById('audio-player');
const container = document.querySelector('.music-match-container');
const likedContainer = document.getElementById('liked-container');
const closeLikedBtn = document.getElementById('close-liked-btn');
const likedSongsList = document.getElementById('liked-songs-list');
const noLikedSongs = document.getElementById('no-liked-songs');
const viewLikedBtn = document.getElementById('view-liked-btn');
const overlay = document.getElementById('overlay');

// Utility functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize with shuffled cards
currentCards = shuffleArray(currentCards);

// Card rendering
function renderCard(animate = false, direction = 0) {
    if (currentCards.length === 0) {
        showEmptyState();
        return;
    }

    const card = currentCards[currentIndex];
    
    // Clear previous image
    albumCover.src = '';
    setTimeout(() => {
        albumCover.src = card.cover;
        albumCover.style.display = 'block';
    }, 10);

    songTitle.textContent = card.title;
    albumName.textContent = card.album;
    artistName.textContent = card.artist;

    if (animate) {
        musicCard.className = 'music-card';
        void musicCard.offsetWidth; // Trigger reflow
        musicCard.classList.add('fade-in');
    }

    // Handle audio
    if (audioPlayer.src !== card.src) {
        audioPlayer.src = card.src;
        audioPlayer.load();
        setTimeout(() => {
            audioPlayer.play().catch(() => {});
        }, 1000);
    }
}

function showEmptyState() {
    albumCover.src = '';
    albumCover.style.display = 'none';
    songTitle.textContent = 'No more music!';
    albumName.textContent = 'Click shuffle to start over';
    artistName.textContent = '';
    musicCard.style.background = 'transparent';
    musicCard.style.boxShadow = 'none';
    audioPlayer.pause();
    audioPlayer.src = '';
}

// Animation handling
function animateCardOut(direction, callback) {
    musicCard.className = 'music-card';
    void musicCard.offsetWidth;
    musicCard.classList.add(direction < 0 ? 'fade-out-left' : 'fade-out-right');
    setTimeout(() => {
        musicCard.className = 'music-card';
        // Force reflow and trigger fade-in after swipe
        void musicCard.offsetWidth;
        musicCard.classList.add('fade-in');
        if (callback) callback();
    }, 350);
}

// Navigation
function showNextCard(animate = true) {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex + 1) % currentCards.length;
    renderCard(animate, -1);
}

function showPrevCard(animate = true) {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex - 1 + currentCards.length) % currentCards.length;
    renderCard(animate, 1);
}

// Card actions
removeBtn.addEventListener('click', () => {
    if (currentCards.length === 0) return;
    
    animateCardOut(-1, () => {
        currentCards.splice(currentIndex, 1);
        
        if (currentCards.length === 0) {
            renderCard();
            return;
        }
        
        if (currentIndex >= currentCards.length) {
            currentIndex = 0;
        }
        
        renderCard();
    });
});

shuffleBtn.addEventListener('click', () => {
    if (currentCards.length === 0) {
        // Reset the cards when there are none left
        currentCards = [...musicCards];
    }
    currentCards = shuffleArray(currentCards);
    currentIndex = Math.floor(Math.random() * currentCards.length);
    renderCard(true, 0);
});

function likeBtnHandler() {
    if (currentCards.length === 0) return;
    const card = currentCards[currentIndex];
    if (!likedMusic.some(m => m.title === card.title && m.artist === card.artist)) {
        const likedCard = { ...card };
        likedMusic.push(likedCard);
        localStorage.setItem('likedMusic', JSON.stringify(likedMusic));
        updateLikedSongsList();
        likeBtn.classList.add('liked-animation');
        setTimeout(() => {
            likeBtn.classList.remove('liked-animation');
        }, 300);
    }
}
likeBtn.removeEventListener('click', likeBtnHandler);
likeBtn.addEventListener('click', likeBtnHandler);

// Liked songs functionality
function updateLikedSongsList() {
    likedSongsList.innerHTML = '';
    
    if (likedMusic.length === 0) {
        noLikedSongs.style.display = 'flex';
        return;
    }
    
    noLikedSongs.style.display = 'none';
    likedMusic.forEach((song, index) => {
        const songElement = createLikedSongElement(song, index);
        likedSongsList.appendChild(songElement);
    });
}

function createLikedSongElement(song, index) {
    const div = document.createElement('div');
    div.className = 'liked-song-item';
    div.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="liked-song-cover">
        <div class="liked-song-info">
            <div class="liked-song-title">${song.title}</div>
            <div class="liked-song-album">${song.album}</div>
            <div class="liked-song-artist">${song.artist}</div>
        </div>
        <div class="liked-song-actions">
            <button class="liked-song-btn spotify-btn" title="Open in Spotify" tabindex="-1">
                <i class="ri-spotify-fill"></i>
            </button>
            <button class="liked-song-btn unlike-btn remove-liked-btn" data-index="${index}" title="Remove from liked">
                <i class="ri-close-line"></i>
            </button>
        </div>
    `;
    div.querySelector('.spotify-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (song.spotifyUrl) {
            window.open(song.spotifyUrl, '_blank');
        }
    });
    div.querySelector('.remove-liked-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        likedMusic.splice(index, 1);
        localStorage.setItem('likedMusic', JSON.stringify(likedMusic));
        updateLikedSongsList();
    });
    return div;
}

// Liked container visibility controls
viewLikedBtn.addEventListener('click', () => {
    likedContainer.classList.add('show');
    container.classList.add('blur');
    overlay.classList.add('show');
    updateLikedSongsList();
});

closeLikedBtn.addEventListener('click', () => {
    likedContainer.classList.remove('show');
    container.classList.remove('blur');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
    likedContainer.classList.remove('show');
    container.classList.remove('blur');
    overlay.classList.remove('show');
});

// Touch/swipe handling
let touchStartX = null;
let touchStartY = null;
const SWIPE_THRESHOLD = 50;

musicCard.addEventListener('touchstart', (e) => {
    if (currentCards.length === 0) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

musicCard.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Only handle horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
            animateCardOut(1, () => showPrevCard(true));
        } else {
            animateCardOut(-1, () => showNextCard(true));
        }
    }
    
    touchStartX = null;
    touchStartY = null;
});

// Mouse drag/swipe support for desktop
let mouseDownX = null;
let mouseDownY = null;
let isDragging = false;

musicCard.addEventListener('mousedown', (e) => {
    if (currentCards.length === 0) return;
    mouseDownX = e.clientX;
    mouseDownY = e.clientY;
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging || mouseDownX === null) return;
    // Optionally, you can add visual feedback here
});

document.addEventListener('mouseup', (e) => {
    if (!isDragging || mouseDownX === null) return;
    const mouseUpX = e.clientX;
    const mouseUpY = e.clientY;
    const deltaX = mouseUpX - mouseDownX;
    const deltaY = mouseUpY - mouseDownY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
            animateCardOut(1, () => showPrevCard(true));
        } else {
            animateCardOut(-1, () => showNextCard(true));
        }
    }
    mouseDownX = null;
    mouseDownY = null;
    isDragging = false;
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        animateCardOut(1, () => showPrevCard(true));
    } else if (e.key === 'ArrowRight') {
        animateCardOut(-1, () => showNextCard(true));
    } else if (e.code === 'Space') {
        e.preventDefault();
        if (audioPlayer.paused) {
            audioPlayer.play().catch(() => {});
        } else {
            audioPlayer.pause();
        }
    }
});

// Play/pause on album cover click
albumCover.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play().catch(() => {});
    } else {
        audioPlayer.pause();
    }
});

// Initial render
updateLikedSongsList();
renderCard(true);