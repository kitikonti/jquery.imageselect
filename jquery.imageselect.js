(function( $ ) {
  $.fn.imageSelect = function(options) {
    
    // set default options
    var options = $.extend( {
      title:true,
      alt:true
    }, options);

    return this.each(function() {     
      // get all options
      var selectOptions = $(this).children('option');
      
      // generate new UI as <ul>
      var ui = '<ul>';
      $(selectOptions).each(function(i) {    
        // get the value of current option
        var value = $(this).attr('value');
        var text = $(this).text();
        
        // transfer option text to image title
        var title = '';
        if (options.title) {
          title = ' title="'+text+'"';
        }
        
        // transfer option text to image alt
        var alt = '';
        if (options.alt) {
          alt = ' alt="'+text+'"';
        }
        
        // create <img>
        var img = '<img'+title+alt+' src="'+options.src[value]+'" />';
        
        // transfer selected attribute to selected class
        var active = '';
        if ($(this).attr('selected') == 'selected') {
          active = ' class="selected"';
        }
        
        // create li, option.value => li.rel # option.selected => li.class
        ui += '<li rel="'+value+'"'+active+'>'+img+'</li>';
        
      });   
      // end list of options
      ui += '</ul>';
      
      // wrap select with div to have a common container for old and new UI
      $(this).wrap('<div id="imageselect_'+$(this).attr('name')+'" class="imageselect"></div>');
      
      // append new UI to common wrapper
      $(this).parent().append(ui);
      
      // init click show options
      $('.imageselect').delegate(' li.selected','click',function() {
        // shows hidden options
        $('.imageselect li').not('.selected').fadeIn();
        $('.imageselect li').css('display','inline-block');
        // add ul.class, to difference between "click show options" and "click choose option"
        $('.imageselect ul').addClass('expanded');
      });

      // init click choose option
      $('.imageselect').delegate(' ul.expanded','hover',function() {
        // hide other options
        $('.imageselect li').not('.selected').delay(1000).fadeOut();
        // remove ul.class, only for styling
        $('.imageselect ul').removeClass('expanded');
      });

      // init click choose option
      $('.imageselect').delegate(' ul.expanded li','click',function() {
        // get rel from choosen option
        var rel = $(this).attr('rel');
        var oldUI = $(this).parent().parent().children('select');
        // remove selected attr from old ui option
        oldUI.children('option:selected').removeAttr('selected');
        // set selected attr to old ui option
        oldUI.children('option[value="'+rel+'"]').attr('selected',true);
        // remove old selected class new ui option
        $('.imageselect li.selected').removeClass('selected');
        // set selected class to new ui option
        $(this).addClass('selected');
        // hide other options
        $('.imageselect li').not('.selected').fadeOut();
        // remove ul.class, only for styling
        $('.imageselect ul').removeClass('expanded');
      });
    });

  };
})( jQuery );