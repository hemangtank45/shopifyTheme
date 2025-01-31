function currencyFormSubmit(e) {
	e.target.form.submit()
}

function openTab(e, t) {
	var n, o, i;
	for (n = 0, o = document.getElementsByClassName("tabcontent-cus"); n < o.length; n++) o[n].style.display = "none";
	for (n = 0, i = document.getElementsByClassName("tablinks-cus"); n < i.length; n++) i[n].className = i[n].className.replace(" active", "");
	document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}


 $(document).on("click",".title-footer",function(){
   if (1099 >= $(window).width()){
      $(this).parent().toggleClass("active").find(".footer-toggle").slideToggle("slow")
   }
})

function ToggleIcon() {
    if ($(window).width() >= 1099) {
        $(".footer_inner .footer-cms .title-footer").parent().find(".footer-toggle").removeAttr("style");
        $(".footer_inner .footer-cms .title-footer").removeClass("toggle-active");
    }
}

$( window ).resize(function() {
	ToggleIcon();
});
  
function popup_product() {
	$(".button_product .button_point").on("click", function() {
		var e = $(this).parent(),
			t = e.position(),
			n = $(this).siblings();
		1024 > $(window).width() && n.css({
			top: 100 - t.top,
			left: 30 - t.left
		}), e.addClass("is-open")
	}), $(".custom-product-card .close").on("click", function() {
		$(this).parents(".button_product").removeClass("is-open")
	}), $(document).on("click", function(e) {
		0 === $(e.target).closest(".custom-product-card").length && 0 === $(e.target).closest(".button_product").length && $(".button_product").removeClass("is-open")
	})
}
window.theme = window.theme || {}, theme.Sections = function e() {
	this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:section:reorder", this._onReorder.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
}, theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
	_createInstance: function e(t, n) {
		var o = $(t),
			i = o.attr("data-section-id"),
			s = o.attr("data-section-type");
		if (n = n || this.constructors[s], !_.isUndefined(n)) {
			var c = _.assignIn(new n(t), {
				id: i,
				type: s,
				container: t
			});
			this.instances.push(c)
		}
	},
	_onSectionLoad: function e(t) {
		var n = $("[data-section-id]", t.target)[0];
		n && this._createInstance(n)
	},
	_onSectionUnload: function e(t) {
		this.instances = _.filter(this.instances, function(e) {
			var n = e.id === t.originalEvent.detail.sectionId;
			return n && _.isFunction(e.onUnload) && e.onUnload(t), !n
		})
	},
	_onSelect: function e(t) {
		var n = _.find(this.instances, function(e) {
			return e.id === t.originalEvent.detail.sectionId
		});
		!_.isUndefined(n) && _.isFunction(n.onSelect) && n.onSelect(t)
	},
	_onDeselect: function e(t) {
		var n = _.find(this.instances, function(e) {
			return e.id === t.originalEvent.detail.sectionId
		});
		!_.isUndefined(n) && _.isFunction(n.onDeselect) && n.onDeselect(t)
	},
	_onReorder: function e(t) {
		var n = _.find(this.instances, function(e) {
			return e.id === t.originalEvent.detail.sectionId
		});
		!_.isUndefined(n) && _.isFunction(n.onReorder) && n.onReorder(t)
	},
	_onBlockSelect: function e(t) {
		var n = _.find(this.instances, function(e) {
			return e.id === t.originalEvent.detail.sectionId
		});
		!_.isUndefined(n) && _.isFunction(n.onBlockSelect) && n.onBlockSelect(t)
	},
	_onBlockDeselect: function e(t) {
		var n = _.find(this.instances, function(e) {
			return e.id === t.originalEvent.detail.sectionId
		});
		!_.isUndefined(n) && _.isFunction(n.onBlockDeselect) && n.onBlockDeselect(t)
	},
	register: function e(t, n) {
		this.constructors[t] = n, $("[data-section-type=" + t + "]").each((function(e, t) {
			this._createInstance(t, n)
		}).bind(this))
	}
}), theme.HomeSlideshow = function e(t) {
	var n = this.$container = $(t),
		o = this.sectionId = n.attr("data-section-id");
	this.sliderActive = $("#home-slider-" + o).length;
   
 
	var i = n.attr("data-animation-speed");
	if ("true" == n.attr("data-autoPlay")) var s = i > 0 && {
		delay: +i
	};
	else s = "false";
	if ($("#home-slider-" + o + " .swiper-slide").length > 1) var c = !0,
		r = !0;
	else var c = !1,
		r = !1;
  var slider = $(".classic-container").data("slider"); 
   var breakpoints = {};
    if(slider === 'five_slider'){
      breakpoints = {
          1200: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          991: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        };
        loop: c;
      }
	this.lgSlider = new Swiper("#home-slider-" + o, {
		navigation: {
			nextEl: "#swiper-button-next-" + o,
			prevEl: "#swiper-button-prev-" + o
		},
		direction: "horizontal",
		speed: 1200,
		loop: c,
		simulateTouch: r,
		pagination: {
			el: "#swiper-pagination-" + o,
			clickable: !0
		},
		autoplay: s,
		autoHeight: !0,
        breakpoints: breakpoints
	})
}, theme.HomeSlideshow.prototype = _.assignIn({}, theme.HomeSlideshow.prototype, {
	onBlockSelect: function e(t) {
		this.sectionId;
		var n = $(t.target).data("index"),
			o = this.lgSlider;
		this.lgSliderMobile, o.slideTo(n, 1500, !1), o.autoplay.stop()
	},
	onBlockDeselect: function e() {
		this.sectionId;
		var t = this.lgSlider;
		this.lgSliderMobile, t.autoplay.start()
	}
}), $(document).ready(function() {
	new theme.Sections().register("slideshow-section", theme.HomeSlideshow), $(document).on("shopify:section:select", function(e) {
		var t = $(e.target),
			n = $("#shopify-section-handle-" + e.originalEvent.detail.sectionId),
			o = n.length ? n.attr("data-bg-type") : null;
		o && t.addClass(o)
	})
}), document.querySelectorAll(".shopify-currency-form select").forEach(function(e) {
	e.addEventListener("change", currencyFormSubmit)
}), null !== document.querySelector("#tab-cus-active") && document.getElementById("tab-cus-active").click(), $(document).ready(function() {
	let e = localStorage.getItem("gridSize");

	function t(e) {
		localStorage.setItem("gridSize", e), $(".grid-setup-" + e).addClass("active");
		let t = $(".productGridBtn").length;
		for (let n = 1; n <= t; n++) $(".grid-collection-product .product-grid").removeClass(`grid--${n}-col-desktop active`);
		$(".grid-collection-product .product-grid").addClass(`grid--${e}-col-desktop active`)
      for (let n = 1; n <= t; n++) $(".grid-collection-product .product-grid").removeClass(`grid--${n}-col-tablet-down active`);
		$(".grid-collection-product .product-grid").addClass(`grid--${e}-col-tablet-down active`)
	}
	e && t(e), $(document).on("click", ".productGridBtn", function() {
		let e = $(this).attr("data-count");
		$(".productGridBtn").removeClass("active"), t(e)
	})
}), $(document).ready(function() {
	$(document).on("click", ".popup-close", function() {
		$(".widget-sticky-pop").toggleClass("active")
	})
}), $(document).on("click", ".btn-save", function() {
	$("#Details-CartDrawer").removeAttr("open")
}),  $(document).ready(function() {
	$(".quickview-btn").click(function() {
		$("body").css("overflow", "hidden")
	}), $(document).on("click", "#ModalClose-quick-view", function() {
		$("body").css("overflow", "auto")
	})
}), $(document).ready(function() {
	ToggleIcon(), $(".cart-notification__close").click(function() {
		$("body").css("overflow", "hidden")
	}), $(document).on("click", ".cart-notification-wrapper", function() {
		$("body").css("overflow", "auto")
	})
}), $(".button_product .button_point").on("click", function() {
	var e = $(this).parent(),
		t = e.position(),
		n = $(this).siblings();
	1024 > $(window).width() && n.css({
		top: 100 - t.top,
		left: 30 - t.left
	}), e.addClass("is-open")
}), $(".custom-product-card .close").on("click", function() {
	$(this).parents(".button_product").removeClass("is-open")
}), $(document).on("click", function(e) {
	0 === $(e.target).closest(".custom-product-card").length && 0 === $(e.target).closest(".button_product").length && $(".button_product").removeClass("is-open")
}), jQuery(document).ready(function() {
	var e, t = !1,
		n = $(".close_popup");

	function o(e, t, n) {
		var o = new Date;
		o.setTime(o.getTime() + 3e5 * n);
		var i = "expires=" + o.toGMTString();
		document.cookie = e + "=" + t + "; " + i
	}
	"" !== (e = function e(t) {
		for (var n = t + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
			var s = o[i].trim();
			if (0 === s.indexOf(n)) return s.substring(n.length, s.length)
		}
		return ""
	}("dt_gdpr_name")) ? t = !0: "" !== e && null !== e && o("cookie_value", "cookie_value", 365), !0 === t && n.hide(), $(".accept-cookie2").click(function() {
		o("dt_gdpr_name", "cookie_value", 365), n.hide()
	}), $(".close-icon").click(function() {
		o("dt_gdpr_name", "", -1), n.hide()
	})
});

                  
  document.addEventListener('readystatechange', event => {

      if (event.target.readyState === "complete") {
        
        var clockdiv = document.getElementsByClassName("clockdiv");
        var countDownDate = new Array();
        for (var i = 0; i < clockdiv.length; i++) {



          const attrDate = new Date($(clockdiv[i]).attr("data-date"));
          const currentDateTime = new Date();
          if(currentDateTime > attrDate){
              $(clockdiv[i]).hide()
          }


          countDownDate[i] = new Array();
          countDownDate[i]['el'] = clockdiv[i];
          countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
          countDownDate[i]['days'] = 0;
          countDownDate[i]['hours'] = 0;
          countDownDate[i]['seconds'] = 0;
          countDownDate[i]['minutes'] = 0;
          }
        
        var countdownfunction = setInterval(function() {
    for (var i = 0; i < countDownDate.length; i++) {
        var now = new Date().getTime();


          const attrDate = new Date($(clockdiv[i]).attr("data-date"));
          const currentDateTime = new Date();
          if(currentDateTime > attrDate){
              $(clockdiv[i]).hide()
          }




        var distance = countDownDate[i]['time'] - now;
         countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
         countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
        
          if (distance < 0) {
            countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
            countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
            countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
            countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
          }
          else{
          countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
          countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
          countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
          countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
        }
    
    }
  }, 1000);
  }
});

 $('.menu-drawer-remove-button button').on("click",function(){
   $('body').removeClass('overflow-hidden-tablet');
});


$(function(){
  
  $('.category-megamenu-dropdown > a').on('click',function(event){
    
    event.preventDefault();
    $(this).toggleClass('selected');
    $(this).parent().find('ul').first().toggle(300);
    
    $(this).parent().siblings().find('ul').hide(200);
    
    //Hide menu when clicked outside
    $(this).parent().find('ul').parent().mouseleave(function(){ 
      var thisUI = $(this);
      $('html').click(function(){
        thisUI.children(".category-main-submenu").hide();
    thisUI.children("a").removeClass('selected');
               
        $('html').unbind('click');
      });
    });
  });
});

$('.category-main-title').on('click', function(){
    $('.category-main-menu-toggle').slideToggle(500);
    $('body').toggleClass('showcategory');
    $(this).toggleClass('rx-change');
  });

  function ltn__CategoryMenuToggle(){
    $('.category-main-menu-toggle .category-megamenu-dropdown > a').on('click', function(){
      if($(window).width() < 991){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        }
        else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      }
    });
  ltn__CategoryMenuToggle();
};