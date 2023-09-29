$('.faq_block .blk_q').on('click', function() {
  // if ($(window).width() < 770) {
      let accord=$(this).parent();
      accord.toggleClass('active');
      if(accord.hasClass('active')) {
          accord.find('.blk_a').slideDown(300);
      }
      else {
          accord.find('.blk_a').slideUp(300);
      }
  // }
}
);