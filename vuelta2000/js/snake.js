// ============================================
// SNAKE GAME - Nokia 3310 Style
// ============================================

let snakeGame = {
    canvas: null,
    ctx: null,
    gridSize: 10,
    tileCount: 20,
    snake: [],
    food: {},
    dx: 0,
    dy: 0,
    score: 0,
    gameLoop: null,
    isGameOver: false,
    speed: 150
};

function initSnake() {
    snakeGame.canvas = document.getElementById('snakeCanvas');
    if (!snakeGame.canvas) {
        console.error('Canvas del Snake no encontrado');
        return;
    }

    snakeGame.ctx = snakeGame.canvas.getContext('2d');
    snakeGame.canvas.width = 280;
    snakeGame.canvas.height = 200;
    snakeGame.gridSize = 10;
    snakeGame.tileCount = snakeGame.canvas.width / snakeGame.gridSize;

    resetSnake();
    
    // Event listeners para teclado
    document.addEventListener('keydown', changeSnakeDirection);
}

function resetSnake() {
    clearInterval(snakeGame.gameLoop);
    
    snakeGame.snake = [
        {x: 10, y: 10},
        {x: 9, y: 10},
        {x: 8, y: 10}
    ];
    
    snakeGame.dx = 1;
    snakeGame.dy = 0;
    snakeGame.score = 0;
    snakeGame.isGameOver = false;
    
    generateFood();
    updateScoreDisplay();
    hideGameOver();
}

function startSnake() {
    if (snakeGame.gameLoop) {
        return; // Ya está corriendo
    }
    
    if (snakeGame.isGameOver) {
        resetSnake();
    }
    
    snakeGame.gameLoop = setInterval(updateSnake, snakeGame.speed);
}

function pauseSnake() {
    clearInterval(snakeGame.gameLoop);
    snakeGame.gameLoop = null;
}

function updateSnake() {
    if (snakeGame.isGameOver) {
        clearInterval(snakeGame.gameLoop);
        snakeGame.gameLoop = null;
        return;
    }

    moveSnake();
    
    if (checkCollision()) {
        gameOver();
        return;
    }
    
    if (checkFoodCollision()) {
        snakeGame.score += 10;
        updateScoreDisplay();
        generateFood();
    } else {
        snakeGame.snake.pop();
    }
    
    drawSnake();
}

function moveSnake() {
    const head = {
        x: snakeGame.snake[0].x + snakeGame.dx,
        y: snakeGame.snake[0].y + snakeGame.dy
    };
    
    snakeGame.snake.unshift(head);
}

function changeSnakeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
    const keyPressed = event.keyCode;
    const goingUp = snakeGame.dy === -1;
    const goingDown = snakeGame.dy === 1;
    const goingRight = snakeGame.dx === 1;
    const goingLeft = snakeGame.dx === -1;
    
    if (keyPressed === LEFT_KEY && !goingRight) {
        snakeGame.dx = -1;
        snakeGame.dy = 0;
    }
    
    if (keyPressed === UP_KEY && !goingDown) {
        snakeGame.dx = 0;
        snakeGame.dy = -1;
    }
    
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        snakeGame.dx = 1;
        snakeGame.dy = 0;
    }
    
    if (keyPressed === DOWN_KEY && !goingUp) {
        snakeGame.dx = 0;
        snakeGame.dy = 1;
    }
}

function changeSnakeDirectionButton(direction) {
    const goingUp = snakeGame.dy === -1;
    const goingDown = snakeGame.dy === 1;
    const goingRight = snakeGame.dx === 1;
    const goingLeft = snakeGame.dx === -1;
    
    if (direction === 'left' && !goingRight) {
        snakeGame.dx = -1;
        snakeGame.dy = 0;
    }
    
    if (direction === 'up' && !goingDown) {
        snakeGame.dx = 0;
        snakeGame.dy = -1;
    }
    
    if (direction === 'right' && !goingLeft) {
        snakeGame.dx = 1;
        snakeGame.dy = 0;
    }
    
    if (direction === 'down' && !goingUp) {
        snakeGame.dx = 0;
        snakeGame.dy = 1;
    }
}

