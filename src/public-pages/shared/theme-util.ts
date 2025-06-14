declare var $: any;

export const themeLoad = () => {
  $('#preloader').on(500).fadeOut();
  $('.preloader').on(600).fadeOut('slow');
  $('.loader-container').addClass('done');
  $('.progress-br').addClass('done');
};

export const customJs = Object.create({
  initEvents: function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1) {
        $('.dmtop').css({
          bottom: '10px',
        });
      } else {
        $('.dmtop').css({
          bottom: '-100px',
        });
      }
    });

    $('#scroll-to-top').on('click', function (e: any) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  },
});
