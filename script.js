function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');

    // Cacher toutes les sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    const selected = document.getElementById(sectionId);
    if (selected) {
        selected.classList.add('active');
    }
}
function showSection(sectionId) {
  // Masquer toutes les sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Afficher seulement la section cliquée
  document.getElementById(sectionId).classList.add('active');
}