function checkCollision() {
    const head = snakeGame.snake[0];
    
    // Colisión con paredes
    if (head.x < 0 || head.x >= snakeGame.tileCount ||
        head.y < 0 || head.y >= (snakeGame.canvas.height / snakeGame.gridSize)) {
        return true;
    }
    
    // Colisión consigo misma
    for (let i = 1; i < snakeGame.snake.length; i++) {
        if (head.x === snakeGame.snake[i].x && head.y === snakeGame.snake[i].y) {
            return true;
        }
    }
    
    return false;
}

function checkFoodCollision() {
    const head = snakeGame.snake[0];
    return head.x === snakeGame.food.x && head.y === snakeGame.food.y;
}

function generateFood() {
    snakeGame.food = {
        x: Math.floor(Math.random() * snakeGame.tileCount),
        y: Math.floor(Math.random() * (snakeGame.canvas.height / snakeGame.gridSize))
    };
    
    // Asegurar que la comida no aparece sobre la serpiente
    for (let segment of snakeGame.snake) {
        if (segment.x === snakeGame.food.x && segment.y === snakeGame.food.y) {
            generateFood();
            return;
        }
    }
}

function drawSnake() {
    // Limpiar canvas
    snakeGame.ctx.fillStyle = '#9db4a0';
    snakeGame.ctx.fillRect(0, 0, snakeGame.canvas.width, snakeGame.canvas.height);
    
    // Dibujar la serpiente
    snakeGame.ctx.fillStyle = '#000';
    snakeGame.snake.forEach((segment, index) => {
        if (index === 0) {
            // Cabeza un poco más oscura
            snakeGame.ctx.fillStyle = '#000';
        } else {
            snakeGame.ctx.fillStyle = '#1a1a1a';
        }
        snakeGame.ctx.fillRect(
            segment.x * snakeGame.gridSize,
            segment.y * snakeGame.gridSize,
            snakeGame.gridSize - 1,
            snakeGame.gridSize - 1
        );
    });
    
    // Dibujar la comida
    snakeGame.ctx.fillStyle = '#000';
    snakeGame.ctx.fillRect(
        snakeGame.food.x * snakeGame.gridSize,
        snakeGame.food.y * snakeGame.gridSize,
        snakeGame.gridSize - 1,
        snakeGame.gridSize - 1
    );
    
    // Pequeño círculo en el centro para diferenciar la comida
    snakeGame.ctx.fillStyle = '#556b58';
    snakeGame.ctx.beginPath();
    snakeGame.ctx.arc(
        snakeGame.food.x * snakeGame.gridSize + snakeGame.gridSize / 2,
        snakeGame.food.y * snakeGame.gridSize + snakeGame.gridSize / 2,
        2,
        0,
        2 * Math.PI
    );
    snakeGame.ctx.fill();
}

function updateScoreDisplay() {
    const scoreElement = document.getElementById('snakeScore');
    if (scoreElement) {
        scoreElement.textContent = `Puntos: ${snakeGame.score}`;
    }
}

function gameOver() {
    snakeGame.isGameOver = true;
    clearInterval(snakeGame.gameLoop);
    snakeGame.gameLoop = null;
    showGameOver();
}

function showGameOver() {
    const gameOverScreen = document.getElementById('gameOverScreen');
    const finalScoreElement = document.getElementById('finalScore');
    
    if (gameOverScreen) {
        gameOverScreen.classList.add('show');
    }
    
    if (finalScoreElement) {
        finalScoreElement.textContent = snakeGame.score;
    }
}

function hideGameOver() {
    const gameOverScreen = document.getElementById('gameOverScreen');
    if (gameOverScreen) {
        gameOverScreen.classList.remove('show');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSnake, 100);
});
