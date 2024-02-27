window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".header-content-nav-down-list__btn").forEach(item => {
        item.addEventListener("click", function () {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".content-menu");

            document.querySelectorAll(".header-content-nav-down-list__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".content-menu").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("content-menu--active");
                }
            })
            dropdown.classList.toggle("content-menu--active");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function (e) {
        let target = e.target;
        if (!target.closest(".header-content-nav-down-list")) {
            document.querySelectorAll(".content-menu").forEach(el => {
                el.classList.remove("content-menu--active");
            })
            document.querySelectorAll(".header-content-nav-down-list__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    });

    // skrollto

    $('.scrollto a').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 320, // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });

        return false;
    });

    // simplebar

    new SimpleBar(document.querySelector("#simplebar1"), {
        autoHide: false,
        scrollbarMaxSize: 25,
    });
    new SimpleBar(document.querySelector("#simplebar2"), {
        autoHide: false,
        scrollbarMaxSize: 25,
    });
    new SimpleBar(document.querySelector("#simplebar3"), {
        autoHide: false,
        scrollbarMaxSize: 25,
    });
    new SimpleBar(document.querySelector("#simplebar4"), {
        autoHide: false,
        scrollbarMaxSize: 25,
    });
    new SimpleBar(document.querySelector("#simplebar5"), {
        autoHide: false,
        scrollbarMaxSize: 25,
    });


    // burger-menu

    document.querySelector('#burger__btn-open').addEventListener('click', function () {
        document.querySelector('#burger-menu').classList.add('is-active');
    });
    document.querySelector('#burger-close').addEventListener('click', function () {
        document.querySelector('#burger-menu').classList.remove('is-active');
    });

    // header-search

    document.querySelector(".header__btn-search").addEventListener("click", function () {
        document.querySelector(".header-form").classList.add("form__active");
        this.classList.add("active");
    })

    document.addEventListener("click", function (e) {
        let target = e.target;
        let form = document.querySelector(".header-form");
        if (!target.closest(".header-content-search")) {
            form.classList.remove("form__active");
            form.querySelector("input").value = "";
            document.querySelector(".header__btn-search").classList.remove("active")
        }
    })
    document.querySelector(".search-btn-close").addEventListener("click", function () {
        document.querySelector(".header-form").classList.remove("form__active");
        this.classList.remove("active");
    })

    // choises

    const element = document.querySelector('#select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });

    // accordion

    $(".accordion").accordion({
        heightStyle: 'content',
    });

    //   accordion-tabs

    document.querySelectorAll('.tabs-catalog-nav__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;
            document.querySelectorAll('.tabs-catalog-nav__btn').forEach(function (btn) {
                btn.classList.remove('tabs-catalog-nav__btn--active')
            });
            e.currentTarget.classList.add('tabs-catalog-nav__btn--active');
            document.querySelectorAll('.catalog-tabs-item').forEach(function (tabsBtn) {
                tabsBtn.classList.remove('catalog-tabs-item--active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog-tabs-item--active');
        });
    });

    // slider

    const galleryswiper = new Swiper('.swiper-gallery', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination-gallery',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            type: 'fraction'
        },

        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,

        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            1650: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        }

    });
    const partnersswiper = new Swiper('.swiper-partners', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination-partners',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            type: 'fraction'
        },

        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,

        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            1650: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        }

    });

    const eventsswiper = new Swiper('.swiper-events', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination-events',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-btn-next-event',
            prevEl: '.swiper-btn-prev-event',
        },

        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 50,

        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0
            },
            630: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50
            },
            1650: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 50
            }
        }

    });

    // tooltip

    tippy('#myButton1', {
        content: "Пример современных тенденций современная методология разработки",
        theme: 'violet',
    });
    tippy('#myButton2', {
        content: "В стремлении повысить качество",
        theme: 'violet',
    });
    tippy('#myButton3', {
        content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
        theme: 'violet',
    });

    // form

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(selector);

    new JustValidate('.contacts-content-form', {
        colorWrong: '#D11616',
        rules: {
            name: {
                required: true,
                minLength: 3,
                maxLength: 30
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Number(phone) && phone.lenght === 10;
                },
            },
        },
        messages: {
            name: 'Недопустимый формат',
            tel: {
                required: 'Укажите ваш телефон',
            }
        }
    });

    // map

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.75846806898367, 37.60108849999989],
            zoom: 15,
            controls: ['geolocationControl', 'zoomControl']
        });

        var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
            preset: 'islands#violetCircleDotIcon'
        });

        myMap.geoObjects.add(myPlacemark);
    }

});