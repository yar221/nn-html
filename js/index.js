const burger = document.querySelector(".header_burger")
const menu = document.querySelector(".header-menu")
const body = document.querySelector("body")


burger.addEventListener('click', () => {
    
    if(burger.classList.contains('active')){
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
    }else{
        burger.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')
    }
})
new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    allowTouchMove: true,
    autoHeight:true,
    autoplay: {
        delay: 3000,
    },
    pauseOnMouseEnter: true,
    speed: 1000,
})

new Swiper('.clients_swiper', {
    // Optional parameters
    loop: true,

    pagination: {
        el: '.swiper-pagination1',
        clickable:true,
    },

    allowTouchMove: true,
    autoHeight:true,
    autoplay: {
        delay: 3000,
    },
    pauseOnMouseEnter: true,
    speed: 1000,
    slidesPerView: 1.5,
    spaceBetween: 64,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        631: {
            slidesPerView: 1.5,
        },
        
      }
})
const listItem = document.querySelectorAll('.questions_list-item')
const dropdown = document.querySelectorAll('.dropdown')
const bottomText = document.querySelectorAll('.item_bottom')
for(let i = 0; i < listItem.length; i++){
    listItem[i].addEventListener('click', () => {
        if(!dropdown[i].classList.contains('dropdown_active')){
            // const interval = setInterval(() => {
                dropdown[i].classList.add('dropdown_active')
                bottomText[i].style.display = 'flex'
            // }, 1000)
            // clearInterval(interval)
        }else{
            dropdown[i].classList.remove('dropdown_active')
            bottomText[i].style.display = 'none'
        }
        
    })
}