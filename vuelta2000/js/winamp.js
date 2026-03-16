// ============================================
// WINAMP PLAYER - Simulación
// ============================================

let winampPlayer = {
    playlist: [
        { id: 1, title: "Aserejé", artist: "Las Ketchup", duration: "3:33", file: "asereje.mp3" },
        { id: 2, title: "Gasolina", artist: "Daddy Yankee", duration: "3:13", file: "gasolina.mp3" },
        { id: 3, title: "Whenever, Wherever", artist: "Shakira", duration: "3:16", file: "whenever.mp3" },
        { id: 4, title: "The Ketchup Song", artist: "Las Ketchup", duration: "3:33", file: "ketchup.mp3" },
        { id: 5, title: "Macarena", artist: "Los del Río", duration: "4:12", file: "macarena.mp3" },
        { id: 6, title: "Livin' la Vida Loca", artist: "Ricky Martin", duration: "4:03", file: "loca.mp3" },
        { id: 7, title: "My Heart Will Go On", artist: "Celine Dion", duration: "4:40", file: "titanic.mp3" },
        { id: 8, title: "Baby One More Time", artist: "Britney Spears", duration: "3:30", file: "baby.mp3" },
        { id: 9, title: "I Want It That Way", artist: "Backstreet Boys", duration: "3:33", file: "iwant.mp3" },
        { id: 10, title: "Barbie Girl", artist: "Aqua", duration: "3:16", file: "barbie.mp3" },
        { id: 11, title: "Blue (Da Ba Dee)", artist: "Eiffel 65", duration: "4:40", file: "blue.mp3" },
        { id: 12, title: "Mambo No. 5", artist: "Lou Bega", duration: "3:41", file: "mambo.mp3" },
        { id: 13, title: "What Is Love", artist: "Haddaway", duration: "4:30", file: "love.mp3" },
        { id: 14, title: "Rhythm Is a Dancer", artist: "Snap!", duration: "3:44", file: "rhythm.mp3" },
        { id: 15, title: "La Bomba", artist: "King Africa", duration: "3:28", file: "bomba.mp3" }
    ],
    currentTrack: 0,
    isPlaying: false,
    currentTime: 0,
    maxTime: 0,
    volume: 75,
    visualizerInterval: null,
    progressInterval: null
};

function initWinamp() {
    renderPlaylist();
    selectTrack(0);
    initVisualizer();
}

function renderPlaylist() {
    const playlistContainer = document.getElementById('winampPlaylist');
    if (!playlistContainer) {
        console.error('Contenedor de playlist no encontrado');
        return;
    }

    playlistContainer.innerHTML = '';
    
    winampPlayer.playlist.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.onclick = () => selectTrack(index);
        
        item.innerHTML = `
            <div class="playlist-track-info">
                <div>${index + 1}. ${track.title}</div>
                <div class="playlist-artist">${track.artist}</div>
            </div>
            <div class="playlist-duration">${track.duration}</div>
        `;
        
        playlistContainer.appendChild(item);
    });
}

function selectTrack(index) {
    winampPlayer.currentTrack = index;
    const track = winampPlayer.playlist[index];
    
    // Actualizar display
    const trackInfo = document.getElementById('winampTrackInfo');
    if (trackInfo) {
        trackInfo.innerHTML = `
            <div style="font-size: 16px; margin-bottom: 5px;">${track.title}</div>
            <div style="font-size: 12px; color: #00cc00;">${track.artist}</div>
        `;
    }
    
    // Actualizar items de playlist
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
    
    // Parsear duración
    const parts = track.duration.split(':');
    winampPlayer.maxTime = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    winampPlayer.currentTime = 0;
    
    updateTimeDisplay();
}

function playWinamp() {
    if (winampPlayer.isPlaying) {
        return; // Ya está reproduciendo
    }
    
    winampPlayer.isPlaying = true;
    
    // Cambiar botón de play
    const playBtn = document.getElementById('winampPlayBtn');
    if (playBtn) {
        playBtn.innerHTML = '⏸';
    }
    
    // Iniciar visualizador
    if (!winampPlayer.visualizerInterval) {
        winampPlayer.visualizerInterval = setInterval(animateVisualizer, 100);
    }
    
    // Iniciar progreso
    if (!winampPlayer.progressInterval) {
        winampPlayer.progressInterval = setInterval(updateProgress, 1000);
    }
}

function pauseWinamp() {
    winampPlayer.isPlaying = false;
    
    const playBtn = document.getElementById('winampPlayBtn');
    if (playBtn) {
        playBtn.innerHTML = '▶';
    }
    
    // Detener intervalos
    if (winampPlayer.visualizerInterval) {
        clearInterval(winampPlayer.visualizerInterval);
        winampPlayer.visualizerInterval = null;
    }
    
    if (winampPlayer.progressInterval) {
        clearInterval(winampPlayer.progressInterval);
        winampPlayer.progressInterval = null;
    }
}

function togglePlayPause() {
    if (winampPlayer.isPlaying) {
        pauseWinamp();
    } else {
        playWinamp();
    }
}

function stopWinamp() {
    pauseWinamp();
    winampPlayer.currentTime = 0;
    updateTimeDisplay();
    updateProgressBar();
}

function nextTrack() {
    winampPlayer.currentTrack = (winampPlayer.currentTrack + 1) % winampPlayer.playlist.length;
    selectTrack(winampPlayer.currentTrack);
    
    if (winampPlayer.isPlaying) {
        playWinamp();
    }
}

function previousTrack() {
    winampPlayer.currentTrack = winampPlayer.currentTrack - 1;
    if (winampPlayer.currentTrack < 0) {
        winampPlayer.currentTrack = winampPlayer.playlist.length - 1;
    }
    selectTrack(winampPlayer.currentTrack);
    
    if (winampPlayer.isPlaying) {
        playWinamp();
    }
}

function updateProgress() {
    if (!winampPlayer.isPlaying) {
        return;
    }
    
    winampPlayer.currentTime++;
    
    if (winampPlayer.currentTime >= winampPlayer.maxTime) {
        // Canción terminada, siguiente
        nextTrack();
        playWinamp();
    }
    
    updateTimeDisplay();
    updateProgressBar();
}

function updateTimeDisplay() {
    const minutes = Math.floor(winampPlayer.currentTime / 60);
    const seconds = winampPlayer.currentTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const timeElement = document.getElementById('winampTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

function updateProgressBar() {
    const progress = (winampPlayer.currentTime / winampPlayer.maxTime) * 100;
    const progressBar = document.getElementById('winampProgressFill');
    
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

function initVisualizer() {
    const visualizer = document.getElementById('winampVisualizer');
    if (!visualizer) {
        return;
    }
    
    // Crear barras
    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        bar.style.height = '5px';
        visualizer.appendChild(bar);
    }
}

function animateVisualizer() {
    const bars = document.querySelectorAll('.visualizer-bar');
    
    bars.forEach(bar => {
        const randomHeight = Math.random() * 30 + 5;
        bar.style.height = `${randomHeight}px`;
    });
}

function setVolume(value) {
    winampPlayer.volume = value;
    const volumeFill = document.getElementById('winampVolumeFill');
    
    if (volumeFill) {
        volumeFill.style.width = `${value}%`;
    }
}

function seekTo(event) {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    
    winampPlayer.currentTime = Math.floor(percentage * winampPlayer.maxTime);
    updateTimeDisplay();
    updateProgressBar();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initWinamp, 100);
});
