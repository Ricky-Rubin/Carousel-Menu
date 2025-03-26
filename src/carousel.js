const menuTab = document.querySelector('.menu-tab');
const menuOptions = document.querySelector('.menu-options');
const homeOpt = document.querySelector('.homeOpt');
const contact = document.querySelector('.contact');
const detailTab = document.querySelector('.details');
const homeElement = document.querySelector('.home')
const admTab = document.querySelector('.adm');
const admOptions = document.querySelector('.admissions');

function showDrop() {
    let currentMenu = null;

    menuTab.addEventListener('click', () => {
        menuTab.classList.toggle('click');
        menuOptions.classList.toggle('click');

        if (currentMenu === contact) {
            contact.classList.remove('show');
            detailTab.textContent = 'Contact +';
        };

        if (currentMenu === homeOpt) {
            homeOpt.classList.remove('show');
            homeElement.textContent = 'Home +';
        };

        if (currentMenu === admOptions) {
            admOptions.classList.remove('show');
            admTab.textContent = 'Admissions +';
        }

        currentMenu = null;
    });

    function closeCurrentMenu() {
        if (currentMenu) {
            currentMenu.classList.remove('show');
        }

        if (currentMenu === contact) {
            detailTab.textContent = contact.classList.contains('show') ? 'Contact -' : 'Contact +';
        };

        if (currentMenu === homeOpt) {
            homeElement.textContent = homeOpt.classList.contains('show') ? 'Home -' : 'Home +';
        };

        if (currentMenu === admOptions) {
            admTab.textContent = admOptions.classList.contains('show') ? 'Admissions -' : 'Admissions +';
        }
    }

    detailTab.addEventListener('click', () => {
        closeCurrentMenu();

        if (currentMenu === contact) {
            contact.classList.remove('show')
        } else {
            contact.classList.add('show');
        }

        detailTab.textContent = contact.classList.contains('show') ? 'Contact -' : 'Contact +';
        currentMenu = contact.classList.contains('show') ? contact : null;
    });

    // detailTab.addEventListener('mouseout', () => {
    //     contact.classList.remove('show');
    // })                                               This rule code block is for the mouseover-mouseout event options.

    homeElement.addEventListener('click', () => {
        closeCurrentMenu();

        if (currentMenu === homeOpt) {
            homeOpt.classList.remove('show');
        } else {
            homeOpt.classList.add('show');
        }
        
        homeElement.textContent = homeOpt.classList.contains('show') ? 'Home -' : 'Home +';
        currentMenu = homeOpt.classList.contains('show') ? homeOpt : null;
    });

    // homeElement.addEventListener('mouseout', () => {
    //     homeTab.classList.remove('show');
    // });                                              This rule code block is for the mouseover-mouseout event options. 

    admTab.addEventListener('click', () => {
        closeCurrentMenu();

        if (currentMenu === admOptions) {
            admOptions.classList.remove('show');
        } else {
            admOptions.classList.add('show');
        }

        admTab.textContent = admOptions.classList.contains('show') ? 'Admissions -' : 'Admissions +';
        currentMenu = admOptions.classList.contains('show') ? admOptions : null;
    })
};


function showCarousel() {
    let slideNumber = 1;
    showSlide(slideNumber);

    function currentSlide(n) {
        showSlide(slideNumber = n);
    };

    function prevOrNext(n) {
        showSlide(slideNumber += n);
    };

    const previous = document.querySelector('.prev');
    const next = document.querySelector('.next');

    function showSlide(n) {
        let i;
        let slides = document.getElementsByClassName('frame');
        let dots = document.getElementsByClassName('dot');
        if (n > slides.length) {
            slideNumber = 1;
        }

        if (n < 1) {
            slideNumber = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace('active', '');
        }

        slides[slideNumber - 1].style.display = 'block';
        dots[slideNumber - 1].className += " active";
    }

    previous.addEventListener('click', () => {
        prevOrNext(-1);
    });

    next.addEventListener('click', () => {
        prevOrNext(1);
    });

    document.querySelector('.one').addEventListener('click', () => {
        currentSlide(1);  
    });

    document.querySelector('.two').addEventListener('click', () => {
        currentSlide(2);
    });

    document.querySelector('.three').addEventListener('click', () => {
        currentSlide(3);
    });

    document.querySelector('.four').addEventListener('click', () => {
        currentSlide(4);
    })



    // let slidePlace = 0;
    // autoShow();

    // function autoShow() {
    //     let i;
    //     let slide = document.getElementsByClassName('frame');
    //     let dots = document.getElementsByClassName('dot');

    //     for (let i = 0; i < slide.length; i++) {
    //         slide[i].style.display = 'none';
    //     }

    //     slidePlace++;
    //     if (slidePlace > slide.length) {
    //         slidePlace = 1
    //     };
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //       }
    //     slide[slidePlace-1].style.display = 'block';
    //     dots[slidePlace-1].className += " active";
    //     setTimeout(autoShow, 3500);
    // }                                                THIS BLOCK OF CODE IS TO LET THE CAROUSEL RUN AUTOMATICALLY.
}

export { showDrop };
export { showCarousel };