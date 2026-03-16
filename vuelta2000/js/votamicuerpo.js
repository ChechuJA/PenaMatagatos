/* ============================================
   VOTA MI CUERPO - Sistema de Votación
   ============================================ */

const ratings = {};

document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 Inicializando VotaMiCuerpo...');
    
    // Inicializar ratings
    document.querySelectorAll('.rating-stars').forEach(container => {
        const userId = container.dataset.user;
        ratings[userId] = {
            total: Math.floor(Math.random() * 200) + 100,
            sum: 0
        };
        
        // Calcular sum basado en el score actual
        const scoreElement = document.getElementById(`score-${userId}`);
        if (scoreElement) {
            const currentScore = parseFloat(scoreElement.textContent);
            ratings[userId].sum = currentScore * ratings[userId].total;
        }
        
        // Event listeners para hover
        const stars = container.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.addEventListener('mouseenter', function() {
                highlightStars(stars, index);
            });
            
            star.addEventListener('click', function() {
                const rating = parseInt(this.dataset.rating);
                vote(userId, rating);
            });
        });
        
        container.addEventListener('mouseleave', function() {
            resetStars(stars);
        });
    });
    
    // Actualizar contador de usuarios online aleatoriamente
    setInterval(() => {
        const onlineElement = document.querySelector('#votamicuerpo .section-content strong:last-of-type');
        if (onlineElement && onlineElement.parentElement) {
            const currentOnline = parseInt(onlineElement.textContent.replace(/\D/g, ''));
            if (!isNaN(currentOnline)) {
                const change = Math.floor(Math.random() * 21) - 10;
                const newOnline = Math.max(500, Math.min(600, currentOnline + change));
                onlineElement.textContent = newOnline.toLocaleString();
            }
        }
    }, 5000);
    
    console.log('✅ VotaMiCuerpo inicializado');
});

function highlightStars(stars, index) {
    stars.forEach((star, i) => {
        if (i <= index) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function resetStars(stars) {
    stars.forEach(star => {
        star.classList.remove('active');
    });
}

function vote(userId, rating) {
    if (!ratings[userId]) return;
    
    // Actualizar datos
    ratings[userId].sum += rating;
    ratings[userId].total += 1;
    
    // Calcular nueva puntuación
    const newScore = (ratings[userId].sum / ratings[userId].total).toFixed(1);
    
    // Actualizar UI
    const scoreElement = document.getElementById(`score-${userId}`);
    if (scoreElement) {
        // Animación de cambio
        scoreElement.style.transform = 'scale(1.5)';
        scoreElement.style.color = '#00ff00';
        
        setTimeout(() => {
            scoreElement.textContent = newScore;
            setTimeout(() => {
                scoreElement.style.transform = 'scale(1)';
                scoreElement.style.color = '#ff1493';
            }, 200);
        }, 300);
    }
    
    // Mostrar mensaje
    showVoteMessage(rating);
}

function showVoteMessage(rating) {
    const messages = {
        1: "¡Vaya! 😅",
        2: "Normal... 😐",
        3: "¡No está mal! 😊",
        4: "¡Muy bien! 😍",
        5: "¡ESPECTACULAR! 🔥"
    };
    
    // Crear elemento de mensaje
    const msg = document.createElement('div');
    msg.textContent = messages[rating] || "¡Gracias por votar!";
    msg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff69b4, #ff1493);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        z-index: 9999;
        animation: popIn 0.3s ease-out;
    `;
    
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.style.animation = 'popOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(msg);
        }, 300);
    }, 1500);
}

// Animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes popOut {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
