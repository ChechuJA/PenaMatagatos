// Programa de Fiestas 2026 (fuente: Fiestas/2026/ProgramaFiestas2026, ver fiestas-2026-programa.json)
const programaFiestas2026 = {
    evento: "Fiestas Patronales de Cañaveras en honor a Nuestra Señora del Pinar y Semana Cultural",
    fechas: "del 28 de agosto al 7 de septiembre de 2026",
    dias: [
        {
            corto: "Vie 28", mes: "agosto", titulo: "Viernes 28 de agosto",
            eventos: [
                { hora: "20:00", texto: "Rosario en la Ermita de Ntra. Sra. del Pinar." },
                { hora: "20:30", texto: "Salida en procesión de la virgen desde la Ermita." },
                { hora: "21:00", texto: "El Sr. Cura Párroco recibe a la Virgen en el cementerio (responso) y procesión hasta la Iglesia con Bailes y Paloteos del Grupo de Danzas. Acompaña la Banda \"Quinteto de metales Harem Brass\". Al finalizar, novena en la Iglesia." },
                { hora: "22:30", texto: "Inicio de la \"Fiesta del Hermano\" en el Atrio de la Iglesia: Barbacoa Solidaria (ticket 10€: chorizo, panceta, butifarra, morcilla y lomo), Bingo musical y Verbena popular." }
            ]
        },
        {
            corto: "Sáb 29", mes: "agosto", titulo: "Sábado 29 de agosto",
            nota: "Del sábado 29 de agosto al viernes 4 de septiembre, a las 20:00 h.",
            eventos: [
                { hora: "17:00-20:00", texto: "Besamanos Extraordinario a la Virgen del Pinar. A continuación, Novenario a la Virgen del Pinar." },
                { hora: "22:30", texto: "Homenaje musical (concierto del \"Alcarria String Quartet\") por el 825 Aniversario, cortesía de la Fundación Globalcaja, en la Iglesia San Martín Obispo." }
            ]
        },
        {
            corto: "Dom 30", mes: "agosto", titulo: "Domingo 30 de agosto",
            eventos: [
                { hora: "19:30", texto: "Santa Misa en la Parroquia San Martín Obispo de Tours en recuerdo de los difuntos Dña. Mª Jesús Pérez y D. Bartolomé Navarrete." },
                { hora: "20:00", texto: "Novenario a la Virgen del Pinar." }
            ]
        },
        {
            corto: "Lun 31", mes: "agosto", titulo: "Lunes 31 de agosto",
            nota: "Banderines a cargo de la peña la Bota.",
            eventos: [
                { hora: "10:00", texto: "Pádel infantil hasta 12 años (apuntarse antes del domingo con la Comisión de Fiestas)." },
                { hora: "18:30", texto: "Tarde de juegos de mesa (parchís, oca, ajedrez, monopoly, trivial...) en la Plaza de España. Llevar vuestros juegos favoritos.", organiza: "BB+ y Mañaneo" }
            ]
        },
        {
            corto: "Mar 1", mes: "septiembre", titulo: "Martes 1 de septiembre",
            eventos: [
                { hora: "11:00", texto: "Encierro infantil desde la Plaza de España. Vestíos al estilo San Fermín: de blanco y con pañuelo rojo (pañuelos a 2€ en el Ayuntamiento).", organiza: "Vigilantes" },
                { hora: "18:30", texto: "Gymkana infantil organizada por las peñas de Cañaveras en el frontón.", organiza: "Guayabita y Panzalagos (lista de materiales)" }
            ]
        },
        {
            corto: "Mié 2", mes: "septiembre", titulo: "Miércoles 2 de septiembre",
            eventos: [
                { hora: "11:00-12:00", texto: "Pintura infantil. En el atrio.", organiza: "Matagatos y \"Y tú de quién eres\" (lista de materiales)" },
                { hora: "18:30", texto: "Visita a los enfermos con la \"talla infantil de la Virgen del Pinar\" y el estandarte." },
                { hora: "19:30", texto: "Cine infantil en el Centro Joven.", organiza: "Colocón y Mortimers (película y proyector)" },
                { hora: "22:30", texto: "Espectáculo de Canción española con Yesvi Manjavacas & CIA en la Plaza de España (finalista de \"A tu vera\" en Castilla-La Mancha TV)." }
            ]
        },
        {
            corto: "Jue 3", mes: "septiembre", titulo: "Jueves 3 de septiembre",
            eventos: [
                { hora: "11:00-14:00 y 16:00-18:00", texto: "Rampa acuática y castillos hinchables en la Cuesta Garcibela." },
                { hora: "16:30", texto: "Campeonato de Mus en la plaza.", organiza: "Vigilantes" },
                { hora: "17:30", texto: "Desfile desde la Plaza de España al campo de fútbol para la 8ª Holi run de Cañaveras (acudir con camiseta blanca). Al finalizar, bingo musical.", organiza: "BBT2" },
                { hora: "23:00", texto: "Verbena amenizada por DAIQUIRY SHOW. En el descanso (aprox. 00:30 h) Bingo y Toro de fuego sin carretillas en la Plaza de España. Al finalizar, DJ TORRES." }
            ]
        },
        {
            corto: "Vie 4", mes: "septiembre", titulo: "Viernes 4 de septiembre",
            eventos: [
                { hora: "12:30", texto: "Desfile de disfraces para niños, desde la Plaza de España." },
                { hora: "16:30", texto: "Campeonato de Tute en Bar Los Canos.", organiza: "Comisión" },
                { hora: "19:30", texto: "Pasacalles con la charanga Los Trota de Las Mesas (Cuenca) y concentración de peñas para recoger a la Reina en las Cuatro Esquinas.", organiza: "Coordinación del desfile: Anónimos y La Peña" },
                { hora: "20:00", texto: "Novena en honor a Ntra. Sra. del Pinar." },
                { hora: "21:00", texto: "Desfile de la Reina de las Fiestas 2026 y su corte de honor desde Santa Águeda. Pregón (Beatriz Chacón Ruiz y Salvador Perales Morillas), Coronación de la Reina 2026 Almudena Blanco Chacón y entrega de premios a las peñas (1º Jamón, 2º Ibéricos, 3º Queso)." },
                { hora: "01:00", texto: "GRUPO MARENGO hasta altas horas. En el descanso (aprox. 03:00 h) Bingo." }
            ]
        },
        {
            corto: "Sáb 5", mes: "septiembre", titulo: "Sábado 5 de septiembre",
            eventos: [
                { hora: "11:00-14:00 y 17:00-19:00", texto: "Parque Infantil en el frontón. Sobre las 13:00 h, Fiesta de la espuma en la pista de Fútbol Sala (no cubierta)." },
                { hora: "18:00", texto: "En la Plaza de España, baile a cargo del grupo flamenco CARAMELO." },
                { hora: "22:20", texto: "Ofrenda floral a la Virgen y ofrecimiento de los niños nacidos desde 2023 (apuntarse en la Hermandad hasta el 5 de septiembre)." },
                { hora: "22:30", texto: "Novena y Salve en honor a Ntra. Sra. del Pinar. A la salida, Cuadro de la Virgen con pólvora en la puerta del Centro de Salud." },
                { hora: "00:00", texto: "Castillo de fuegos artificiales en el campo de fútbol a cargo de la pirotécnica Vulcano." },
                { hora: "01:00", texto: "ORQUESTA CHEROKEE hasta altas horas. En el descanso (aprox. 03:00 h) BINGO DE 1.000€." }
            ]
        },
        {
            corto: "Dom 6", mes: "septiembre", titulo: "Domingo 6 de septiembre",
            eventos: [
                { hora: "08:00", texto: "Despedida de la Virgen y subida a hombros hasta su ermita, con traca de despedida en la Báscula." },
                { hora: "11:30", texto: "Pasacalles con los Dulzaineros Pipirigay." },
                { hora: "13:00", texto: "Solemne Misa en la ermita (celebra el párroco Juan Carlos Hernández Bula) y ofrenda con trajes regionales. A continuación, procesión con Dulzaineros Pipirigay, bailes y paloteos." },
                { hora: "21:30", texto: "Sesión de baile con SANTY Y SUS TECLADOS. Cena entre Amigos y Peñas en la Plaza (lleva tu cena)." },
                { hora: "00:00", texto: "Continuación de la verbena con SANTY Y SUS TECLADOS. En el descanso (aprox. 01:30 h) BINGO y dos Toros de fuego sin carretillas en la Plaza de España." }
            ]
        },
        {
            corto: "Lun 7", mes: "septiembre", titulo: "Lunes 7 de septiembre",
            eventos: [
                { hora: "11:00", texto: "Misa en la parroquia por los hermanos difuntos de la Hermandad de Ntra. Sra. del Pinar." },
                { hora: "11:30-12:00", texto: "Reparto de la carne y Comida de Hermandad en el sitio de costumbre (no se reparte carne después de las 12 h)." },
                { hora: "15:00", texto: "Muestra de las sartenes para el Concurso de calderetas.", organiza: "Cotolengo" },
                { hora: "17:00", texto: "Juegos Populares en el Campo de Fútbol (barra castellana, billa y petanca).", organiza: "Roneo" },
                { hora: "21:30", texto: "Entrega de premios (cartas, calderetas y juegos populares) y Chocolatada de la Hermandad. Al finalizar, Traca Fin de Fiesta." }
            ]
        }
    ]
};

