class FooterBar extends HTMLElement {
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
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Inter", sans-serif;
            }

            a {
                text-decoration: none;
            }

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 50px;
                padding: 1rem;
                background: #1f1f1f;
                border-radius: 24px 24px 0 0;
            }

            a, p {
                font-size: 13px;
                color: #606060;
                transition: all 0.3s ease;
            }

            a:hover {
                color: #fff;
            }

            @media screen and (max-width: 768px) {
                a, p {
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 520px) {
                div {
                    gap: 20px;
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

            <div>
                <a href="#">Terms of Services</a>
                <a href="#">Privacy Policy</a>
                <p>Ray ID : GHJ181105</p>
            </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);