// Loader
$(window).on("load", function () {
    $(".loader-container").fadeOut(500, function () {
        $(this).remove();
    });
});

// scroll nav
let screenHeight = $(window).height();

$(window).scroll(function () {
    let currentHeight = $(this).scrollTop();

    if (currentHeight >= screenHeight) {
        $(".site-nav").addClass("site-nav-scroll");
    } else {
        $(".site-nav").removeClass("site-nav-scroll");

        setActive("home");
    }
});
    
    
// Active nav 1
function setActive(current) {

    $(".nav-link").removeClass("current-section");

    $(`.nav-link[href='#${current}']`).addClass('current-section');

}

function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {

        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSectionId);
            setActive(currentSectionId);
        }

    });

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    });

}
navScroll();

    
//wow js
new WOW().init();


// Pricing slide
$(".pricing-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
        }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});