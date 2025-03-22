
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId); 
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});

const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        console.log('Form submitted successfully!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        contactForm.reset();
        alert('Thank you for reaching out! I will get back to you soon.');
    });
}
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" width="300" height="250">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank">View Project</a>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const targetId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(targetId)) {
                    link.classList.add('active');
                }
            });
        }
    });
});