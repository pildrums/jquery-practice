$(function() {
  // slide
  setInterval(function() {
    $('.slideBanner ul').animate({
      left: "-1200"
    }, 1000, function() {
      $('.slideBanner ul').append($('.slideBanner ul li').eq(0));
      $('.slideBanner ul').css("left", 0);
    })
  }, 3000);

  // modal
  $('button').on("click", function() {
    $('.modalWrapper').fadeIn();
  });
  $('.modal').on("click", function() {
    $('.modalWrapper').fadeOut();
  });

  // tabMenu
  $('.gallery_off').on("click", function() {
    $('.noticeItem').hide();
    $('.galleryItem').css({'display' : 'flex'});
    $(this).attr('class', 'gallery_on');
    $('.notice_on').attr('class', 'notice_off');
  });
  
  $('.notice_on').on("click", function() {
    $('.noticeItem').show();
    $('.galleryItem').hide();
    $(this).attr('class', 'notice_on');
    $('.gallery_on').attr('class', 'gallery_off');
  })
});