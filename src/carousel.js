const menuTab = document.querySelector('.menu-tab');
const menuOptions = document.querySelector('.menu-options');
const homeTab = document.querySelector('.home');
const contact = document.querySelector('.contact');

function showDrop() {
    menuTab.addEventListener('click', () => {
        menuTab.classList.toggle('click');
        menuOptions.classList.toggle('click');
    });

    homeTab.addEventListener('mouseover', () => {
        contact.classList.toggle('show');
    });

    homeTab.addEventListener('mouseout', () => {
        contact.classList.remove('show');
    })
};

export { showDrop }