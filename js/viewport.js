

$(function(){
          mobile_new_address_html = $('.new_address-mobile').html();
          desktop_new_address_html = $('.new_address-desktop').html();
          var viewport_size = $('body').width();
          if (viewport_size > 750){
                    $('.new_address-mobile').html('');       
          }else{
                    $('.new_address-desktop').html('');     
          }
          viewportHandler = function(event){
                    viewport_size = $('body').width();
                    if (viewport_size > 750){
                              $('.new_address-desktop').html(desktop_new_address_html);
                              $('.new_address-mobile').html('');       
                    }else{
                              $('.new_address-mobile').html(mobile_new_address_html); 
                              $('.new_address-desktop').html('');     
                    }
          }
          window.visualViewport.addEventListener('resize', viewportHandler);
});