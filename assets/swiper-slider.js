// shipping swiper slider

document.addEventListener('DOMContentLoaded', function() {
  let shippingSwipers = [];

  function initShippingSwiper(swiperContainer) {
    var desktop = swiperContainer.data("desktop");
    var largeTablet = swiperContainer.data("large-tablet");
    var tablet = swiperContainer.data("tablet");
    var mobile = swiperContainer.data("mobile");
    var autoplay = swiperContainer.data("autoplay");

    var shippingSwiper = new Swiper(swiperContainer, {
      slidesPerView: desktop,
      spaceBetween: 30,
      autoplay: autoplay,
      grabCursor: true,
      freeMode: false,
      mousewheel: false,
      navigation: {
        nextEl: swiperContainer.find('.swiper-button-next'),
        prevEl: swiperContainer.find('.swiper-button-prev'),
      },
      pagination: {
        el: swiperContainer.find(".shipping-swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: mobile,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: tablet,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: largeTablet,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: desktop,
          spaceBetween: 30,
        },
      },
    });

    shippingSwipers.push(shippingSwiper);
  }

  // Initialize shipping swiper on page load
  $('.Shipping-inner-row').each(function () {
    initShippingSwiper($(this));
  });

  document.addEventListener('shopify:section:select', function () {
    // Reinitialize shipping swiper on section select
    shippingSwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    shippingSwipers = [];
    $('.Shipping-inner-row').each(function () {
      initShippingSwiper($(this));
    });
  });

  document.addEventListener('shopify:section:load', function () {
    // Reinitialize shipping swiper on section load
    shippingSwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    shippingSwipers = [];
    $('.Shipping-inner-row').each(function () {
      initShippingSwiper($(this));
    });
  });

  document.addEventListener('shopify:section:deselect', function () {
    // Cleanup shipping swiper on section deselect if necessary
    shippingSwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    shippingSwipers = [];
  });
});

// testimonial swiper slider

document.addEventListener('DOMContentLoaded', function() {
  let testimonialSwipers = [];

  function initTestimonialSwiper(swiperContainer) {
    var desktop = swiperContainer.data("desktop");
    var tablet = swiperContainer.data("tablet");
    var mobile = swiperContainer.data("mobile");
    var autoplay = swiperContainer.data("autoplay");
    var loop = swiperContainer.data("loop");
    var speed = swiperContainer.data("speed");
    var freemode = swiperContainer.data("freemode");
    var mousewheel = swiperContainer.data("mousewheel");
    
    testi = new Swiper(swiperContainer, {
      spaceBetween: 30,
      freeMode: freemode,
      loop: loop,
      speed: speed,
      autoplay: autoplay,
      mousewheel: mousewheel,
      navigation: {
        nextEl: ".testi-swiper-button-next",
        prevEl: ".testi-swiper-button-prev"
      },
      pagination: {
        el: '.testimonial-swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: mobile,
          spaceBetween: 15
        },
        480: {
          slidesPerView: mobile,
          spaceBetween: 15
        },
        576: {
          slidesPerView: mobile,
          spaceBetween: 15
        },
        680: {
          slidesPerView: mobile,
          spaceBetween: 15
        },
        768: {
          slidesPerView: tablet,
          spaceBetween: 15
        },
        992: {
          slidesPerView: desktop,
          spaceBetween: 30
        },
      }
    });

    testimonialSwipers.push(testi);
  }

  // Initialize testimonial swiper on page load
  $('.testimonial-wrap').each(function() {
    initTestimonialSwiper($(this));
  });

  document.addEventListener('shopify:section:select', function() {
    // Reinitialize testimonial swiper on section select
    testimonialSwipers.forEach(function(swiper) {
      swiper.destroy();
    });
    testimonialSwipers = [];
    $('.testimonial-wrap').each(function() {
      initTestimonialSwiper($(this));
    });
  });

  document.addEventListener('shopify:section:load', function() {
    // Reinitialize testimonial swiper on section load
    testimonialSwipers.forEach(function(swiper) {
      swiper.destroy();
    });
    testimonialSwipers = [];
    $('.testimonial-wrap').each(function() {
      initTestimonialSwiper($(this));
    });
  });

  document.addEventListener('shopify:section:deselect', function() {
    // Cleanup testimonial swiper on section deselect if necessary
    testimonialSwipers.forEach(function(swiper) {
      swiper.destroy();
    });
    testimonialSwipers = [];
  });
});


