document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const question = document.querySelector('.question');

    // Make the "No" button run away from cursor
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Handle "Yes" button click
    yesBtn.addEventListener('click', () => {
        question.textContent = "Yay! Happy Valentine's Day! 💖";
        question.style.color = '#ff1493';
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
        
        // Add some celebration effects
        const container = document.querySelector('.container');
        container.style.animation = 'celebrate 1s ease-in-out';
        
        // Create floating hearts
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Add celebration animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrate {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 