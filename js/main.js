const slider = tns({
    container: '.my-slider',
    items: 1,
    loop: false,
    nav: false,
    nextButton: '.next',
    prevButton: '.prev'
});

document.addEventListener("DOMContentLoaded", () => {
    let cartButton = document.querySelector('.cart')
    let cart = document.querySelector('.cart_container')
    let space = document.querySelectorAll('section')
    let navOpen = document.querySelector(".nav_toggle")
    let navClose = document.querySelector(".nav_close")
    const nav = document.querySelector("nav")

    function toggleNav() {
        nav.classList.toggle("active")
    }

    navOpen.onclick =  toggleNav
    navClose.onclick =  toggleNav

    space.forEach(element => {
        element.addEventListener('click', () => {
            cart.classList.remove('show_cart')
            cartButton.classList.remove("active")
            nav.classList.remove("active")
        })
    })

    cartButton.addEventListener('click', () => {
        cart.classList.toggle("show_cart")
        cartButton.classList.toggle("active")
    })

    (function () {
        
    })();
})