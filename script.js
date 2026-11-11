if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (location.hash) history.replaceState(null, "", location.pathname + location.search);
window.scrollTo(0, 0);

const PROJECTS = [
  {
    id: "baidu-worldcup", section: "internship", idx: "I.01", title: "百度世界杯", en: "Baidu World Cup", year: "2026", role: "视觉设计 / 运营视觉",
    tags: ["百度 APP", "FIFA 世界杯", "主视觉", "动态开屏"],
    desc: "围绕 2026 FIFA 世界杯，以足球竞技、百度 IP 与全链路运营场景为核心，构建从主视觉、搜索会场到动态开屏的完整视觉系统。",
    cover: "assets/v2/covers/baidu-worldcup.webp", coverMobile: "assets/v2/covers/baidu-worldcup-m.webp",
    caseImage: "assets/v2/cases/baidu-worldcup.webp", caseMobile: "assets/v2/cases/baidu-worldcup-m.webp"
  },
  {
    id: "baidu-summer", section: "internship", idx: "I.02", title: "百度暑期拍摄", en: "Baidu Summer Shoot", year: "2026", role: "视觉设计 / 活动运营",
    tags: ["百度 APP", "暑期活动", "AI 拍照", "活动物料"],
    desc: "以暑期旅行、AI 拍照与现金红包为线索，完成搜索会场、活动开屏、贴纸、icon 与多尺寸 banner 的视觉延展。",
    cover: "assets/v2/covers/baidu-summer.webp", coverMobile: "assets/v2/covers/baidu-summer-m.webp",
    caseImage: "assets/v2/cases/baidu-summer.webp", caseMobile: "assets/v2/cases/baidu-summer-m.webp"
  },
  {
    id: "douyin-market", section: "practice", idx: "P.01", title: "抖音好物节", en: "Douyin Shopping Festival", year: "2026", role: "运营视觉",
    tags: ["电商运营", "3D 主视觉", "UI", "活动长页"],
    desc: "以 3D 购物袋和流动丝带构建大促主视觉，让商品、优惠券和平台符号在同一个视觉系统里高速流动。",
    cover: "assets/v2/covers/douyin-market.webp", coverMobile: "assets/v2/covers/douyin-market-m.webp",
    caseImage: "assets/v2/cases/douyin-market.webp", caseMobile: "assets/v2/cases/douyin-market-m.webp"
  },
  {
    id: "kuaishou-likes", section: "practice", idx: "P.02", title: "快手点赞挑战赛", en: "Kuaishou Like Challenge", year: "2026", role: "运营视觉",
    tags: ["活动主视觉", "社交互动", "UI", "角色设计"],
    desc: "把爱心、火苗、相机与喇叭拟人化，用高饱和紫粉渐变构建快手点赞挑战赛的活动视觉和互动玩法。",
    cover: "assets/v2/covers/kuaishou-likes.webp", coverMobile: "assets/v2/covers/kuaishou-likes-m.webp",
    caseImage: "assets/v2/cases/kuaishou-likes.webp", caseMobile: "assets/v2/cases/kuaishou-likes-m.webp"
  },
  {
    id: "summer-escape", section: "practice", idx: "P.03", title: "夏日出逃计划", en: "Summer Escape", year: "2026", role: "运营视觉 / 3D 插画",
    tags: ["小红书", "活动运营", "3D 场景", "活动长页"],
    desc: "以 3D 出游少年和轻松手绘元素表达逃离日常的情绪，让活动主视觉和长页始终保持呼吸感。",
    cover: "assets/v2/covers/summer-escape.webp", coverMobile: "assets/v2/covers/summer-escape-m.webp",
    caseImage: "assets/v2/cases/summer-escape.webp", caseMobile: "assets/v2/cases/summer-escape-m.webp"
  },
  {
    id: "shici-music", section: "practice", idx: "P.04", title: "士气音乐 APP", en: "Shiqi Music App", year: "2026", role: "品牌视觉 / UI",
    tags: ["品牌视觉", "APP UI", "ICON", "3D 字体"],
    desc: "为「士气音乐」搭建年轻化的品牌视觉系统与登录界面，用拟人化音乐字母和磁带 ICON 建立品牌记忆点。",
    cover: "assets/v2/covers/shici-music.webp", coverMobile: "assets/v2/covers/shici-music-m.webp",
    caseImage: "assets/v2/cases/shici-music.webp", caseMobile: "assets/v2/cases/shici-music-m.webp"
  },
  {
    id: "annual-class", section: "practice", idx: "P.05", title: "士气年度上课人", en: "Annual Class", year: "2026", role: "运营视觉 / 角色设计",
    tags: ["年度活动", "角色视觉", "主视觉", "榜单 UI"],
    desc: "用电脑、黑板、仙人掌等拟人元素构建「年度上课人」的趣味场景，完成活动主视觉、动效延展与榜单界面。",
    cover: "assets/v2/covers/annual-class.webp", coverMobile: "assets/v2/covers/annual-class-m.webp",
    caseImage: "assets/v2/cases/annual-class.webp", caseMobile: "assets/v2/cases/annual-class-m.webp"
  },
  {
    id: "winter-with-you", section: "practice", idx: "P.06", title: "冬天有你真好", en: "Winter With You", year: "2026", role: "运营视觉 / 3D 场景",
    tags: ["宠物活动", "3D 软萌", "2D 手绘", "色彩规范"],
    desc: "以萌宠陪伴为核心，结合 3D 软萌场景与 2D 手绘，完成冬日活动主 KV、分享页、长图与奖品体系。",
    cover: "assets/v2/covers/winter-with-you.webp", coverMobile: "assets/v2/covers/winter-with-you-m.webp",
    caseImage: "assets/v2/cases/winter-with-you.webp", caseMobile: "assets/v2/cases/winter-with-you-m.webp"
  },
  {
    id: "ootd-guide", section: "practice", idx: "P.07", title: "潮人穿搭指南", en: "OOTD Guide", year: "2026", role: "内容视觉 / 3D 角色",
    tags: ["穿搭内容", "3D 角色", "社交运营", "活动 UI"],
    desc: "将 3D 潮酷人物与 OOTD 内容结合，用街头元素、潮流单品和高对比色打造年轻化的穿搭指南。",
    cover: "assets/v2/covers/ootd-guide.webp", coverMobile: "assets/v2/covers/ootd-guide-m.webp",
    caseImage: "assets/v2/cases/ootd-guide.webp", caseMobile: "assets/v2/cases/ootd-guide-m.webp"
  },
  {
    id: "study-plan", section: "practice", idx: "P.08", title: "学习计划", en: "Study Plan", year: "2026", role: "品牌符号 / 3D 产品",
    tags: ["品牌符号", "3D 产品", "学习场景", "活动视觉"],
    desc: "从复古计算器、时钟与桌面学习场景出发，为「士气学院」建立学习计划的品牌符号与产品视觉。",
    cover: "assets/v2/covers/study-plan.webp", coverMobile: "assets/v2/covers/study-plan-m.webp",
    caseImage: "assets/v2/cases/study-plan.webp", caseMobile: "assets/v2/cases/study-plan-m.webp"
  },
  {
    id: "aigc-character", section: "practice", idx: "P.09", title: "AIGC 虚拟人物与复古汽车", en: "AIGC Character & Vintage Cars", year: "2026", role: "AIGC / 3D 渲染",
    tags: ["AIGC", "虚拟 IP", "角色设定", "复古汽车"],
    desc: "以 AIGC 完成虚拟少女角色设定、多场景姿态渲染和复古汽车系列资产，探索可复用的虚拟 IP 生产流程。",
    cover: "assets/v2/covers/aigc-character.webp", coverMobile: "assets/v2/covers/aigc-character-m.webp",
    caseImage: "assets/v2/cases/aigc-character.webp", caseMobile: "assets/v2/cases/aigc-character-m.webp"
  },
  {
    id: "baozi-ip", section: "practice", idx: "P.10", title: "包仔 IP 设计", en: "Baozi IP Design", year: "2026", role: "IP 设计 / 文创视觉",
    tags: ["IP 形象", "角色规范", "文创周边", "品牌联名"],
    desc: "以天津狗不理包子为原型打造「包仔」IP，完成角色规范、表情、场景延展与文创周边设计。",
    cover: "assets/v2/covers/baozi-ip.webp", coverMobile: "assets/v2/covers/baozi-ip-m.webp",
    caseImage: "assets/v2/cases/baozi-ip.webp", caseMobile: "assets/v2/cases/baozi-ip-m.webp"
  }
];