// gallery swiper slider
document.addEventListener('DOMContentLoaded', function () {
  let gallerySwipers = [];

  function initGallerySwiper(swiperContainer) {
    var autoplay = swiperContainer.data("autoplay");
    var loop = swiperContainer.data("loop");

    var gallerySlider = new Swiper(swiperContainer, {
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 30,
      autoplay: autoplay,
      loop: loop,
      navigation: {
        nextEl: swiperContainer.find('.swiper-button-next'),
        prevEl: swiperContainer.find('.swiper-button-prev'),
      },
      pagination: {
        el: swiperContainer.find(".gallery-swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 15,
        },
      },
    });

    gallerySwipers.push(gallerySlider);
  }

  // Initialize Gallery swiper on page load
  $('.gallery-swiper').each(function () {
    initGallerySwiper($(this));
  });

  document.addEventListener('shopify:section:select', function () {
    // Reinitialize Gallery swiper on section select
    gallerySwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    gallerySwipers = [];
    $('.gallery-swiper').each(function () {
      initGallerySwiper($(this));
    });
  });

  document.addEventListener('shopify:section:load', function () {
    // Reinitialize Gallery swiper on section load
    gallerySwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    gallerySwipers = [];
    $('.gallery-swiper').each(function () {
      initGallerySwiper($(this));
    });
  });

  document.addEventListener('shopify:section:deselect', function () {
    // Cleanup Gallery swiper on section deselect if necessary
    gallerySwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    gallerySwipers = [];
  });
});


// tab-product swiper slider
document.addEventListener('DOMContentLoaded', function () {
  let tabSwipers = [];

  function initTabSwiper(swiperContainer) {
    var enable = swiperContainer.data("enable-slider");
    var desktop = swiperContainer.data("desktop");
    var largeTablet = swiperContainer.data("large-tablet");
    var tablet = swiperContainer.data("tablet");
    var mobile = swiperContainer.data("mobile");
    var autoplay = swiperContainer.data("autoplay");
    var loop = swiperContainer.data("loop");
    var speed = swiperContainer.data("speed");

    if (enable) {
      var tabSlider = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        dots: true,
        loop: loop,
        speed: speed,
        autoplay: autoplay,
        pagination: {
          el: swiperContainer.find(".tab-swiper-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: swiperContainer.find('.tab-swiper-next'),
          prevEl: swiperContainer.find('.tab-swiper-prev'),
        },
        breakpoints: {
          320: {
            slidesPerView: mobile,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: tablet,
            spaceBetween: 15,
          },
          841: {
            slidesPerView: largeTablet,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: largeTablet,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: desktop,
            spaceBetween: 30,
          },
        },
      });

      tabSwipers.push(tabSlider);
    }
  }

  // Initialize Tab Swiper on page load
  $('.swiper-container#lg-product-tab-slider').each(function () {
    initTabSwiper($(this));
  });

  document.addEventListener('shopify:section:select', function () {
    // Reinitialize Tab Swiper on section select
    tabSwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    tabSwipers = [];
    $('.swiper-container#lg-product-tab-slider').each(function () {
      initTabSwiper($(this));
    });
  });

  document.addEventListener('shopify:section:load', function () {
    // Reinitialize Tab Swiper on section load
    tabSwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    tabSwipers = [];
    $('.swiper-container#lg-product-tab-slider').each(function () {
      initTabSwiper($(this));
    });
  });

  document.addEventListener('shopify:section:deselect', function () {
    // Cleanup Tab Swiper on section deselect if necessary
    tabSwipers.forEach(function (swiper) {
      swiper.destroy();
    });
    tabSwipers = [];
  });
});

