let ball;
let score = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ball = new Ball();
}

function draw() {
    background(0);
    ball.display();
}

function mousePressed() {
    if (dist(mouseX, mouseY, ball.x, ball.y) < ball.size / 2) {
        score++;
        document.getElementById('score').textContent = 'Pontuação: ' + score;
        ball.explode();
        ball = new Ball(); // Cria uma nova bola após a explosão
    }
}

class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = 100; // Tamanho da bola
        this.color = 'yellow';
    }

    display() {
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.size);
    }

    explode() {
        for (let i = 0; i < 20; i++) {
            let p = new Particle(this.x, this.y);
            p.display();
        }
    }
}

class Particle {
    constructor(x, y) {
        this.x = x + random(-50, 50);
        this.y = y + random(-50, 50);
        this.size = random(5, 10);
        this.color = color(random(255), random(255), random(255));
    }

    display() {
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}