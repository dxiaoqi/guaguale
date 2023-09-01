function getData() {
  return {
    Data: {
      way2: { options: ["dl"] },
      way3: { options: ["1", "9", "10"], options1: ["4", "5", "20"] },
      way4: {
        options: [
          { "no.": "03", value: "40" },
          { "no.": "10", value: "100000" },
          { "no.": "09", value: "10" },
          { "no.": "04", value: "10" },
          { "no.": "14", value: "100" },
          { "no.": "01", value: "20" },
          { "no.": "02", value: "30" },
        ],
        wins1: ["09", "10"],
      },
      wins: "20",
    },
  };
}
function myload() {
  $(".gk").attr("src", img_gk),
    $(".bg,.back img").attr("src", img_bg),
    $(".pyang").show();
  var a = document.getElementById("canvas01");
  (a.width = ww), (a.height = (ww / imgw) * imgh);
  var e = a.getContext("2d"),
    n = new Image();
  (n.src = img__g),
    (n.onload = function () {
      e.drawImage(n, 0, 0, a.width, a.height);
      var s = {};
      (s.transactionType = "8031"), (s.gglName = gglName);
      "" != s && (function () {
            var a = getData();
            if ("" === a.Data || void 0 == a.Data)
              return $(".ydain").unbind("click"), !1;
            $(".gkq").css({ opacity: "1" }),
              "windows" != ua
                ? setTimeout(function () {
                    $(".ydain").show();
                  }, 500)
                : sgStart(),
              addHtml(a);
          })()
        tapClip("canvas01");
    }),
    $(".openBnt,.g_4_get")
      .unbind("click")
      .bind("click", function () {
        if ($(".g_4_get").hasClass("g_4_dis")) return !1;
        if (
          ($(".ydain").hide(),
          $("#canvas01").addClass("noOp").removeClass("hasmouse"),
          (startClip = !1),
          panduan(),
          $(".openBnt,.g_4_get").unbind("click"),
          !$(this).hasClass("_opened"))
        ) {
          var s = "",
            t = 10;
          numon > 0
            ? ((s = "恭喜您！获得 " + numon + "元"), (t = 1e3))
            : (s = "很遗憾！您没有中奖！"),
            $(this).addClass("_opened"),
            setTimeout(function () {
              (startClip = !0),
                "windows" == ua
                  ? ($(".g_1_mask").show(), $(".gm_tips").html(s))
                  : layer.open({
                      style:
                        "width:80%;text-align:center;background:rgba(255,255,255,0.8);",
                      content: s,
                      shadeClose: !1,
                      btn: ["再来一次", "更多游戏"],
                      yes: function (s) {
                        e.clearRect(0, 0, a.width, a.height),
                          e.drawImage(n, 0, 0, a.width, a.height),
                          reset();
                      },
                      no: function () {
                        location.href = "index.php?act=ggl&gName=list";
                      },
                    });
            }, t);
        }
        return !1;
      }),
    $(".ydain").click(function () {
      sgStart();
    }),
    $(".g_4_open").click(function () {
      $("#canvas01").addClass("noOp").removeClass("hasmouse"),
        (startClip = !1),
        $(".g_4_get").removeClass("g_4_dis");
    }),
    $(".g_4_reset,.gm_again").click(function () {
      location.reload();
    }),
    $(".gm_more").click(function () {
      location.href = "index.php?act=ggl&gName=list";
    }),
    $(".gm_close").click(function () {
      $(".g_1_mask").hide();
    });
}
function reset() {
  $(".openBnt,.g_4_get").removeClass("_opened"),
    $(".ydain").hide(),
    $(".back").removeClass("noback").addClass("noface"),
    $(".face").removeClass("noface").addClass("noback"),
    $(".zgao").hide(),
    $(".sgq").addClass("fd"),
    $(".hzz").addClass("hzz0"),
    layer.closeAll(),
    $(".sgq").removeClass("fd"),
    $(".hzz").removeClass("hzz0"),
    $("body").css({ overflow: "auto" }),
    (startClip = !1),
    $("#canvas01").removeClass("noOp"),
    $(".openBnt").hide(),
    $(".g_4_get").addClass("g_4_dis"),
    myload();
}
function sgStart() {
  $(".zgao").show(),
    $(".ydain").hide(),
    $(".back")
      .removeClass("noface")
      .addClass("noback")
      .find("img")
      .attr("src", ""),
    $(".face").removeClass("noback").addClass("noface"),
    $("#canvas01").addClass("hasmouse"),
    $(".sgq").addClass("fd"),
    $(".hzz").addClass("hzz0"),
    "windows" != ua && $("body").css({ overflow: "hidden" }),
    $(".hzz").height(wh),
    (startClip = !0),
    $(window).scrollTop(0);
}
window.onload = myload();
