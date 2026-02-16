// Neural Network Background
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-2';
canvas.style.opacity = '0.4';

let particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#3b82f6';
        ctx.fill();
    }
}

const init = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
            const dist = Math.sqrt((p.x - particles[j].x) ** 2 + (p.y - particles[j].y) ** 2);
            if (dist < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 150})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
};

window.addEventListener('resize', init);
init();
animate();

// Reveal animations on scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Magnetic effect for primary buttons
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// Metric flickering simulation
setInterval(() => {
    const metric = document.getElementById('metric-tokens');
    if (metric) {
        const base = 32.4;
        const variation = (Math.random() - 0.5) * 0.4;
        metric.innerText = (base + variation).toFixed(1) + '%';
    }
}, 2000);

// Hide loader on load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }
});

// Carousel Navigation
const certCarousel = document.getElementById('cert-carousel');
const prevBtn = document.getElementById('cert-prev');
const nextBtn = document.getElementById('cert-next');

if (certCarousel && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        const scrollAmount = certCarousel.offsetWidth;
        certCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const scrollAmount = certCarousel.offsetWidth;
        certCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
}

// Custom Log for professional touch
console.log('%c AI Portfolio v1.0 ', 'background: #3b82f6; color: #fff; padding: 2px 5px; border-radius: 3px;');
console.log('Crafted by Antigravity for high-stakes AI roles.');
