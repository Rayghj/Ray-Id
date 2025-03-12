import Swal from 'sweetalert2';

class WorkShow extends HTMLElement {
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

            .works {
                padding: 0 24px;
                background: #f5f5f5;
            }

            .works .inner {
                background-color: #000;
                color: #fff;
                padding: 70px;
                border-radius: 24px;
            }

            .works .inner p.debug {
                display: inline-block;
                font-size: 14px;
                margin-bottom: 12px;
                color: #d8d8d8;
                border: 1px solid #484848;
                padding: 6px 12px;
                border-radius: 20px;
            }

            .works .inner p.debug i, .works .inner > button i {
                font-size:  18px;
            }

            .works .inner > h2 {
                font-size: 34px;
                margin-bottom: 24px;
            }

            .works .inner p.info {
                font-size: 18px;
                color:  #dedede;
                margin-bottom: 24px;
            }

            .works .inner > button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                font-size: 16px;
                border: none;
                padding: 5px 20px;
                background: #fff;
                border: 1px solid #dedede;
                border-radius: 12px;
                font-weight: 500;
                transition: all 0.3s ease;
                margin-bottom: 40px;
            }

            .works .inner > button i {
                margin-top: 8px;
                
            }

            .works .inner .items {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                justify-items: center;
                gap: 20px;
            }

            .works .inner .items .item {
                border: 1px solid #484848;
                border-radius: 16px;
                padding: 32px 24px;
                
                background: #262626;
            }

            .works .inner .items .item i {
                font-size: 34px;
                border: 1px solid #606060;
                border-radius: 10px;
                padding: 10px;
                background: #303030;
            }

            .works .inner .items .item > a {
                display: flex;
                margin: 24px 0 14px;
                color: #fff;
                font-size: 20px;
            }

            .works .inner .items .item p {
                color: #a1a1a1;
                font-size: 16px;
                line-height: 24px;
            }

            .works .inner .items .item .work-list {
                display: flex;
                flex-direction: column;
                margin: 0 0 0 20px;
            }

            .works .inner .items .item .work-list .list {
                margin: 0 0 -20px 0;
            }

            .works .inner .items .item .work-list a {
                display: flex;
                margin: 20px 0;
                font-size: 1rem;
                color: #f1f1f1;
                transition: 0.2s ease;
                cursor: pointer;
            }

            .works .inner .items .item .work-list a:hover {
                color: #a1a1a1;
            }

            .popup {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                justify-content: center;
                align-items: center;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }

            .popup-content {
                position: relative;
                width: 80%;
                max-width: 600px;
                background: transparent;
                padding: 10px;
                transform: scale(0.8);
                transition: transform 0.3s ease;
            }

            .popup-content video {
                width: 100%;
                border: 2px solid #000;
                border-radius: 10px;
            }

            .close-button {
                z-index: 9999;
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 30px;
                background: transparent;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
            }

            .popup.show {
                opacity: 1;
                visibility: visible;
            }

            .popup.show .popup-content {
                transform: scale(1);
            }

            @media screen and (max-width: 1280px) {
                .works .inner > button {
                    font-size: 14px;
                    padding: 8px 14px;
                }
            }

            @media screen and (max-width: 992px) {
                .works .inner > h2 {
                    font-size: 32px;
                }

                .works .inner .items {
                    grid-template-columns: 1fr;
                    justify-items: initial;
                }

                .works .inner .items .item i {
                    font-size: 30px;
                }

                .swal2-modal {
                    width: 60%;
                    
                }
            }

            @media screen and (max-width: 768px) {
                .works .inner {
                    padding: 50px 40px;    
                }

                .works .inner > h2 {
                    font-size: 24px;
                }

                .works .inner p.info {
                    font-size: 13px;
                }

                .works .inner button {
                    width: 100%;
                }

                .works .inner .items .item i {
                    font-size: 28px;
                }

                .works .inner .items .item > a {
                    display: inline-block;
                    margin-left: 10px;
                    font-size: 16px;
                }

                .works .inner .items .item p {
                    margin-top: 10px;
                    font-size: 14px;
                }

                .works .inner .items .item .work-list .list {
                    margin: 8px 0 -15px 0;
                }

                .works .inner .items .item .work-list a {
                    font-size: 0.9rem;
                    margin: 10px 0 10px;
                }

                .swal2-image {
                    width: 300px !important;
                    height: 200px !important;
                }

                .swal2-title {
                    font-size: 1.2rem;
                    color: #000;
                }

                .swal2-html-container {
                    font-size: 0.8rem;
                }
            }

            @media screen and (max-width: 520px) {
                .works .inner .items .item {
                    padding: 24px 20px;
                }

                .works .inner .items .item > a {
                    display: flex;
                    margin-left: 0;
                }

                .swal2-image {
                    width: 200px !important;
                    height: 150px !important;
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

            <div class="works">
                <div class="inner">
                    <h2>Works Showcase</h2>
                    <p class="info">The following are some of the works that i have created myself.</p>
                    <button>Explore More of My works <i class="ri-more-line"></i></button>

                    <div class="items">
                        <div class="item">
                            <i class="ri-blender-line"></i>
                            <a>Character & Building Design</a>
                            <p>The following is a list of works that i made :</p>
                            <ul class='work-list'>
                                <li class='list'>
                                    <a class='work1'>Simple Home Interior</a>
                                </li>
                                <li class='list'>
                                    <a class='work2'>Animation Character (AmongUs)</a>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <i class="ri-code-line"></i>
                            <a>Website</a>
                            <p>The following is a list of works that i made :</p>
                            <ul class='work-list'>
                                <li class='list'>
                                    <a href='https://rayghj.github.io/NotesApp/' target='_blank'>NotesApp</a>
                                </li>
                                <li class='list'>
                                    <a href='https://rayghj.github.io/Mie-Oriental/' target='_blank'>Mie Oriental</a>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <i class="ri-computer-line"></i>
                            <a>Computer Troubleshooting</a>
                            <p>Diagnose and solve problems with computer devices/components.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="popup" id="videoPopup">
                    <div class="popup-content">
                        <button class="close-button">×</button>
                        <video id="myVideo" loop>
                            <source src="amongus.mkv" type="video/mp4">
                            Browser Anda tidak mendukung tag video.
                        </video>
                    </div>
                </div>
        `;

        const work1 = document.querySelector('.work1');
        const work2 = document.querySelector('.work2');
        const closeButton = document.querySelector('.close-button');

        work1.addEventListener('click', () => {
            Swal.fire({
                title: "Simple Home Interior",
                text: "Made by Blender 3D",
                showConfirmButton: false,
                imageUrl: "interior.png",
                imageWidth: 500,
                imageHeight: 300,
                imageAlt: "Custom image"
            });
        });

        work2.addEventListener('click', () => {
            openPopup();
        });

        closeButton.addEventListener('click', () => {
            closePopup();
        });

        function openPopup() {
            let popup = document.querySelector("#videoPopup");
            popup.classList.add('show');
            document.querySelector("#myVideo").play();
        }

        function closePopup() {
            let popup = document.querySelector('#videoPopup');
            let video = document.querySelector("#myVideo");

            video.pause();
            video.currentTime = 0;
            popup.classList.remove('show');
        }
    }
}

customElements.define('work-show', WorkShow);