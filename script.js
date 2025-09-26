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

// Gatito Chat Bot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const gatitoButton = document.getElementById('gatitoButton');
    const gatitoChat = document.getElementById('gatitoChat');
    const gatitoClose = document.getElementById('gatitoClose');
    const gatitoSend = document.getElementById('gatitoSend');
    const gatitoInput = document.getElementById('gatitoInput');
    const gatitoMessages = document.getElementById('gatitoMessages');
    const quickQuestions = document.querySelectorAll('.quick-question');

    // Base de conocimiento de Gatito
    const gatitoKnowledge = {
        horarios: {
            response: "📅 Los horarios sugeridos son:\n\n🌅 Mañana (10:00-12:00): Actividades energéticas y deportivas\n🌞 Mediodía (12:00-15:00): Talleres creativos bajo sombra\n🌅 Tarde (17:00-19:00): Juegos familiares y competiciones\n🌙 Noche (21:00-23:00): Espectáculos y actividades relajadas"
        },
        ubicacion: {
            response: "📍 La Peña Matagatos se celebra en un pueblo pequeño de Cuenca, España. Durante las fiestas, el pueblo pasa de 300 habitantes a más de 900 personas. ¡Es toda una experiencia!"
        },
        contacto: {
            response: "📧 Puedes contactar con nosotros:\n\n• Email general: info@penamatagatos.es\n• Documentos: documentos@penamatagatos.es\n• WhatsApp: +34 123 456 789\n\n¡Estaremos encantados de conocerte!"
        },
        actividades: {
            response: "🎯 Tenemos actividades para todas las edades:\n\n👶 Peques (0-3): Castillos mini, pintura, juguetes blandos\n🧒 Exploradores (4-7): Carreras de sacos, búsqueda del tesoro\n⚡ Aventureros (8-13): Olimpiadas, escape room, experimentos\n👨‍👩‍👧‍👦 Familiares: Concursos de cocina, fútbol, torneos"
        },
        documentos: {
            response: "📎 Para subir documentos:\n\n1. Ve al formulario de contacto\n2. Busca la sección 'Compartir archivos'\n3. Puedes subir: inventarios, cuentas, fotos, propuestas\n4. Los procesamos y añadimos a nuestro sistema\n5. Si es útil, lo compartimos con toda la peña"
        },
        niños: {
            response: "👶 ¡Los niños son el alma de nuestra peña!\n\nTenemos actividades por edades:\n• 0-3 años: Espacios seguros y suaves\n• 4-7 años: Aventuras y exploración\n• 8-13 años: Desafíos y competiciones\n\n¡Y también actividades familiares donde adultos y niños jugamos juntos!"
        }
    };

    // Mostrar/ocultar chat
    gatitoButton.addEventListener('click', function() {
        gatitoChat.classList.add('active');
        gatitoButton.style.display = 'none';
    });

    gatitoClose.addEventListener('click', function() {
        gatitoChat.classList.remove('active');
        gatitoButton.style.display = 'flex';
    });

    // Preguntas rápidas
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const questionType = this.dataset.question;
            const questionText = this.textContent;
            
            addUserMessage(questionText);
            
            setTimeout(() => {
                if (gatitoKnowledge[questionType]) {
                    addBotMessage(gatitoKnowledge[questionType].response);
                } else {
                    addBotMessage("Lo siento, no tengo información específica sobre eso. ¿Podrías contactar directamente con info@penamatagatos.es?");
                }
            }, 500);
        });
    });

    // Enviar mensaje personalizado
    function sendMessage() {
        const message = gatitoInput.value.trim();
        if (message === '') return;

        addUserMessage(message);
        gatitoInput.value = '';

        setTimeout(() => {
            const response = generateResponse(message);
            addBotMessage(response);
        }, 500);
    }

    gatitoSend.addEventListener('click', sendMessage);
    gatitoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'gatito-message gatito-user-message';
        messageDiv.innerHTML = `
            <span class="message-avatar">👤</span>
            <div class="message-content">${message}</div>
        `;
        gatitoMessages.appendChild(messageDiv);
        gatitoMessages.scrollTop = gatitoMessages.scrollHeight;
    }

    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'gatito-message gatito-bot-message';
        messageDiv.innerHTML = `
            <span class="message-avatar">🐱</span>
            <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
        `;
        gatitoMessages.appendChild(messageDiv);
        gatitoMessages.scrollTop = gatitoMessages.scrollHeight;
    }

    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Palabras clave para diferentes respuestas
        if (lowerMessage.includes('hora') || lowerMessage.includes('cuando')) {
            return gatitoKnowledge.horarios.response;
        }
        
        if (lowerMessage.includes('donde') || lowerMessage.includes('ubicac') || lowerMessage.includes('lugar')) {
            return gatitoKnowledge.ubicacion.response;
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('teléfon') || lowerMessage.includes('whatsapp')) {
            return gatitoKnowledge.contacto.response;
        }
        
        if (lowerMessage.includes('actividad') || lowerMessage.includes('juego') || lowerMessage.includes('hacer')) {
            return gatitoKnowledge.actividades.response;
        }
        
        if (lowerMessage.includes('document') || lowerMessage.includes('subir') || lowerMessage.includes('archivo')) {
            return gatitoKnowledge.documentos.response;
        }
        
        if (lowerMessage.includes('niño') || lowerMessage.includes('niña') || lowerMessage.includes('bebé') || lowerMessage.includes('pequeño')) {
            return gatitoKnowledge.niños.response;
        }
        
        if (lowerMessage.includes('precio') || lowerMessage.includes('coste') || lowerMessage.includes('dinero')) {
            return "💰 La participación en la peña es gratuita, solo compartimos los gastos de material y comida entre todos. ¡Lo importante es la diversión y el buen ambiente!";
        }
        
        if (lowerMessage.includes('unir') || lowerMessage.includes('apunt') || lowerMessage.includes('inscrib')) {
            return "🎉 ¡Genial que quieras unirte! Puedes rellenar el formulario de contacto en la página o escribir directamente a info@penamatagatos.es. ¡Te esperamos!";
        }
        
        if (lowerMessage.includes('comida') || lowerMessage.includes('comer') || lowerMessage.includes('paella')) {
            return "🥘 ¡La comida es uno de nuestros puntos fuertes! Preparamos paellas gigantes, barbacoas y platos tradicionales todos juntos. Es parte de la diversión y la tradición de la peña.";
        }
        
        // Respuesta por defecto
        return `¡Hola! 🐱 Soy Gatito y estoy aquí para ayudarte. Puedes preguntarme sobre:
        
        📅 Horarios de actividades
        📍 Ubicación de la peña  
        📧 Información de contacto
        🎯 Actividades y juegos
        📎 Cómo subir documentos
        👶 Actividades para niños
        
        O si prefieres, usa los botones de arriba para preguntas rápidas. ¡Miau!`;
    }
});