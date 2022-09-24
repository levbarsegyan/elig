jQuery.fn.extend({
  adonHideOnScrollDown: function() {
    tags = $(this)
    position = $(window).scrollTop()
    tags.each(function() {
      $(this).addClass('adonHideOnScrollDown')
    })
    $(window).scroll(function() {
      tags.each(function() {
        if ($(window).scrollTop() > position) {
          $(this).addClass('adonHide')
        } else {
          $(this).removeClass('adonHide')
        }
      })
      position = $(window).scrollTop()
    })
  }
})
