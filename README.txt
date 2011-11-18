________________________________________________________________________________
embed in head of document
________________________________________________________________________________
  jquery
  jquery.imageselect.min.js
  jquery.imageselect.min.css



________________________________________________________________________________
to trigger the plugin
________________________________________________________________________________
  (function($){
    $(function() {
      $('select[name="nameOfSelectList"]').imageSelect({
        src:{
          valueFromOptionA:"srcToImageA.png",
          valueFromOptionB:"srcToImageB.png"
        },
      });
    });
  })(jQuery);



________________________________________________________________________________
optional
________________________________________________________________________________
  you could use the sample.css file from the plugin folder as starting point,
  you see a demo using the sample.css file when opening the index.html in a
  browser.