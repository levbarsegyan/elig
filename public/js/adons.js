!(function() {
  function e() {}
  for (
    var n,
      o = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn"
      ],
      i = o.length,
      r = (window.console = window.console || {});
    i--;
  )
    r[(n = o[i])] || (r[n] = e);
})();
jQuery.fn.extend({
  adonHideOnScrollDown: function() {
    (tags = $(this)),
      (position = $(window).scrollTop()),
      tags.each(function() {
        $(this).addClass("adonHideOnScrollDown");
      }),
      $(window).scroll(function() {
        tags.each(function() {
          $(window).scrollTop() > position
            ? $(this).addClass("adonHide")
            : $(this).removeClass("adonHide");
        }),
          (position = $(window).scrollTop());
      });
  }
});
$(document).ready(function() {
  $("[href]").each(function() {
    $(this).href == window.location.href && $(this).addClass("active");
  });
});
(String.prototype.slugify = function() {
  return this.toLowerCase()
    .trim()
    .replace(/\ /, "-")
    .match(/[a-z0-9\-]/g)
    .join("");
}),
  jQuery.fn.extend({
    adonNavScrollId: function() {
      return $(this).each(function() {
        return (
          (TARGET = $(this)),
          (targetText = TARGET.text().slugify()),
          (targetTop = TARGET.offset().top),
          TARGET.attr("id", targetText),
          $("a")._adonActivateLink(targetText, targetTop),
          TARGET
        );
      });
    },
    adonNavScrollLightup: function() {
      return $(this).each(function() {
        return (
          (TARGET = $(this)),
          (targetText = TARGET.text().slugify()),
          (targetTop = TARGET.offset().top),
          TARGET.attr("id", targetText),
          $("a")._adonActivateLightUp(targetText, targetTop),
          TARGET
        );
      });
    },
    _adonActivateLink: function(t, n) {
      return $(this).each(function() {
        return (
          (TAG = $(this)),
          t !== TAG.text().slugify() ||
            TAG.attr("href") ||
            (TAG.parent("li").addClass("adonNavScrollLink"),
            TAG.click(function() {
              $("html, body").animate({ scrollTop: n }, 1e3);
            })),
          TAG
        );
      });
    },
    _adonActivateLightUp: function(t, n) {
      return $(this).each(function() {
        return (
          (TAG = $(this)),
          t !== TAG.text().slugify() ||
            TAG.attr("href") ||
            ((tO = window.setTimeout(TAG._adonMyTestScrollPosition(n), 1e3)),
            $(window).scroll(function() {
              window.clearTimeout(tO),
                (tO = window.setTimeout(TAG._adonMyTestScrollPosition(n), 1e3));
            })),
          TAG
        );
      });
    },
    _adonMyTestScrollPosition: function(t) {
      (TAG = $(this)),
        (winY = $(window).scrollTop()),
        winY - 20 <= t && winY + 20 >= t && TAG._adonLightup(),
        winY + 50 > document.body.scrollHeight - window.innerHeight &&
          TAG._adonLightup();
    },
    _adonLightup: function() {
      return (
        (TAG = $(this)),
        TAG.parent("li")
          .siblings()
          .removeClass("adonnavactive"),
        TAG.parent("li").addClass("adonnavactive"),
        TAG
      );
    },
    _adonNavScrollToHeading: function() {
      return (TAG = $(this)), $("#" + TAG.text().slugify());
    }
  });