const MOTION = [
  { id: "dynamic-1", title: "开学季", en: "Back to School", video: "assets/v2/dynamic/dynamic-1.mp4", poster: "assets/v2/dynamic/dynamic-1-poster.webp" },
  { id: "dynamic-2", title: "世界杯开屏 01", en: "World Cup Splash 01", video: "assets/v2/dynamic/dynamic-2.mp4", poster: "assets/v2/dynamic/dynamic-2-poster.webp" },
  { id: "dynamic-3", title: "世界杯开屏 02", en: "World Cup Splash 02", video: "assets/v2/dynamic/dynamic-3.mp4", poster: "assets/v2/dynamic/dynamic-3-poster.webp" },
  { id: "dynamic-4", title: "世界杯开屏 03", en: "World Cup Splash 03", video: "assets/v2/dynamic/dynamic-4.mp4", poster: "assets/v2/dynamic/dynamic-4-poster.webp" },
  { id: "dynamic-5", title: "暑期开屏", en: "Summer Splash", video: "assets/v2/dynamic/dynamic-5.mp4", poster: "assets/v2/dynamic/dynamic-5-poster.webp" }
];

const DYNAMIC_CASE = {
  id: "dynamic-splash", title: "动态开屏设计", en: "Motion Splash", year: "2026", role: "动态视觉 / 动效设计",
  tags: ["开学季", "世界杯", "暑期活动", "动态开屏"],
  desc: "实习期间完成的 5 组动态开屏，把 3D 角色、赛事氛围与节日场景压缩进 5 秒的第一印象。"
};

