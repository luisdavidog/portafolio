document.addEventListener('DOMContentLoaded', () => {
    const contentSections = {
        'home': document.getElementById('home'),
        'experience': document.getElementById('experience'),
        'projects': document.getElementById('projects')
    };

    // Función para mostrar/ocultar secciones
    function showSection(sectionId) {
        // Ocultar todas las secciones
        Object.values(contentSections).forEach(section => {
            if (section) {
                section.style.display = 'none';
            }
        });

        // Mostrar la sección seleccionada
        if (contentSections[sectionId]) {
            contentSections[sectionId].style.display = 'block';
            // Scroll suave a la sección
            contentSections[sectionId].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Manejar clicks en los enlaces de navegación
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').replace('#', '');
            showSection(sectionId);
            
            // Actualizar URL sin recargar la página
            history.pushState({}, '', `#${sectionId}`);
        });
    });

    // Manejar la navegación con el botón atrás/adelante del navegador
    window.addEventListener('popstate', () => {
        const sectionId = window.location.hash.replace('#', '') || 'home';
        showSection(sectionId);
    });

    // Mostrar sección inicial basada en el hash de la URL
    const initialSection = window.location.hash.replace('#', '') || 'home';
    showSection(initialSection);
});
