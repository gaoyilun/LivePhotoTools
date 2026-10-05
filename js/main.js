/* ============================================================
   实况工具箱 · Live Photo Tools — Landing Page 交互
   ============================================================ */

(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 0. i18n 中英文案字典 ---------- */
  const I18N = {
    zh: {
      "meta.title": "实况工具箱 · Live Photo Tools",
      "meta.desc": "实况工具箱 Live Photo Tools —— 专注于 Android 实况照片（Live Photo / Motion Photo）的本地处理工具。合成、提取、编辑一气呵成。",
      "nav.name": "实况工具箱",
      "nav.features": "功能",
      "nav.download": "下载",
      "nav.compat": "兼容性",
      "nav.stack": "技术栈",
      "nav.faq": "常见问题",
      "nav.cta": "下载 APK",
      "nav.menu": "菜单",
      "lang.toggle.zh": "切换到英文",
      "lang.toggle.en": "切换到中文",
      "hero.badge": "v1.0.1 · Android 8+",
      "hero.title": "实况工具箱",
      "hero.sub": "Android Motion 实况（ Live 照片）处理工具",
      "hero.download": "立即下载 APK",
      "hero.explore": "探索功能",
      "hero.scroll": "向下滚动",
      "tool.compose": "Live 合成",
      "tool.extract": "Live 提取",
      "tool.edit": "Live 编辑",
      "tool.composeText": "图片 + 视频 / 视频转实况",
      "tool.extractText": "提取封面 / 原视频 / GIF",
      "tool.editText": "重选封面 · 调整速度 · 编辑音轨",
      "tool.dot1": "工具 1",
      "tool.dot2": "工具 2",
      "tool.dot3": "工具 3",
      "features.tag": "Features",
      "features.title": "打开工具箱，取用三大能力",
      "features.desc": "合成、提取、编辑三件核心工具，开箱即用。",
      "chip.local": "🔒 本地优先 · 素材不上传",
      "chip.split": "🌗 自适应分屏小窗",
      "chip.hw": "⚡ 硬件加速 · 高效导出",
      "download.tag": "Download",
      "download.title": "开始使用",
      "download.desc": "一个通用安装包，适配所有 Android 8+ 设备。",
      "download.name": "实况工具箱",
      "download.meta": "通用安装包 · 支持全部架构 · 签名安装包",
      "download.universal": "通用安装包（适配所有 Android 设备）",
      "download.btn": "下载",
      "download.releases": "查看全部版本 →",
      "download.mirror": "境内备用下载 →",
      "compat.tag": "Compatibility",
      "compat.title": "设备兼容性",
      "compat.desc": "已实测机型与系统版本，更多机型持续验证中。",
      "compat.ok": "✅ 支持",
      "compat.partial": "⭕️ 部分支持 *",
      "compat.note": "* HyperOS 1 机型目前仅支持「Live 提取」，合成 / 编辑暂未验证。欢迎在 Issue 分享你的机型测试结果，帮助我们完善兼容性列表。",
      "stack.tag": "Tech Stack",
      "stack.title": "技术栈",
      "stack.desc": "现代、轻量、全本地化的工程选型。",
      "faq.tag": "FAQ",
      "faq.title": "常见问题",
      "faq.q1.q": "合成的实况在相册里不显示为动态？",
      "faq.q1.a": "部分厂商相册对 Motion Photo 的兼容不同。建议优先使用 Google 相册或原厂图库查看；导出的视频 / GIF 为通用格式，任意播放器均可播放。",
      "faq.q2.q": "需要联网或上传照片吗？",
      "faq.q2.a": "不需要。所有处理均在设备本地完成，仅通过系统文件选择器访问你主动选择的媒体文件，不会私自读取相册，更不会上传云端。",
      "faq.q3.q": "支持哪些系统版本？",
      "faq.q3.a": "Android 8.0（API 26）及以上版本均可运行。",
      "faq.q4.q": "下载慢 / 无法访问 GitHub？",
      "faq.q4.a": "GitHub 访问受限时，可前往本页「境内备用下载」入口获取安装包，境内网络下同样快速稳定。",
      "footer.name": "实况工具箱 · Live Photo Tools",
      "footer.mirror": "境内备用下载",
      "footer.top": "回到顶部 ↑",
      "type.phrases": ["Live Photo Tools", "实况照片 · 本地处理", "Synthesize · Extract · Edit"]
    },
    en: {
      "meta.title": "Live Photo Tools — On-device Live Photo Toolbox",
      "meta.desc": "Live Photo Tools — an on-device tool for Android Live Photos (Motion Photos). Compose, extract and edit — all in one place.",
      "nav.name": "Live Photo Tools",
      "nav.features": "Features",
      "nav.download": "Download",
      "nav.compat": "Compatibility",
      "nav.stack": "Tech Stack",
      "nav.faq": "FAQ",
      "nav.cta": "Get APK",
      "nav.menu": "Menu",
      "lang.toggle.zh": "切换到英文",
      "lang.toggle.en": "切换到中文",
      "hero.badge": "v1.0.1 · Android 8+ · On-device",
      "hero.title": "Live Photo Tools",
      "hero.sub": "Android Motion Photo (Live Photo) processing tool",
      "hero.download": "Download APK",
      "hero.explore": "Explore Features",
      "hero.scroll": "Scroll down",
      "tool.compose": "Live Compose",
      "tool.extract": "Live Extract",
      "tool.edit": "Live Edit",
      "tool.composeText": "Photo + video → Live Photo, saved straight to gallery",
      "tool.extractText": "Extract cover frame / source video / GIF",
      "tool.editText": "Re-pick cover · adjust speed · edit audio",
      "tool.dot1": "Tool 1",
      "tool.dot2": "Tool 2",
      "tool.dot3": "Tool 3",
      "features.tag": "Features",
      "features.title": "Open the toolbox, grab three tools",
      "features.desc": "Compose, extract and edit — ready out of the box.",
      "chip.local": "🔒 Local-first · media never uploaded",
      "chip.split": "🌗 Adaptive split-screen mini window",
      "chip.hw": "⚡ Hardware-accelerated export",
      "download.tag": "Download",
      "download.title": "Get Started",
      "download.desc": "One universal package that runs on all Android 8+ devices.",
      "download.name": "Live Photo Tools",
      "download.meta": "Universal package · all ABIs · signed",
      "download.universal": "Universal package (all Android devices)",
      "download.btn": "Download",
      "download.releases": "View all releases →",
      "download.mirror": "Mirror download →",
      "compat.tag": "Compatibility",
      "compat.title": "Device Compatibility",
      "compat.desc": "Tested devices & OS versions; more to come.",
      "compat.ok": "✅ Supported",
      "compat.partial": "⭕️ Partial support *",
      "compat.note": "* On HyperOS 1 devices only “Live Extract” is supported; Compose / Edit are not verified yet. Share your test results in an Issue to help us expand the compatibility list.",
      "stack.tag": "Tech Stack",
      "stack.title": "Tech Stack",
      "stack.desc": "Modern, lightweight, fully on-device engineering.",
      "faq.tag": "FAQ",
      "faq.title": "FAQ",
      "faq.q1.q": "My composed Live Photo doesn't animate in the gallery?",
      "faq.q1.a": "Gallery support for Motion Photos varies by vendor. We recommend viewing with Google Photos or the stock gallery; exported videos / GIFs are universal formats playable anywhere.",
      "faq.q2.q": "Does it need network or photo uploads?",
      "faq.q2.a": "No. Everything is processed on-device; only media you explicitly pick via the system file picker is accessed. Nothing is read from your gallery or uploaded.",
      "faq.q3.q": "Which Android versions are supported?",
      "faq.q3.a": "Android 8.0 (API 26) and above.",
      "faq.q4.q": "Slow download / can't reach GitHub?",
      "faq.q4.a": "When GitHub is hard to reach, use the “Mirror download” link on this page to get the APK — fast and stable on domestic networks.",
      "footer.name": "Live Photo Tools",
      "footer.mirror": "Mirror Download",
      "footer.top": "Back to top ↑",
      "type.phrases": ["Live Photo Tools", "On-device Live Photo processing", "Synthesize · Extract · Edit"]
    }
  };

  let currentLang =
    localStorage.getItem("lpt-lang") ||
    ((navigator.language || "zh-CN").toLowerCase().startsWith("zh") ? "zh" : "en");
  if (!I18N[currentLang]) currentLang = "zh";

  /* ---------- 1. 导航滚动态 + 移动端菜单 ---------- */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");
  const navScrim = document.getElementById("navScrim");

  function onScrollNav() {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  function closeMenu() {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    if (navScrim) navScrim.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    if (navScrim) navScrim.classList.toggle("is-active", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  if (navScrim) navScrim.addEventListener("click", closeMenu);
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", closeMenu)
  );

  /* ---------- 3. 鼠标跟随光斑（仅指针设备 + 桌面） ---------- */
  const spotlight = document.getElementById("spotlight");
  const canHover = window.matchMedia("(hover: hover)").matches;

  if (canHover && spotlight && !prefersReduced) {
    let tx = -9999, ty = -9999, x = -9999, y = -9999;
    let raf = null;

    window.addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      spotlight.classList.add("on");
      if (!raf) raf = requestAnimationFrame(loop);
    });
    window.addEventListener("pointerleave", () => spotlight.classList.remove("on"));
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) spotlight.classList.remove("on");
    });

    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      spotlight.style.transform = `translate(${x - 230}px, ${y - 230}px)`;
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  }

  /* ---------- 4. 磁性按钮 ---------- */
  const magneticBtns = document.querySelectorAll("[data-magnetic]");

  if (canHover && !prefersReduced) {
    magneticBtns.forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) * 0.22;
        const dy = (e.clientY - r.top - r.height / 2) * 0.32;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- 5. 滚动渐显 ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------- 6. 工具箱开箱动画 ---------- */
  const toolbox = document.getElementById("toolbox");
  if (toolbox) {
    const toolboxIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          toolbox.classList.add("is-open");
          if (mobileMQ.matches) startToolCarousel();
          toolboxIO.unobserve(toolbox);
        });
      },
      { threshold: 0.3 }
    );
    toolboxIO.observe(toolbox);
  }

  /* ---------- 6b. 工具箱卡片（移动端层叠切换） ---------- */
  const mobileMQ = window.matchMedia("(max-width: 860px)");
  const tools = Array.from(document.querySelectorAll(".tool"));
  const toolDots = Array.from(document.querySelectorAll(".toolbox__dot"));
  const screensEls = Array.from(document.querySelectorAll(".screen"));
  let toolIdx = 0;
  let toolTimer = null;
  let swipeSuppressed = false;

  function applyToolStack() {
    if (!mobileMQ.matches) return;
    tools.forEach((t, i) => {
      const active = i === toolIdx;
      t.classList.toggle("is-active", active);
      t.classList.toggle("is-stack", !active);
    });
    toolDots.forEach((d, i) => {
      const active = i === toolIdx;
      d.classList.toggle("is-active", active);
      d.setAttribute("aria-current", active ? "true" : "false");
    });
    // 三张截屏与上方三个状态（工具箱）按相同序号联动
    screensEls.forEach((s, i) => s.classList.toggle("is-active", i === toolIdx));
  }
  function startToolCarousel() {
    if (!mobileMQ.matches || !tools.length) return;
    stopToolCarousel();
    applyToolStack();
    if (!prefersReduced) {
      toolTimer = setInterval(() => {
        toolIdx = (toolIdx + 1) % tools.length;
        applyToolStack();
      }, 3600);
    }
  }
  function stopToolCarousel() {
    if (toolTimer) { clearInterval(toolTimer); toolTimer = null; }
  }
  toolDots.forEach((d, i) =>
    d.addEventListener("click", () => {
      if (!mobileMQ.matches) return;
      toolIdx = i;
      startToolCarousel();
    })
  );
  tools.forEach((t) =>
    t.addEventListener("click", () => {
      if (!mobileMQ.matches) return;
      // 若是滑动收尾误触发的 click，则忽略，避免重复推进
      if (swipeSuppressed) { swipeSuppressed = false; return; }
      toolIdx = (toolIdx + 1) % tools.length;
      startToolCarousel();
    })
  );

  // 手机端：截屏区与工具箱卡片均支持左右滑动切换（循环），共用 toolIdx
  function bindSwipe(el) {
    if (!el) return;
    let touchX = null;
    el.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) {
        // 循环：向左(末张→首张) / 向右(首张→末张)
        toolIdx = dx < 0
          ? (toolIdx + 1) % tools.length
          : (toolIdx - 1 + tools.length) % tools.length;
        swipeSuppressed = true;
        startToolCarousel();
      }
    });
  }
  bindSwipe(document.querySelector(".screens"));
  bindSwipe(toolbox);

  if (mobileMQ.matches) {
    screensEls[0].classList.add("is-active");
    const screensWrap = document.querySelector(".screens");
    if (screensWrap) {
      const screensIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { applyToolStack(); screensIO.unobserve(entry.target); }
        });
      }, { threshold: 0.2 });
      screensIO.observe(screensWrap);
    }
  }

  mobileMQ.addEventListener("change", (e) => {
    if (e.matches) {
      if (toolbox.classList.contains("is-open")) startToolCarousel();
    } else {
      stopToolCarousel();
      tools.forEach((t) => t.classList.remove("is-active", "is-stack"));
      screensEls.forEach((s) => s.classList.remove("is-active"));
      closeMenu();
    }
  });

  /* ---------- 7. 打字机效果（支持语言切换后重置） ---------- */
  const typeEl = document.getElementById("typewriter");
  let typeTimer = null;
  let phrases = [];
  let pi = 0, ci = 0, deleting = false;

  function startType() {
    if (!typeEl) return;
    clearTimeout(typeTimer);
    pi = 0; ci = 0; deleting = false;
    if (prefersReduced) {
      typeEl.textContent = phrases[0];
      return;
    }
    type();
  }

  function type() {
    const word = phrases[pi];
    typeEl.textContent = word.slice(0, ci);
    let delay = deleting ? 45 : 85;

    if (!deleting && ci === word.length) {
      delay = 1600;
      deleting = true;
    } else if (deleting && ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      delay = 500;
    }
    ci += deleting ? -1 : 1;
    typeTimer = setTimeout(type, delay);
  }

  /* ---------- 8. 导航高亮（scrollspy） ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const spyLinks = navLinks.querySelectorAll('a[href^="#"]');
  const spyIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spyLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spyIO.observe(s));

  /* ---------- 9. 回到顶部 ---------- */
  const backTop = document.getElementById("backTop");
  window.addEventListener(
    "scroll",
    () => {
      backTop.classList.toggle("show", window.scrollY > 600);
    },
    { passive: true }
  );
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- 10. 星空粒子背景 ---------- */
  const canvas = document.getElementById("stars");
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext("2d");
    let stars = [];
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(130, Math.floor((w * h) / 16000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.1,
        a: Math.random() * 0.7 + 0.2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
        ctx.globalAlpha = s.a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#f0e2cb";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    draw();
  }

  /* ---------- 11. i18n 语言应用与切换 ---------- */
  const langBtn = document.getElementById("langToggle");

  function applyI18n(lang) {
    currentLang = lang;
    const dict = I18N[lang];

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = dict["meta.title"];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (dict[k] != null) el.textContent = dict[k];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.dataset.i18nHtml;
      if (dict[k] != null) el.innerHTML = dict[k];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const k = el.dataset.i18nAria;
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });

    if (langBtn) {
      const zh = lang === "zh";
      langBtn.textContent = zh ? "EN" : "中文";
      langBtn.setAttribute("aria-label", dict[zh ? "lang.toggle.zh" : "lang.toggle.en"]);
      langBtn.title = zh ? "English" : "中文";
    }

    phrases = phrasesFor(lang);
    startType();

    localStorage.setItem("lpt-lang", lang);
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => applyI18n(currentLang === "zh" ? "en" : "zh"));
  }

  function phrasesFor(lang) {
    return I18N[lang]["type.phrases"];
  }

  applyI18n(currentLang);

  /* ---------- 12. 页面入场 ---------- */
  document.body.classList.add("loaded");
})();
