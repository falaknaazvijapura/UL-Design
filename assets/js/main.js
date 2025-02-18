
// CLOSE TOPBAR JS

let closebtn = document.getElementById("closeIcon");
let topBar = document.getElementById("topbar");

function handleCloseTopBar() {

    if (closebtn) {

        topBar.style.display = "none";
        console.log("it is okey");

    }

}

// TRIGGER NAVBAR TOGGLE

const handleNavToggle = () => {

    let navbar = document.getElementById("navbar");

    if (navbar.classList.contains('show-navbar')) {

        navbar.classList.remove('show-navbar');
        console.log("Navbar is hidden");

    } else {

        navbar.classList.add('show-navbar');
        console.log(navbar.classList);

    }

}

// INITIALIZE SWIPER

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    breakpoints: {
        767: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        0: {

            slidesPerView: 1,

        },
    },

});


// TESTIMONIAL SWIPER


var swiper = new Swiper(".testimonial-swiper", {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {

        el: ".testimonial-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return number < 10 ? "0" + number : number; // Adds "0" for single digits
        },
        formatFractionTotal: function (number) {
            return number < 10 ? "0" + number : number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> of <span class="' + totalClass + '"></span>';
        },
        clickable: true,
    },

    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },

    breakpoints: {
        767: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        0: {

            slidesPerView: 1,

        
        },
    },

});

