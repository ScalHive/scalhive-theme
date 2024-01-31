//for desktop
document.querySelectorAll('.nav-menu-list-item').forEach(
    (nav_link) => {
        if(nav_link.href === window.location.href){
            nav_link.setAttribute('aria-current', 'page');
        }
    }
)

// for mobile
document.querySelectorAll('.nav-menu-list-item-m').forEach(
    (nav_link) => {
        if(nav_link.href === window.location.href){
            nav_link.setAttribute('aria-current', 'page');
        }
    }
)