document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero .content');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(40px)';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s, transform 1s';
            hero.style.opacity = 1;
            hero.style.transform = 'translateY(0)';
        }, 200);
    }
});

const cards = document.querySelectorAll('.skills-cards .card, .experience-cards .card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.2s';
        card.style.transform = 'translateY(-8px) scale(1.04)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

