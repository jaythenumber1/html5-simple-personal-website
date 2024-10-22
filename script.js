// Smooth scroll when clicking on nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Loading message customization
window.onload = function() {
    document.body.className = '';
    const loadingMessage = document.createElement('div');
    loadingMessage.innerText = "Welcome to NPR DevOps!";
    loadingMessage.style.position = 'fixed';
    loadingMessage.style.top = '50%';
    loadingMessage.style.left = '50%';
    loadingMessage.style.transform = 'translate(-50%, -50%)';
    loadingMessage.style.background = 'rgba(0, 0, 0, 0.7)';
    loadingMessage.style.padding = '20px';
    loadingMessage.style.borderRadius = '10px';
    loadingMessage.style.color = '#fff';
    loadingMessage.style.zIndex = '1000';
    loadingMessage.style.fontSize = '1.5em';
    loadingMessage.style.fontFamily = 'Roboto, sans-serif';
    document.body.appendChild(loadingMessage);

    setTimeout(() => {
        loadingMessage.style.display = 'none';
    }, 3000); // Hides the message after 3 seconds
};
