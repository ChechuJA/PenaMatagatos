/* ============================================
   SISTEMA DE PESTAÑAS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Inicializando sistema de pestañas...');
    
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    console.log('📑 Pestañas encontradas:', tabs.length);
    console.log('📄 Contenidos encontrados:', tabContents.length);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            console.log('🖱️ Click en pestaña:', this.dataset.tab);
            
            // Remover clase active de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            
            // Añadir clase active a la pestaña clickeada
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = this.dataset.tab;
            const targetContent = document.getElementById(tabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('✅ Mostrando contenido de:', tabId);
            } else {
                console.error('❌ No se encontró elemento con ID:', tabId);
            }
        });
    });
    
    console.log('✅ Sistema de pestañas inicializado');
});
