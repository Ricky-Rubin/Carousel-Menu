const menuTab = document.querySelector('.menu-tab');
const menuOptions = document.querySelector('.menu-options');
const homeOpt = document.querySelector('.homeOpt');
const contact = document.querySelector('.contact');
const detailTab = document.querySelector('.details');
const homeElement = document.querySelector('.home')
const allTabs = document.querySelectorAll('.opt');

function showDrop() {
    let currentMenu = null;

    menuTab.addEventListener('click', () => {
        menuTab.classList.toggle('click');
        menuOptions.classList.toggle('click');

        allTabs.forEach((tab) => {
            tab.classList.remove('show');
        })
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
};

export { showDrop }