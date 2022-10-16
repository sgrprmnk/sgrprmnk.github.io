

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
  

    $('.navbar .menu li a').click(function () {
        /*onClick smooth Scrol*/
        $('html').css("scrollBehavior", "smooth");
    });
      var typed = new Typed(".typing-2", {
        strings: ["Backend Developer","a Full Stack Web Developer", " a Java Developer", "an AI Specialist", "an  Electrical Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: [ "Backend Developer","a Full Stack Web Developer", " a Java Developer", "an AI Specialist",  "an  Electrical Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        /*  onclick smooth scroll removing */
        $('html').css("scrollBehavior", "auto");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

