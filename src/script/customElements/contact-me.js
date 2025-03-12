class ContactMe extends HTMLElement {
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

            button {
                cursor: pointer;
            }

            h2 {
                font-weight: 400;
            }

            .contact {
                padding: 100px 60px;
                background: #f5f5f5;
            }

            .contact > h2 {
                font-size: 34px;
                margin-bottom: 40px;
            }

            .contact .items {
                display: flex;
                background: #fff;
                border-radius: 12px;
            }

            .contact .items .item {
                width: 50%;
                padding: 30px;
                border: 1px solid #dedede;
            }

            .contact .items .item:nth-child(1) {
                border-radius: 12px 0 0 12px;
            }
            .contact .items .item:nth-child(2) {
                border-radius: 0 12px 12px 0;
            }

            .contact .items .item a {
                font-size: 24px;
                color: #000;
                display: inline-block;
                margin-bottom: 16px;
            }

            .contact .items .item p {
                font-size: 20px;
                color: #606060;
                margin-bottom: 26px;
            }


            .contact .items .item button {
                font-size: 16px;
                border: none;
                padding: 5px 20px;
                background: #000;
                color: #fff;
                border: 1px solid #dedede;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                font-weight: 500;
                transition: all 0.3s ease;
            }

            .contact .items .item button:hover {
                color: #000;
                background: #fff;
                border-color: #dedede;
            }

            @media screen and (max-width: 1776px) {
                .contact .items .item:nth-child(1) button {
                    margin-top: 44px;
                }
            }

            @media screen and (max-width: 1280px) {
                .contact .items .item a {
                    font-size: 18px;
                }

                .contact .items .item p {
                    font-size: 15px;
                }
                
                .contact .items .item:nth-child(1) button {
                    margin-top: 42.5px;
                }
            } 

            @media screen and (max-width: 992px) {
                .contact > h2 {
                    font-size: 32px;
                }
                .contact .items .item button {
                    width: 100%;
                }

                .contact .items .item:nth-child(1) button {
                    margin-top: 42.5px;
                }
            }

            @media screen and (max-width: 977px) {
                .contact .items .item:nth-child(2) button {
                    margin-top: 42.5px;
                }
            }

            @media screen and (max-width: 850px) {
                .contact .items .item:nth-child(1) button {
                    margin-top: 42.5px;
                }

                .contact .items .item:nth-child(2) button {
                    margin-top: 0px;
                }
            }

            @media screen and (max-width: 768px) {
                .contact {
                    padding: 100px 40px;
                }

                .contact > h2 {
                    font-size: 22px;
                }

                .contact .items {
                    flex-wrap: wrap;
                }

                .contact .items .item {
                    width: 100%;
                }

                .contact .items .item:nth-child(1) {
                    border-radius: 12px 12px 0 0;
                }

                .contact .items .item:nth-child(2) {
                    border-radius: 0 0 12px 12px;
                }
            }

            @media screen and (max-width: 520px) {
                .contact .items .item button {
                    font-size: 0.8rem;
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

            <div class="contact">
                <h2>Want to collaborate or want to ask more about me ?</h2>
                <div class="items">
                    <div class="item">
                        <a>Contact Me Via Email</a>
                        <p>Let's talk about the project by contacting me on email</p>
                        <button onclick="window.location.href='mailto:rayid1805@gmail.com'">Send Email</button>
                    </div>
                    <div class="item">
                        <a>Contact Me Via Social Media</a>
                        <p>Let's talk about works or just ask about me by contacting my social media accounts</p>
                        <button onclick="window.location.href='#home'">Get Sosmed</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-me', ContactMe);