// Render del Programa de Fiestas 2026 en el inicio
document.addEventListener('DOMContentLoaded', function() {
    const daysNav = document.getElementById('programaDays');
    const timeline = document.getElementById('programaTimeline');
    if (!daysNav || !timeline) return;

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function renderDay(index) {
        const dia = programaFiestas2026.dias[index];
        const notaHtml = dia.nota ? `<p class="programa-card-note">${escapeHtml(dia.nota)}</p>` : '';
        const eventosHtml = dia.eventos.map(ev => `
            <div class="programa-event">
                <span class="programa-time">${escapeHtml(ev.hora)}</span>
                <span class="programa-text">${escapeHtml(ev.texto)}${ev.organiza ? `<span class="programa-organiza">🎪 Organiza: ${escapeHtml(ev.organiza)}</span>` : ''}</span>
            </div>
        `).join('');
        timeline.innerHTML = `
            <div class="programa-card">
                <h3>📅 ${escapeHtml(dia.titulo)}</h3>
                ${notaHtml}
                ${eventosHtml}
            </div>
        `;
        daysNav.querySelectorAll('.programa-day-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    programaFiestas2026.dias.forEach((dia, i) => {
        const btn = document.createElement('button');
        btn.className = 'programa-day-btn';
        btn.innerHTML = `${escapeHtml(dia.corto)}<small>${escapeHtml(dia.mes)}</small>`;
        btn.addEventListener('click', () => renderDay(i));
        daysNav.appendChild(btn);
    });

    renderDay(0);
});

