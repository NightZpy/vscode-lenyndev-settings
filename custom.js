(function() {
    // Espera a que el DOM esté listo
    const checkInterval = setInterval(() => {
        const editor = document.querySelector('.part.editor > .content');
        const breadcrumbs = document.querySelector('.title.breadcrumbs');
        
        if (editor && breadcrumbs) {
            clearInterval(checkInterval);
            
            // Aplica la configuración inicial
            if (breadcrumbs) {
                breadcrumbs.style.opacity = '0';
                breadcrumbs.style.maxHeight = '0';
                breadcrumbs.style.overflow = 'hidden';
                breadcrumbs.style.transition = 'opacity 0.3s ease-in-out, max-height 0.3s ease-in-out';
                breadcrumbs.style.pointerEvents = 'none';
            }
            
            // Crea una zona sensible en la parte superior
            const sensitiveZone = document.createElement('div');
            sensitiveZone.style.position = 'absolute';
            sensitiveZone.style.top = '0';
            sensitiveZone.style.left = '0';
            sensitiveZone.style.right = '0';
            sensitiveZone.style.height = '50px';
            sensitiveZone.style.zIndex = '99';
            sensitiveZone.style.cursor = 'default';
            
            // Inserta la zona sensible
            editor.style.position = 'relative';
            editor.insertBefore(sensitiveZone, editor.firstChild);
            
            // Detecta cuando el mouse está sobre la zona sensible
            sensitiveZone.addEventListener('mouseenter', () => {
                breadcrumbs.style.opacity = '1';
                breadcrumbs.style.maxHeight = '70px';
                breadcrumbs.style.pointerEvents = 'auto';
            });
            
            // Detecta cuando el mouse sale del breadcrumb
            document.addEventListener('mousemove', (e) => {
                const rect = breadcrumbs.getBoundingClientRect();
                const sensitiveRect = sensitiveZone.getBoundingClientRect();
                
                // Si el mouse está fuera del área sensible y fuera del breadcrumb
                if (
                    (e.clientY > rect.bottom || e.clientY < rect.top || 
                     e.clientX < rect.left || e.clientX > rect.right) &&
                    (e.clientY > sensitiveRect.bottom || e.clientY < sensitiveRect.top || 
                     e.clientX < sensitiveRect.left || e.clientX > sensitiveRect.right)
                ) {
                    breadcrumbs.style.opacity = '0';
                    breadcrumbs.style.maxHeight = '0';
                    breadcrumbs.style.pointerEvents = 'none';
                }
            });
            
            // También oculta cuando el editor pierde el foco
            window.addEventListener('blur', () => {
                breadcrumbs.style.opacity = '0';
                breadcrumbs.style.maxHeight = '0';
                breadcrumbs.style.pointerEvents = 'none';
            });
        }
    }, 1000);
})();