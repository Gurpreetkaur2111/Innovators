document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

document.getElementById('hire-me').addEventListener('click', function() {
    alert('Thank you for your interest! I will get back to you soon.');
});