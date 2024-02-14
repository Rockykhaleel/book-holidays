jQuery.ajaxPrefilter(function (e) {
  "use strict";
  e.cache = !0;
}),
  jQuery(document).ready(function () {
    "use strict";
    var e,
      t,
      a,
      i,
      o,
      s,
      n,
      r,
      l = [];
    function d() {
      jQuery(window).width() > 991
        ? jQuery(".megamenu").each(function () {
            jQuery("> .submenu > li", this).matchHeight();
          })
        : jQuery(".megamenu").each(function () {
            jQuery("> .submenu > li", this).matchHeight("remove");
          }),
        clearTimeout(i);
    }
    function c() {
      jQuery(".header-section").hasClass("sidebar-header") ||
        (991 >= jQuery(window).width()
          ? jQuery("body").hasClass("mobile-navbar-collapse") ||
            (jQuery(".navbar-nav ul").each(function () {
              jQuery(this).slideUp();
            }),
            jQuery(window).width() > 767 &&
              jQuery(".navbar-collapse").on({
                mouseenter: function () {
                  jQuery("body").addClass("stopScroll");
                },
                mouseleave: function () {
                  jQuery("body").removeClass("stopScroll");
                },
              }),
            jQuery(".parent-list").each(function () {
              jQuery(this).find("a:first").addClass("mobile-parent-list-link");
            }),
            jQuery("body").addClass("mobile-navbar-collapse"))
          : (jQuery(".navbar-nav ul").each(function () {
              jQuery(this).slideDown();
            }),
            jQuery(".navbar-collapse").on("mouseenter", function () {
              jQuery("body").removeClass("stopScroll");
            }),
            jQuery(".parent-list").each(function () {
              jQuery(this).removeClass("active-menu-item"),
                jQuery(this)
                  .find("a:first")
                  .removeClass("mobile-parent-list-link")
                  .removeClass("menu-is-open");
            }),
            jQuery("body").removeClass("mobile-navbar-collapse")));
    }
    if (
      ((t = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera\ Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
          );
        },
      }),
      d(),
      jQuery(window).resize(function () {
        i = setTimeout(function () {
          d();
        }, 1e3);
      }),
      jQuery(".pace").css({ display: "none" }),
      jQuery("#main-wrapper").animsition({
        loading: !1,
        inDuration: 1500,
        outDuration: 800,
        inClass: "fade-in",
        outClass: "fade-out",
        linkElement:
          'ul.navbar-nav li a:not([target="_blank"]):not([href^="#"])',
      }),
      jQuery(".btn-gfort-top").on("click", function () {
        return jQuery("html, body").animate({ scrollTop: "0" }, 800), !1;
      }),
      jQuery(window).scroll(function () {
        (o = jQuery(window).scrollTop()) >= 300
          ? jQuery(".btn-gfort-top").addClass("show-btn-gfort-top")
          : jQuery(".btn-gfort-top").removeClass("show-btn-gfort-top");
      }),
      jQuery('[href="#top-page"]').on("click", function () {
        return (
          jQuery("html, body").animate({ scrollTop: "0" }, 800),
          jQuery(".navbar-collapse").hasClass("in") &&
            (jQuery(".navbar-toggle").removeClass("gfort-menuButton-toggle"),
            jQuery(".navbar-collapse").removeClass("in").addClass("collapse")),
          jQuery(".header-section").hasClass("sidebar-header") &&
            jQuery(".sidebar-header").removeClass(
              "sidebar_header_correctPosition"
            ),
          !1
        );
      }),
      jQuery(".navbar-toggle").on("click", function () {
        jQuery(".navbar-toggle").toggleClass("gfort-menuButton-toggle");
      }),
      jQuery(".navbar-nav").find("ul").addClass("submenu"),
      jQuery(".navbar-nav li ul").parent("li").addClass("parent-list"),
      jQuery(".header-section").hasClass("sidebar-header")
        ? jQuery(".parent-list > a").append(
            '<span class="menu-arrow"><i class="fa fa-angle-right"></i></span>'
          )
        : (jQuery(".parent-list > a").append(
            '<span class="menu-arrow"><i class="fa fa-angle-down"></i></span>'
          ),
          jQuery(".parent-list .parent-list > a")
            .append(
              '<span class="menu-arrow"><i class="fa fa-ellipsis-h"></i></span>'
            )
            .find(".menu-arrow:first")
            .remove()),
      c(),
      jQuery(window).resize(function () {
        c();
      }),
      jQuery("body").on("click", ".mobile-parent-list-link", function (e) {
        if (
          (e.preventDefault(),
          jQuery(this).hasClass("menu-is-open")
            ? (jQuery(this)
                .removeClass("menu-is-open")
                .find(".fa-angle-down")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-right"),
              jQuery(this).next("ul").slideUp(),
              jQuery(this).parent("li").removeClass("active-menu-item"))
            : (jQuery(this)
                .addClass("menu-is-open")
                .find(".fa-angle-right")
                .removeClass("fa-angle-right")
                .addClass("fa-angle-down"),
              jQuery(this).next("ul").slideDown(),
              jQuery(this).parent("li").addClass("active-menu-item")),
          jQuery(this).hasClass("menu-is-open"))
        )
          return !1;
      }),
      jQuery(".header-section").hasClass("sidebar-header"))
    ) {
      jQuery(".header-section").hasClass("fixed-header") &&
        jQuery("body").addClass("fixed-sidebar-header");
      var f = jQuery(".header-section"),
        u = f.find(".navbar .col-md-12"),
        p = f.find(".navbar .navbar-header").length;
      f.prepend(
        '<div class="sidebar-overlay"></div><a href="#" class="sidebar-header-btn"><i class="fa fa-bars"></i></a>'
      ),
        p < 1 && f.find(jQuery(".top-header .navbar-header")).prependTo(u),
        jQuery(".navbar-nav ul").each(function () {
          jQuery(this).slideUp();
        }),
        jQuery(".parent-list > a").on("click", function (e) {
          if (
            (e.preventDefault(),
            jQuery(this).hasClass("menu-is-open")
              ? (jQuery(this)
                  .removeClass("menu-is-open")
                  .find(".fa-angle-down")
                  .removeClass("fa-angle-down")
                  .addClass("fa-angle-right"),
                jQuery(this).next("ul").slideUp(),
                jQuery(this).parent("li").removeClass("active-menu-item"))
              : (jQuery(this)
                  .addClass("menu-is-open")
                  .find(".fa-angle-right")
                  .removeClass("fa-angle-right")
                  .addClass("fa-angle-down"),
                jQuery(this).next("ul").slideDown(),
                jQuery(this).parent("li").addClass("active-menu-item")),
            jQuery(this).hasClass("menu-is-open"))
          )
            return !1;
        }),
        jQuery("body").on("click", ".sidebar-header-btn", function (e) {
          e.preventDefault(),
            jQuery(this)
              .parent(".sidebar-header")
              .toggleClass("sidebar_header_correctPosition");
        }),
        jQuery("body").on("click", ".sidebar-overlay", function (e) {
          e.preventDefault(),
            jQuery(this)
              .parent(".sidebar-header")
              .removeClass("sidebar_header_correctPosition");
        });
    }
    var h = window.location.href;
    function m() {
      var e = jQuery(".fixed-header .header-menu-container");
      (e = new Waypoint.Sticky({
        element: e[0],
        stuckClass: "header-menu-stuck",
        wrapper: '<div class="header-menu">',
      })),
        clearTimeout(a);
    }
    function g() {
      clearTimeout(s),
        jQuery(".header-menu").removeClass("open-header-search-form-block");
    }
    function b(e) {
      var t,
        a,
        i,
        o = jQuery(e),
        s = o.attr("data-slider-items"),
        n = o.attr("data-slider-items-md"),
        r = o.attr("data-slider-items-sm"),
        l = o.attr("data-slider-items-xs"),
        d = o.attr("data-slider-items-xxs"),
        c = o.attr("data-slider-dots"),
        f = o.attr("data-slider-arrows"),
        u = o.attr("data-slider-autoplay"),
        p = o.attr("data-slider-animate-in"),
        h = o.attr("data-slider-animate-out"),
        m = o.attr("data-slider-items-space"),
        g = o.attr("data-slider-thumbs-items"),
        b = o.attr("data-slider-thumbs-items-md"),
        v = o.attr("data-slider-thumbs-items-sm"),
        y = o.attr("data-slider-thumbs-items-xs"),
        w = o.attr("data-slider-thumbs-items-xxs"),
        $ = o.attr("data-slider-thumbs");
      if (
        ((u = "true" === u),
        (f = "true" === f),
        (c = "true" === c),
        (m = void 0 === m || m < 0 || "undefined" === m ? 0 : parseInt(m, 10)),
        "true" === $)
      ) {
        for (
          a = 0,
            c = !1,
            t =
              '<div class="gfort-owl-thumbs-slider gfort-owl-slider owl-carousel owl-theme">';
          a < o.find(".gfort-owl-slider-item").length;
          a += 1
        )
          t +=
            '<div class="gfort-owl-slider-item"><a href="#" data-slider-jump-to="' +
            a +
            '"><img src="' +
            o
              .find(
                ".gfort-owl-slider-item:nth-child(" + parseInt(a + 1, 10) + ")"
              )
              .attr("data-slide-thumb") +
            '" alt="Slide Image" /></a></div>';
        (t += "</div>"),
          o.wrap('<div class="gfort-thumbs-owl-slider"></div>'),
          o.parent().append(t);
      }
      (void 0 === s || s < 1 || "undefined" === s) && (s = 1),
        (void 0 === n || n < 1 || "undefined" === n) && (n = 1),
        (void 0 === r || r < 1 || "undefined" === r) && (r = 1),
        (void 0 === l || l < 1 || "undefined" === l) && (l = 1),
        (void 0 === d || d < 1 || "undefined" === d) && (d = 1),
        (void 0 === g || g < 1 || "undefined" === g) && (g = 1),
        (void 0 === b || b < 1 || "undefined" === b) && (b = 1),
        (void 0 === v || v < 1 || "undefined" === v) && (v = 1),
        (void 0 === y || y < 1 || "undefined" === y) && (y = 1),
        (void 0 === w || w < 1 || "undefined" === w) && (w = 1),
        (void 0 === p || p < 0 || "undefined" === p) && (p = ""),
        (void 0 === h || h < 0 || "undefined" === h) && (h = ""),
        "1" === s && ((n = 1), (r = 1), (l = 1), (d = 1)),
        o.owlCarousel({
          loop: !0,
          navSpeed: 600,
          dotsSpeed: 600,
          lazyLoad: !0,
          rtl: !1,
          autoHeight: !1,
          autoplaySpeed: 600,
          responsiveClass: !0,
          nav: f,
          dots: c,
          autoplayHoverPause: !0,
          margin: m,
          autoplay: u,
          animateIn: p,
          animateOut: h,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
          ],
          responsive: {
            0: { items: parseInt(d, 10) },
            480: { items: parseInt(l, 10) },
            768: { items: parseInt(r, 10) },
            992: { items: parseInt(n, 10) },
            1200: { items: parseInt(s, 10) },
          },
          onInitialized: function () {
            o.find(".owl-item.cloned [data-gfort-lightbox-group]").removeAttr(
              "data-gfort-lightbox-group"
            );
          },
          onTranslate: function (e) {
            "true" === $ &&
              (-1 ==
                (i = e.item.index - o.find(".owl-item.cloned").length / 2) &&
                (i =
                  o.find(".owl-item").length -
                  o.find(".owl-item.cloned").length -
                  1),
              o
                .parent()
                .find(".gfort-owl-thumbs-slider")
                .trigger("to.owl.carousel", [i, 300, !0]),
              o
                .parent()
                .find(".gfort-owl-thumbs-slider")
                .find(".gfort-owl-slider-item a")
                .removeClass("gfort-owl-slider-active-item"),
              o
                .parent()
                .find(".gfort-owl-thumbs-slider")
                .find(
                  '.gfort-owl-slider-item a[data-slider-jump-to="' + i + '"]'
                )
                .addClass("gfort-owl-slider-active-item"));
          },
        }),
        jQuery(".gfort-owl-thumbs-slider").owlCarousel({
          margin: 5,
          nav: !1,
          dots: !1,
          loop: !1,
          lazyLoad: !0,
          autoplay: !1,
          rtl: !1,
          autoHeight: !1,
          autoplaySpeed: 400,
          responsiveClass: !0,
          autoplayHoverPause: !0,
          responsive: {
            0: { items: parseInt(w, 10) },
            480: { items: parseInt(y, 10) },
            768: { items: parseInt(v, 10) },
            992: { items: parseInt(b, 10) },
            1200: { items: parseInt(g, 10) },
          },
          onInitialized: function () {
            jQuery('[data-slider-jump-to="0"]').addClass(
              "gfort-owl-slider-active-item"
            );
          },
        }),
        jQuery("[data-slider-jump-to]").on("click", function (e) {
          e.preventDefault(),
            jQuery(this)
              .parents(".gfort-thumbs-owl-slider")
              .find(".gfort-owl-slider")
              .trigger("to.owl.carousel", [
                jQuery(this).attr("data-slider-jump-to"),
                600,
                !0,
              ]);
        });
    }
    h.indexOf("themeforest") >= 0 ||
      h.indexOf("graphicfort") >= 0 ||
      jQuery("body").remove(),
      jQuery(".fixed-header").length &&
        !jQuery(".header-section").hasClass("sidebar-header") &&
        jQuery.getScript(
          "js/plugins/waypoint/jquery.waypoints.min.js",
          function () {
            jQuery.getScript("js/plugins/waypoint/sticky.min.js", function () {
              m();
            });
          }
        ),
      jQuery(window).scroll(function () {
        (n = jQuery(window).scrollTop()) >= 100
          ? jQuery(".header-menu-container").addClass("tiny-header")
          : jQuery(".header-menu-container").removeClass("tiny-header");
      }),
      jQuery(".notification-block-close-btn").on("click", function () {
        jQuery(this)
          .parents(".NB_correctPosition")
          .removeClass("NB_correctPosition");
        var t = jQuery(this)
          .parents(".notification-block")
          .attr("class")
          .split("notification-block-style-")[1]
          .charAt(0);
        Cookies.set(
          "Plume-HTML5-Cookie-" + t,
          "gfort-Plume-HTML5-Cookie-" + t,
          { expires: 0 }
        ),
          jQuery(this)
            .parents(".notification-block")
            .attr("class")
            .indexOf("notification-block-style-2") > -1 &&
            (jQuery(this).parents(".notification-block").slideUp(500),
            (a = setTimeout(function () {
              jQuery(".fixed-header").length && m();
            }, 600))),
          jQuery(this)
            .parents(".notification-block")
            .find("video")
            .each(function () {
              videojs(jQuery(this).attr("id")).pause();
            }),
          jQuery(this)
            .parents(".notification-block")
            .find("audio")
            .each(function () {
              videojs(jQuery(this).attr("id")).pause();
            }),
          clearTimeout(e);
      }),
      jQuery("body")
        .on("click", ".notification-block-overlay", function () {
          jQuery(this)
            .parents(".NB_correctPosition")
            .removeClass("NB_correctPosition");
          var t = jQuery(this)
            .parents(".notification-block")
            .attr("class")
            .split("notification-block-style-")[1]
            .charAt(0);
          Cookies.set(
            "Plume-HTML5-Cookie-" + t,
            "gfort-Plume-HTML5-Cookie-" + t,
            { expires: 0 }
          ),
            jQuery("body").removeClass("stopScroll"),
            clearTimeout(e);
        })
        .on(
          "click",
          ".notification-block-overlay .notification-block-container",
          function (e) {
            e.stopPropagation();
          }
        ),
      jQuery(".notification-block").length &&
        (jQuery(".notification-block-style-4").length &&
          jQuery(".notification-block-style-4").each(function () {
            jQuery(this)
              .find(".notification-block-wrapper")
              .addClass("notification-block-overlay");
          }),
        jQuery.getScript("js/plugins/cookie/js.cookie.min.js", function () {
          jQuery(".notification-block").each(function () {
            var t = jQuery(this),
              a = t
                .attr("class")
                .split("notification-block-style-")[1]
                .charAt(0);
            (e = setTimeout(function () {
              t.addClass("NB_correctPosition");
            }, 2e3)),
              Cookies.get("Plume-HTML5-Cookie-" + a) ===
              "gfort-Plume-HTML5-Cookie-" + a
                ? jQuery(".notification-block-style-" + a).css(
                    "display",
                    "none"
                  )
                : jQuery(".notification-block-style-" + a).css(
                    "display",
                    "block"
                  );
          });
        })),
      jQuery("[data-scroll]").length &&
        jQuery.getScript(
          "js/plugins/scrollto/jquery.scrollTo.min.js",
          function () {
            jQuery("body").on("click", "[data-scroll]", function (e) {
              e.preventDefault(),
                jQuery(".fixed-header").length
                  ? jQuery(".header-section").hasClass("sidebar-header")
                    ? jQuery("html, body").scrollTo(this.hash, 800, {
                        offset: 0,
                      })
                    : jQuery("html, body").scrollTo(this.hash, 800, {
                        offset: -80,
                      })
                  : jQuery("html, body").scrollTo(this.hash, 800, {
                      offset: 0,
                    }),
                jQuery(".navbar-collapse").hasClass("in") &&
                  (jQuery(".navbar-toggle").removeClass(
                    "gfort-menuButton-toggle"
                  ),
                  jQuery(".navbar-collapse")
                    .removeClass("in")
                    .addClass("collapse")),
                jQuery(".header-section").hasClass("sidebar-header") &&
                  jQuery(".sidebar-header").removeClass(
                    "sidebar_header_correctPosition"
                  );
            });
          }
        ),
      jQuery("body")
        .attr("data-spy", "scroll")
        .attr("data-target", ".header-menu-container")
        .attr("data-offset", "85"),
      jQuery(window).resize(function () {
        jQuery('[data-spy="scroll"]').each(function () {
          jQuery(this).scrollspy("refresh");
        });
      }),
      jQuery(".form-control").on("focus", function () {
        jQuery(this).removeClass("error");
      }),
      jQuery('input[type="radio"]').each(function (e) {
        (void 0 === jQuery(this).attr("id") ||
          "undefined" === jQuery(this).attr("id") ||
          "" === jQuery(this).attr("id")) &&
          jQuery(this).attr("id", "gfort-radio-" + e),
          jQuery(this).after(
            '<label class="gfort-radio" for="' +
              jQuery(this).attr("id") +
              '"></label>'
          );
      }),
      jQuery('input[type="checkbox"]').each(function (e) {
        (void 0 === jQuery(this).attr("id") ||
          "undefined" === jQuery(this).attr("id") ||
          "" === jQuery(this).attr("id")) &&
          jQuery(this).attr("id", "gfort-checkbox-" + e),
          jQuery(this).after(
            '<label class="gfort-checkbox" for="' +
              jQuery(this).attr("id") +
              '"></label>'
          );
      }),
      jQuery("[data-select-all]").on("change", function () {
        var e = jQuery(this)[0].checked,
          t = jQuery(this).attr("name");
        jQuery('input[name="' + t + '[]"]').each(function () {
          jQuery(this)[0].checked = e;
        });
      }),
      jQuery('input[type="checkbox"]').on("change", function () {
        if (-1 !== jQuery(this).attr("name").indexOf("[]")) {
          var e = jQuery(this).attr("name");
          !1 === jQuery(this)[0].checked &&
            (jQuery("[data-select-all]")[0].checked = !1),
            jQuery('input[name="' + e + '"]').length ===
              jQuery('input[name="' + e + '"]:checked').length &&
              (jQuery("[data-select-all]")[0].checked = !0);
        }
      }),
      jQuery(".quantity input[type=number]").each(function () {
        var e = jQuery(this);
        e
          .parent()
          .prepend('<span class="sub"><i class="fa fa-minus"></i></span>')
          .append('<span class="add"><i class="fa fa-plus"></i></span>'),
          e.parent().on("click", ".sub", function () {
            "" === e.val() && e.val("1"),
              e.val() > 1 && e.val(parseInt(e.val(), 10) - 1);
          }),
          e.parent().on("click", ".add", function () {
            "" === e.val() && e.val("0"),
              9999999 > e.val() && e.val(parseInt(e.val(), 10) + 1);
          });
      });
    function v() {
      jQuery(".twitter-feed-block").each(function (e) {
        var t,
          a = jQuery(this),
          i = a.attr("data-slider-arrows"),
          o = a.attr("data-slider-dots"),
          s = a.attr("data-slider-items-space"),
          n = a.attr("data-slider-autoplay"),
          r = a.attr("data-slider-items"),
          l = a.attr("data-slider-items-md"),
          d = a.attr("data-slider-items-sm"),
          c = a.attr("data-slider-items-xs"),
          f = a.attr("data-slider-items-xxs"),
          u = a.attr("data-slider-animate-in"),
          p = a.attr("data-slider-animate-out");
        a.twittie(
          {
            dateFormat: "%d %b %Y",
            loadingText: '<i class="fa fa-spinner fa-pulse fa-fw fa-2x"></i>',
            count: jQuery(this).attr("data-twitter-feed-count"),
            username: jQuery(this).attr("data-twitter-username"),
            apiPath: "js/plugins/tweetie/api/tweet.php",
            template:
              '<div class="gfort-twitter-item-container"><div class="twitter-head"><div class="twitter-avatar"><a href="https://twitter.com/intent/follow?original_referer=&screen_name={{user_name}}" target="_blank">{{avatar}}</a></div><div class="twitter-user-screen-name"><span class="twitter-username"><a href="https://twitter.com/{{user_name}}" target="_blank"><i class="fa fa-twitter"></i><span>{{user_name}}</span></a></span><span class="twitter-screen-name">{{screen_name}}</span></div></div><div class="twitter-body"><div class="twitter-tweet"><p>{{tweet}}</p></div><div class="twitter-date-btns"><div class="twitter-date"><a href="{{url}}" target="_blank">{{date}}</a></div><div class="twitter-btns"><a href="https://twitter.com/intent/tweet?in_reply_to={{tweet_id}}" title="Reply" target="_blank" data-toggle="tooltip" data-placement="top"><i class="fa fa-reply"></i></a><a href="https://twitter.com/intent/retweet?tweet_id={{tweet_id}}" title="Retweet" target="_blank" data-toggle="tooltip" data-placement="top"><i class="fa fa-retweet"></i></a><a href="https://twitter.com/intent/favorite?tweet_id={{tweet_id}}" title="Favorite" target="_blank" data-toggle="tooltip" data-placement="top"><i class="fa fa-star"></i></a></div></div></div></div>',
          },
          function () {
            a.hasClass("twitter-slider") &&
              ((void 0 === i || i < 0 || "undefined" === i) && (i = !1),
              (void 0 === o || o < 0 || "undefined" === o) && (o = !1),
              (void 0 === s || s < 0 || "undefined" === s) && (s = 0),
              (void 0 === n || n < 0 || "undefined" === n) && (n = !1),
              (void 0 === r || r < 0 || "undefined" === r) && (r = 1),
              (void 0 === l || l < 0 || "undefined" === l) && (l = 1),
              (void 0 === d || d < 0 || "undefined" === d) && (d = 1),
              (void 0 === c || c < 0 || "undefined" === c) && (c = 1),
              (void 0 === f || f < 0 || "undefined" === f) && (f = 1),
              (void 0 === u || u < 0 || "undefined" === u) && (u = ""),
              (void 0 === p || p < 0 || "undefined" === p) && (p = ""),
              a
                .find("ul.gfort-twitter-list")
                .wrap(
                  '<div class="gfort-owl-slider owl-carousel owl-theme" id="gfort-twitter-owl-slider-' +
                    e +
                    '" data-slider-arrows="' +
                    i +
                    '" data-slider-dots="' +
                    o +
                    '" data-slider-items-space="' +
                    s +
                    '" data-slider-autoplay="' +
                    n +
                    '" data-slider-items="' +
                    r +
                    '" data-slider-items-md="' +
                    l +
                    '" data-slider-items-sm="' +
                    d +
                    '" data-slider-items-xs="' +
                    c +
                    '" data-slider-items-xxs="' +
                    f +
                    '" data-slider-animate-in="' +
                    u +
                    '" data-slider-animate-out="' +
                    p +
                    '"></div>'
                )
                .contents()
                .unwrap(),
              a.find("li.gfort-twitter-item").each(function () {
                jQuery(this)
                  .wrap(
                    '<div class="gfort-owl-slider-item"><div class="gfort-twitter-item"></div></div>'
                  )
                  .contents()
                  .unwrap();
              }),
              b((t = jQuery("#" + a.find(".gfort-owl-slider").attr("id")))));
          }
        );
      });
    }
    function y() {
      jQuery("[data-gfort-lightbox]").each(function () {
        var e = jQuery(this);
        e.attr("href").indexOf("soundcloud") > -1 &&
          (e.attr("data-gfort-iframe", "").removeAttr("data-gfort-lightbox"),
          jQuery.ajax({
            url:
              "https://soundcloud.com/oembed?url=" +
              e.attr("href") +
              "&format=json",
            success: function (t) {
              e.attr(
                "href",
                t.html.split('src="')[1].split('">')[0] +
                  "&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
              );
            },
          }));
      }),
        jQuery("[data-gfort-lightbox]").fancybox({
          padding: 2,
          width: 960,
          nextEffect: "none",
          prevEffect: "none",
          openEffect: "none",
          closeEffect: "none",
          groupAttr: "data-gfort-lightbox-group",
          helpers: { title: { type: "outside" }, media: {} },
          beforeShow: function () {
            this.group.length > 1 &&
              ("" !== this.title
                ? (this.title =
                    "<span>(" +
                    (this.index + 1) +
                    " of " +
                    this.group.length +
                    ") - </span>" +
                    this.title)
                : (this.title =
                    "<span>(" +
                    (this.index + 1) +
                    " of " +
                    this.group.length +
                    ")</span>"));
          },
          afterShow: function () {
            jQuery(
              '<a href="javascript:void(0)" class="btn btn-expand"><i class="fa fa-expand"></i></a>'
            )
              .appendTo(this.outer)
              .on("click", function () {
                jQuery(this).toggleClass("btn-compress"),
                  jQuery.fancybox.toggle();
              });
          },
        }),
        jQuery("[data-gfort-iframe]").fancybox({
          padding: 2,
          width: 960,
          type: "iframe",
          nextEffect: "none",
          prevEffect: "none",
          openEffect: "none",
          closeEffect: "none",
          helpers: { title: { type: "outside" }, media: {} },
          beforeShow: function () {
            this.group.length > 1 &&
              (this.title =
                "<span>(" +
                (this.index + 1) +
                " of " +
                this.group.length +
                ") - </span>" +
                this.title);
          },
        }),
        jQuery("[data-gfort-lightbox-html5]").each(function () {
          jQuery(this).attr(
            "href",
            '<video autoplay poster="' +
              jQuery(this).attr("data-poster") +
              '" class="video-js" id="html5ElementPlay"><source src="' +
              jQuery(this).attr("href") +
              '" type="audio/mpeg" /></video>'
          );
        }),
        jQuery("[data-gfort-lightbox-html5]").fancybox({
          padding: 2,
          width: 960,
          type: "html",
          scrolling: "no",
          autoSize: !1,
          nextEffect: "none",
          prevEffect: "none",
          openEffect: "none",
          closeEffect: "none",
          helpers: { title: { type: "outside" }, media: {} },
          afterLoad: function () {
            this.group.length > 1 &&
              (this.title =
                "<span>(" +
                (this.index + 1) +
                " of " +
                this.group.length +
                ") - </span>" +
                this.title),
              jQuery.getScript(
                "js/plugins/videojs/videojs.min.js",
                function () {
                  videojs("html5ElementPlay", { loop: !0, controls: !0 });
                }
              );
          },
          beforeClose: function () {
            videojs("html5ElementPlay").dispose();
          },
        });
    }
    jQuery(".form-block").length &&
      jQuery.getScript(
        "js/plugins/validation/jquery.validate.min.js",
        function () {
          jQuery(".form-block").each(function () {
            var e = jQuery(this),
              t = e.find("form");
            e.hasClass("contact-form-block") &&
              t.prepend(
                '<input type="text" name="form_current_website" value="' +
                  document.location.hostname +
                  '" style="display: none;">'
              ),
              e.hasClass("search-form-block") ||
                e.hasClass("header-search-form-block") ||
                (e.hasClass("account-form-block") ||
                  t.append(
                    '<div class="gfort-form-alert-message col-md-12"></div>'
                  ),
                jQuery(t).validate({
                  rules: {
                    form_general: "required",
                    form_name: "required",
                    form_first_name: "required",
                    form_last_name: "required",
                    form_email: { required: !0, email: !0 },
                    form_message: "required",
                    form_subject: "required",
                    form_terms: "required",
                    form_comment: "required",
                    form_phone: {
                      required: !0,
                      digits: !0,
                      minlength: 10,
                      maxlength: 10,
                    },
                    form_rate: "required",
                    form_country: "required",
                    form_address: "required",
                    form_town_city: "required",
                    form_postcode_ZIP: {
                      required: !0,
                      digits: !0,
                      minlength: 5,
                      maxlength: 5,
                    },
                    form_password: { required: !0, minlength: 8 },
                    form_password_again: { equalTo: "#form_password" },
                    form_new_password: { minlength: 8 },
                    form_new_password_again: { equalTo: "#form_new_password" },
                    form_username: "required",
                    form_ship_to_first_name: "required",
                    form_ship_to_last_name: "required",
                    form_ship_to_country: "required",
                    form_ship_to_address: "required",
                    form_ship_to_town_city: "required",
                    form_ship_to_postcode_ZIP: "required",
                    account_form_name: "required",
                    account_form_password: "required",
                    account_form_email: { required: !0, email: !0 },
                    form_attend: "required",
                    form_bmi_weight: {
                      required: !0,
                      number: !0,
                      minlength: 1,
                      maxlength: 5,
                    },
                    form_bmi_height: {
                      required: !0,
                      number: !0,
                      minlength: 1,
                      maxlength: 5,
                    },
                  },
                  messages: {
                    form_general: { required: "This field is required." },
                    form_name: "Your name is required.",
                    form_first_name: "Your first name is required.",
                    form_last_name: "Your last name is required.",
                    form_email: {
                      required: "Please provide an email address.",
                      email: "Please enter a valid email address.",
                    },
                    form_message: "Don't you want to say something ?.",
                    form_subject: "Your subject is required.",
                    form_terms: "You have to accept the terms and conditions.",
                    form_comment: "Don't you want to say something ?.",
                    form_phone: {
                      required: "Please provide a phone number.",
                      digits: "Please enter digits only",
                      minlength: "Please enter a valid phone number.",
                      maxlength: "Please enter a valid phone number.",
                    },
                    form_rate: "Please select a rating.",
                    form_country: "Please select a country.",
                    form_address: "Your address is required.",
                    form_town_city: "Your Town / City is required.",
                    form_postcode_ZIP: {
                      required: "Your Postcode / ZIP is required.",
                      digits: "Please enter digits only",
                      minlength: "Please enter a valid Postcode / ZIP number.",
                      maxlength: "Please enter a valid Postcode / ZIP number.",
                    },
                    form_password: {
                      required: "Your password is required.",
                      minlength: "Please enter at least 8 characters.",
                    },
                    form_password_again: {
                      equalTo:
                        "Your passwords do not match, please try again!.",
                    },
                    form_new_password: {
                      minlength: "Please enter at least 8 characters.",
                    },
                    form_new_password_again: {
                      equalTo:
                        "Your passwords do not match, please try again!.",
                    },
                    form_username: "Your username is required.",
                    form_ship_to_first_name: "Your first name is required.",
                    form_ship_to_last_name: "Your last name is required.",
                    form_ship_to_country: "Please select a country.",
                    form_ship_to_address: "Your address is required.",
                    form_ship_to_town_city: "Your Town / City is required.",
                    form_ship_to_postcode_ZIP: {
                      required: "Your Postcode / ZIP is required.",
                      digits: "Please enter digits only",
                      minlength: "Please enter a valid Postcode / ZIP number.",
                      maxlength: "Please enter a valid Postcode / ZIP number.",
                    },
                    account_form_name: "Your username is missing!",
                    account_form_password: "Your password is missing!",
                    account_form_email: {
                      required: "Please provide an email address.",
                      email: "Please enter a valid email address.",
                    },
                    form_attend: { required: "This field is required." },
                    form_bmi_weight: {
                      required: "This field is required.",
                      number: "Please enter numbers only",
                      minlength: "Please enter a valid number.",
                      maxlength: "Please enter a valid number.",
                    },
                    form_bmi_height: {
                      required: "This field is required.",
                      number: "Please enter numbers only",
                      minlength: "Please enter a valid number.",
                      maxlength: "Please enter a valid number.",
                    },
                  },
                  submitHandler: function () {
                    var a = t.serialize(),
                      i = e.attr("data-redirect-page"),
                      o = t.attr("action"),
                      s = t.find(".gfort-recaptcha").attr("id");
                    t.find("button").addClass("add-spin"),
                      jQuery
                        .ajax({ type: "post", url: o, data: a })
                        .done(function (e) {
                          null !== e.match("success-message") &&
                            (void 0 !== i && "undefined" !== i && "" !== i
                              ? (window.location = i)
                              : (t.find(".gfort-recaptcha").length > 0 &&
                                  (t.find(".gfort-recaptcha").remove(),
                                  t
                                    .find(".gfort-recaptcha-wrapper")
                                    .prepend(
                                      '<div class="gfort-recaptcha" id="' +
                                        s +
                                        '" data-sitekey="' +
                                        r +
                                        '" data-callback="recaptchaCallback"></div>'
                                    ),
                                  grecaptcha.render(s, { sitekey: r })),
                                t.find(".gfort-chosen-select").length > 0 &&
                                  t
                                    .find(".gfort-chosen-select")
                                    .val("")
                                    .trigger("chosen:updated"),
                                t
                                  .find(".gfort-form-alert-message .alert")
                                  .remove(),
                                t
                                  .find(".gfort-form-alert-message")
                                  .append(
                                    '<div class="alert alert-gfort alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="form-respones-message"></div></div>'
                                  ),
                                t
                                  .find(
                                    ".gfort-form-alert-message .form-respones-message"
                                  )
                                  .html(e)),
                            t.find(".form-control").val(""),
                            t
                              .find('input[type="checkbox"]')
                              .attr("checked", !1)),
                            null !== e.match("error-captcha") &&
                              (jQuery(".gfort-captcha-error").remove(),
                              t
                                .find(".gfort-recaptcha")
                                .after(
                                  '<label class="gfort-captcha-error error">' +
                                    e +
                                    "</label>"
                                )),
                            null !== e.match("error-message") &&
                              (t
                                .find(".gfort-form-alert-message .alert")
                                .remove(),
                              t
                                .find(".gfort-form-alert-message")
                                .append(
                                  '<div class="alert alert-danger alert-gfort alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="form-respones-message"></div></div>'
                                ),
                              t
                                .find(
                                  ".gfort-form-alert-message .form-respones-message"
                                )
                                .html(e)),
                            t.find("button").removeClass("add-spin");
                        });
                  },
                }),
                (jQuery.validator.methods.email = function (e, t) {
                  return this.optional(t) || /\S+@\S+\.\S+/.test(e);
                }));
          });
        }
      ),
      jQuery(".gfort-recaptcha").length &&
        jQuery.getScript(
          "https://www.google.com/recaptcha/api.js?render=explicit",
          function () {
            (r = jQuery(".gfort-recaptcha").attr("data-sitekey")),
              jQuery(".gfort-recaptcha").each(function (e) {
                var t = jQuery(this);
                t.attr("id", "gfort-recaptcha-" + e),
                  t.attr("data-callback", "recaptchaCallback"),
                  t.wrap('<div class="gfort-recaptcha-wrapper"></div>'),
                  t.after(
                    '<script type="text/javascript">function recaptchaCallback() {jQuery(".gfort-captcha-error").remove();};</script>'
                  );
              });
          }
        ),
      jQuery("body").on("click", ".gfort-refresh-recaptcha", function (e) {
        e.preventDefault();
        var t = jQuery(this).parents(".gfort-recaptcha-wrapper"),
          a = t.find(".gfort-recaptcha").attr("id");
        t.find(".gfort-recaptcha").remove(),
          t.prepend(
            '<div class="gfort-recaptcha" id="' +
              a +
              '" data-sitekey="' +
              r +
              '" data-callback="recaptchaCallback"></div>'
          ),
          grecaptcha.render(a, { sitekey: r }),
          jQuery(".gfort-captcha-error").remove();
      }),
      jQuery("a.form-open-btn").on("click", function (e) {
        e.preventDefault(),
          jQuery(".header-menu").addClass("open-header-search-form-block"),
          (s = setTimeout(function () {
            jQuery(".header-search-form-block .form-control").focus();
          }, 100));
      }),
      jQuery("a.form-close-btn").on("click", function (e) {
        e.preventDefault(), g();
      }),
      jQuery(".header-search-form-block .form-control").on(
        "focusout",
        function () {
          g();
        }
      ),
      jQuery(window).scroll(function () {
        g();
      }),
      jQuery(".subscribe-form-block").length &&
        jQuery(".subscribe-form-block").each(function (e) {
          var t,
            a,
            i,
            o = jQuery(this);
          o.find('input[type="email"]').attr("id", "gfort-subscribe-form-" + e),
            o
              .find('input[type="email"]')
              .prev("label")
              .attr("for", "gfort-subscribe-form-" + e),
            o.hasClass("mailchimp-form-block") &&
              ((i = "msg"),
              (t = "error"),
              (a = "result"),
              o
                .find("form")
                .attr(
                  "action",
                  jQuery(this)
                    .attr("data-form-url")
                    .replace("/post?", "/post-json?")
                    .concat("&c=?")
                )),
            jQuery("form", this).submit(function (e) {
              e.preventDefault();
              var s = jQuery(this);
              s.find("button").addClass("add-spin"),
                jQuery
                  .ajax({
                    method: "post",
                    dataType: "jsonp",
                    data: s.serialize(),
                    url: s.attr("action"),
                    success: function (e) {
                      o.find('input[type="email"]').prev("label").html(e[i]),
                        e[a] === t
                          ? o.find('input[type="email"]').addClass("error")
                          : o
                              .find('input[type="email"]')
                              .val("")
                              .removeClass("error");
                    },
                    error: function () {
                      o.find('input[type="email"]')
                        .prev("label")
                        .html("Error: Please check your List URL");
                    },
                  })
                  .done(function () {
                    s.find("button").removeClass("add-spin");
                  });
            });
        }),
      jQuery(".gfort-owl-slider").length &&
        (jQuery(
          'link[href="js/plugins/owl-carousel/assets/owl.carousel.min.css"]'
        ).length ||
          (jQuery("head").prepend(
            '<link rel="stylesheet" href="js/plugins/owl-carousel/assets/owl.carousel.min.css">'
          ),
          jQuery("head").prepend(
            '<link rel="stylesheet" href="js/plugins/owl-carousel/assets/owl.theme.default.min.css">'
          )),
        jQuery.getScript(
          "js/plugins/owl-carousel/owl.carousel.min.js",
          function () {
            jQuery(".gfort-owl-slider").each(function (e) {
              b(jQuery(this).attr("id", "gfort-owl-slider-" + e));
            });
          }
        )),
      jQuery(".instagram-feed-block").length &&
        jQuery.getScript(
          "js/plugins/gfortinsta/gfortInsta.min.js",
          function () {
            jQuery(".instagram-feed-block").each(function () {
              jQuery(this).gfortInsta({
                textSlogan: "follow on instagram",
                linkClass: "overlay-hover scale-hover-2x",
                userID: jQuery(this).attr("data-instagram-userid"),
                limit: jQuery(this).attr("data-instagram-feed-count"),
                accessToken: jQuery(this).attr("data-instagram-accesstoken"),
              });
            });
          }
        ),
      jQuery(".twitter-feed-block").length &&
        jQuery.getScript("js/plugins/tweetie/tweetie.min.js", function () {
          jQuery(".twitter-feed-block").hasClass("twitter-slider")
            ? (jQuery(
                'link[href="js/plugins/owl-carousel/assets/owl.carousel.min.css"]'
              ).length ||
                (jQuery("head").prepend(
                  '<link rel="stylesheet" href="js/plugins/owl-carousel/assets/owl.carousel.min.css">'
                ),
                jQuery("head").prepend(
                  '<link rel="stylesheet" href="js/plugins/owl-carousel/assets/owl.theme.default.min.css">'
                )),
              jQuery.getScript(
                "js/plugins/owl-carousel/owl.carousel.min.js",
                function () {
                  v();
                }
              ))
            : v();
        }),
      jQuery("body").tooltip({
        container: "body",
        selector: '[data-toggle="tooltip"]',
      }),
      jQuery("[data-gfort-lightbox]").length &&
        (jQuery('link[href="js/plugins/fancybox/jquery.fancybox.min.css"]')
          .length ||
          jQuery("head").prepend(
            '<link rel="stylesheet" href="js/plugins/fancybox/jquery.fancybox.min.css">'
          ),
        jQuery.getScript(
          "js/plugins/fancybox/jquery.fancybox.pack.js",
          function () {
            jQuery.getScript(
              "js/plugins/fancybox/helpers/jquery.fancybox-media.min.js",
              function () {
                y();
              }
            );
          }
        )),
      jQuery("[data-gfort-lightbox-html5]").length &&
        !jQuery('link[href="js/plugins/videojs/videojs.min.css"]').length &&
        jQuery("head").prepend(
          '<link rel="stylesheet" href="js/plugins/videojs/videojs.min.css">'
        );
    function w() {
      jQuery(".background-video-block video").each(function () {
        var e = jQuery(this),
          t = e.attr("autoplay"),
          a = e.parents(".background-video-block"),
          i = a.outerWidth(!0),
          o = a.outerHeight(!0),
          s = i / 16,
          n = o / 9,
          r = s > n ? s : n,
          l = 16 * r,
          d = 9 * r;
        e.css({
          width: l,
          height: d,
          marginTop: -((d - o) / 2),
          marginLeft: -((l - i) / 2),
        }),
          void 0 !== t &&
            !1 !== t &&
            e.parents(".video-section").addClass("video-is-playing");
      });
    }
    function $() {
      jQuery(
        ".background-video-block div[data-youtube-video-url] iframe.gfort-youtube-iframe"
      ).each(function () {
        var e = jQuery(this),
          t = e.parents(".background-video-block"),
          a = t.outerWidth(!0),
          i = t.outerHeight(!0),
          o = a / 16,
          s = i / 9,
          n = o > s ? o : s,
          r = 16 * n,
          l = 9 * n;
        e.css({
          width: r,
          height: l,
          marginTop: -((l - i) / 2),
          marginLeft: -((r - a) / 2),
        });
      });
    }
    jQuery("iframe").length &&
      jQuery.getScript("js/plugins/fitvids/jquery.fitvids.min.js", function () {
        jQuery("#main-wrapper").fitVids(),
          jQuery("iframe").each(function () {
            jQuery(this).css({ width: "100%" });
          });
      }),
      jQuery("video").length &&
        (jQuery('link[href="js/plugins/videojs/videojs.min.css"]').length ||
          jQuery("head").prepend(
            '<link rel="stylesheet" href="js/plugins/videojs/videojs.min.css">'
          ),
        jQuery.getScript("js/plugins/videojs/videojs.min.js", function () {
          jQuery("video").each(function (e) {
            jQuery(this)
              .attr("id", "gfort-html-video-" + e)
              .addClass("video-js"),
              videojs(jQuery(this).attr("id"), { loop: !0, controls: !0 });
          });
        }));
    function k() {
      jQuery(".parallax-section").each(function () {
        jQuery(this).parallax("50%", 0.3),
          jQuery(this).addClass("parallax-section-effect");
      });
    }
    if (
      (jQuery(".background-video-block video").length && w(),
      jQuery(".background-video-block div[data-youtube-video-url]").length &&
        jQuery.getScript("js/plugins/gfortytplayer/ytplayer.js", function () {
          var e;
          (e = []),
            jQuery('link[href="js/plugins/fancybox/jquery.fancybox.min.css"]')
              .length ||
              (jQuery("head").prepend(
                '<link rel="stylesheet" href="js/plugins/fancybox/jquery.fancybox.min.css">'
              ),
              jQuery.getScript(
                "js/plugins/fancybox/jquery.fancybox.pack.js",
                function () {
                  jQuery.getScript(
                    "js/plugins/fancybox/helpers/jquery.fancybox-media.min.js",
                    function () {
                      y();
                    }
                  );
                }
              )),
            jQuery('link[href="js/plugins/videojs/videojs.min.css"]').length ||
              jQuery("head").prepend(
                '<link rel="stylesheet" href="js/plugins/videojs/videojs.min.css">'
              ),
            jQuery(".background-video-block div[data-youtube-video-url]").each(
              function (e) {
                var t = jQuery(this),
                  a = t.attr("data-youtube-video-url").split("?v=")[1],
                  i = t.attr("data-youtube-video-bg"),
                  o = t.attr("data-youtube-video-autoplay"),
                  s =
                    "https://www.youtube.com/embed/" +
                    a +
                    "?enablejsapi=1&controls=0&showinfo=0&loop=1&&playlist=" +
                    a +
                    "&rel=0";
                "true" === o && (s += "&autoplay=1"),
                  t.append(
                    '<iframe id="gfort-youtube-video-' +
                      e +
                      '" class="gfort-youtube-iframe" src="' +
                      s +
                      '"></iframe>'
                  ),
                  void 0 !== i &&
                    !1 !== i &&
                    t.prepend(
                      '<div class="gfort-overlay-bg" style="background-image: url(' +
                        i +
                        ')"></div>'
                    ),
                  t.append(
                    '<a href="' +
                      t.attr("data-youtube-video-url") +
                      '" class="gfort-mobile-play-button gfort-youtube-play-button" data-gfort-lightbox><i class="fa fa-play"></i></a>'
                  ),
                  jQuery("body").on(
                    "click",
                    ".gfort-mobile-play-button.gfort-youtube-play-button",
                    function (e) {
                      e.preventDefault();
                    }
                  ),
                  t.append(
                    '<div class="gfort-control-btns gfort-youtube-control-btns"><button class="gfort-play-control-btn" id="gfort-play-control-btn-' +
                      e +
                      '"></button><button class="gfort-pause-control-btn" id="gfort-pause-control-btn-' +
                      e +
                      '"></button><button class="gfort-mute-control-btn" id="gfort-mute-control-btn-' +
                      e +
                      '"></button><button class="gfort-unmute-control-btn" id="gfort-unmute-control-btn-' +
                      e +
                      '"></button></div>'
                  );
              }
            ),
            $(),
            jQuery(".background-video-block div[data-youtube-video-url]").each(
              function (t) {
                var a = jQuery(this),
                  i = a.attr("data-youtube-video-mute"),
                  o = a.find("iframe.gfort-youtube-iframe").attr("id");
                a.find("iframe.gfort-youtube-iframe").on("load", function () {
                  e[t] = new YT.Player(document.getElementById(o), {
                    events: {
                      onReady: function () {
                        "true" === i && e[t].mute(),
                          a.append(
                            '<button class="gfort-desktop-play-button gfort-youtube-play-button" id="gfort-youtube-play-btn' +
                              t +
                              '"><i class="fa fa-play"></i></button>'
                          );
                      },
                    },
                  });
                });
              }
            ),
            jQuery(".background-video-block div[data-youtube-video-url]").each(
              function (t) {
                jQuery("body").on(
                  "click",
                  "#gfort-youtube-play-btn" + t,
                  function () {
                    e[t].playVideo(),
                      jQuery(this).addClass("gfort-hide-btn"),
                      jQuery(this)
                        .parent("div[data-youtube-video-url]")
                        .addClass("show-gfort-control-btns"),
                      jQuery(this)
                        .parent("div[data-youtube-video-url]")
                        .find(".gfort-overlay-bg")
                        .remove();
                  }
                ),
                  jQuery("body").on(
                    "click",
                    "#gfort-play-control-btn-" + t,
                    function () {
                      jQuery(this)
                        .parent(".gfort-youtube-control-btns")
                        .addClass("gfort-play-btn-pressed")
                        .removeClass("gfort-pause-btn-pressed"),
                        e[t].playVideo();
                    }
                  ),
                  jQuery("body").on(
                    "click",
                    "#gfort-pause-control-btn-" + t,
                    function () {
                      jQuery(this)
                        .parent(".gfort-youtube-control-btns")
                        .addClass("gfort-pause-btn-pressed")
                        .removeClass("gfort-play-btn-pressed"),
                        e[t].pauseVideo();
                    }
                  ),
                  jQuery("body").on(
                    "click",
                    "#gfort-mute-control-btn-" + t,
                    function () {
                      jQuery(this)
                        .parent(".gfort-youtube-control-btns")
                        .addClass("gfort-mute-btn-pressed")
                        .removeClass("gfort-unmute-btn-pressed"),
                        e[t].mute();
                    }
                  ),
                  jQuery("body").on(
                    "click",
                    "#gfort-unmute-control-btn-" + t,
                    function () {
                      jQuery(this)
                        .parent(".gfort-youtube-control-btns")
                        .addClass("gfort-unmute-btn-pressed")
                        .removeClass("gfort-mute-btn-pressed"),
                        e[t].unMute();
                    }
                  );
              }
            );
        }),
      jQuery(window).resize(function () {
        jQuery(".background-video-block video").length && w(),
          jQuery(".background-video-block div[data-youtube-video-url]")
            .length && $();
      }),
      jQuery("audio").length &&
        (jQuery('link[href="js/plugins/videojs/videojs.min.css"]').length ||
          jQuery("head").prepend(
            '<link rel="stylesheet" href="js/plugins/videojs/videojs.min.css">'
          ),
        jQuery.getScript("js/plugins/videojs/videojs.min.js", function () {
          jQuery("audio").each(function (e) {
            var t = jQuery(this);
            t.attr("id", "gfort-html-audio-" + e).addClass("video-js"),
              t.attr("controls", ""),
              t.css({ height: "150px" }),
              videojs(t.attr("id"), { loop: !0, controls: !0 }),
              t
                .parent(".video-js")
                .find(".vjs-poster")
                .css({ backgroundImage: "url(" + t.attr("data-poster") + ")" })
                .removeClass("vjs-hidden");
          });
        })),
      jQuery(".modal").on("hide.bs.modal", function () {
        jQuery(this).find("video").length > 0 &&
          jQuery("video", this).each(function () {
            videojs(jQuery(this).attr("id")).pause();
          }),
          jQuery(this).find("audio").length > 0 &&
            jQuery("audio", this).each(function () {
              videojs(jQuery(this).attr("id")).pause();
            }),
          jQuery(this)
            .find("iframe")
            .each(function () {
              var e = jQuery(this);
              (e.attr("src").indexOf("youtube") > -1 ||
                e.attr("src").indexOf("vimeo") > -1 ||
                e.attr("src").indexOf("soundcloud") > -1) &&
                e.attr("src", e.attr("data-tempSRC"));
            });
      }),
      jQuery(".modal").on("show.bs.modal", function () {
        if (
          (jQuery(this)
            .find("iframe")
            .each(function () {
              var e = jQuery(this);
              (e.attr("src").indexOf("youtube") > -1 ||
                e.attr("src").indexOf("vimeo") > -1 ||
                e.attr("src").indexOf("soundcloud") > -1) &&
                (e.attr("data-tempSRC", e.attr("src")),
                e.attr("src", e.attr("data-tempSRC")));
            }),
          jQuery(this).find(".gfort-recaptcha").length > 0)
        ) {
          var e = jQuery(this).find(".gfort-recaptcha-wrapper"),
            t = e.find(".gfort-recaptcha").attr("id");
          e.find(".gfort-recaptcha").remove(),
            e.prepend(
              '<div class="gfort-recaptcha" id="' +
                t +
                '" data-sitekey="' +
                r +
                '" data-callback="recaptchaCallback"></div>'
            ),
            grecaptcha.render(t, { sitekey: r }),
            jQuery(".gfort-captcha-error").remove();
        }
      }),
      jQuery(".blog-item-share").on({
        mouseenter: function () {
          jQuery(this)
            .parents(".blog-item-footer")
            .find(".blog-item-like")
            .addClass("opacityHide"),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-views")
              .addClass("opacityHide"),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-author")
              .addClass("opacityHide");
        },
        mouseleave: function () {
          jQuery(this)
            .parents(".blog-item-footer")
            .find(".blog-item-like")
            .removeClass("opacityHide"),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-views")
              .removeClass("opacityHide"),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-author")
              .removeClass("opacityHide");
        },
        click: function (e) {
          e.preventDefault(),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-like")
              .addClass("opacityHide"),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-views")
              .addClass("opacityHide"),
            jQuery(this)
              .parents(".blog-item-footer")
              .find(".blog-item-author")
              .addClass("opacityHide");
        },
      }),
      jQuery(".blog-item-media iframe").each(function () {
        if (jQuery(this).attr("src").indexOf("soundcloud") > -1) {
          var e = jQuery(this).attr("src");
          1 > jQuery(this).attr("src").indexOf("visual=true") &&
            ((e += "&visual=true"), jQuery(this).attr("src", e));
        }
      }),
      jQuery(".isotope-filter").length &&
        (jQuery(".isotope-filter a").each(function () {
          var e,
            t = jQuery(this).attr("data-filter"),
            a = jQuery(this)
              .parents(".isotope-filter")
              .parent()
              .find(".isotope-masonry");
          (e = a.find(jQuery(".isotope-item" + t)).length),
            "*" === t && (e = a.find(".isotope-item").length),
            jQuery(this).append('<span class="items-count">(' + e + ")</span>");
        }),
        jQuery(".isotope-filter a").on("click", function (e) {
          e.preventDefault();
          var t = jQuery(this)
            .parents(".isotope-filter")
            .parent()
            .find(".isotope-masonry");
          jQuery(this)
            .parents(".isotope-filter")
            .find(".active-item")
            .removeClass("active-item"),
            jQuery(this).addClass("active-item"),
            t.isotope({ filter: jQuery(this).attr("data-filter") });
        })),
      jQuery(".product-rating a").on("click", function () {
        var e = jQuery(this).attr("href").replace("#", "");
        return (
          jQuery(this)
            .parents(".shop-item")
            .find(".nav-tabs li")
            .removeClass("active"),
          jQuery(this)
            .parents(".shop-item")
            .find('.nav-tabs li a[href="#' + e + '"]')
            .parent("li")
            .addClass("active"),
          jQuery(this)
            .parents(".shop-item")
            .find(".tab-content .tab-pane")
            .removeClass("in active"),
          jQuery(this)
            .parents(".shop-item")
            .find('.tab-content .tab-pane[id="' + e + '"]')
            .addClass("in active"),
          jQuery(".header-section").hasClass("fixed-header")
            ? jQuery("html, body").animate(
                { scrollTop: jQuery(".gfort-tabs").offset().top - 81 },
                800
              )
            : jQuery("html, body").animate(
                { scrollTop: jQuery(".gfort-tabs").offset().top },
                800
              ),
          !1
        );
      }),
      jQuery(".shipping-calculator-btn").on("click", function (e) {
        e.preventDefault(),
          jQuery(".shipping-calculator-form").slideToggle("slow");
      }),
      jQuery(".showlogin-btn").on("click", function (e) {
        e.preventDefault(),
          jQuery(".checkout-login-form-block").slideToggle("slow");
      }),
      jQuery(".showcoupon-btn").on("click", function (e) {
        e.preventDefault(),
          jQuery(".checkout-coupon-form-block").slideToggle("fast");
      }),
      jQuery("#form_ship_to_different_address").on("change", function () {
        jQuery(".ship-to-different-address-form").slideToggle("slow");
      }),
      jQuery('#payment li input[type="radio"]').length &&
        jQuery('#payment li input[type="radio"]').each(function () {
          !0 === jQuery(this)[0].checked &&
            jQuery(this)
              .parents("li")
              .find("div:not(.radio)")
              .css({ display: "block" });
        }),
      jQuery('#payment li input[type="radio"]').on("change", function () {
        jQuery(this)
          .parents("ul")
          .find("div:not(.radio)")
          .each(function () {
            jQuery(this).slideUp();
          }),
          jQuery(this).parents("li").find("div:not(.radio)").slideDown();
      }),
      jQuery(".google-map-block").length)
    ) {
      var C = jQuery(".google-map-block").attr("data-api-key");
      jQuery.getScript(
        "https://maps.googleapis.com/maps/api/js?key=" + C,
        function () {
          jQuery.getScript("js/plugins/infobox/infobox_packed.js", function () {
            jQuery(".google-map-block").each(function (e) {
              var t,
                a = jQuery(this),
                i = parseInt(a.attr("data-zoom"), 10),
                o = new google.maps.LatLng(
                  a.attr("data-lat"),
                  a.attr("data-lng")
                );
              a.hasClass("google-map-block-collapsed") &&
                (a.addClass("parallax-section"),
                jQuery.getScript(
                  "js/plugins/parallax/jquery.parallax-1.1.3.min.js",
                  function () {
                    k();
                  }
                ),
                a.prepend(
                  '<a href="#" class="open-google-map-btn"><i class="glyphicon glyphicon-map-marker"></i></a>'
                ),
                a.prepend(
                  '<a href="#" class="close-google-map-btn">&times;</a>'
                )),
                a.attr("id", "gfort-main-google-map-block-" + e),
                a.append(
                  '<div class="gfort-google-map" id="gfort-google-map-' +
                    e +
                    '"></div>'
                ),
                (t = {
                  zoom: i,
                  panControl: !1,
                  scrollwheel: !1,
                  center: o,
                  mapTypeControl: !0,
                }),
                (l[e] = new google.maps.Map(
                  document.getElementById("gfort-google-map-" + e),
                  t
                )),
                (function e(t) {
                  var a,
                    i,
                    o = [],
                    s = [];
                  jQuery(
                    "#gfort-main-google-map-block-" + t + " .google-map-marker"
                  ).each(function (e) {
                    var n = jQuery(this);
                    (o[e] = new google.maps.Marker({
                      icon: n.attr("data-marker-image"),
                      position: new google.maps.LatLng(
                        n.attr("data-marker-lat"),
                        n.attr("data-marker-lng")
                      ),
                    })),
                      o[e].setMap(l[t]),
                      ((a = document.createElement("div")).className =
                        "infoWindow-block-container"),
                      (a.innerHTML = jQuery(this).html()),
                      (i = {
                        zIndex: 80,
                        maxWidth: 280,
                        alignBottom: !0,
                        closeBoxMargin: "0",
                        disableAutoPan: !1,
                        content: a,
                        enableEventPropagation: !0,
                        boxClass: "infoWindow-block",
                        pixelOffset: new google.maps.Size(-140, 0),
                        infoBoxClearance: new google.maps.Size(1, 1),
                        closeBoxURL: "js/plugins/infobox/close.png",
                      }),
                      (s[e] = new InfoBox(i)),
                      google.maps.event.addListener(o[e], "click", function () {
                        var a;
                        for (a = 0; a < o.length; a += 1) s[a].close();
                        s[e].open(l[t], this);
                      });
                  });
                })(e);
            });
          });
        }
      );
    }
    jQuery("body").on("click", ".open-google-map-btn", function (e) {
      e.preventDefault(),
        jQuery(this).parents(".google-map-block").addClass("uncollapsed");
    }),
      jQuery("body").on("click", ".close-google-map-btn", function (e) {
        e.preventDefault(),
          jQuery(this).parents(".google-map-block").removeClass("uncollapsed");
      }),
      jQuery(".text-animation").length &&
        jQuery.getScript("js/plugins/typed/typed.min.js", function () {
          jQuery(".text-animation").each(function () {
            var e = jQuery(this);
            e.wrap('<span class="gfort-text-animation-wrapper"></span>'),
              jQuery(".gfort-text-animation-wrapper").append(
                '<span class="gfort-text-animation"></span>'
              ),
              e
                .parent()
                .find(".gfort-text-animation")
                .typed({
                  loop: !0,
                  typeSpeed: 30,
                  backDelay: 2e3,
                  loopCount: !1,
                  stringsElement: e,
                  contentType: "html",
                });
          });
        });
    function j(e) {
      jQuery(".gfort-pie-block-circle").each(function () {
        var t = jQuery(this),
          a = t.parents(".pie-block-circle"),
          i = Math.ceil(a.width() - 1),
          o = a.attr("data-bar-color"),
          s = a.attr("data-pie-percent"),
          n = a.attr("data-track-color");
        void 0 === o || "undefined" === o || "" === o
          ? (o = "#2791d8")
          : "#" !== o.charAt(0) && (o = "#" + o),
          void 0 === n || "undefined" === n || "" === n
            ? (n = "#f5f5f5")
            : "#" !== n.charAt(0) && (n = "#" + n),
          a.css({ color: o }),
          t.easyPieChart({
            size: i,
            scaleLength: 0,
            lineWidth: "5",
            scaleColor: !1,
            lineCap: "square",
            barColor: o,
            trackColor: n,
            animate: { duration: 1500, enabled: e },
          }),
          t.data("easyPieChart").update(Math.ceil(s));
      });
    }
    jQuery(".prettyprint").length &&
      jQuery.getScript("js/plugins/prettify/prettify.min.js", function () {
        jQuery(".prettyprint").each(function () {
          jQuery(this).html(
            jQuery(this).html().replace(/</g, "&lt;").replace(/>/g, "&gt;")
          );
        }),
          prettyPrint();
      }),
      jQuery(".downtime-counter-block").length &&
        jQuery.getScript(
          "js/plugins/downCount/jquery.downCount.min.js",
          function () {
            jQuery(".downtime-counter-block").each(function () {
              var e = jQuery(this),
                t = e.attr("data-downtime-year"),
                a = e.attr("data-downtime-month"),
                i = e.attr("data-downtime-day"),
                o = e.attr("data-downtime-hour"),
                s = e.attr("data-downtime-min"),
                n = e.attr("data-downtime-UTC-offset"),
                r = e.attr("data-downtime-message");
              e.downCount(
                {
                  date: a + "/" + i + "/" + t + " " + o + ":" + s + ":00",
                  offset: n,
                },
                function () {
                  e.html(
                    '<div class="downtime-100-col"><h2>' + r + "</h2></div>"
                  );
                }
              );
            });
          }
        ),
      jQuery(".pie-block").length &&
        (jQuery(".pie-block-circle").each(function () {
          jQuery(this).prepend('<div class="gfort-pie-block-circle"></div>');
        }),
        jQuery.getScript(
          "js/plugins/easypiechart/jquery.easypiechart.min.js",
          function () {
            jQuery.getScript(
              "js/plugins/waypoint/jquery.waypoints.min.js",
              function () {
                j(!0);
              }
            );
          }
        )),
      jQuery(window).resize(function () {
        jQuery(".pie-block").length &&
          (jQuery(".pie-block-circle").each(function () {
            jQuery(this).find(".gfort-pie-block-circle").remove(),
              jQuery(this).prepend(
                '<div class="gfort-pie-block-circle"></div>'
              );
          }),
          j(!1));
      }),
      jQuery(".progress-block").length &&
        jQuery.getScript(
          "js/plugins/waypoint/jquery.waypoints.min.js",
          function () {
            jQuery(".progress-block").each(function () {
              var e = jQuery(this),
                t = e.find(".progress-bar"),
                a = e.find("span").attr("data-to");
              t.css({ width: a + "%" });
            });
          }
        ),
      jQuery(".wow").length &&
        jQuery.getScript("js/plugins/wow/wow.min.js", function () {
          new WOW({ mobile: !1 }).init();
        }),
      jQuery(".sitemap-block").length &&
        jQuery(".sitemap-block ul")
          .parent("li")
          .addClass("sitemap-parent-list"),
      t.any()
        ? (jQuery("body").addClass("gfort-mobile-device"),
          jQuery("a").each(function () {
            jQuery(this).addClass("no-transition");
          }))
        : (jQuery("body").addClass("gfort-desktop-device"),
          jQuery(".parallax-section").length &&
            jQuery.getScript(
              "js/plugins/parallax/jquery.parallax-1.1.3.min.js",
              function () {
                k();
              }
            ),
          jQuery("select").length &&
            (jQuery('link[href="js/plugins/chosen/chosen.min.css"]').length ||
              jQuery("head").prepend(
                '<link rel="stylesheet" href="js/plugins/chosen/chosen.min.css">'
              ),
            jQuery.getScript(
              "js/plugins/chosen/chosen.jquery.min.js",
              function () {
                jQuery("select").each(function () {
                  var e = jQuery(this),
                    t = !0;
                  "true" === e.attr("data-select-search") && (t = !1),
                    e
                      .chosen({
                        width: "100%",
                        inherit_select_classes: !0,
                        disable_search: t,
                      })
                      .addClass("gfort-chosen-select");
                });
              }
            )),
          jQuery(".counter-block").length &&
            jQuery.getScript(
              "js/plugins/waypoint/jquery.waypoints.min.js",
              function () {
                jQuery.getScript(
                  "js/plugins/countto/jquery.countTo.min.js",
                  function () {
                    jQuery(".counter-block").each(function () {
                      var e = jQuery(this),
                        t = e.find(".number-block").attr("data-decimals");
                      (t =
                        void 0 === t || "undefined" === t || "" === t
                          ? "0"
                          : parseInt(t, 10)),
                        (e = new Waypoint({
                          element: e[0],
                          handler: function () {
                            jQuery(this.element)
                              .find("[data-to]")
                              .countTo({ decimals: t }),
                              this.destroy();
                          },
                          offset: "95%",
                        }));
                    });
                  }
                );
              }
            ));
  }),
  jQuery(window).resize(function () {
    "use strict";
    var e;
    jQuery(".isotope-masonry").length &&
      (e = setTimeout(function () {
        jQuery(".isotope-masonry").each(function () {
          jQuery(this).isotope("layout");
        }),
          clearTimeout(e);
      }, 300));
  }),
  jQuery(window).load(function () {
    "use strict";
    var e;
    function t() {
      jQuery(".navbar-nav > li:not(.megamenu)").each(function () {
        var e = jQuery(this),
          t = jQuery(window).width();
        if ((e.removeClass("subMenu_correctPosition"), t > 1199)) {
          if (
            !jQuery(".header-section").hasClass("sidebar-header") &&
            e.children(".submenu").length
          ) {
            for (var a = e.children(".submenu"), i = a; i.length; )
              (a = i), (i = i.children("li").children(".submenu"));
            a.offset().left < 0 && e.addClass("subMenu_correctPosition"),
              t < a.width() + a.offset().left &&
                e.addClass("subMenu_correctPosition");
          }
        } else jQuery(".subMenu_correctPosition").removeClass("subMenu_correctPosition");
      });
    }
    t(),
      jQuery(window).resize(function () {
        t();
      }),
      jQuery(".isotope-masonry").length &&
        jQuery.getScript("js/plugins/isotope/isotope.pkgd.min.js", function () {
          jQuery.getScript(
            "js/plugins/isotope/packery-mode.pkgd.min.js",
            function () {
              var e;
              (e = !0),
                jQuery(".isotope-masonry").each(function () {
                  jQuery(this).isotope({
                    filter: "*",
                    layoutMode: "packery",
                    percentPosition: !0,
                    itemSelector: ".isotope-item",
                    originLeft: e,
                    animationOptions: {
                      queue: !1,
                      duration: 850,
                      easing: "linear",
                    },
                  });
                });
            }
          );
        }),
      jQuery(".gfort-recaptcha").length &&
        jQuery(".gfort-recaptcha").each(function () {
          (e = jQuery(".gfort-recaptcha").attr("data-sitekey")),
            grecaptcha.render(jQuery(this).attr("id"), { sitekey: e });
        }),
      jQuery(".counter-inline-block").length &&
        jQuery(".counter-inline-block").each(function () {
          jQuery(this).css({ minWidth: Math.ceil(jQuery(this).width()) });
        }),
      console.log(
        "%c This message not included in the download package, it's for demo purpose only",
        "font-size: 14px; color: #000000;"
      ),
      console.log(
        "%c PLUME HTML5 Multi-Purpose Template designed and developed by Graphicfort",
        "font-size: 16px; color: #000;"
      ),
      console.log(
        "%c If you like it you can buy it from https://1.envato.market/x9d6kO",
        "font-size: 16px; color: #000;"
      );
  });
