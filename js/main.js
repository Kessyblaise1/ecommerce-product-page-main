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
        cart.classList.remove("show_cart")
        cartButton.classList.remove("active");
    }

    window.addEventListener('scroll', () => {
        nav.classList.remove("actve")
        cart.classList.remove("show_cart")
        cartButton.classList.remove("active")
    })

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

    // INCREMENTING PRODUCT QUANTITY
    let plus = document.querySelector(".plus")
    let minus = document.querySelector(".minus")
    let quantity = parseInt(document.querySelector(".quantity").textContent)

    plus.addEventListener("click", () => {
        quantity++
        document.querySelector(".quantity").textContent = quantity
    })

    minus.addEventListener("click", (e) => {
        if(quantity <= 1 ){
            e.preventDefault()
        }else{
            quantity--
            document.querySelector(".quantity").textContent = quantity
        }
    })





    const cartContainer = document.querySelector(".container")

    let orderButton = document.querySelector(".add_btn")
    orderButton.addEventListener('click', () => {
        let container = orderButton.parentElement.parentElement.parentElement
        
        const empty = document.querySelector(".empty")
        empty.style.display = "none"

        // STORING ITEMS IN LOCALSTORAGE
        const product = {
            "title": container.querySelector(".subtitle").textContent,
            "price": Number(container.querySelector(".current_price").textContent.split("$").join('')),
            "quantity": Number(container.querySelector(".quantity").textContent),
            "productImage": container.querySelector(".product_image").src
        }

        let totalPrice = product.price*product.quantity

        let cartProduct = document.createElement('div')
        cartProduct.classList.add("cart_item")


        cartProduct.innerHTML = `
            <div class="details frow">
                <img class="cart_item_image" src="${product.productImage}" alt="cart image">
                <div class="info fcol">
                    <p class="cart_item_title">${product.title}</p>
                    <div class="cart_item_price frow">
                        <p class="cart_item_current_price">$${product.price}</p>
                        <span class="amount">x${product.quantity}</span>
                        <p class="cart_item_total_price">$${totalPrice}</p>
                    </div>
                </div>
                <svg class="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
            <button class="btn cart_item_btn">Checkout</button>
        `

        if(cartContainer.firstElementChild){
            cartContainer.insertBefore(cartProduct, cartContainer.firstChild)
        }else{
            cartContainer.appendChild(cartProduct)
        }
    })


})