const ALL_CASES = [...PROJECTS.slice(0, 2), DYNAMIC_CASE, ...PROJECTS.slice(2)];
const internshipProjects = PROJECTS.filter((p) => p.section === "internship");
const practiceProjects = PROJECTS.filter((p) => p.section === "practice");
const cursor = document.getElementById("cursor");
const cursorLabel = document.getElementById("cursor-label");
const siteHeader = document.getElementById("siteHeader");
const practice = document.getElementById("practice");
const practiceTrack = document.getElementById("practiceTrack");
const railProgress = document.getElementById("railProgress");
const railCounter = document.getElementById("railCounter");
const caseOverlay = document.getElementById("caseOverlay");
const caseClose = document.getElementById("caseClose");
const caseScroll = document.getElementById("caseScroll");
const caseContent = document.getElementById("caseContent");
const caseIndex = document.getElementById("caseIndex");
const caseHeaderTitle = document.getElementById("caseHeaderTitle");
const copyToast = document.getElementById("copyToast");
const qrTrigger = document.getElementById("qrTrigger");
const qrLightbox = document.getElementById("qrLightbox");
const qrBackdrop = document.getElementById("qrBackdrop");
const qrClose = document.getElementById("qrClose");

let currentCaseIndex = -1;
let lastOpener = null;
let qrOpener = null;
let copyToastTimer = 0;

function pad(number) {
  return String(number).padStart(2, "0");
}

function renderInternship() {
  document.getElementById("internshipCases").innerHTML = internshipProjects.map((project) => `
    <article class="feature-card" data-project-id="${project.id}" data-cursor="OPEN" tabindex="0">
      <div class="feature-media">
        <img src="${project.cover}" srcset="${project.coverMobile} 700w, ${project.cover} 1100w" sizes="(max-width: 820px) 94vw, 52vw" alt="${project.title}" loading="lazy">
      </div>
      <div class="feature-info">
        <span class="feature-index">${project.idx}</span>
        <div><h3>${project.title}</h3><p>${project.en} / ${project.tags.join(" · ")}</p></div>
        <span class="open-label">OPEN CASE ↗</span>
      </div>
    </article>
  `).join("");
}

