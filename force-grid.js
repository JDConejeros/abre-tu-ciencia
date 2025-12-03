// Script para forzar el grid horizontal después de que se cargue la página
(function() {
  function forceTeamGrid() {
    const teamGrids = document.querySelectorAll('.team-grid');
    teamGrids.forEach(function(grid) {
      // Verificar si está en la página de equipo
      if (document.body.classList.contains('team-page') || 
          grid.closest('section#equipo-organizador') || 
          grid.closest('section.level2') ||
          window.location.pathname.includes('equipo')) {
        // Forzar display grid con estilos inline (máxima prioridad)
        grid.setAttribute('style', 
          'display: grid !important; ' +
          'grid-template-columns: repeat(3, 1fr) !important; ' +
          'gap: 2.25rem !important; ' +
          'align-items: start !important; ' +
          'justify-items: center !important; ' +
          'grid-auto-flow: row !important; ' +
          'overflow-x: visible !important; ' +
          'padding-bottom: 0.5rem !important; ' +
          'width: 100% !important; ' +
          'max-width: 100% !important; ' +
          'margin: 2rem 0 !important; ' +
          'flex-direction: unset !important; ' +
          'flex-wrap: unset !important; ' +
          'flex: unset !important; ' +
          'justify-content: unset !important;'
        );
        
        // Asegurar que los speaker-cards sean grid items
        const cards = grid.querySelectorAll('.speaker-card');
        cards.forEach(function(card) {
          card.setAttribute('style',
            'display: block !important; ' +
            'width: 100% !important; ' +
            'max-width: 100% !important; ' +
            'flex: unset !important; ' +
            'flex-basis: unset !important; ' +
            'flex-grow: unset !important; ' +
            'flex-shrink: unset !important; ' +
            'margin: 0 !important;'
          );
        });
      }
    });
  }
  
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceTeamGrid);
  } else {
    forceTeamGrid();
  }
  
  // También ejecutar después de delays para asegurar que todos los estilos estén aplicados
  setTimeout(forceTeamGrid, 100);
  setTimeout(forceTeamGrid, 300);
  setTimeout(forceTeamGrid, 500);
  
  // Observar cambios en el DOM por si Quarto agrega contenido dinámicamente
  if (window.MutationObserver) {
    const observer = new MutationObserver(function(mutations) {
      forceTeamGrid();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();

