	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    // ScrollReveal({ 
    //     //reset: true,
    //     distance:'80px',
    //     duration:2000,
    //     delay:200
    // });
    
    // ScrollReveal().reveal('.home-text, .heading', { origin:'top'});
    // ScrollReveal().reveal('.home-img, .services-container,.portfolio-box, .contact form' , { origin:'bottom'});
    // ScrollReveal().reveal('.home-text h1, .about-img' , { origin:'left'});
    // ScrollReveal().reveal('.home-text p, ."about-text' , { origin:'right'});
    


    const observer = new IntersectionObserver ((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else{
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.home');
    hiddenElements.forEach((el) => observer.observe(el));

    const aboutElements = document.querySelectorAll('.about');
    aboutElements.forEach((el) => observer.observe(el));
    
    