  $(document).ready(function(){

    $(".button-a").click(function(){
      $(".blog-a").show("fast") ;
    });

    $(".button-b").click(function(){
      $(".blog-b").show("fast") ;
    });
    
    $(".button-c").click(function(){
      $(".blog-c").show("fast");
    });


    $( ".donate-submit" ).click(function(){
      $("form").replaceWith( $( ".replace" ) );
    });

    $(".donate-submit").click(function(){
      $(".replace").removeClass("hidden-all");
    });
})
