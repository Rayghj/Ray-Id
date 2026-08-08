import Swal from 'sweetalert2';

class HeroSection extends HTMLElement {
    _style = null;

    constructor() {
        super();

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

            a {
                text-decoration: none;
            }

            h2 {
                font-weight: 400;
            }

            button {
                cursor: pointer;
            }

            .hero {
                margin-top: 80px;
                height: calc(100vh - 80px);
                padding: 0 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 30px;
            }

            .hero .left-section {
                display: flex;
                flex-direction: column;
                gap: 100px;
            }

            .hero .left-section .top h2 {
                font-size: 44px;
                margin-bottom: 24px;

            }

            .hero .left-section .top p {
                color: #606060;
                font-size: 18px;
                margin-bottom: 24px;
                text-align: justify;
            }

            .hero .left-section .top .buttons {
                display: flex;
                gap: 8px;
            }

            .hero .left-section .top .buttons button {
                font-size: 16px;
                border: none;
                padding: 5px 20px;
                background: #fff;
                border: 1px solid #dedede;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                font-weight: 500;
                transition: all 0.3s ease;

            }

            .hero .left-section .top .buttons button i {
                font-size: 26px;
            }

            .hero .left-section .top .buttons button.doc {
                background: #000;
                color: #fff;
            }

            .hero .left-section .top .buttons button.doc:hover {
                color: #000;
                background: #fff;
                border-color: #dedede;
            }

            .hero .left-section .top .buttons button.git:hover {
                background: #000;
                color: #fff;
                border-color: transparent;
            }

            .hero .left-section .bottom p {
                font-size: 18px;
                color: #606060;
                margin-bottom: 15px;
                margin-top: -30px;
            }

            .hero .left-section .bottom .icons {
                /* margin-left: ; */
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 24px;
                cursor: pointer;
                width: fit-content;
            }

            .hero .left-section .bottom .icons > a {
                color: #000;
            }

            .swal2-footer > a {
                color: #1f74b6;
            }

            .swal2-footer > a:hover {
                text-decoration: underline;
            }

            @media screen and (max-width: 1280px) {
                .hero .left-section .top h2 {
                    font-size: 25px;
                }

                .hero .left-section .top p {
                    font-size: 14px;
                }

                .hero .left-section .top .buttons button {
                    font-size: 14px;
                    padding: 8px 14px;
                }

                .hero .left-section .top .buttons button i {
                    font-size: 18px;
                }

                .hero .left-section .bottom p {
                    font-size: 14px;
                }
                
                .hero .left-section .bottom .icons {
                    gap: 10px;
                    font-size: 20px;
                }
            }

            @media screen and (max-width: 992px) {
                .hero {
                    margin-top: 100px;
                    flex-direction: column;
                    justify-content: center;
                    height: calc(100vh - 100px);
                }

                .hero .left-section {
                    gap: 20px;
                    align-items: center;
                }

                .hero .left-section .top {
                    text-align: center;
                }

                .hero .left-section .top .buttons {
                    justify-content: center;
                }

                .hero .left-section .bottom p {
                    margin-top: 0px;
                    font-size: 14px;
                    text-align: center;
                }
                
                .hero .left-section .bottom .icons {
                    gap: 30px;
                    font-size: 20px;
                    
                }
            }

            @media screen and (max-width: 768px) {
                .hero {
                    padding: 0 40px;
                }

                .hero > img {
                    width: 78%;
                }

                .hero .left-section .bottom p {
                    font-size: 14px;
                }
                
                .hero .left-section .bottom .icons {
                    gap: 30px;
                    font-size: 20px;
                }

                .swal2-confirm {
                    font-size: 0.9rem;
                }

                .swal2-footer > a {
                    font-size: 0.9rem;
                }
            }
        `;
    }

    _emptyContent() {
        this.innerHTML = '';
    }


    render() {
        this._emptyContent();
        this._updateStyle();

        this.innerHTML = `
            ${this._style.outerHTML}
            <div class='hero'>
                <div class="left-section">
                    <div class="top">
                        <h2>Software Engineering Student from Universitas Pendidikan Indonesia</h2>
                        <p>
                           My name is Ray Immanuel Darmawan, a Software Engineering student at Universitas Pendidikan Indonesia. I have a strong interest in information technology and experience as an IT Support, assisting with various computer-related issues. In addition, I am capable of developing custom websites tailored to specific requirements. I also have skills in creating character and building designs using Blender 3D, as well as developing simple games using Unity 3D.
                        </p>

                        <div class="buttons">
                            <button class="doc" onclick="window.location.href='#contact'"> Hire Me Now<i class="ri-arrow-down-line"></i></button>
                            <button class="git" onclick="window.open('https://github.com/Rayghj?tab=repositories', '_blank')"><i class="ri-github-fill"></i> My Github </button>

                        </div>
                    </div>
                    <div class="bottom" id="sosmed">
                        <p>Social media account</p>
                        <div class="icons">
                            <a class='req-wa'><i class="ri-whatsapp-line"></i></a>
                            <a href="https://tinyurl.com/5n6bt849" target='blank_'><i class="ri-linkedin-box-line"></i></a>
                            <a href="https://tinyurl.com/ysfs4m5n6" target='blank_'><i class="ri-instagram-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const reqWa = document.querySelector('.req-wa');

        reqWa.addEventListener('click', () => {
            Swal.fire({
                icon: "info",
                showConfirmButton: true,
                confirmButtonColor: '#1f74b6',
                title: "Get My Whatsapp via Email",
                text: "Send a request to email: rayid1805@gmail.com or just click 'Send Now'",
                footer: '<a href="mailto:rayid1805@gmail.com">Send Now?</a>'
            });

        })
    }
}

customElements.define('hero-section', HeroSection);