function renderMotion() {
  document.getElementById("splashTrack").innerHTML = MOTION.map((item, index) => `
    <article class="motion-card" data-video-index="${index}" data-cursor="PLAY" tabindex="0">
      <div class="motion-media">
        <video muted loop playsinline preload="none" poster="${item.poster}" data-src="${item.video}"></video>
        <div class="motion-play"><span>PLAY</span></div>
      </div>
      <div class="motion-info"><span>M.${pad(index + 1)}</span><h4>${item.title}</h4></div>
    </article>
  `).join("");
}

function renderPractice() {
  practiceTrack.innerHTML = practiceProjects.map((project) => `
    <article class="project-card" data-project-id="${project.id}" data-cursor="OPEN" tabindex="0">
      <div class="project-media">
        <img src="${project.coverMobile}" srcset="${project.coverMobile} 700w, ${project.cover} 1100w" sizes="(max-width: 820px) 78vw, 350px" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-meta">
        <div class="project-topline"><span>${project.idx}</span><span>${project.year}</span><span>${project.role}</span></div>
        <div class="project-heading">
          <h3>${project.title}</h3>
          <span class="project-open">OPEN ↗</span>
        </div>
        <p>${project.en}</p>
        <div class="project-tags">${project.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function preloadCase(project) {
  if (!project || !project.caseImage) return;
  const img = new Image();
  img.src = window.innerWidth <= 820 ? project.caseMobile : project.caseImage;
}

function caseNavMarkup(index) {
  const prev = ALL_CASES[(index - 1 + ALL_CASES.length) % ALL_CASES.length];
  const next = ALL_CASES[(index + 1) % ALL_CASES.length];
  return `
    <nav class="case-nav" aria-label="案例切换">
      <button type="button" data-case-prev>← PREV / ${prev.title}</button>
      <button type="button" data-case-next>NEXT / ${next.title} →</button>
    </nav>
  `;
}

function openCase(id) {
  const index = ALL_CASES.findIndex((item) => item.id === id);
  if (index < 0) return;
  currentCaseIndex = index;
  const item = ALL_CASES[index];
  caseIndex.textContent = `CASE ${pad(index + 1)} / ${pad(ALL_CASES.length)}`;
  caseHeaderTitle.textContent = item.title;
  caseScroll.scrollTop = 0;

  if (item.id === "dynamic-splash") {
    caseContent.innerHTML = `
      <div class="case-title-block">
        <p class="micro-label">CASE ${pad(index + 1)} / INTERNSHIP PROGRAM</p>
        <h2>${item.title}</h2>
        <p class="case-en">${item.en}</p>
        <p class="case-desc">${item.desc}</p>
        <div class="case-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <dl class="case-meta">
          <div><dt>YEAR</dt><dd>${item.year}</dd></div>
          <div><dt>ROLE</dt><dd>${item.role}</dd></div>
          <div><dt>FORMAT</dt><dd>VERTICAL SPLASH / 05</dd></div>
        </dl>
      </div>
      <div class="video-grid">${MOTION.map((video) => `
        <article class="video-item">
          <video controls playsinline preload="metadata" poster="${video.poster}" src="${video.video}"></video>
          <h4>${video.title}</h4><p>${video.en} / 5 SEC</p>
        </article>`).join("")}</div>
      ${caseNavMarkup(index)}
    `;
  } else {
    caseContent.innerHTML = `
      <div class="case-title-block${item.section === "practice" ? " case-title-block-left" : ""}">
        <p class="micro-label">CASE ${pad(index + 1)} / ${item.section === "internship" ? "INTERNSHIP PROGRAM" : "PERSONAL PRACTICE"}</p>
        <h2>${item.title}</h2>
        <p class="case-en">${item.en}</p>
        <p class="case-desc">${item.desc}</p>
        <div class="case-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <dl class="case-meta">
          <div><dt>YEAR</dt><dd>${item.year}</dd></div>
          <div><dt>ROLE</dt><dd>${item.role}</dd></div>
          <div><dt>TYPE</dt><dd>${item.section === "internship" ? "INTERNSHIP PROJECT" : "PERSONAL PRACTICE"}</dd></div>
        </dl>
      </div>
      <figure class="case-visual">
        <img src="${item.caseImage}" srcset="${item.caseMobile} 720w, ${item.caseImage} 1200w" sizes="100vw" alt="${item.title}完整案例" loading="lazy">
      </figure>
      ${caseNavMarkup(index)}
    `;
  }

  caseOverlay.classList.add("is-open");
  caseOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked", "overlay-open");
  caseClose.focus({ preventScroll: true });
}

function openMotionVideo(index) {
  openCase("dynamic-splash");
  const videos = caseContent.querySelectorAll(".video-item video");
  const target = videos[index];
  if (target) {
    target.scrollIntoView({ block: "center" });
    target.play().catch(() => {});
  }
}

function closeCase() {
  caseOverlay.classList.remove("is-open");
  caseOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked", "overlay-open");
  if (lastOpener && typeof lastOpener.focus === "function") lastOpener.focus({ preventScroll: true });
}

function showCopyToast(message) {
  window.clearTimeout(copyToastTimer);
  copyToast.textContent = message;
  copyToast.classList.add("is-visible");
  copyToastTimer = window.setTimeout(() => copyToast.classList.remove("is-visible"), 1800);
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const helper = document.createElement("textarea");
  helper.value = value;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand("copy");
  helper.remove();
  if (!copied) throw new Error("Copy command failed");
}

function openQr() {
  qrOpener = document.activeElement;
  qrLightbox.classList.add("is-open");
  qrLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked", "overlay-open");
  qrClose.focus({ preventScroll: true });
}

function closeQr() {
  qrLightbox.classList.remove("is-open");
  qrLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked", "overlay-open");
  if (qrOpener && typeof qrOpener.focus === "function") qrOpener.focus({ preventScroll: true });
}

renderInternship();
renderMotion();
renderPractice();
document.querySelectorAll("[data-copy]").forEach((button) => {
  const action = button.querySelector(".contact-action");
  button.addEventListener("click", async () => {
    try {
      await copyText(button.dataset.copy);
      window.clearTimeout(button.copyResetTimer);
      button.classList.add("is-copied");
      action.textContent = "COPIED";
      showCopyToast(button.dataset.copyLabel || "已复制");
      button.copyResetTimer = window.setTimeout(() => {
        button.classList.remove("is-copied");
        action.textContent = "COPY ↗";
      }, 1800);
    } catch {
      showCopyToast("复制失败，请稍后重试");
    }
  });
});

qrTrigger.addEventListener("click", openQr);
qrClose.addEventListener("click", closeQr);
qrBackdrop.addEventListener("click", closeQr);

document.addEventListener("click", (event) => {
  const projectCard = event.target.closest("[data-project-id]");
  if (projectCard) {
    lastOpener = projectCard;
    openCase(projectCard.dataset.projectId);
    return;
  }
  const motionCard = event.target.closest("[data-video-index]");
  if (motionCard) {
    lastOpener = motionCard;
    openMotionVideo(Number(motionCard.dataset.videoIndex));
    return;
  }
  if (event.target.closest("[data-case-prev]")) {
    openCase(ALL_CASES[(currentCaseIndex - 1 + ALL_CASES.length) % ALL_CASES.length].id);
    return;
  }
  if (event.target.closest("[data-case-next]")) {
    openCase(ALL_CASES[(currentCaseIndex + 1) % ALL_CASES.length].id);
    return;
  }
});

caseClose.addEventListener("click", closeCase);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && qrLightbox.classList.contains("is-open")) {
    closeQr();
    return;
  }
  if (event.key === "Escape" && caseOverlay.classList.contains("is-open")) closeCase();
  if (caseOverlay.classList.contains("is-open") && event.key === "ArrowLeft") {
    openCase(ALL_CASES[(currentCaseIndex - 1 + ALL_CASES.length) % ALL_CASES.length].id);
  }
  if (caseOverlay.classList.contains("is-open") && event.key === "ArrowRight") {
    openCase(ALL_CASES[(currentCaseIndex + 1) % ALL_CASES.length].id);
  }
  const card = event.target.closest("[data-project-id], [data-video-index]");
  if ((event.key === "Enter" || event.key === " ") && card) {
    event.preventDefault();
    card.click();
  }
});

document.addEventListener("pointerenter", (event) => {
  const projectCard = event.target.closest && event.target.closest("[data-project-id]");
  if (!projectCard) return;
  const project = PROJECTS.find((item) => item.id === projectCard.dataset.projectId);
  preloadCase(project);
}, true);

document.addEventListener("pointerdown", (event) => {
  const projectCard = event.target.closest && event.target.closest("[data-project-id]");
  if (!projectCard) return;
  const project = PROJECTS.find((item) => item.id === projectCard.dataset.projectId);
  preloadCase(project);
}, { passive: true });

document.addEventListener("click", (event) => {
  if (event.target === caseOverlay || event.target.classList.contains("case-shell")) closeCase();
});

document.querySelectorAll(".motion-card").forEach((card) => {
  const video = card.querySelector("video");
  card.addEventListener("pointerenter", () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (!video.src) video.src = video.dataset.src;
    video.play().catch(() => {});
  });
  card.addEventListener("pointerleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

if (window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-custom-cursor");
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
  const animateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();
  document.addEventListener("mouseover", (event) => {
    const target = event.target.closest("[data-cursor], a, button");
    if (!target) return;
    cursor.classList.add("is-active");
    cursorLabel.textContent = target.dataset.cursor || (target.tagName === "BUTTON" ? "CLICK" : "VIEW");
  });
  document.addEventListener("mouseout", (event) => {
    const target = event.target.closest("[data-cursor], a, button");
    if (!target) return;
    if (event.relatedTarget && target.contains(event.relatedTarget)) return;
    cursor.classList.remove("is-active");
  });
  document.querySelectorAll(".text-link, .contact-item, .case-close").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
    element.addEventListener("mouseleave", () => { element.style.transform = ""; });
  });
}

const hero = document.querySelector(".hero");
hero.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  document.documentElement.style.setProperty("--mx", x.toFixed(2));
  document.documentElement.style.setProperty("--my", y.toFixed(2));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const section = entry.target.dataset.section;
    document.querySelectorAll(".main-nav a").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === section);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
document.querySelectorAll("[data-section]").forEach((section) => sectionObserver.observe(section));

let railMax = 0;
let railTicking = false;

function updateRail() {
  if (window.innerWidth <= 820) {
    railTicking = false;
    return;
  }
  const range = practice.offsetHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, -practice.getBoundingClientRect().top / Math.max(range, 1)));
  practiceTrack.style.transform = `translate3d(${-progress * railMax}px, 0, 0)`;
  railProgress.style.transform = `scaleX(${Math.max(progress, 0.02)})`;
  const current = Math.min(practiceProjects.length, Math.floor(progress * practiceProjects.length) + 1);
  railCounter.textContent = `${pad(current)} / ${pad(practiceProjects.length)}`;
  railTicking = false;
}

function setupRail() {
  if (window.innerWidth <= 820) {
    practice.style.height = "auto";
    practiceTrack.style.transform = "";
    return;
  }
  railMax = Math.max(0, practiceTrack.scrollWidth - window.innerWidth + 64);
  practice.style.height = `${window.innerHeight + railMax + 120}px`;
  updateRail();
}

function requestRailUpdate() {
  if (railTicking) return;
  railTicking = true;
  requestAnimationFrame(updateRail);
}

window.addEventListener("scroll", requestRailUpdate, { passive: true });
window.addEventListener("resize", setupRail);
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

setupRail();

function updateClock() {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());
  document.getElementById("clock").textContent = `SHANGHAI ${time}`;
}
updateClock();
setInterval(updateClock, 30000);
