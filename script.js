// ================= navbar toggle =================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ================= menu active =================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let iconTop = document.querySelector('.footer-iconTop');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document
                    .querySelector('header nav a[href*= ' + id + ']')
                    .classList.add('active');
            });
            iconTop.style.display = 'none';
        }
        if (top > 150) iconTop.style.display = 'block';
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ================= Scroll Reveal =================
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
    '.home-img, .service-container, portfolio-box, .contact form , .portfolio-box',
    { origin: 'bottom' },
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const btnSubmit = document.getElementById('btn');

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    if (
        name.length == 0 ||
        email.length == 0 ||
        subject.length == 0 ||
        phone.length == 0 ||
        message.length == 0
    ) {
        alert('no is required');
    } else {
        if (!name.match(/^[A-Za-z]*$/)) {
            alert('Cannot be left blank');
        }

        if (phone.length !== 10) {
            alert('Phone no should be 10 digits');
        }
        if (!phone.match(/^[0-9]{10}$/)) {
            alert('Only digits please');
        }

        if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z*[\.][a-z]{2,4}$/)) {
            alert('Email Invalid');
        }
    }
}),
    function sendMail(e) {
        // e.preventDefault();

        if (
            params.name !== '' ||
            params.email !== '' ||
            params.subject !== '' ||
            params.phone !== '' ||
            params.message !== ''
        ) {
            // if(
            //     params.phone.le
            // )
            const serviceID = 'service_asqge38';
            const templateID = 'template_ki5e1rd';

            emailjs
                .send(serviceID, templateID, params)
                .then(res => {
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('subject').value = '';
                    document.getElementById('phone').value = '';
                    document.getElementById('message').value = '';
                    console.log(res);
                    alert('Your message sent successfully!!');
                })
                .catch(err => console.log(err));
        } else {
            alert('không được để trống');
        }
    };
