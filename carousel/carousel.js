(function($) {
  $(document).ready(function() {
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:30,
        center: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    })

    $('#prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space
