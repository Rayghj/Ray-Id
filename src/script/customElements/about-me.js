class AboutMe extends HTMLElement {
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

            img {
                object-fit: cover;
            }

            h2 {
                font-weight: 400;
            }

            .about {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: #f5f5f5;
                padding: 50px;

            }

            .about > p {
                font-size: 18px;
                color: #000;
                border: 1px solid #dedede;
                padding: 6px 14px;
                border-radius: 16px;
                margin-bottom: 12px;
                /* background: #a1a1a1; */
            }

            .about > h2 {
                font-size: 18px;
                text-align: center;
                margin-bottom: 30px;
            }

            .about .items {
                display: flex;
                justify-content: center;
                gap: 24px;
            }

            .about .items .item {
                width: 26%;
                border: 1px solid #e8e8e8;
                border-radius: 16px;
                background: #f1f1f1;
                padding: 0 0 30px;
            }

            .about .items .item .inner {
                background: #fff;
                padding: 24px;
                border-radius: 16px;
                border: 1px solid #e8e8e8;
                min-height: 365px;
            }

            .about .items .item .inner img {
                width: 100%;
                height: 194px;
                margin-bottom: 16px;
                border-radius: 12px;
            }

            .about .items .item:nth-child(1) .inner img {
                margin-bottom: 18px;
            }

            .about .items .item .inner a {
                font-size: 18px;
                color: #000;
                margin-bottom: 10px;
                display: block;
            }

            .about .items .item .inner p {
                color: #606060;
                font-size: 15px;
            }
            
            @media screen and (max-width: 1280px) {
    
                .about > h2 {
                    font-size: 14px;
                }
                
                .about .items .item .inner {
                    min-height: 340px;
                }
                
                .about .items .item .inner img {
                    height: 166px;
                }
                    
                .about .items .item .inner a, .works .inner > p.info, .contact .items .item p {
                    font-size: 15px;
                }
                
                .about .items .item .inner p {
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 1190px) {
                .about .items .item .inner img {
                    height: 130px;
                }
            }

            @media screen and (max-width: 992px) {
                .about .items .item .inner img {
                    height: auto;
                }

                .about .items .item:nth-child(1) .inner img {
                    margin-bottom: 48px;
                }

                .about .items {
                    flex-wrap: wrap;
                }

                .about .items .item {
                    width: 40%;
                }
            }

            @media screen and (max-width: 850px) {
                .about .items .item:nth-child(1) .inner img {
                    margin-bottom: 44px;
                }
            }

            @media screen and (max-width: 768px) {
                .about > p {
                    font-size: 16px;
                }

                .about > h2 {
                    font-size: 14px;
                }

                .about .items .item {
                    width: 80%;
                }

                .about .items .item .inner img {
                    height: 65%;
                    max-height: 350px;
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

            <div class="about">
                <p>About Me</p>
                <h2>I can create several design using Blender 3D, make beautiful websites, and provide computer troubleshooting services.</h2>
                <div class="items">
                <div class="item">
                    <div class="inner">
                        <img src="interior.png">
                        <a href="#works">Create various types of character and building designs</a>
                        <p>By using Blender 3D software, I can create various types of character and building designs.</p>
                    </div>
                </div>
            
                <div class="item">
                    <div class="inner">
                        <img src="coding.png">
                        <a href="#works">Front-End Web Developer</a>
                        <p>Develop websites that use lines of HTML, CSS, and Javascript code to make the web appearance more attractive.</p>
                    </div>
                </div>
                        
                <div class="item">
                    <div class="inner">
                        <img src="itsupport.png">
                        <a href="#works">IT Support</a>
                        <p>Diagnosing and troubleshooting hardware & software on computers</p>
                    </div>
                </div>
                </div>
            </div>
        `;
    }
}

customElements.define('about-me', AboutMe);