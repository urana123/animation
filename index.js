const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const particlesArray = [];


window.addEventListener('click', (event) => {
    for (let i = 0; i < 4; i++) {
        particlesArray[i].location(event.x, event.y)
    }
})

class Particle {
    constructor(text) {
        this.y = Math.random() * canvas.height;
        this.x = Math.random() * canvas.width;

        this.speedX = Math.random() * 10 - 1.5;
        this.speedY = Math.random() * 10 - 1.5;

        this.text = text;
        this.radius = 100
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 50) this.speedX = -1 * this.speedX
        if (this.x > canvas.width - 50) this.speedX = -1 * this.speedX
        if (this.y < 50) this.speedY = -1 * this.speedY
        if (this.y > canvas.height - 50) this.speedY = -1 * this.speedY
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'green'
        ctx.font = "100px Arial";
        ctx.fillText("Animation", canvas.width / 2 - 200, canvas.height / 2);

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();

        ctx.fillStyle = 'blue'
        ctx.font = "30px Arial";

        ctx.fillText(this.text, this.x - 45, this.y);
    }
    location(x, y) {
        if (x >= this.x - this.radius 
            && x <= this.x + this.radius 
            && y <= this.y + this.radius 
            && y >= this.y - this.radius
            && this.text === 'Tselmeg'
        ) {
            window.location = 'sanchir.html'
        }

        if (x >= this.x - this.radius 
            && x <= this.x + this.radius 
            && y <= this.y + this.radius 
            && y >= this.y - this.radius
            && this.text === 'Zolboot'
        ) {window.location = 'site.html'}

        if (x >= this.x - this.radius 
            && x <= this.x + this.radius 
            && y <= this.y + this.radius 
            && y >= this.y - this.radius
            && this.text === 'Sanchir'
        ) {window.location = 'sanchir.html' }


        if (x >= this.x - this.radius 
            && x <= this.x + this.radius 
            && y <= this.y + this.radius 
            && y >= this.y - this.radius
            && this.text === 'Dulguun'
        ) {window.location = 'duolingo.html' }
    }
}

class alim {
    constructor() {
        this.y = Math.random() * canvas.height;
        this.x = Math.random() * canvas.width;

        this.size = Math.random() * 5 + 1;

        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;


        if (this.x < 50) this.speedX = -1 * this.speedX
        if (this.x > canvas.width - 50) this.speedX = -1 * this.speedX
        if (this.y < 50) this.speedY = -1 * this.speedY
        if (this.y > canvas.height - 50) this.speedY = -1 * this.speedY
    }
    draw() {
        ctx.fillStyle = 'green'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
        return 'sd'
    }
}


init = () => {
    particlesArray.push(new Particle("Zolboot"))
    particlesArray.push(new Particle('Sanchir'))
    particlesArray.push(new Particle('Dulguun'))
    particlesArray.push(new Particle('Tselmeg'))

    for (let i = 0; i < 100; i++) {
        particlesArray.push(new alim())
    }
}

init()

const handleParticles = () => {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    requestAnimationFrame(animate)
}
animate()