class NavBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
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
                align-items: center;
                gap: 32px;
                border: 1px solid #e8e8e8;
                position: absolute;
                top: 16px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 16px;
                padding: 12px;
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
                gap: 45px;
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
                width: 122px;
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
                .nav-links{
                    gap: 24px;
                }

                .nav-links a {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 768px) {
                .nav-container, .nav-links {
                    gap: 16px;
                }

                button {
                    display: none;
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
                <div class="logo">
                    <a href="#">RayID</a>
                </div>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </div>
                <button onclick="window.location.href='https://github.com/Rayghj?tab=repositories'"><i class="ri-github-fill"></i> My Project </button>
            </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);