// Ampliar automáticamente las letras al entrar en el apartado Programa
document.addEventListener('DOMContentLoaded', function() {
    const programaSection = document.getElementById('programa');
    if (!programaSection) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                programaSection.classList.toggle('zoomed', entry.isIntersecting);
            });
        }, { threshold: 0.25 });
        observer.observe(programaSection);
    } else {
        // Fallback: si se llega con el enlace #programa
        if (window.location.hash === '#programa') programaSection.classList.add('zoomed');
    }
});

// Smooth scrolling para la navegación
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Solo aplicar scroll suave a enlaces internos (que empiezan con #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Altura del header fijo
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Los enlaces externos (como vuelta2000.html) funcionarán normalmente
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

    // Filtro de inventario por categoría
    const filterButtons = document.querySelectorAll('.filter-btn');
    const inventoryRows = document.querySelectorAll('.inventory-row');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));

            inventoryRows.forEach(row => {
                const matches = selectedFilter === 'all' || row.dataset.category === selectedFilter;
                row.style.display = matches ? '' : 'none';
            });
        });
    });

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

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Enviando... ⏳';
            button.disabled = true;
            
            try {
                // Upload files if any are selected
                let uploadResult = null;
                if (selectedFiles.length > 0) {
                    uploadResult = await uploadFiles(selectedFiles);
                }
                
                // Collect other form data for future processing
                const formData = new FormData();
                const inputs = this.querySelectorAll('input, select, textarea');
                
                inputs.forEach(input => {
                    if (input.type !== 'file' && input.name) {
                        formData.append(input.name, input.value);
                    }
                });
                
                // Show success message
                if (uploadResult && uploadResult.success) {
                    const uploadCount = uploadResult.uploadedFiles.length;
                    button.textContent = `¡Enviado con ${uploadCount} archivo(s) subido(s)! 🎉`;
                    
                    let message = `Formulario enviado correctamente. ${uploadCount} archivo(s) subido(s) exitosamente.`;
                    if (uploadResult.errors && uploadResult.errors.length > 0) {
                        message += ` Algunos archivos tuvieron errores: ${uploadResult.errors.join(', ')}`;
                    }
                    utils.showNotification(message, 'success');
                } else if (selectedFiles.length > 0 && (!uploadResult || !uploadResult.success)) {
                    // File upload failed
                    button.textContent = 'Error al subir archivos ❌';
                    const errorMsg = uploadResult ? uploadResult.message : 'Error desconocido al subir archivos';
                    utils.showNotification(`Error: ${errorMsg}`, 'error');
                } else {
                    // No files, just form submission
                    button.textContent = '¡Enviado! 🎉';
                    utils.showNotification('Formulario enviado correctamente', 'success');
                }
                
                button.style.background = uploadResult && uploadResult.success ? 
                    'linear-gradient(135deg, #27ae60, #2ecc71)' : 
                    'linear-gradient(135deg, #e74c3c, #c0392b)';
                
            } catch (error) {
                console.error('Form submission error:', error);
                button.textContent = 'Error al enviar ❌';
                utils.showNotification('Error al procesar el formulario', 'error');
                button.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            }
            
            // Reset form after delay
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
                this.reset();
                selectedFiles = [];
                selectedFilesContainer.innerHTML = '';
            }, 3000);
        });
        
        // Function to upload files to server
        async function uploadFiles(files) {
            const formData = new FormData();
            
            files.forEach(file => {
                formData.append('files[]', file);
            });
            
            try {
                const response = await fetch('upload.php', {
                    method: 'POST',
                    body: formData
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                return result;
                
            } catch (error) {
                console.error('Upload error:', error);
                return {
                    success: false,
                    message: 'Error de conexión al subir archivos',
                    errors: [error.message]
                };
            }
        }
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
    const quickQuestionsSection = document.querySelector('.gatito-quick-questions');
    const toggleQuestionsBtn = document.getElementById('toggleQuickQuestions');

    // Variables for mobile behavior
    let isMobile = window.innerWidth <= 768;
    let hasInteracted = false;

    // Texto del programa de fiestas 2026 para Gatito (misma fuente que la sección de inicio)
    const programaTextoCompleto = (function() {
        const cabecera = `📅 Programa de Fiestas 2026\n${programaFiestas2026.evento} (${programaFiestas2026.fechas}).\n`;
        const cuerpo = programaFiestas2026.dias.map(dia => {
            const notaTxt = dia.nota ? `\n(${dia.nota})` : '';
            const eventos = dia.eventos.map(ev => `• ${ev.hora} — ${ev.texto}${ev.organiza ? ` [Organiza: ${ev.organiza}]` : ''}`).join('\n');
            return `\n📆 ${dia.titulo}${notaTxt}\n${eventos}`;
        }).join('\n');
        return cabecera + cuerpo;
    })();

    function programaDelDia(lowerMessage) {
        const dia = programaFiestas2026.dias.find(d => {
            const t = d.titulo.toLowerCase();
            const partes = t.split(' ');
            const diaSemana = partes[0];
            const numero = partes[1];
            const mes = partes[3];
            return lowerMessage.includes(`${diaSemana} ${numero}`) ||
                   lowerMessage.includes(`${numero} de ${mes}`) ||
                   (lowerMessage.includes(diaSemana) && lowerMessage.includes(numero));
        });
        if (!dia) return null;
        const notaTxt = dia.nota ? `\n(${dia.nota})` : '';
        const eventos = dia.eventos.map(ev => `• ${ev.hora} — ${ev.texto}${ev.organiza ? ` [Organiza: ${ev.organiza}]` : ''}`).join('\n');
        return `📆 ${dia.titulo}${notaTxt}\n${eventos}`;
    }

    // Texto del programa de un día por su índice
    function programaPorIndice(index) {
        const dia = programaFiestas2026.dias[index];
        if (!dia) return null;
        const notaTxt = dia.nota ? `\n(${dia.nota})` : '';
        const eventos = dia.eventos.map(ev => `• ${ev.hora} — ${ev.texto}${ev.organiza ? ` [Organiza: ${ev.organiza}]` : ''}`).join('\n');
        return `📆 ${dia.titulo}${notaTxt}\n${eventos}`;
    }

    // Mensaje de Gatito con botones para elegir el día del programa
    function addBotDayPicker() {
        const escapeChip = str => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'gatito-message gatito-bot-message';
        const chips = programaFiestas2026.dias.map((dia, i) =>
            `<button type="button" class="gatito-day-chip" data-day="${i}">${escapeChip(dia.corto)}<small>${escapeChip(dia.mes)}</small></button>`
        ).join('');
        messageDiv.innerHTML = `
            <span class="message-avatar">🐱</span>
            <div class="message-content">📅 ¿De qué día quieres ver el programa? Elige uno:<div class="gatito-day-chips">${chips}</div></div>
        `;
        gatitoMessages.appendChild(messageDiv);
        messageDiv.querySelectorAll('.gatito-day-chip').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.dataset.day, 10);
                const dia = programaFiestas2026.dias[idx];
                addUserMessage(`${dia.corto} (${dia.mes})`);
                setTimeout(() => addBotMessage(programaPorIndice(idx)), 300);
            });
        });
        gatitoMessages.scrollTop = gatitoMessages.scrollHeight;
    }

    // Resumen de qué peña organiza cada actividad (cruce con el Word de tareas de peñas)
    const organizadoresTexto = (function() {
        const lineas = [];
        programaFiestas2026.dias.forEach(dia => {
            dia.eventos.forEach(ev => {
                if (ev.organiza) {
                    const actividad = ev.texto.split(/[.(]/)[0].trim();
                    lineas.push(`• ${dia.titulo} · ${ev.hora} — ${actividad}: ${ev.organiza}`);
                }
            });
            if (dia.nota) lineas.push(`• ${dia.titulo} — ${dia.nota}`);
        });
        return "🎪 Reparto de tareas por peñas (Fiestas 2026):\n\n" + lineas.join('\n');
    })();

    // Base de conocimiento de Gatito (expandida)
    const gatitoKnowledge = {
        horarios: {
            response: programaTextoCompleto
        },
        programa: {
            response: programaTextoCompleto
        },
        organizadores: {
            response: organizadoresTexto
        },
        // === Compra REAL 2026 (prioritaria: ya está comprado) ===
        gastos2026: {
            response: "💰 Compra real 2026 (lo que llevamos gastado de verdad):\n\n• 🍖 Comida: 252,89 €\n• 🍺 Bebida: 56,84 €\n• 🍽️ Menaje: 149,87 €\n\n🧾 Total compra fiestas: 459,60 €\n\n🔊 Aparte (gastos generales de toda la peña, fuera del bote): 185,00 € (altavoces Vonyx + tacos/bridas + instalación de enchufes).\n\n⏳ Faltan por meter los tickets de carne, embutidos y trenzas.\n\n👉 Detalle por ticket en Fiestas > Resumen compra real 2026."
        },
        bebida2026: {
            response: "🍺 Bebida comprada en 2026 (real, 56,84 €):\n\n• Cerveza Estrella (Alcampo): 4 packs\n• Mahou 0,0 (Amazon): 5 packs\n• Licor Jägermeister (Merkocash): 1\n• Licor de crema y licor de hierbas (Mercadona): 1 + 1\n• Agua (Merkocash): 1\n\n⚠️ Ojo 2027: la Estrella Galicia vino en botellín de 20 cl en vez de 25 cl. Falta por añadir el pedido grueso de bebida si lo hubo."
        },
        comida2026: {
            response: "🍖 Comida comprada en 2026 (real, 252,89 €):\n\n• Merkocash: aperitivos, frutos secos, salsas, aceite... (144,08 €)\n• Mercadona: fuet, quesos, pan hamburguesa, guacamole, pan cristal... (77,37 €)\n• Alcampo: bacon, humus, pitas, judías... (31,44 €)\n\n⏳ Faltan por meter carne, embutidos y trenzas."
        },
        menaje2026: {
            response: "🍽️ Menaje comprado en 2026 (real, 149,87 €):\n\n• Diseño (bazar): platos, cubiertos y vasos reutilizables (61,08 €)\n• Merkocash: platos, boles, bandejas, lavavajillas, servilletas, bolsas... (86,37 €)\n• Mercadona: 1 bolsa de hielo (para mantener fresco) + bolsas (2,30 €)\n• Alcampo: bolsa (0,12 €)\n\nℹ️ El objetivo de ~10 sacos de hielo se compra aparte."
        },
        generales2026: {
            response: "🔊 Gastos generales 2026 (los paga TODA la peña, vayan o no a fiestas, fuera del bote): 185,00 €\n\n• Altavoces Vonyx VPS082A (sonido activo 400W, 2x8\", BT/USB): 160 € (Mayor Electronics)\n• Tacos y bridas (montaje): 10 € (Leroy Merlin)\n• Instalación de 3 enchufes + cables: 15 € (Hippy)"
        },
        // === Histórico 2025 (referencia) ===
        ubicacion: {
            response: "📍 La Peña Matagatos se celebra en un pueblo pequeño de Cuenca, España. Durante las fiestas, el pueblo pasa de 300 habitantes a más de 900 personas. ¡Es toda una experiencia!"
        },
        contacto: {
            response: "📧 Puedes contactar con nosotros:\n\n• Email general: info@penamatagatos.es\n• Documentos: documentos@penamatagatos.es\n• WhatsApp: +34 123 456 789\n\n¡Estaremos encantados de conocerte!"
        },
        actividades: {
            response: "🎯 Actividades 2026 confirmadas: mural a las 11:00 h.\n\nSi se confirman más actividades, las añadiremos aquí."
        },
        documentos: {
            response: "📎 Para subir documentos:\n\n1. Ve al formulario de contacto\n2. Busca la sección 'Compartir archivos'\n3. Puedes subir: inventarios, cuentas, fotos, propuestas\n4. Los procesamos y añadimos a nuestro sistema\n5. Si es útil, lo compartimos con toda la peña"
        },
        niños: {
            response: "👶 Sobre actividades para niños en 2026, ahora mismo solo tenemos confirmada una actividad general: mural a las 11:00 h."
        },
        // Nuevas FAQ expandidas
        alojamiento: {
            response: "🏠 Para el alojamiento durante las fiestas:\n\n• Muchos traemos tiendas de campaña o caravanas\n• Algunos alquilan casas rurales en pueblos cercanos\n• También hay quien se queda en hoteles en Cuenca capital\n• ¡Lo importante es coordinarse con el grupo!"
        },
        transporte: {
            response: "🚗 Sobre el transporte:\n\n• Organizamos viajes compartidos desde diferentes ciudades\n• Compartimos gastos de gasolina entre todos\n• Algunos van en coche, otros en furgonetas\n• ¡Contacta con nosotros para unirte a algún grupo!"
        },
        comida: {
            response: "🥘 Sobre comida no tengo un plan 2026 confirmado para compartir en Gatito.\n\nPrefiero no inventar datos."
        },
        fechas: {
            response: "📅 Las fechas de nuestras fiestas:\n\n• Normalmente coinciden con las fiestas patronales del pueblo\n• Suelen ser en verano (julio-agosto)\n• Duran varios días (generalmente un fin de semana largo)\n• ¡Te avisaremos con tiempo de las fechas exactas!"
        },
        tiempo: {
            response: "☀️ Sobre el clima:\n\n• En verano en Cuenca suele hacer calor durante el día\n• Las noches son más frescas y agradables\n• Traer protector solar y gorra para el día\n• Una chaquetilla para la noche no viene mal\n• ¡El buen tiempo acompaña a la buena compañía!"
        },
        requisitos: {
            response: "📋 Para unirte solo necesitas:\n\n• Ganas de pasarlo bien y hacer amigos\n• Espíritu colaborativo para las actividades\n• Amor por las tradiciones y la buena comida\n• Disponibilidad para las fechas de fiestas\n• ¡Y muchas ganas de diversión!"
        },
        // Nuevas actividades grupales divertidas
        juegos_nocturnos: {
            response: "🌙 No hay actividades nocturnas 2026 confirmadas en Gatito.\n\nLa única actividad confirmada ahora mismo es el mural a las 11:00 h."
        },
        retos_grupales: {
            response: "🏆 En 2026 no hay más retos confirmados en Gatito.\n\nSolo está confirmado el mural a las 11:00 h."
        },
        tradiciones_inventadas: {
            response: "🎉 Ahora mismo no tengo tradiciones 2026 confirmadas para compartir.\n\nSolo puedo confirmar el mural a las 11:00 h."
        },
        // Compras 2025
        menaje2025: {
            response: "🧻 Menaje comprado en 2025:\n\n• 🍽️ Bandejas 3 pisos: 5 ud (se quedaron cortas, en 2026 se dobla)\n• 🥤 Vasos: sets + varios — 116 €\n• 🍽️ Platos: 16 packs (quedan 11 packs = 132 u)\n• 🧻 Servilletas: 2 packs\n• 🍴 Tenedores reutilizables: 8 ud (quedan 45 u)\n• 🥄 Cucharas: 6 packs (quedan 25 u)\n• 📜 Rollo mantel de papel: 2 ud\n• 🗑️ Sacos de basura: 2 packs\n• 🥡 Film transparente: 2 ud\n• 🥡 Papel aluminio: varias ud\n• 🧽 Bavetas y paneles de limpieza\n\nTotal material 2025: 121,16 €\n\n💡 Para 2026: comprar más bandejas de 3 pisos (10 ud) y reponer vasos."
        },
        bebida2025: {
            response: "🍺 Bebida comprada en 2025:\n\nPrincipalmente en JM Distribuidores:\n• Cerveza (Mahou Clásica, 5 Estrellas, Estrella...)\n• Cerveza 0,0\n• Refrescos (Cola, Aquarius, Tónica...)\n• Agua\n• Destilados (Ginebra, Whisky, Ron, Vodka...)\n• Vino\n\nGasto total bebida: 874,80 € en JM + compras en Alcampo (165,44 €)\n💰 Total bebida 2025: ~1.040 €\n\n📦 Sobrantes: 86 cervezas normales, 34 sin alcohol, 16 Cola zero"
        },
        gastos2025: {
            response: "💰 Cuentas 2025 de la Peña:\n\n📥 Ingresos: 2.039,33 €\n📤 Gastos: 2.019,18 €\n✅ Saldo: +20,15 €\n\nDesglose de gastos:\n• 🍺 Bebida: 1.040,24 €\n• 🥘 Alimentación: 703,52 €\n• 🥩 Carnicería y embutidos: 211,57 €\n• 🧻 Material: 121,16 €\n• 🥖 Panadería: 25,40 €\n• 🧊 Hielo: 55,00 €\n\nProveedores: JM Distribuidores, Mercadona, Alcampo, Carrefour, Mercokash, Luis (carne)"
        },
        sobrantes2025: {
            response: "📦 Sobrantes de 2025 (útil para planificar 2026):\n\n🍺 Bebida:\n• Cerveza normal: 86 ud\n• Cerveza sin alcohol: 34 ud\n• Cola zero: 16 ud\n• Helados: 34 ud\n\n🧻 Menaje (queda de sobra):\n• Platos: 11 packs (132 ud)\n• Tenedores: 45 ud\n• Cucharas: 25 ud\n• Cucharillas: 75 ud\n• Papel aluminio: 3 ud\n• Film transparente: 1 ud\n• Estropajos / esponjas / bavetas\n\n⚠️ Falta reponer: bandejas de 3 pisos (se quedaron cortas), vasos y servilletas"
        }
    };

    // Mostrar/ocultar chat
    gatitoButton.addEventListener('click', function() {
        gatitoChat.classList.add('active');
        gatitoChat.classList.add('fullscreen');
        gatitoButton.style.display = 'none';
    });

    gatitoClose.addEventListener('click', function() {
        gatitoChat.classList.remove('active');
        gatitoChat.classList.remove('fullscreen');
        gatitoButton.style.display = 'flex';
        // Reset quick questions state when closing
        if (isMobile && hasInteracted) {
            quickQuestionsSection.classList.remove('auto-collapsed');
            hasInteracted = false;
        }
    });

    // Toggle quick questions functionality
    toggleQuestionsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        quickQuestionsSection.classList.toggle('collapsed');
    });

    // Auto-collapse on mobile after interaction
    function autoCollapseOnMobile() {
        if (isMobile && !hasInteracted) {
            hasInteracted = true;
            setTimeout(() => {
                quickQuestionsSection.classList.add('auto-collapsed');
            }, 1000); // Give time to see the response
        }
    }

    // Preguntas rápidas
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const questionType = this.dataset.question;
            const questionText = this.textContent;
            
            addUserMessage(questionText);
            autoCollapseOnMobile(); // Auto-collapse on mobile
            
            setTimeout(() => {
                if (questionType === 'programa') {
                    addBotDayPicker(); // Preguntar primero de qué día
                } else if (gatitoKnowledge[questionType]) {
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
        autoCollapseOnMobile(); // Auto-collapse on mobile

        setTimeout(() => {
            const response = generateResponse(message);
            if (response === gatitoKnowledge.programa.response) {
                addBotDayPicker(); // "programa" genérico: preguntar de qué día
            } else {
                addBotMessage(response);
            }
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

        // Quién organiza / reparto de tareas por peñas
        if (lowerMessage.includes('organiza') || lowerMessage.includes('quien se encarga') ||
            lowerMessage.includes('quién se encarga') || lowerMessage.includes('reparto') ||
            lowerMessage.includes('tareas') || (lowerMessage.includes('peña') && lowerMessage.includes('encarg'))) {
            return gatitoKnowledge.organizadores.response;
        }

        // === PRIORIDAD 2026: la compra real ya está hecha, se prioriza sobre 2025 ===
        const habla2025 = lowerMessage.includes('2025');
        // Gastos generales / altavoces / sonido
        if (lowerMessage.includes('altavoz') || lowerMessage.includes('altavoces') || lowerMessage.includes('sonido') ||
            lowerMessage.includes('general') || lowerMessage.includes('enchufe') || lowerMessage.includes('vonyx')) {
            return gatitoKnowledge.generales2026.response;
        }
        if (!habla2025) {
            if (lowerMessage.includes('menaje') || lowerMessage.includes('platos') || lowerMessage.includes('vasos') ||
                lowerMessage.includes('cubiertos') || lowerMessage.includes('servilletas') || lowerMessage.includes('bandeja')) {
                return gatitoKnowledge.menaje2026.response;
            }
            if (lowerMessage.includes('bebida') || lowerMessage.includes('cerveza') || lowerMessage.includes('refresco') ||
                lowerMessage.includes('licor') || lowerMessage.includes('destilado')) {
                return gatitoKnowledge.bebida2026.response;
            }
            if (lowerMessage.includes('comida') || lowerMessage.includes('embutido') || lowerMessage.includes('queso') ||
                lowerMessage.includes('fuet') || lowerMessage.includes('trenza') || lowerMessage.includes('carne')) {
                return gatitoKnowledge.comida2026.response;
            }
            if (lowerMessage.includes('gasto') || lowerMessage.includes('cuenta') || lowerMessage.includes('compra') ||
                lowerMessage.includes('ticket') || lowerMessage.includes('cuánto') || lowerMessage.includes('cuanto') ||
                lowerMessage.includes('coste') || lowerMessage.includes('presupuesto')) {
                return gatitoKnowledge.gastos2026.response;
            }
        }
        // Preguntas explícitas por 2026
        if (lowerMessage.includes('2026')) {
            if (lowerMessage.includes('menaje')) return gatitoKnowledge.menaje2026.response;
            if (lowerMessage.includes('bebida') || lowerMessage.includes('cerveza')) return gatitoKnowledge.bebida2026.response;
            if (lowerMessage.includes('comida') || lowerMessage.includes('carne') || lowerMessage.includes('embutido')) return gatitoKnowledge.comida2026.response;
            if (lowerMessage.includes('gasto') || lowerMessage.includes('compra') || lowerMessage.includes('cuenta')) return gatitoKnowledge.gastos2026.response;
        }

        // Programa de un día concreto (ej. "qué hay el sábado 5", "programa del 3 de septiembre")
        const respuestaDia = programaDelDia(lowerMessage);
        if (respuestaDia) {
            return respuestaDia;
        }

        // Programa / horarios completos de las fiestas
        if (lowerMessage.includes('programa') || lowerMessage.includes('horario') || lowerMessage.includes('agenda') ||
            (lowerMessage.includes('que') && lowerMessage.includes('hay')) ||
            lowerMessage.includes('procesion') || lowerMessage.includes('verbena') || lowerMessage.includes('orquesta') ||
            lowerMessage.includes('encierro') || lowerMessage.includes('caldereta') || lowerMessage.includes('reina') ||
            lowerMessage.includes('holi') || lowerMessage.includes('fuegos') || lowerMessage.includes('novena')) {
            return gatitoKnowledge.programa.response;
        }

        // Palabras clave para diferentes respuestas (expandidas)
        if (lowerMessage.includes('hora') || lowerMessage.includes('cuando') || lowerMessage.includes('tiempo') && lowerMessage.includes('actividad')) {
            return gatitoKnowledge.horarios.response;
        }
        
        if (lowerMessage.includes('donde') || lowerMessage.includes('ubicac') || lowerMessage.includes('lugar') || lowerMessage.includes('sitio')) {
            return gatitoKnowledge.ubicacion.response;
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('teléfon') || lowerMessage.includes('whatsapp') || lowerMessage.includes('llamar') || lowerMessage.includes('escribir')) {
            return gatitoKnowledge.contacto.response;
        }
        
        if (lowerMessage.includes('actividad') || lowerMessage.includes('juego') || lowerMessage.includes('hacer') || lowerMessage.includes('diversión') || lowerMessage.includes('entretenimiento')) {
            return gatitoKnowledge.actividades.response;
        }
        
        if (lowerMessage.includes('document') || lowerMessage.includes('subir') || lowerMessage.includes('archivo') || lowerMessage.includes('foto') || lowerMessage.includes('inventario')) {
            return gatitoKnowledge.documentos.response;
        }
        
        if (lowerMessage.includes('niño') || lowerMessage.includes('niña') || lowerMessage.includes('bebé') || lowerMessage.includes('pequeño') || lowerMessage.includes('peque') || lowerMessage.includes('hijo')) {
            return gatitoKnowledge.niños.response;
        }
        
        // Nuevas detecciones de palabras clave
        if (lowerMessage.includes('aloj') || lowerMessage.includes('dormir') || lowerMessage.includes('hotel') || lowerMessage.includes('camping') || lowerMessage.includes('tienda') || lowerMessage.includes('casa rural')) {
            return gatitoKnowledge.alojamiento.response;
        }
        
        if (lowerMessage.includes('transport') || lowerMessage.includes('coche') || lowerMessage.includes('llegar') || lowerMessage.includes('viajar') || lowerMessage.includes('carretera') || lowerMessage.includes('conducir')) {
            return gatitoKnowledge.transporte.response;
        }
        
        if (lowerMessage.includes('comida') || lowerMessage.includes('comer') || lowerMessage.includes('paella') || lowerMessage.includes('cocina') || lowerMessage.includes('barbacoa') || lowerMessage.includes('hambre')) {
            return gatitoKnowledge.comida.response;
        }
        
        if (lowerMessage.includes('fecha') || lowerMessage.includes('día') || lowerMessage.includes('fiesta') || lowerMessage.includes('calendario') || lowerMessage.includes('cuándo')) {
            return gatitoKnowledge.fechas.response;
        }
        
        if (lowerMessage.includes('tiempo') || lowerMessage.includes('clima') || lowerMessage.includes('lluvia') || lowerMessage.includes('sol') || lowerMessage.includes('calor') || lowerMessage.includes('frío')) {
            return gatitoKnowledge.tiempo.response;
        }
        
        if (lowerMessage.includes('requisito') || lowerMessage.includes('necesito') || lowerMessage.includes('condicion') || lowerMessage.includes('unirme') || lowerMessage.includes('participar') || lowerMessage.includes('apuntar')) {
            return gatitoKnowledge.requisitos.response;
        }
        
        // Nuevas actividades divertidas
        if (lowerMessage.includes('noche') || lowerMessage.includes('nocturno') || lowerMessage.includes('oscuras') || lowerMessage.includes('estrella') || lowerMessage.includes('hoguera')) {
            return gatitoKnowledge.juegos_nocturnos.response;
        }
        
        if (lowerMessage.includes('reto') || lowerMessage.includes('desafío') || lowerMessage.includes('competencia') || lowerMessage.includes('olimpiada') || lowerMessage.includes('concurso')) {
            return gatitoKnowledge.retos_grupales.response;
        }
        
        if (lowerMessage.includes('tradición') || lowerMessage.includes('costumbre') || lowerMessage.includes('ritual') || lowerMessage.includes('especial') || lowerMessage.includes('único')) {
            return gatitoKnowledge.tradiciones_inventadas.response;
        }

        // Compras 2025
        if (lowerMessage.includes('menaje') || (lowerMessage.includes('vasos') && lowerMessage.includes('2025')) || (lowerMessage.includes('platos') && lowerMessage.includes('2025')) || (lowerMessage.includes('servilletas') && lowerMessage.includes('2025')) || (lowerMessage.includes('bandeja') && lowerMessage.includes('2025'))) {
            return gatitoKnowledge.menaje2025.response;
        }

        if ((lowerMessage.includes('bebida') || lowerMessage.includes('cerveza') || lowerMessage.includes('refresco')) && lowerMessage.includes('2025')) {
            return gatitoKnowledge.bebida2025.response;
        }

        if ((lowerMessage.includes('gasto') || lowerMessage.includes('cuenta') || lowerMessage.includes('ingreso') || lowerMessage.includes('compra')) && lowerMessage.includes('2025')) {
            return gatitoKnowledge.gastos2025.response;
        }

        if (lowerMessage.includes('sobrante') || (lowerMessage.includes('2025') && (lowerMessage.includes('sobró') || lowerMessage.includes('sobra') || lowerMessage.includes('quedó') || lowerMessage.includes('queda')))) {
            return gatitoKnowledge.sobrantes2025.response;
        }
        
        if (lowerMessage.includes('precio') || lowerMessage.includes('coste') || lowerMessage.includes('dinero') || lowerMessage.includes('cuesta') || lowerMessage.includes('pagar') || lowerMessage.includes('gratis')) {
            return "💰 La participación en la peña es gratuita, solo compartimos los gastos de material y comida entre todos. ¡Lo importante es la diversión y el buen ambiente!";
        }
        
        if (lowerMessage.includes('unir') || lowerMessage.includes('apunt') || lowerMessage.includes('inscrib') || lowerMessage.includes('participar') || lowerMessage.includes('sumar')) {
            return "🎉 ¡Genial que quieras unirte! Puedes rellenar el formulario de contacto en la página o escribir directamente a info@penamatagatos.es. ¡Te esperamos!";
        }
        
        // Respuestas de cortesía
        if (lowerMessage.includes('hola') || lowerMessage.includes('buenas') || lowerMessage.includes('saludo')) {
            return "¡Hola! 🐱 ¡Qué alegría verte por aquí! Soy Gatito, tu asistente virtual de la Peña Matagatos. ¿En qué puedo ayudarte hoy?";
        }
        
        if (lowerMessage.includes('gracias') || lowerMessage.includes('thank')) {
            return "¡De nada! 😊 ¡Para eso estoy aquí! Si tienes más preguntas, no dudes en preguntarme. ¡Miau!";
        }
        
        if (lowerMessage.includes('adiós') || lowerMessage.includes('bye') || lowerMessage.includes('hasta luego')) {
            return "¡Hasta luego! 👋 ¡Espero verte pronto en nuestras fiestas! ¡Que tengas un día genial!";
        }
        
        // Respuesta por defecto mejorada
        return `¡Hola! 🐱 Soy Gatito y estoy aquí para ayudarte. Puedes preguntarme sobre:
        
        📅 Programa de Fiestas 2026 (horarios día a día)
        🧻 Menaje comprado en 2025
        🍺 Bebida comprada en 2025
        💰 Gastos y cuentas de 2025
        📦 Sobrantes del año anterior
        📅 Horarios y fechas de las fiestas
        📍 Ubicación y cómo llegar  
        📧 Información de contacto
        🎯 Actividades y juegos
        👶 Actividades para niños
        🥘 Comida y tradiciones gastronómicas
        
        O si prefieres, usa los botones de arriba para preguntas rápidas. ¡Miau!`;
    }

    // Handle window resize for mobile detection
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
    });
});