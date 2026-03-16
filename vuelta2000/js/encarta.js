/* ============================================
   ENCARTA 2000 - Navegación de artículos
   ============================================ */

// Función para mostrar artículos (llamada desde HTML)
function showEncartaArticle(articleId, element) {
    console.log('📖 Mostrando artículo:', articleId);
    
    // Ocultar todos los artículos
    document.querySelectorAll('.article-content').forEach(article => {
        article.style.display = 'none';
    });
    
    // Mostrar el artículo seleccionado
    const selectedArticle = document.getElementById('article-' + articleId);
    if (selectedArticle) {
        selectedArticle.style.display = 'block';
        console.log('✅ Artículo mostrado:', articleId);
    } else {
        console.error('❌ No se encontró artículo con ID:', 'article-' + articleId);
    }
    
    // Actualizar menú
    document.querySelectorAll('.encarta-menu-item').forEach(item => {
        item.classList.remove('active');
    });
    if (element) {
        element.classList.add('active');
    }
    
    // Scroll al inicio del artículo
    const articleContainer = document.querySelector('.encarta-article');
    if (articleContainer) {
        articleContainer.scrollTop = 0;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 Encarta 2000 inicializada');
});