// blog swiper slider

document.addEventListener('DOMContentLoaded', function () {
    let blogSwipers = [];

    function initBlogSwiper(swiperContainer) {
        var desktop = swiperContainer.data("desktop");
        var largeTablet = swiperContainer.data("large-tablet");
        var tablet = swiperContainer.data("tablet");
        var mobile = swiperContainer.data("mobile");
        var autoplay = swiperContainer.data("autoplay");
        var loop = swiperContainer.data("loop");
        var speed = swiperContainer.data("speed");
        var freemode = swiperContainer.data("freemode");
        var mousewheel = swiperContainer.data("mousewheel");

        var blogSwiper = new Swiper(swiperContainer, {
            slidesPerView: 1,
            grabCursor: true,
            freeMode: freemode,
            autoplay: autoplay,
            observer: true,
            observeParents: true,
            spaceBetween: 30,
            loop: loop,
            speed: speed,
            mousewheel: mousewheel,
            keyboard: {
                enabled: true
            },
            pagination: {
                el: swiperContainer.find(".blog-swiper-pagination"),
                clickable: true,
            },
            navigation: {
                nextEl: swiperContainer.find(".swiper-button-next"),
                prevEl: swiperContainer.find(".swiper-button-prev"),
            },
            breakpoints: {
                320: {
                    slidesPerView: mobile,
                    spaceBetween: 15
                },
                480: {
                    slidesPerView: tablet,
                    spaceBetween: 15
                },
                576: {
                    slidesPerView: tablet,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: largeTablet,
                    spaceBetween: 15
                },
                992: {
                    slidesPerView: desktop,
                    spaceBetween: 30
                },
            }
        });

        blogSwipers.push(blogSwiper);
    }

    // Initialize blog swiper on page load
    $('.swiper-slider-blog').each(function () {
        initBlogSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize blog swiper on section select
        blogSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        blogSwipers = [];
        $('.swiper-slider-blog').each(function () {
            initBlogSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup blog swiper on section deselect if necessary
        blogSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        blogSwipers = [];
    });
});

// instagram swiper slider
document.addEventListener('DOMContentLoaded', function() {
    let instagramSwipers = [];

    function initInstagramSwiper(instagramContainer) {
        var desktop = instagramContainer.data("desktop");
        var largeTablet = instagramContainer.data("large-tablet");
        var tablet = instagramContainer.data("tablet");
        var mobile = instagramContainer.data("mobile");
        var autoplay = instagramContainer.data("autoplay");
        var loop = instagramContainer.data("loop");
        var speed = instagramContainer.data("speed");

        var instagram = new Swiper(instagramContainer, {
            slidesPerView: 1,
            grabCursor: true,
            freeMode: false,
            autoplay: autoplay,
            observer: true,
            observerParents: true,
            spaceBetween: 30,
            loop: loop,
            speed: speed,
            mousewheel: false,
            navigation: {
                nextEl: instagramContainer.find(".swiper-button-next"),
                prevEl: instagramContainer.find(".swiper-button-prev"),
            },
            pagination: {
                el: instagramContainer.find(".instagram-swiper-pagination"),
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: mobile,
                    spaceBetween: 15,
                },
                481: {
                    slidesPerView: tablet,
                    spaceBetween: 15,
                },
                641: {
                    slidesPerView: largeTablet,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: largeTablet,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: desktop,
                    spaceBetween: 30,
                },
            },
        });

        instagramSwipers.push(instagram);
    }

    // Initialize Instagram swiper on page load
    $('.main-instagram-post-section-wrapper').each(function() {
        initInstagramSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function() {
        // Reinitialize Instagram swiper on section select
        instagramSwipers.forEach(function(swiper) {
            swiper.destroy();
        });
        instagramSwipers = [];
        $('.main-instagram-post-section-wrapper').each(function() {
            initInstagramSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function() {
        // Cleanup Instagram swiper on section deselect if necessary
        instagramSwipers.forEach(function(swiper) {
            swiper.destroy();
        });
        instagramSwipers = [];
    });
});


// brand swiper slider

document.addEventListener('DOMContentLoaded', function() {
    let brandSwipers = [];

    function initBrandSwiper(brandContainer) {
        var desktop = brandContainer.data("desktop");
        var largeTablet = brandContainer.data("large-tablet");
        var tablet = brandContainer.data("tablet");
        var mobile = brandContainer.data("mobile");
        var autoplay = brandContainer.data("autoplay");
        var loop = brandContainer.data("loop");
        var speed = brandContainer.data("speed");

        var brandSlider = new Swiper(brandContainer, {
            slidesPerView: 1,
            grabCursor: true,
            freeMode: false,
            autoplay: autoplay,
            observer: true,
            observerParents: true,
            spaceBetween: 94,
            loop: loop,
            speed: speed,
            mousewheel: false,
            navigation: {
                nextEl: brandContainer.find(".swiper-button-next"),
                prevEl: brandContainer.find(".swiper-button-prev"),
            },
            pagination: {
                el: brandContainer.find(".brand-swiper-pagination"),
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: mobile,
                    spaceBetween: 30,
                },
                575: {
                    slidesPerView: tablet,
                    spaceBetween: 60,
                },
                767: {
                    slidesPerView: tablet,
                    spaceBetween: 80,
                },
                990: {
                    slidesPerView: largeTablet,
                    spaceBetween: 94,
                },
                1199: {
                    slidesPerView: largeTablet,
                    spaceBetween: 94,
                },
                1429: {
                    slidesPerView: desktop,
                },
            },
        });

        brandSwipers.push(brandSlider);
    }

    // Initialize brand swiper on page load
    $('.brand-slider-section-wrapper').each(function() {
        initBrandSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function() {
        // Reinitialize brand swiper on section select
        brandSwipers.forEach(function(swiper) {
            swiper.destroy();
        });
        brandSwipers = [];
        $('.brand-slider-section-wrapper').each(function() {
            initBrandSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function() {
        // Cleanup brand swiper on section deselect if necessary
        brandSwipers.forEach(function(swiper) {
            swiper.destroy();
        });
        brandSwipers = [];
    });
});


// category collection swiper slider

document.addEventListener('DOMContentLoaded', function () {
    let categorySwipers = [];

    function initCategorySwiper(categoryContainer) {
        var desktop = categoryContainer.data("desktop");
        var largeTablet = categoryContainer.data("large-tablet");
        var tablet = categoryContainer.data("tablet");
        var mobile = categoryContainer.data("mobile");
        var autoplay = categoryContainer.data("autoplay");
        var loop = categoryContainer.data("loop");
        var speed = categoryContainer.data("speed");

        var categorySlider = new Swiper(categoryContainer, {
            slidesPerView: 1,
            grabCursor: true,
            freeMode: false,
            autoplay: autoplay,
            observer: true,
            observerParents: true,
            spaceBetween: 30,
            loop: loop,
            speed: speed,
            mousewheel: false,
            navigation: {
                nextEl: categoryContainer.find(".swiper-button-next"),
                prevEl: categoryContainer.find(".swiper-button-prev"),
            },
            pagination: {
                el: categoryContainer.find(".category-swiper-pagination"),
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: mobile,
                    spaceBetween: 15,
                },
                480: {
                    slidesPerView: tablet,
                    spaceBetween: 15,
                },
                576: {
                    slidesPerView: tablet,
                    spaceBetween: 15,
                },
                841: {
                    slidesPerView: largeTablet,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: desktop,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: desktop,
                    spaceBetween: 30,
                },
            },
        });

        categorySwipers.push(categorySlider);
    }

    // Initialize category swiper on page load
    $('.main-collection-list-wrapper').each(function () {
        initCategorySwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize category swiper on section select
        categorySwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        categorySwipers = [];
        $('.main-collection-list-wrapper').each(function () {
            initCategorySwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup category swiper on section deselect if necessary
        categorySwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        categorySwipers = [];
    });
});


// category collection style3 swiper slider

document.addEventListener('DOMContentLoaded', function() {
    let categorySwipers = [];

    function initCategorySwiper(swiperContainer) {
        var enable = swiperContainer.data("enable");
        var desktop = swiperContainer.data("desktop");
        var tablet = swiperContainer.data("tablet");
        var largeTablet = swiperContainer.data("large-tablet");
        var mobile = swiperContainer.data("mobile");
        var autoplay = swiperContainer.data("autoplay");
        var loop = swiperContainer.data("loop");
        var speed = swiperContainer.data("speed");

        if (enable) {
            var category = new Swiper(swiperContainer, {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: autoplay,
                grabCursor: true,
                freeMode: false,
                speed: speed,
                loop: loop,
                mousewheel: false,
                navigation: {
                    nextEl: swiperContainer.find(".category3-swiper-button-next"),
                    prevEl: swiperContainer.find(".category3-swiper-button-prev"),
                },
                pagination: {
                    el: swiperContainer.find(".category-swiper-pagination"),
                    clickable: true,
                },
                breakpoints: {
                    320: {
                    slidesPerView: mobile,
                    spaceBetween: 15,
                    },
                    480: {
                        slidesPerView: mobile,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: tablet,
                        spaceBetween: 15,
                    },
                    841: {
                        slidesPerView: largeTablet,
                        spaceBetween: 15,
                    },
                    992: {
                        slidesPerView: largeTablet,
                        spaceBetween: 30,
                    },
                  1100: {
                        slidesPerView: desktop,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: desktop,
                        spaceBetween: 30,
                    },
                },
            });

            categorySwipers.push(category);
        }
    }

    // Initialize category swiper on page load
    $('.category-3-collection').each(function () {
        initCategorySwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize category swiper on section select
        categorySwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        categorySwipers = [];
        $('.category-3-collection').each(function () {
            initCategorySwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup category swiper on section deselect if necessary
        categorySwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        categorySwipers = [];
    });
});

// category collection style4 swiper slider

document.addEventListener('DOMContentLoaded', function () {
    let categorySwipers = [];

    function initCategorySwiper(categoryContainer) {
        var desktop = categoryContainer.data("desktop");
        var largeTablet = categoryContainer.data("large-tablet");
        var tablet = categoryContainer.data("tablet");
        var mobile = categoryContainer.data("mobile");
        var autoplay = categoryContainer.data("autoplay");
        var loop = categoryContainer.data("loop");
        var speed = categoryContainer.data("speed");

        var categorySlider = new Swiper(categoryContainer, {
            slidesPerView: 1,
            grabCursor: true,
            freeMode: false,
            autoplay: autoplay,
            observer: true,
            observerParents: true,
            spaceBetween: 30,
            loop: loop,
            speed: speed,
            mousewheel: false,
            navigation: {
                nextEl: categoryContainer.find(".swiper-button-next"),
                prevEl: categoryContainer.find(".swiper-button-prev"),
            },
            pagination: {
                el: categoryContainer.find(".category-swiper-pagination"),
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: mobile,
                    spaceBetween: 15,
                },
                480: {
                    slidesPerView: tablet,
                    spaceBetween: 15,
                },
                576: {
                    slidesPerView: tablet,
                    spaceBetween: 15,
                },
                841: {
                    slidesPerView: largeTablet,
                    spaceBetween: 15,
                },
                1100: {
                    slidesPerView: desktop,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: desktop,
                    spaceBetween: 30,
                },
            },
        });

        categorySwipers.push(categorySlider);
    }

    // Initialize category swiper on page load
    $('.main-collections-list-wrapper').each(function () {
        initCategorySwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize category swiper on section select
        categorySwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        categorySwipers = [];
        $('.main-collections-list-wrapper').each(function () {
            initCategorySwiper($(this));
        });
    });

    document.addEventListener('shopify:section:load', function () {
        // Reinitialize category swiper on section load
        initCategorySwiper($(this));
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup category swiper on section deselect if necessary
        categorySwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        categorySwipers = [];
    });
});

// main-collection-grid slider
  document.addEventListener('DOMContentLoaded', function () {
    let collectionSwipers = [];

    function initCollectionSwiper(collectionContainer) {
        var enable = collectionContainer.data("enable");
        var desktop = collectionContainer.data("desktop");
        var largeTablet = collectionContainer.data("large-tablet");
        var tablet = collectionContainer.data("tablet");
        var mobile = collectionContainer.data("mobile");
        var autoplay = collectionContainer.data("autoplay");
        var loop = collectionContainer.data("loop");
        var speed = collectionContainer.data("speed");

        if (enable) {
            var collectionSlider = new Swiper(collectionContainer, {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: autoplay,
                loop: loop,
                speed: speed,
                freeMode: false,
                mousewheel: false,
                pagination: {
                    el: collectionContainer.find(".swiper-pagination"),
                    clickable: true,
                },
                navigation: {
                    nextEl: collectionContainer.find('.swiper-button-next'),
                    prevEl: collectionContainer.find('.swiper-button-prev'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: mobile,
                        spaceBetween: 15,
                    },
                    480: {
                        slidesPerView: tablet,
                        spaceBetween: 15,
                    },
                    681: {
                        slidesPerView: largeTablet,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: largeTablet,
                        spaceBetween: 15,
                    },
                    992: {
                        slidesPerView: desktop,
                        spaceBetween: 30,
                    },
                },
            });

            collectionSwipers.push(collectionSlider);
        }
    }

    // Initialize collection swiper on page load
    $('.collection_slider').each(function () {
        initCollectionSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize collection swiper on section select
        collectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        collectionSwipers = [];
        $('.collection_slider').each(function () {
            initCollectionSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup collection swiper on section deselect if necessary
        collectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        collectionSwipers = [];
    });
});

// featured collection swiper slider

document.addEventListener('DOMContentLoaded', function () {
    var featuredCollectionSwipers = [];

    function initFeaturedCollectionSwiper(swiperContainer) {
        var enable = swiperContainer.data("enable-slider");
        var desktop = swiperContainer.data("desktop");
        var largeTablet = swiperContainer.data("large-tablet");
        var tablet = swiperContainer.data("tablet");
        var mobile = swiperContainer.data("mobile");
        var autoplay = swiperContainer.data("autoplay");
        var loop = swiperContainer.data("loop");
        var speed = swiperContainer.data("speed");

        if (enable) {
            var featuredCollectionSwiper = new Swiper(swiperContainer, {
                slidesPerView: desktop,
                spaceBetween: 30,
                loop: true,
                autoplay: autoplay,
                speed: speed,
                navigation: {
                    nextEl: swiperContainer.find(".featured-swiper-button-next"),
                    prevEl: swiperContainer.find(".featured-swiper-button-prev")
                },
                pagination: {
                    el: swiperContainer.find(".featured-swiper-pagination"),
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: mobile,
                        spaceBetween: 15
                    },
                    480: {
                        slidesPerView: tablet,
                        spaceBetween: 15
                    },
                    841: {
                        slidesPerView: largeTablet,
                        spaceBetween: 15
                    },
                    992: {
                        slidesPerView: largeTablet,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: desktop,
                        spaceBetween: 30
                    },
                },
            });

            featuredCollectionSwipers.push(featuredCollectionSwiper);
        }
    }

    // Initialize Featured Collection Swiper on page load
    $('.swiper-container.demo').each(function () {
        initFeaturedCollectionSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize Featured Collection Swiper on section select
        featuredCollectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        featuredCollectionSwipers = [];
        $('.swiper-container.demo').each(function () {
            initFeaturedCollectionSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup Featured Collection Swiper on section deselect if necessary
        featuredCollectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        featuredCollectionSwipers = [];
    });
});

// deal of day collection swiper slider

document.addEventListener('DOMContentLoaded', function () {
    var featuredCollectionSwipers = [];

    function initFeaturedCollectionSwiper(swiperContainer) {
        var enable = swiperContainer.data("enable-slider");
        var desktop = swiperContainer.data("desktop");
        var largeTablet = swiperContainer.data("large-tablet");
        var tablet = swiperContainer.data("tablet");
        var mobile = swiperContainer.data("mobile");
        var autoplay = swiperContainer.data("autoplay");
        var loop = swiperContainer.data("loop");
        var speed = swiperContainer.data("speed");

        if (enable) {
            var featuredCollectionSwiper = new Swiper(swiperContainer, {
                slidesPerView: desktop,
                spaceBetween: 30,
                loop: true,
                autoplay: autoplay,
                speed: speed,
                navigation: {
                    nextEl: swiperContainer.find(".deal-swiper-button-next"),
                    prevEl: swiperContainer.find(".deal-swiper-button-prev")
                },
                pagination: {
                    el: swiperContainer.find(".deal-swiper-pagination"),
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: mobile,
                        spaceBetween: 15
                    },
                    381: {
                        slidesPerView: tablet,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: largeTablet,
                        spaceBetween: 15
                    },
                    840: {
                        slidesPerView: largeTablet,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: desktop,
                        spaceBetween: 30
                    },
                },
            });

            featuredCollectionSwipers.push(featuredCollectionSwiper);
        }
    }

    // Initialize Featured Collection Swiper on page load
    $('.swiper-container.deal-collection-slider').each(function () {
        initFeaturedCollectionSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize Featured Collection Swiper on section select
        featuredCollectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        featuredCollectionSwipers = [];
        $('.swiper-container.deal-collection-slider').each(function () {
            initFeaturedCollectionSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup Featured Collection Swiper on section deselect if necessary
        featuredCollectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        featuredCollectionSwipers = [];
    });
});

// best selling collection swiper slider

document.addEventListener('DOMContentLoaded', function () {
    var BestCollectionSwipers = [];

    function initBestCollectionSwiper(swiperContainer) {
        var enable = swiperContainer.data("enable-slider");
        var desktop = swiperContainer.data("desktop");
        var largeTablet = swiperContainer.data("large-tablet");
        var tablet = swiperContainer.data("tablet");
        var mobile = swiperContainer.data("mobile");
        var autoplay = swiperContainer.data("autoplay");
        var loop = swiperContainer.data("loop");
        var speed = swiperContainer.data("speed");

        if (enable) {
            var featuredCollectionSwiper = new Swiper(swiperContainer, {
                slidesPerView: desktop,
                spaceBetween: 30,
                loop: true,
                autoplay: autoplay,
                speed: speed,
                navigation: {
                    nextEl: swiperContainer.find(".seller-swiper-button-next"),
                    prevEl: swiperContainer.find(".seller-swiper-button-prev")
                },
                pagination: {
                    el: swiperContainer.find(".seller-swiper-pagination"),
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: mobile,
                        spaceBetween: 15
                    },
                    480: {
                        slidesPerView: tablet,
                        spaceBetween: 15
                    },
                    841: {
                        slidesPerView: largeTablet,
                        spaceBetween: 15
                    },
                    992: {
                        slidesPerView: largeTablet,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: desktop,
                        spaceBetween: 30
                    },
                },
            });

            BestCollectionSwipers.push(featuredCollectionSwiper);
        }
    }

    // Initialize Featured Collection Swiper on page load
    $('.swiper-container.bestselling_product').each(function () {
        initBestCollectionSwiper($(this));
    });

    document.addEventListener('shopify:section:select', function () {
        // Reinitialize Featured Collection Swiper on section select
        BestCollectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        BestCollectionSwipers = [];
        $('.swiper-container.bestselling_product').each(function () {
            initBestCollectionSwiper($(this));
        });
    });

    document.addEventListener('shopify:section:deselect', function () {
        // Cleanup Featured Collection Swiper on section deselect if necessary
        BestCollectionSwipers.forEach(function (swiper) {
            swiper.destroy();
        });
        BestCollectionSwipers = [];
    });
});