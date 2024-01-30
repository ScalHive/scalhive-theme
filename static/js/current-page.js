//for desktop
const nav_item = document.querySelectorAll('.nav-menu-list-item');
nav_item.forEach(
    (nav_link) => {
        if(nav_link.href === window.location.href){
            nav_link.setAttribute('aria-current', 'page');
        }
    }
)

// for mobile
const nav_item_m = document.querySelectorAll('.nav-menu-list-item-m');
nav_item_m.forEach(
    (nav_link) => {
        if(nav_link.href === window.location.href){
            nav_link.setAttribute('aria-current', 'page');
        }
    }
)