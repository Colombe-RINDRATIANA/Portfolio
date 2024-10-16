document.addEventListener('DOMContentLoaded', function() {
    // Animation de l'opacité des sections au chargement
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 2s ease-out';
        setTimeout(() => {
            section.style.opacity = '1';
        }, 500);
    });
});

// Fonction pour basculer l'affichage des détails
function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        details.style.maxHeight = details.scrollHeight + "px"; // Ajuster la hauteur max pour la transition
    } else {
        details.style.display = "none";
        details.style.maxHeight = "0px"; // Réinitialiser la hauteur max
    }
}

// Animation pour les textes à l'entrée dans le viewport
const aboutTexts = document.querySelectorAll('.about-description');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInText 3s ease-in-out';
    }
  });
});

aboutTexts.forEach(text => {
  observer.observe(text);
});

// Effet de mouvement des textes avec le mouvement de la souris
const textElements = document.querySelectorAll('.about-description');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  textElements.forEach((text) => {
    const movementX = (x - 0.5) * 30; // Ajuster pour plus ou moins de mouvement
    const movementY = (y - 0.5) * 30; // Ajuster pour plus ou moins de mouvement
    text.style.transform = `translate(${movementX}px, ${movementY}px)`;
  });
});

// Animation des sections lors du défilement
const scrollSections = document.querySelectorAll('.section');

const observerScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

scrollSections.forEach(section => {
  observerScroll.observe(section);
});
function toggleDetails(id) {
  var details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
  } else {
      details.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const diplomaContainer = document.getElementById('diploma');
    
    // Ajouter la classe de pulsation pour l'animation
    diplomaContainer.classList.add('pulse');
});
