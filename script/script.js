// Мобильное меню
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Слайдер (предполагается, что используется Bootstrap Carousel)
$(document).ready(function(){
    $('.carousel').carousel();
});
