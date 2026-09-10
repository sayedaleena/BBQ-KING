
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// Order Button Zoom Effect
document.querySelectorAll('.btn-order').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // pehle link ko roko
    let link = this.href;
    
    // Zoom animation
    this.style.transform = 'scale(0.85)';
    
    // 200ms baad WhatsApp kholo
    setTimeout(() => {
      window.location.href = link;
    }, 200);
  });
});



