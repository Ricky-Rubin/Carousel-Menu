const menuTab = document.querySelector('.menu-tab');
const menuOptions = document.querySelector('.menu-options');

function showDrop() {
    menuTab.addEventListener('click', () => {
        menuTab.classList.toggle('click');
        menuOptions.classList.toggle('click');
    });
};

export { showDrop }