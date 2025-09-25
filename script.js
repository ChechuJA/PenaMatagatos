// Smooth scrolling para la navegación
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Altura del header fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Resaltar sección activa en la navegación
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });

    // Animación de aparición para elementos cuando entran en vista
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll('.activity-card, .inventory-category, .tip, .gallery-item');
    animatedElements.forEach(el => observer.observe(el));

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        // File upload functionality
        const fileInput = document.getElementById('fileUpload');
        const selectedFilesContainer = document.getElementById('selectedFiles');
        let selectedFiles = [];

        if (fileInput) {
            fileInput.addEventListener('change', function(e) {
                const files = Array.from(e.target.files);
                
                files.forEach(file => {
                    // Check file size (5MB limit)
                    if (file.size > 5 * 1024 * 1024) {
                        utils.showNotification(`El archivo "${file.name}" es demasiado grande. Máximo 5MB.`, 'error');
                        return;
                    }
                    
                    // Add file to selected files if not already added
                    if (!selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
                        selectedFiles.push(file);
                        addFileToList(file);
                    }
                });
                
                // Clear the input so the same file can be selected again if removed and re-added
                fileInput.value = '';
            });
        }

        function addFileToList(file) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            const fileIcon = getFileIcon(file.name);
            const fileSize = formatFileSize(file.size);
            
            fileItem.innerHTML = `
                <div class="file-info">
                    <span class="file-icon">${fileIcon}</span>
                    <div class="file-details">
                        <span class="file-name">${file.name}</span>
                        <span class="file-size">${fileSize}</span>
                    </div>
                </div>
                <button type="button" class="remove-file" onclick="removeFile('${file.name}', ${file.size})">×</button>
            `;
            
            selectedFilesContainer.appendChild(fileItem);
        }

        window.removeFile = function(fileName, fileSize) {
            selectedFiles = selectedFiles.filter(f => !(f.name === fileName && f.size === fileSize));
            
            // Remove from DOM
            const fileItems = selectedFilesContainer.querySelectorAll('.file-item');
            fileItems.forEach(item => {
                const nameSpan = item.querySelector('.file-name');
                if (nameSpan && nameSpan.textContent === fileName) {
                    selectedFilesContainer.removeChild(item);
                }
            });
        };

        function getFileIcon(fileName) {
            const extension = fileName.split('.').pop().toLowerCase();
            const iconMap = {
                'pdf': '📄',
                'doc': '📝', 'docx': '📝',
                'xls': '📊', 'xlsx': '📊',
                'txt': '📄',
                'jpg': '🖼️', 'jpeg': '🖼️', 'png': '🖼️', 'gif': '🖼️'
            };
            return iconMap[extension] || '📎';
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData();
            const inputs = this.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                if (input.type !== 'file' && input.name) {
                    formData.append(input.name, input.value);
                }
            });
            
            // Add selected files
            selectedFiles.forEach(file => {
                formData.append('files[]', file);
            });
            
            // Show success message
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            if (selectedFiles.length > 0) {
                button.textContent = `¡Enviado con ${selectedFiles.length} archivo(s)! 🎉`;
                utils.showNotification(`Formulario enviado con ${selectedFiles.length} archivo(s) adjunto(s)`, 'success');
            } else {
                button.textContent = '¡Enviado! 🎉';
                utils.showNotification('Formulario enviado correctamente', 'success');
            }
            
            button.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                this.reset();
                selectedFiles = [];
                selectedFilesContainer.innerHTML = '';
            }, 3000);
        });
    }

    // Efectos adicionales de hover para las tarjetas
    const cards = document.querySelectorAll('.activity-card, .inventory-category');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contador animado para las estadísticas del hero
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    };

    // Activar contadores cuando la sección hero esté visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Solo animar números, no emojis
                    statNumbers.forEach(stat => {
                        const text = stat.textContent;
                        const number = parseInt(text.replace(/\D/g, ''));
                        if (!isNaN(number) && number > 0) {
                            animateCounter(stat, number);
                        }
                    });
                    heroObserver.unobserve(entry.target);
                }
            });
        });
        
        heroObserver.observe(heroSection);
    }

    // Efecto parallax ligero para el fondo del hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Toggle responsive menu (si se añade en el futuro)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileBtn = document.createElement('button');
                mobileBtn.classList.add('mobile-menu-btn');
                mobileBtn.innerHTML = '☰';
                mobileBtn.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: block;
                `;
                
                nav.appendChild(mobileBtn);
                
                mobileBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('mobile-active');
                });
            }
        }
    };

    // Inicializar menu móvil
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});

// Funciones de utilidad
const utils = {
    // Función para hacer scroll suave a cualquier elemento
    scrollToElement: (selector, offset = 80) => {
        const element = document.querySelector(selector);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },

    // Función para mostrar notificaciones temporales
    showNotification: (message, type = 'success', duration = 3000) => {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animar salida
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, duration);
    }
};

// Hacer las utilidades disponibles globalmente
window.penaUtils = utils;