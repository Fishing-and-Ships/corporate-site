// F&S株式会社 コーポレートサイト
// 水深計(スクロールインジケーター)とセクションのフェードイン

(function () {
  "use strict";

  // ===== 水深計 =====
  // ページ最下部 = 水深 200m として、スクロール量を水深に換算する
  var MAX_DEPTH = 200;
  var depthValue = document.getElementById("depth-value");
  var depthFill = document.getElementById("depth-fill");

  function updateDepth() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    var ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    var depth = Math.round(ratio * MAX_DEPTH);
    if (depthValue) {
      depthValue.textContent = "−" + String(depth).padStart(3, "0") + " m";
    }
    if (depthFill) {
      depthFill.style.height = ratio * 100 + "%";
    }
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateDepth();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateDepth, { passive: true });
  updateDepth();

  // ===== セクションのフェードイン =====
  var targets = document.querySelectorAll(
    ".section .section-heading, .news-row, .business-row, .company-dl, .company-history, .recruit-body, .contact-body"
  );
  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  function revealAll() {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    targets.forEach(function (el) {
      observer.observe(el);
    });
    // 印刷・全画面キャプチャ等で observer が発火しない場合の保険
    window.setTimeout(revealAll, 3000);
    window.addEventListener("beforeprint", revealAll);
  } else {
    revealAll();
  }
})();
