const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight
canvas.width = window.innerWidth
const particlesArray = [];

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
})

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
    // draeCircle()
})

class Particle {
    constructor() {
        // this.x = mouse.x
        // this.y = mouse.y

        this.y = Math.random() * canvas.height;
        this.x = Math.random() * canvas.width;

        this.size = Math.random() * 5 + 1;

        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.3) {
            this.size -= 0.1
        }
    }
    draw() {
        ctx.fillStyle = 'green'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
    }
}

init = () => {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle())
    }
}

const handleParticles = () => {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1)
            i--
        }
    }
}

init()

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    console.log('alim');
    requestAnimationFrame(animate)
}
// animate()