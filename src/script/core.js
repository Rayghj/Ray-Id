import { gsap } from "gsap";

const navBar = document.querySelectorAll('nav-bar');
const heroSection = document.querySelectorAll('hero-section');
const aboutMe = document.querySelectorAll('about-me');
const workShow = document.querySelectorAll('work-show');
const contactMe = document.querySelectorAll('contact-me');
const footerBar = document.querySelectorAll('footer-bar');


gsap.from(navBar, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    y: -50,
});

gsap.from(heroSection, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    x: -50,
    delay: 0.25
});

gsap.from(aboutMe, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    x: 50,
    delay: 0.5
});

gsap.from(workShow, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    x: -50,
    delay: 0.75
});

gsap.from(contactMe, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    x: 50,
    delay: 1
});

gsap.from(footerBar, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 1.25
});


