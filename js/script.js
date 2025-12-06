  // Datos de los cursos con videos de YouTube específicos por tema
        const courses = [
            {
                id: 1,
                title: "JavaScript desde Cero",
                description: "Aprende JavaScript desde los fundamentos hasta conceptos avanzados.",
                duration: "8 semanas",
                category: "web",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                featured: true,
                modules: [
                    {
                        title: "Introducción a JavaScript",
                        description: "Conceptos básicos y configuración del entorno",
                        duration: "1 hora",
                        videos: [
                            {
                                title: "JavaScript en 100 segundos",
                                url: "https://www.youtube.com/embed/DHjqpvDnNGE",
                                duration: "2:30",
                                description: "Introducción rápida a JavaScript"
                            },
                            {
                                title: "¿Qué es JavaScript?",
                                url: "https://www.youtube.com/embed/W6NZfCO5SIk",
                                duration: "6:45",
                                description: "Explicación detallada de JavaScript"
                            }
                        ],
                        resources: [
                            "Guía de instalación de Node.js",
                            "Editor de código recomendado: VS Code",
                            "Documentación oficial de JavaScript"
                        ]
                    },
                    {
                        title: "Variables y Tipos de Datos",
                        description: "Declaración de variables y tipos de datos en JS",
                        duration: "1.5 horas",
                        videos: [
                            {
                                title: "Variables en JavaScript",
                                url: "https://www.youtube.com/embed/XgQTuzx7ccg",
                                duration: "10:15",
                                description: "Cómo declarar y usar variables"
                            },
                            {
                                title: "Tipos de datos",
                                url: "https://www.youtube.com/embed/1uTl6jSXoWQ",
                                duration: "12:30",
                                description: "Todos los tipos de datos en JavaScript"
                            }
                        ],
                        resources: [
                            "Ejercicios prácticos de variables",
                            "Cheatsheet de tipos de datos",
                            "Buenas prácticas de nomenclatura"
                        ]
                    },
                    {
                        title: "Estructuras de Control",
                        description: "Condicionales y bucles en JavaScript",
                        duration: "2 horas",
                        videos: [
                            {
                                title: "If/Else en JavaScript",
                                url: "https://www.youtube.com/embed/IsG4Xd6LlsM",
                                duration: "8:20",
                                description: "Uso de condicionales"
                            },
                            {
                                title: "Bucles For y While",
                                url: "https://www.youtube.com/embed/s9wW2PpJsmQ",
                                duration: "15:40",
                                description: "Cómo crear y usar bucles"
                            }
                        ],
                        resources: [
                            "Ejercicios de condicionales",
                            "Proyecto: Calculadora básica",
                            "Casos de uso comunes de bucles"
                        ]
                    },
                    {
                        title: "Funciones y Scope",
                        description: "Creación y uso de funciones en JavaScript",
                        duration: "2 horas",
                        videos: [
                            {
                                title: "Funciones en JavaScript",
                                url: "https://www.youtube.com/embed/N8ap4k_1QEQ",
                                duration: "18:30",
                                description: "Todo sobre funciones"
                            },
                            {
                                title: "Scope y Hoisting",
                                url: "https://www.youtube.com/embed/FNDgA9pEHzQ",
                                duration: "14:20",
                                description: "Entendiendo el alcance de variables"
                            }
                        ],
                        resources: [
                            "Ejercicios de funciones",
                            "Diferencias entre function expressions y declarations",
                            "Proyecto: Generador de contraseñas"
                        ]
                    },
                    {
                        title: "Manipulación del DOM",
                        description: "Interactuar con elementos HTML desde JavaScript",
                        duration: "2.5 horas",
                        videos: [
                            {
                                title: "DOM Manipulation",
                                url: "https://www.youtube.com/embed/0ik6X4DJKCc",
                                duration: "22:10",
                                description: "Manipulación completa del DOM"
                            },
                            {
                                title: "Event Listeners",
                                url: "https://www.youtube.com/embed/XF1_MlZ5l6M",
                                duration: "16:45",
                                description: "Cómo manejar eventos en JavaScript"
                            }
                        ],
                        resources: [
                            "Proyecto: Todo List App",
                            "Selectores del DOM",
                            "Métodos de manipulación de elementos"
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "React.js Completo",
                description: "Domina React.js para crear aplicaciones web modernas.",
                duration: "10 semanas",
                category: "web",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                featured: true,
                modules: [
                    {
                        title: "Introducción a React",
                        description: "Conceptos básicos y creación de primer componente",
                        duration: "1.5 horas",
                        videos: [
                            {
                                title: "React en 100 segundos",
                                url: "https://www.youtube.com/embed/Tn6-PIqc4UM",
                                duration: "2:40",
                                description: "Introducción rápida a React"
                            },
                            {
                                title: "Crear primer proyecto React",
                                url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
                                duration: "25:30",
                                description: "Guía paso a paso"
                            }
                        ],
                        resources: [
                            "Instalación de Node.js y npm",
                            "Creación de proyecto con Create React App",
                            "Estructura de archivos de React"
                        ]
                    },
                    {
                        title: "Componentes y JSX",
                        description: "Creación y uso de componentes React",
                        duration: "2 horas",
                        videos: [
                            {
                                title: "Componentes en React",
                                url: "https://www.youtube.com/embed/m55PTVUrlnA",
                                duration: "18:20",
                                description: "Todo sobre componentes"
                            },
                            {
                                title: "JSX Explicado",
                                url: "https://www.youtube.com/embed/7fPXI_MnBOY",
                                duration: "12:15",
                                description: "Sintaxis JSX"
                            }
                        ],
                        resources: [
                            "Ejercicios de componentes",
                            "Diferencias entre componentes de clase y función",
                            "Buenas prácticas de componentes"
                        ]
                    }
                ]
            },
            {
                id: 3,
                title: "Python para Principiantes",
                description: "Aprende Python desde cero con proyectos prácticos.",
                duration: "6 semanas",
                category: "data",
                image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                featured: true,
                modules: [
                    {
                        title: "Introducción a Python",
                        description: "Instalación y primeros pasos",
                        duration: "1 hora",
                        videos: [
                            {
                                title: "Python en 100 segundos",
                                url: "https://www.youtube.com/embed/x7X9w_GIm1s",
                                duration: "2:15",
                                description: "Introducción rápida"
                            },
                            {
                                title: "Instalación de Python",
                                url: "https://www.youtube.com/embed/YYXdXT2l-Gg",
                                duration: "10:30",
                                description: "Guía de instalación"
                            }
                        ],
                        resources: [
                            "Instalación de Python",
                            "Configuración del entorno",
                            "Primer programa 'Hola Mundo'"
                        ]
                    }
                ]
            }
        ];

        // Estado de la aplicación
        let appState = {
            currentPage: 'home',
            user: null,
            enrolledCourses: [],
            courseProgress: {},
            watchedVideos: {},
            currentCourseView: null
        };

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            // Cargar datos del localStorage si existen
            loadFromLocalStorage();
            
            // Cargar cursos destacados
            renderFeaturedCourses();
            
            // Cargar todos los cursos
            renderAllCourses();
            
            // Configurar navegación
            setupNavigation();
            
            // Configurar eventos
            setupEventListeners();
            
            // Actualizar UI según estado
            updateUI();
        });

        // Cargar datos del localStorage
        function loadFromLocalStorage() {
            const savedState = localStorage.getItem('codeMasterState');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                appState.user = parsed.user;
                appState.enrolledCourses = parsed.enrolledCourses || [];
                appState.courseProgress = parsed.courseProgress || {};
                appState.watchedVideos = parsed.watchedVideos || {};
            }
        }

        // Guardar datos en localStorage
        function saveToLocalStorage() {
            localStorage.setItem('codeMasterState', JSON.stringify({
                user: appState.user,
                enrolledCourses: appState.enrolledCourses,
                courseProgress: appState.courseProgress,
                watchedVideos: appState.watchedVideos
            }));
        }

        // Configurar navegación
        function setupNavigation() {
            // Navegación principal
            document.getElementById('nav-home').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('home');
            });
            
            document.getElementById('nav-courses').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('courses');
            });
            
            document.getElementById('nav-dashboard').addEventListener('click', function(e) {
                e.preventDefault();
                if (!appState.user) {
                    showLoginAlert();
                    return;
                }
                showPage('dashboard');
                updateDashboard();
            });
            
            // Navegación del footer
            document.querySelector('.nav-home-link').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('home');
            });
            
            document.querySelector('.nav-courses-link').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('courses');
            });
            
            document.querySelector('.nav-dashboard-link').addEventListener('click', function(e) {
                e.preventDefault();
                if (!appState.user) {
                    showLoginAlert();
                    return;
                }
                showPage('dashboard');
                updateDashboard();
            });
            
            // Botones de acción
            document.getElementById('explore-courses-btn').addEventListener('click', function() {
                showPage('courses');
            });
            
            document.getElementById('login-btn').addEventListener('click', function() {
                showLoginAlert();
            });
            
            document.getElementById('register-btn').addEventListener('click', function() {
                showRegisterAlert();
            });
            
            document.getElementById('back-to-dashboard').addEventListener('click', function() {
                showDashboardHome();
            });
        }

        // Configurar eventos
        function setupEventListeners() {
            // Búsqueda de cursos
            document.getElementById('search-courses').addEventListener('input', function() {
                filterCourses();
            });
            
            // Filtro por categoría
            document.getElementById('filter-category').addEventListener('change', function() {
                filterCourses();
            });
        }

        // Actualizar UI según estado
        function updateUI() {
            if (appState.user) {
                document.getElementById('login-btn').classList.add('hidden');
                document.getElementById('register-btn').classList.add('hidden');
                
                // Mostrar información del usuario
                const userNav = document.createElement('div');
                userNav.className = 'navbar-nav';
                userNav.innerHTML = `
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fas fa-user me-1"></i>${appState.user.name}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" id="nav-dashboard-dropdown">Mi Aprendizaje</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#" id="logout-btn">Cerrar Sesión</a></li>
                        </ul>
                    </div>
                `;
                
                const existingUserNav = document.querySelector('.navbar-collapse .navbar-nav .nav-item.dropdown');
                if (!existingUserNav) {
                    document.querySelector('.navbar-collapse .navbar-nav').appendChild(userNav);
                    
                    // Configurar eventos del dropdown
                    document.getElementById('nav-dashboard-dropdown').addEventListener('click', function(e) {
                        e.preventDefault();
                        showPage('dashboard');
                        updateDashboard();
                    });
                    
                    document.getElementById('logout-btn').addEventListener('click', function(e) {
                        e.preventDefault();
                        logout();
                    });
                }
            }
        }

        // Cerrar sesión
        function logout() {
            Swal.fire({
                title: 'Cerrar Sesión',
                text: '¿Estás seguro de que quieres cerrar sesión?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, cerrar sesión',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    appState.user = null;
                    saveToLocalStorage();
                    
                    // Actualizar UI
                    document.getElementById('login-btn').classList.remove('hidden');
                    document.getElementById('register-btn').classList.remove('hidden');
                    
                    const userNav = document.querySelector('.navbar-collapse .navbar-nav .nav-item.dropdown');
                    if (userNav) {
                        userNav.remove();
                    }
                    
                    if (appState.currentPage === 'dashboard') {
                        showPage('home');
                    }
                    
                    Swal.fire({
                        title: 'Sesión Cerrada',
                        text: 'Has cerrado sesión correctamente.',
                        icon: 'info',
                        confirmButtonText: 'Continuar'
                    });
                }
            });
        }

        // Mostrar página específica
        function showPage(page) {
            document.getElementById('home-page').classList.add('hidden');
            document.getElementById('courses-page').classList.add('hidden');
            document.getElementById('dashboard-page').classList.add('hidden');
            
            document.getElementById(`${page}-page`).classList.remove('hidden');
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const navElement = document.getElementById(`nav-${page}`);
            if (navElement) {
                navElement.classList.add('active');
            }
            
            appState.currentPage = page;
            
            // Resetear vista de curso si estamos en dashboard
            if (page === 'dashboard' && appState.currentCourseView) {
                showDashboardHome();
            }
        }

        // Mostrar dashboard principal
        function showDashboardHome() {
            appState.currentCourseView = null;
            document.getElementById('course-detail-section').classList.add('hidden');
            document.getElementById('certificate-section').classList.add('hidden');
            document.getElementById('my-courses-list').classList.remove('hidden');
            document.getElementById('stats-panel').classList.remove('hidden');
            document.getElementById('back-to-dashboard').classList.add('hidden');
            document.getElementById('dashboard-title').textContent = 'Mi Aprendizaje';
            updateDashboard();
        }

        // Renderizar cursos destacados
        function renderFeaturedCourses() {
            const featuredCoursesContainer = document.getElementById('featured-courses');
            const featuredCourses = courses.filter(course => course.featured);
            
            featuredCoursesContainer.innerHTML = '';
            
            if (featuredCourses.length === 0) {
                featuredCoursesContainer.innerHTML = '<p class="text-center">No hay cursos destacados disponibles.</p>';
                return;
            }
            
            featuredCourses.forEach(course => {
                const courseCard = createCourseCard(course);
                featuredCoursesContainer.innerHTML += courseCard;
            });
            
            // Agregar event listeners a los botones de inscripción
            attachEnrollListeners();
        }

        // Renderizar todos los cursos
        function renderAllCourses() {
            const allCoursesContainer = document.getElementById('all-courses');
            
            allCoursesContainer.innerHTML = '';
            
            if (courses.length === 0) {
                allCoursesContainer.innerHTML = '<p class="text-center">No hay cursos disponibles.</p>';
                return;
            }
            
            courses.forEach(course => {
                const courseCard = createCourseCard(course);
                allCoursesContainer.innerHTML += courseCard;
            });
            
            // Agregar event listeners a los botones de inscripción
            attachEnrollListeners();
        }

        // Crear tarjeta de curso
        function createCourseCard(course) {
            const isEnrolled = appState.enrolledCourses.includes(course.id);
            const buttonText = isEnrolled ? 'Acceder al Curso' : 'Inscribirse Gratis';
            const buttonClass = isEnrolled ? 'btn-success-custom' : 'btn-primary-custom';
            const buttonIcon = isEnrolled ? 'fa-play-circle' : 'fa-user-plus';
            
            return `
                <div class="col-md-4 mb-4">
                    <div class="card course-card">
                        <div class="position-relative">
                            <img src="${course.image}" class="card-img-top course-img" alt="${course.title}">
                            <span class="badge bg-primary course-badge">${course.duration}</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">${course.description}</p>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-secondary">${course.modules.length} módulos</span>
                                <span class="text-muted"><i class="fas fa-play-circle me-1"></i>Videos incluidos</span>
                            </div>
                            <button class="btn ${buttonClass} w-100 enroll-btn" data-course-id="${course.id}">
                                <i class="fas ${buttonIcon} me-2"></i>${buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Adjuntar listeners de inscripción
        function attachEnrollListeners() {
            document.querySelectorAll('.enroll-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const courseId = parseInt(this.getAttribute('data-course-id'));
                    const isEnrolled = appState.enrolledCourses.includes(courseId);
                    
                    if (isEnrolled) {
                        // Acceder al curso
                        accessCourse(courseId);
                    } else {
                        // Inscribirse en el curso
                        enrollInCourse(courseId);
                    }
                });
            });
        }

        // Filtrar cursos
        function filterCourses() {
            const searchTerm = document.getElementById('search-courses').value.toLowerCase();
            const categoryFilter = document.getElementById('filter-category').value;
            
            const filteredCourses = courses.filter(course => {
                const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                                     course.description.toLowerCase().includes(searchTerm);
                const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
                
                return matchesSearch && matchesCategory;
            });
            
            const allCoursesContainer = document.getElementById('all-courses');
            allCoursesContainer.innerHTML = '';
            
            if (filteredCourses.length === 0) {
                allCoursesContainer.innerHTML = '<p class="text-center">No se encontraron cursos.</p>';
                return;
            }
            
            filteredCourses.forEach(course => {
                const courseCard = createCourseCard(course);
                allCoursesContainer.innerHTML += courseCard;
            });
            
            // Agregar event listeners a los botones de inscripción
            attachEnrollListeners();
        }

        // Inscribirse en un curso
        function enrollInCourse(courseId) {
            if (!appState.user) {
                showLoginAlert();
                return;
            }
            
            const course = courses.find(c => c.id === courseId);
            
            if (!appState.enrolledCourses.includes(courseId)) {
                appState.enrolledCourses.push(courseId);
                
                // Inicializar progreso del curso
                appState.courseProgress[courseId] = {
                    completedModules: [],
                    progress: 0,
                    lastAccessed: new Date().toISOString()
                };
                
                // Inicializar seguimiento de videos
                appState.watchedVideos[courseId] = [];
                
                // Guardar en localStorage
                saveToLocalStorage();
                
                Swal.fire({
                    title: '¡Inscripción Exitosa!',
                    html: `
                        <p>Te has inscrito correctamente en el curso:</p>
                        <h5 class="text-primary">${course.title}</h5>
                        <p class="mt-3">Ahora puedes acceder a todos los módulos y videos tutoriales.</p>
                    `,
                    icon: 'success',
                    confirmButtonText: 'Acceder al Curso'
                }).then(() => {
                    // Acceder al curso inmediatamente
                    accessCourse(courseId);
                });
                
                // Actualizar la vista de cursos
                renderFeaturedCourses();
                renderAllCourses();
            } else {
                // Si ya está inscrito, acceder al curso
                accessCourse(courseId);
            }
        }

        // Acceder a un curso
        function accessCourse(courseId) {
            if (!appState.user) {
                showLoginAlert();
                return;
            }
            
            const course = courses.find(c => c.id === courseId);
            
            // Actualizar última fecha de acceso
            if (appState.courseProgress[courseId]) {
                appState.courseProgress[courseId].lastAccessed = new Date().toISOString();
                saveToLocalStorage();
            }
            
            // Ir al dashboard y mostrar el curso
            showPage('dashboard');
            showCourseDetail(courseId);
        }

        // Mostrar detalles del curso
        function showCourseDetail(courseId) {
            const course = courses.find(c => c.id === courseId);
            const progress = appState.courseProgress[courseId] || { completedModules: [], progress: 0 };
            const watchedVideos = appState.watchedVideos[courseId] || [];
            
            appState.currentCourseView = courseId;
            
            // Ocultar lista de cursos y mostrar detalles
            document.getElementById('my-courses-list').classList.add('hidden');
            document.getElementById('stats-panel').classList.add('hidden');
            document.getElementById('back-to-dashboard').classList.remove('hidden');
            document.getElementById('dashboard-title').textContent = course.title;
            
            // Calcular videos vistos en este curso
            const courseVideosWatched = watchedVideos.length;
            const totalVideos = course.modules.reduce((total, module) => total + module.videos.length, 0);
            
            // Crear HTML para los módulos
            let modulesHTML = '';
            course.modules.forEach((module, moduleIndex) => {
                const isCompleted = progress.completedModules.includes(moduleIndex);
                const moduleVideosWatched = watchedVideos.filter(v => v.moduleIndex === moduleIndex).length;
                const totalModuleVideos = module.videos.length;
                
                modulesHTML += `
                    <div class="module-item ${isCompleted ? 'completed-module' : ''}" id="module-${moduleIndex}">
                        <div class="module-header" onclick="toggleModuleDetails(${moduleIndex}, ${courseId})">
                            <div class="module-title">
                                <i class="fas fa-${isCompleted ? 'check-circle text-success' : 'circle'} me-2"></i>
                                <div>
                                    <h5 class="mb-1">Módulo ${moduleIndex + 1}: ${module.title}</h5>
                                    <p class="text-muted mb-0">${module.description} • ${module.duration}</p>
                                </div>
                            </div>
                            <div>
                                <span class="module-status ${isCompleted ? 'completed' : 'pending'}">
                                    ${isCompleted ? 'Completado' : `${moduleVideosWatched}/${totalModuleVideos} videos`}
                                </span>
                                <i class="fas fa-chevron-down ms-3 module-expand-btn" id="expand-icon-${moduleIndex}"></i>
                            </div>
                        </div>
                        
                        <div class="module-details" id="module-details-${moduleIndex}">
                            <div class="module-content">
                                <h6><i class="fas fa-play-circle text-primary me-2"></i>Videos Tutoriales</h6>
                                <div class="video-list">
                                    ${module.videos.map((video, videoIndex) => {
                                        const isWatched = watchedVideos.some(v => 
                                            v.moduleIndex === moduleIndex && v.videoIndex === videoIndex
                                        );
                                        const videoId = extractYouTubeId(video.url);
                                        const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                        
                                        return `
                                            <div class="video-item" onclick="playVideo('${video.url}', ${courseId}, ${moduleIndex}, ${videoIndex})">
                                                <div class="position-relative">
                                                    <img src="${thumbnail}" class="video-thumbnail" alt="${video.title}">
                                                    <div class="video-play-btn">
                                                        <i class="fas fa-play"></i>
                                                    </div>
                                                    ${isWatched ? 
                                                        '<span class="badge bg-success position-absolute top-0 end-0 m-2">Visto</span>' : 
                                                        ''
                                                    }
                                                </div>
                                                <h6 class="mt-2">${video.title}</h6>
                                                <p class="text-muted small mb-1">${video.duration} • ${video.description}</p>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                                
                                <div class="resources-list">
                                    <h6><i class="fas fa-file-alt text-info me-2"></i>Recursos Adicionales</h6>
                                    <ul class="mb-0">
                                        ${module.resources.map(resource => 
                                            `<li>${resource}</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                                
                                <div class="module-actions">
                                    ${!isCompleted ? `
                                        <button class="btn btn-success-custom btn-sm" onclick="markModuleAsCompleted(${courseId}, ${moduleIndex})">
                                            <i class="fas fa-check me-1"></i>Marcar como Completado
                                        </button>
                                    ` : `
                                        <button class="btn btn-outline-secondary btn-sm" onclick="unmarkModuleAsCompleted(${courseId}, ${moduleIndex})">
                                            <i class="fas fa-undo me-1"></i>Marcar como Pendiente
                                        </button>
                                    `}
                                    
                                    ${moduleIndex > 0 ? `
                                        <button class="btn btn-outline-primary btn-sm" onclick="scrollToModule(${moduleIndex - 1})">
                                            <i class="fas fa-arrow-up me-1"></i>Módulo Anterior
                                        </button>
                                    ` : ''}
                                    
                                    ${moduleIndex < course.modules.length - 1 ? `
                                        <button class="btn btn-primary-custom btn-sm" onclick="scrollToModule(${moduleIndex + 1})">
                                            Siguiente Módulo <i class="fas fa-arrow-right ms-1"></i>
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            // Calcular progreso
            const progressPercentage = Math.round((progress.completedModules.length / course.modules.length) * 100);
            const isCourseCompleted = progressPercentage === 100;
            
            // Crear HTML del curso
            const courseDetailHTML = `
                <div class="progress-container">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3 class="mb-1">${course.title}</h3>
                            <p class="text-muted">${course.description}</p>
                        </div>
                        <div class="text-end">
                            <div class="badge bg-primary mb-2">${course.duration}</div>
                            <div>Progreso: <strong>${progressPercentage}%</strong></div>
                        </div>
                    </div>
                    
                    <div class="progress mb-4" style="height: 10px;">
                        <div class="progress-bar progress-bar-custom" role="progressbar" 
                             style="width: ${progressPercentage}%" 
                             aria-valuenow="${progressPercentage}" 
                             aria-valuemin="0" 
                             aria-valuemax="100">
                        </div>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <span class="me-3"><i class="fas fa-play-circle text-primary me-1"></i> ${courseVideosWatched}/${totalVideos} videos vistos</span>
                            <span><i class="fas fa-check-circle text-success me-1"></i> ${progress.completedModules.length}/${course.modules.length} módulos</span>
                        </div>
                        
                        ${isCourseCompleted ? `
                            <button class="btn btn-warning" onclick="generateCertificate(${courseId})">
                                <i class="fas fa-certificate me-2"></i>Obtener Certificado
                            </button>
                        ` : ''}
                    </div>
                    
                    <div class="modules-container">
                        ${modulesHTML}
                    </div>
                    
                    ${isCourseCompleted ? `
                        <div class="text-center mt-5">
                            <button class="btn btn-success-custom btn-lg" onclick="generateCertificate(${courseId})">
                                <i class="fas fa-award me-2"></i>¡Curso Completado! Obtener Certificado
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
            
            document.getElementById('course-detail-section').innerHTML = courseDetailHTML;
            document.getElementById('course-detail-section').classList.remove('hidden');
            
            // Inicializar el primer módulo expandido si no está completado
            const firstIncompleteModule = course.modules.findIndex((_, index) => 
                !progress.completedModules.includes(index)
            );
            
            if (firstIncompleteModule !== -1) {
                setTimeout(() => toggleModuleDetails(firstIncompleteModule, courseId, true), 300);
            }
        }

        // Extraer ID de YouTube de la URL
        function extractYouTubeId(url) {
            const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
            const match = url.match(regex);
            return match ? match[1] : 'dQw4w9WgXcQ'; // ID por defecto si no se encuentra
        }

        // Alternar detalles del módulo
        window.toggleModuleDetails = function(moduleIndex, courseId, forceExpand = false) {
            const detailsElement = document.getElementById(`module-details-${moduleIndex}`);
            const iconElement = document.getElementById(`expand-icon-${moduleIndex}`);
            
            if (forceExpand || detailsElement.classList.contains('expanded')) {
                detailsElement.classList.remove('expanded');
                iconElement.classList.remove('fa-chevron-up');
                iconElement.classList.add('fa-chevron-down');
            } else {
                detailsElement.classList.add('expanded');
                iconElement.classList.remove('fa-chevron-down');
                iconElement.classList.add('fa-chevron-up');
            }
        };

        // Reproducir video
        window.playVideo = function(videoUrl, courseId, moduleIndex, videoIndex) {
            const videoId = extractYouTubeId(videoUrl);
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
            
            // Marcar video como visto
            const videoKey = `${courseId}-${moduleIndex}-${videoIndex}`;
            if (appState.watchedVideos[courseId]) {
                const alreadyWatched = appState.watchedVideos[courseId].some(v => 
                    v.moduleIndex === moduleIndex && v.videoIndex === videoIndex
                );
                
                if (!alreadyWatched) {
                    appState.watchedVideos[courseId].push({
                        moduleIndex,
                        videoIndex,
                        watchedAt: new Date().toISOString()
                    });
                    
                    // Guardar en localStorage
                    saveToLocalStorage();
                    
                    // Actualizar dashboard
                    updateDashboard();
                    
                    // Actualizar vista del curso
                    showCourseDetail(courseId);
                }
            }
            
            // Mostrar modal con el video
            Swal.fire({
                title: 'Video Tutorial',
                html: `
                    <div class="video-container">
                        <iframe src="${embedUrl}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    <p class="mt-3 text-muted small">Presiona ESC para cerrar el video</p>
                `,
                width: '800px',
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'video-popup'
                }
            });
        };

        // Marcar módulo como completado
        window.markModuleAsCompleted = function(courseId, moduleIndex) {
            if (!appState.courseProgress[courseId]) {
                appState.courseProgress[courseId] = {
                    completedModules: [],
                    progress: 0
                };
            }
            
            if (!appState.courseProgress[courseId].completedModules.includes(moduleIndex)) {
                appState.courseProgress[courseId].completedModules.push(moduleIndex);
                
                // Calcular nuevo progreso
                const course = courses.find(c => c.id === courseId);
                const progressPercentage = Math.round(
                    (appState.courseProgress[courseId].completedModules.length / course.modules.length) * 100
                );
                
                appState.courseProgress[courseId].progress = progressPercentage;
                appState.courseProgress[courseId].completedAt = new Date().toISOString();
                
                // Guardar en localStorage
                saveToLocalStorage();
                
                // Actualizar vista
                showCourseDetail(courseId);
                updateDashboard();
                
                // Mostrar notificación si se completó el curso
                if (progressPercentage === 100) {
                    setTimeout(() => {
                        Swal.fire({
                            title: '¡Felicidades! 🎉',
                            html: `
                                <p>Has completado el curso <strong>${course.title}</strong> exitosamente.</p>
                                <p class="mt-3">Ahora puedes generar tu certificado de finalización.</p>
                            `,
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'Generar Certificado',
                            cancelButtonText: 'Más tarde'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                generateCertificate(courseId);
                            }
                        });
                    }, 500);
                } else {
                    Swal.fire({
                        title: 'Módulo Completado',
                        text: 'Has marcado este módulo como completado.',
                        icon: 'success',
                        confirmButtonText: 'Continuar',
                        timer: 2000
                    });
                }
            }
        };

        // Desmarcar módulo como completado
        window.unmarkModuleAsCompleted = function(courseId, moduleIndex) {
            if (appState.courseProgress[courseId]) {
                const index = appState.courseProgress[courseId].completedModules.indexOf(moduleIndex);
                if (index !== -1) {
                    appState.courseProgress[courseId].completedModules.splice(index, 1);
                    
                    // Recalcular progreso
                    const course = courses.find(c => c.id === courseId);
                    const progressPercentage = Math.round(
                        (appState.courseProgress[courseId].completedModules.length / course.modules.length) * 100
                    );
                    
                    appState.courseProgress[courseId].progress = progressPercentage;
                    
                    // Guardar en localStorage
                    saveToLocalStorage();
                    
                    // Actualizar vista
                    showCourseDetail(courseId);
                    updateDashboard();
                    
                    Swal.fire({
                        title: 'Módulo Pendiente',
                        text: 'Has marcado este módulo como pendiente.',
                        icon: 'info',
                        confirmButtonText: 'Entendido',
                        timer: 2000
                    });
                }
            }
        };

        // Navegar a módulo específico
        window.scrollToModule = function(moduleIndex) {
            const moduleElement = document.getElementById(`module-${moduleIndex}`);
            if (moduleElement) {
                moduleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Expandir el módulo
                const courseId = appState.currentCourseView;
                toggleModuleDetails(moduleIndex, courseId, true);
            }
        };

        // Generar certificado
        window.generateCertificate = function(courseId) {
            const course = courses.find(c => c.id === courseId);
            const progress = appState.courseProgress[courseId];
            
            if (!progress || progress.progress < 100) {
                Swal.fire({
                    title: 'Curso Incompleto',
                    text: 'Debes completar todos los módulos para generar el certificado.',
                    icon: 'warning',
                    confirmButtonText: 'Entendido'
                });
                return;
            }
            
            const certificateHTML = `
                <div class="certificate">
                    <div class="text-center mb-4">
                        <div class="border-bottom pb-3 mb-3">
                            <h1 class="display-4 fw-bold text-primary">CodeMaster</h1>
                            <p class="lead">Certificado de Finalización</p>
                            <p class="text-muted">Este certificado acredita que</p>
                        </div>
                        
                        <div class="my-4 py-3">
                            <h2 class="fw-bold" style="font-size: 2.5rem;">${appState.user.name}</h2>
                            <p class="mt-3">ha completado exitosamente el curso</p>
                            <h3 class="text-primary my-3">"${course.title}"</h3>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <p><strong>Duración:</strong> ${course.duration}</p>
                                <p><strong>Módulos completados:</strong> ${course.modules.length}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Fecha de finalización:</strong> ${new Date().toLocaleDateString('es-ES', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</p>
                                <p><strong>ID del Certificado:</strong> CM-${courseId}-${Date.now().toString(36).toUpperCase()}</p>
                            </div>
                        </div>
                        
                        <div class="mt-5 pt-4 border-top">
                            <div class="row">
                                <div class="col-md-6 text-start">
                                    <p class="mb-1"><strong>Instructor:</strong> Alex Rodríguez</p>
                                    <p>Desarrollador Senior</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Signature_of_John_Hancock.svg/200px-Signature_of_John_Hancock.svg.png" 
                                         style="height: 50px; opacity: 0.7;" 
                                         alt="Firma">
                                    <p class="mt-2">Director de CodeMaster</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4">
                        <button class="btn btn-primary-custom me-2" onclick="window.print()">
                            <i class="fas fa-print me-2"></i>Imprimir Certificado
                        </button>
                        <button class="btn btn-success-custom" onclick="downloadCertificate()">
                            <i class="fas fa-download me-2"></i>Descargar como PDF
                        </button>
                        <button class="btn btn-outline-secondary ms-2" onclick="shareCertificate()">
                            <i class="fas fa-share-alt me-2"></i>Compartir
                        </button>
                    </div>
                </div>
            `;
            
            document.getElementById('certificate-section').innerHTML = certificateHTML;
            document.getElementById('course-detail-section').classList.add('hidden');
            document.getElementById('certificate-section').classList.remove('hidden');
            
            // Scroll hacia el certificado
            document.getElementById('certificate-section').scrollIntoView({ behavior: 'smooth' });
        };

        // Descargar certificado (simulado)
        window.downloadCertificate = function() {
            Swal.fire({
                title: 'Descargar Certificado',
                text: 'Tu certificado se está preparando para descargar...',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false
            });
            
            setTimeout(() => {
                Swal.fire({
                    title: '¡Listo!',
                    text: 'El certificado se ha descargado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
            }, 2000);
        };

        // Compartir certificado (simulado)
        window.shareCertificate = function() {
            Swal.fire({
                title: 'Compartir Certificado',
                html: `
                    <p>Comparte tu logro en redes sociales:</p>
                    <div class="text-center my-3">
                        <button class="btn btn-primary m-2" style="background: #1877F2;">
                            <i class="fab fa-facebook me-2"></i>Facebook
                        </button>
                        <button class="btn btn-primary m-2" style="background: #1DA1F2;">
                            <i class="fab fa-twitter me-2"></i>Twitter
                        </button>
                        <button class="btn btn-primary m-2" style="background: #0A66C2;">
                            <i class="fab fa-linkedin me-2"></i>LinkedIn
                        </button>
                    </div>
                    <p class="mt-3 text-muted small">O copia el enlace para compartir:</p>
                    <div class="input-group">
                        <input type="text" class="form-control" value="https://codemaster.com/certificado/${Date.now()}" readonly>
                        <button class="btn btn-outline-secondary" onclick="navigator.clipboard.writeText(this.previousElementSibling.value)">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                `,
                showConfirmButton: false,
                showCloseButton: true
            });
        };

        // Actualizar dashboard
        function updateDashboard() {
            if (!appState.user) return;
            
            // Calcular estadísticas
            const enrolledCount = appState.enrolledCourses.length;
            
            const completedCourses = appState.enrolledCourses.filter(courseId => {
                const progress = appState.courseProgress[courseId];
                return progress && progress.progress === 100;
            }).length;
            
            // Calcular videos vistos totales
            let totalVideosWatched = 0;
            Object.values(appState.watchedVideos).forEach(videoList => {
                totalVideosWatched += videoList.length;
            });
            
            // Actualizar UI
            document.getElementById('enrolled-courses-count').textContent = enrolledCount;
            document.getElementById('completed-courses-count').textContent = completedCourses;
            document.getElementById('videos-watched-count').textContent = totalVideosWatched;
            document.getElementById('certificates-count').textContent = completedCourses;
            
            // Renderizar cursos del usuario
            renderMyCourses();
        }

        // Renderizar cursos del usuario
        function renderMyCourses() {
            const myCoursesContainer = document.getElementById('my-courses');
            
            if (!appState.user || appState.enrolledCourses.length === 0) {
                myCoursesContainer.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="fas fa-book-open fa-3x text-muted mb-3"></i>
                        <h4 class="text-muted">No tienes cursos inscritos</h4>
                        <p class="text-muted mb-4">Explora nuestros cursos e inscríbete para comenzar tu aprendizaje.</p>
                        <button class="btn btn-primary-custom" onclick="showPage('courses')">
                            <i class="fas fa-search me-2"></i>Explorar Cursos
                        </button>
                    </div>
                `;
                return;
            }
            
            myCoursesContainer.innerHTML = '';
            
            appState.enrolledCourses.forEach(courseId => {
                const course = courses.find(c => c.id === courseId);
                const progress = appState.courseProgress[courseId] || { progress: 0 };
                const progressPercentage = progress.progress;
                const lastAccessed = progress.lastAccessed ? 
                    new Date(progress.lastAccessed).toLocaleDateString('es-ES') : 
                    'Nunca';
                
                const courseCard = `
                    <div class="col-md-6 mb-4">
                        <div class="card course-card ${progressPercentage === 100 ? 'border-success' : ''}">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <h5 class="card-title mb-0">${course.title}</h5>
                                    ${progressPercentage === 100 ? 
                                        '<span class="badge bg-success"><i class="fas fa-check me-1"></i>Completado</span>' : 
                                        '<span class="badge bg-warning text-dark"><i class="fas fa-spinner me-1"></i>En Progreso</span>'
                                    }
                                </div>
                                
                                <p class="card-text text-muted small">${course.description}</p>
                                
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between small mb-1">
                                        <span>Progreso: ${progressPercentage}%</span>
                                        <span>Último acceso: ${lastAccessed}</span>
                                    </div>
                                    <div class="progress" style="height: 6px;">
                                        <div class="progress-bar progress-bar-custom" style="width: ${progressPercentage}%"></div>
                                    </div>
                                </div>
                                
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-outline-primary btn-sm continue-course-btn" data-course-id="${course.id}">
                                        <i class="fas fa-play-circle me-1"></i>
                                        ${progressPercentage === 100 ? 'Ver Certificado' : 'Continuar'}
                                    </button>
                                    <div class="text-muted small">
                                        <i class="fas fa-play-circle me-1"></i>
                                        ${appState.watchedVideos[courseId]?.length || 0}/${course.modules.reduce((total, m) => total + m.videos.length, 0)} videos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                myCoursesContainer.innerHTML += courseCard;
            });
            
            // Agregar event listeners a los botones de continuar
            document.querySelectorAll('.continue-course-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const courseId = parseInt(this.getAttribute('data-course-id'));
                    accessCourse(courseId);
                });
            });
        }

        // Mostrar alerta de inicio de sesión
        function showLoginAlert() {
            Swal.fire({
                title: 'Iniciar Sesión',
                html: `
                    <div class="mb-3">
                        <input type="email" id="login-email" class="form-control" placeholder="correo@ejemplo.com" value="alumno@codemaster.com">
                    </div>
                    <div class="mb-3">
                        <input type="password" id="login-password" class="form-control" placeholder="Contraseña" value="password123">
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="remember-me">
                        <label class="form-check-label" for="remember-me">Recordarme</label>
                    </div>
                `,
                confirmButtonText: 'Iniciar Sesión',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                showDenyButton: true,
                denyButtonText: 'Registrarse',
                preConfirm: () => {
                    const email = document.getElementById('login-email').value;
                    const password = document.getElementById('login-password').value;
                    
                    if (!email || !password) {
                        Swal.showValidationMessage('Por favor, completa todos los campos');
                        return false;
                    }
                    
                    // Simular inicio de sesión exitoso
                    appState.user = {
                        id: Date.now(),
                        name: 'Jairo Romero',
                        email: email,
                        joinDate: new Date().toISOString()
                    };
                    
                    // Guardar en localStorage
                    saveToLocalStorage();
                    
                    return true;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: '¡Bienvenido!',
                        text: 'Has iniciado sesión correctamente.',
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    });
                    
                    // Actualizar UI
                    updateUI();
                    
                    // Si estabas intentando acceder a un curso, ir al dashboard
                    if (appState.currentPage === 'courses') {
                        showPage('dashboard');
                        updateDashboard();
                    }
                } else if (result.isDenied) {
                    showRegisterAlert();
                }
            });
        }

        // Mostrar alerta de registro
        function showRegisterAlert() {
            Swal.fire({
                title: 'Crear Cuenta',
                html: `
                    <div class="mb-3">
                        <input type="text" id="register-name" class="form-control" placeholder="Nombre completo" value="Jairo Romero">
                    </div>
                    <div class="mb-3">
                        <input type="email" id="register-email" class="form-control" placeholder="correo@ejemplo.com" value="alumno@codemaster.com">
                    </div>
                    <div class="mb-3">
                        <input type="password" id="register-password" class="form-control" placeholder="Contraseña" value="password123">
                    </div>
                    <div class="mb-3">
                        <input type="password" id="register-confirm-password" class="form-control" placeholder="Confirmar contraseña" value="password123">
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="terms-check">
                        <label class="form-check-label" for="terms-check">
                            Acepto los <a href="#" class="text-primary">términos y condiciones</a>
                        </label>
                    </div>
                `,
                confirmButtonText: 'Registrarse',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                preConfirm: () => {
                    const name = document.getElementById('register-name').value;
                    const email = document.getElementById('register-email').value;
                    const password = document.getElementById('register-password').value;
                    const confirmPassword = document.getElementById('register-confirm-password').value;
                    const termsChecked = document.getElementById('terms-check').checked;
                    
                    if (!name || !email || !password || !confirmPassword) {
                        Swal.showValidationMessage('Por favor, completa todos los campos');
                        return false;
                    }
                    
                    if (password !== confirmPassword) {
                        Swal.showValidationMessage('Las contraseñas no coinciden');
                        return false;
                    }
                    
                    if (!termsChecked) {
                        Swal.showValidationMessage('Debes aceptar los términos y condiciones');
                        return false;
                    }
                    
                    // Simular registro exitoso
                    appState.user = {
                        id: Date.now(),
                        name: name,
                        email: email,
                        joinDate: new Date().toISOString()
                    };
                    
                    // Guardar en localStorage
                    saveToLocalStorage();
                    
                    return true;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: '¡Cuenta Creada!',
                        html: `
                            <p>Tu cuenta ha sido creada exitosamente.</p>
                            <p class="mt-3"><strong>${appState.user.name}</strong>, ¡bienvenido a CodeMaster!</p>
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-gift me-2"></i>
                                <strong>Regalo de bienvenida:</strong> Tienes acceso completo a todos los cursos.
                            </div>
                        `,
                        icon: 'success',
                        confirmButtonText: 'Comenzar a Aprender'
                    }).then(() => {
                        // Actualizar UI
                        updateUI();
                        
                        // Ir al dashboard
                        showPage('dashboard');
                        updateDashboard();
                    });
                }
            });
        }