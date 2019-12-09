  $(document).ready(function(){

    $('.button-show').click(function(){
      $('.caption').show("slideDown");
    });
    
    $( ".donate-submit" ).click(function() {
      $("form").replaceWith( $( ".replace" ) );
    });

    $(".donate-submit").click(function(){
      $(".replace").removeClass("hidden-all");
    });
})
