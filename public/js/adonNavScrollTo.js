String.prototype.slugify = function() {
  return this.toLowerCase()
    .trim()
    .replace(/\ /, '-')
    .match(/[a-z0-9\-]/g)
    .join('')
}
jQuery.fn.extend({
  adonNavScrollId: function() {
    return $(this).each(function() {
      TARGET = $(this)
      targetText = TARGET.text().slugify()
      targetTop = TARGET.offset().top
      TARGET.attr('id', targetText)
      $('a')._adonActivateLink(targetText, targetTop)
      return TARGET
    })
  },
  adonNavScrollLightup: function() {
    return $(this).each(function() {
      TARGET = $(this)
      targetText = TARGET.text().slugify()
      targetTop = TARGET.offset().top
      TARGET.attr('id', targetText)
      $('a')._adonActivateLightUp(targetText, targetTop)
      return TARGET
    })
  },
  _adonActivateLink: function(targetText, targetTop) {
    return $(this).each(function() {
      TAG = $(this)
      if (targetText === TAG.text().slugify() && !TAG.attr('href')) {
        TAG.parent('li').addClass('adonNavScrollLink')
        TAG.click(function() {
          $('html, body').animate(
            {
              scrollTop: targetTop
            },
            1000
          )
        })
      }
      return TAG
    })
  },
  _adonActivateLightUp: function(targetText, targetTop) {
    return $(this).each(function() {
      TAG = $(this)
      if (targetText === TAG.text().slugify() && !TAG.attr('href')) {
        tO = window.setTimeout(TAG._adonMyTestScrollPosition(targetTop), 1000)
        $(window).scroll(function() {
          window.clearTimeout(tO)
          tO = window.setTimeout(TAG._adonMyTestScrollPosition(targetTop), 1000)
        })
      }
      return TAG
    })
  },
  _adonMyTestScrollPosition: function(targetTop) {
    TAG = $(this)
    winY = $(window).scrollTop()
    if (winY - 20 <= targetTop && winY + 20 >= targetTop) {
      TAG._adonLightup()
    }
    if (winY + 50 > document.body.scrollHeight - window.innerHeight) {
      TAG._adonLightup()
    }
  },
  _adonLightup: function() {
    TAG = $(this)
    TAG.parent('li')
      .siblings()
      .removeClass('adonnavactive')
    TAG.parent('li').addClass('adonnavactive')
    return TAG
  },
  _adonNavScrollToHeading: function() {
    TAG = $(this)
    return $('#' + TAG.text().slugify())
  }
})
