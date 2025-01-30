(function($) {
  "use strict";

  jQuery(document).ready(function(){


    // All jQuery activation code paste here
    
    
    
    
    // Product grid color variant activation code. 
    
    $('.product-color li label').click(function(){
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage }); 
      return false;
    });
    

  });
  
})(jQuery);
