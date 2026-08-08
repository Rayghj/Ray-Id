class NavBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _handleResize = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
        this._handleResize = () => {
            if (window.innerWidth > 992) {
                this.classList.remove('menu-open');
                this._syncMenuState();
            }
        };

        window.addEventListener('resize', this._handleResize);
        this._syncMenuState();
    }

    disconnectedCallback() {
        if (this._handleResize) {
            window.removeEventListener('resize', this._handleResize);
        }
    }

    _updateStyle() {
        this._style.textContent = `
            @import url('https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css');

            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Inter", sans-serif;
            }

            .nav-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                border: 1px solid #e8e8e8;
                position: fixed;
                top: 50%;
                left: 16px;
                transform: translateY(-50%);
                border-radius: 16px;
                padding: 16px;
                z-index: 1000;
            }

            .nav-header {
                display: none;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
            }

            .nav-toggle {
                display: none;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 12px;
                border: 1px solid transparent;
                background: #000;
                color: #fff;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .nav-toggle i {
                font-size: 22px;
            }

            .nav-panel {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 18px;
                width: 100%;
            }

            a {
                text-decoration: none;
            }

            .logo {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .logo a {
                color: #000;
                font-weight: 600;
                cursor: default;
            }

            .nav-links {
                display: flex;
                flex-direction: column;
                gap: 18px;
            }

            .nav-links a {
                font-size: 16px;
                color: #606060;
                transition: all 0.3s ease;
            }

            .nav-links a:hover {
                color: #dedede;
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3px;
                font-size: 14px;
                height: 32px;
                width: 100%;
                background: #000;
                color: #fff;
                border-radius: 8px;
                border: 1px solid transparent;
                transition: all 0.3s ease;
            }

            button i {
                font-size: 20px;
            }

            button:hover {
                color: #000;
                background: #fff;
                border-color: #dedede;
            }

            @media screen and (max-width: 1280px) {
                .nav-container {
                    gap: 16px;
                    padding: 12px;
                }

                .nav-links{
                    gap: 14px;
                }

                .nav-links a {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 992px) {
                .nav-container {
                    gap: 0;
                    align-items: stretch;
                    top: 16px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(100% - 32px);
                    padding: 12px 16px;
                    border-radius: 18px;
                }

                .nav-header {
                    display: flex;
                }

                .nav-toggle {
                    display: flex;
                }

                .nav-panel {
                    max-height: 0;
                    opacity: 0;
                    visibility: hidden;
                    overflow: hidden;
                    transform: translateY(-6px);
                    transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
                }

                :host(.menu-open) .nav-panel {
                    max-height: 280px;
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    padding-top: 12px;
                }

                .nav-links {
                    gap: 14px;
                    width: 100%;
                }

                button {
                    width: 100%;
                }
            }

            @media screen and (max-width: 768px) {
                button {
                    font-size: 13px;
                }
            }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }


    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.innerHTML += `
            ${this._style.outerHTML}

            <div class='nav-container'>
                <div class="nav-header">
                    <div class="logo">
                        <a href="#">RayID</a>
                    </div>
                    <button class="nav-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false">
                        <i class="ri-menu-3-line"></i>
                    </button>
                </div>
                <div class="nav-panel">
                    <div class="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#works">Works</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button class="project-button" type="button"><i class="ri-github-fill"></i> My Project </button>
                </div>
            </div>
        `;

        const toggleButton = this._shadowRoot.querySelector('.nav-toggle');
        const projectButton = this._shadowRoot.querySelector('.project-button');
        const navLinks = this._shadowRoot.querySelectorAll('.nav-links a');

        const closeMenu = () => {
            this.classList.remove('menu-open');
            this._syncMenuState();
        };

        toggleButton.addEventListener('click', () => {
            this.classList.toggle('menu-open');
            this._syncMenuState();
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        projectButton.addEventListener('click', () => {
            closeMenu();
            window.open('https://github.com/Rayghj?tab=repositories', '_blank');
        });
    }

    _syncMenuState() {
        const toggleButton = this._shadowRoot.querySelector('.nav-toggle');
        const menuIcon = this._shadowRoot.querySelector('.nav-toggle i');

        if (!toggleButton || !menuIcon) {
            return;
        }

        const isOpen = this.classList.contains('menu-open');

        toggleButton.setAttribute('aria-expanded', String(isOpen));
        menuIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-3-line';
    }
}

customElements.define('nav-bar', NavBar);