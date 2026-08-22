if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
if (location.hash) {
  history.replaceState(null, "", location.pathname + location.search);
}
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

const projects = [
  {
    id: "likes",
    cat: "ops",
    catLabel: "运营设计",
    title: "快手点赞挑战赛",
    sub: "平台挑战赛活动主视觉",
    desc: "为快手平台「点赞挑战赛」打造高饱和撞色主视觉，以强动态元素与吸睛配色营造参与氛围，让活动在信息流中快速被看见。",
    tags: ["活动主视觉", "平台挑战赛", "高饱和配色"],
    cover: "assets/work/likes-cover.webp",
    images: ["assets/work/likes-long.webp"]
  },
  {
    id: "douyin",
    cat: "ops",
    catLabel: "运营设计",
    title: "抖音商城好物节",
    sub: "商城大促活动主视觉",
    desc: "以节日促销氛围为核心，为抖音商城「好物节」设计主视觉与活动物料，突出平台调性与大促信息，兼顾移动端传播。",
    tags: ["商城大促", "主视觉", "活动物料"],
    cover: "assets/work/douyin-cover.webp",
    images: ["assets/work/douyin-page.webp"]
  },
  {
    id: "music",
    cat: "ops",
    catLabel: "运营设计",
    title: "士气音乐 APP",
    sub: "品牌视觉系统与登录界面",
    desc: "为面向年轻用户的音乐 APP「士气音乐」打造品牌核心视觉与登录界面，以「音乐为情绪打气」为主题，并输出 10+ 音乐主题 ICON。",
    tags: ["音乐 App", "品牌视觉", "登录界面", "ICON 体系"],
    cover: "assets/work/music-cover.webp",
    images: ["assets/work/music-effect.webp", "assets/work/music-detail-2.webp", "assets/work/music-detail-3.webp"]
  },
  {
    id: "class",
    cat: "ops",
    catLabel: "运营设计",
    title: "士气年度上课人",
    sub: "年度活动主视觉",
    desc: "以「上课」为创意概念，用电脑与黑板构成主场景，加入拟人化元素，为年度活动做出有趣又有记忆点的视觉。",
    tags: ["年度活动", "主视觉", "拟人元素"],
    cover: "assets/work/class-cover.webp",
    images: ["assets/work/class-detail-1.webp", "assets/work/class-detail-3.webp"]
  },
  {
    id: "winter",
    cat: "ops",
    catLabel: "运营设计",
    title: "冬天有你真好",
    sub: "萌宠暖冬运营视觉",
    desc: "以萌宠陪伴为情感核心，用 3D 软萌场景结合 2D 手绘元素，完成暖冬活动主 KV、活动长页与色彩规范。",
    tags: ["暖冬运营", "3D+2D", "色彩规范"],
    cover: "assets/work/winter-cover.webp",
    images: ["assets/work/winter-detail-1.webp", "assets/work/winter-detail-2.webp", "assets/work/winter-detail-3.webp"]
  },
  {
    id: "outfit",
    cat: "ops",
    catLabel: "运营设计",
    title: "潮人穿搭指南",
    sub: "3D 潮酷穿搭内容",
    desc: "面向「早八学生」的潮人穿搭指南，以 3D 潮酷人物整合街头风、OOTD 与潮流单品，输出强传播力的穿搭视觉。",
    tags: ["穿搭指南", "3D 人物", "OOTD"],
    cover: "assets/work/outfit-cover.webp",
    images: ["assets/work/outfit-detail-1.webp"]
  },
  {
    id: "study",
    cat: "ops",
    catLabel: "运营设计",
    title: "士气学院学习计划",
    sub: "品牌符号设计",
    desc: "以复古计算器、时钟等学习元素搭配明快黄灰配色，为「士气学院」构建学习计划品牌符号，强化品牌记忆。",
    tags: ["品牌符号", "学习场景", "复古元素"],
    cover: "assets/work/study-cover.webp",
    images: ["assets/work/study-detail-1.webp", "assets/work/study-detail-2.webp"]
  },
  {
    id: "christmas",
    cat: "ops",
    catLabel: "运营设计",
    title: "圣诞暖冬计划",
    sub: "圣诞活动主 KV 与长页",
    desc: "以圣诞老人、木屋等场景传递节日温暖，完成 3D 软萌风格主 KV 与活动长页，适配移动端传播。",
    tags: ["圣诞活动", "主 KV", "活动长页"],
    cover: "assets/work/christmas-cover.webp",
    images: ["assets/work/christmas-detail-1.webp", "assets/work/christmas-detail-2.webp", "assets/work/christmas-detail-3.webp"]
  },
  {
    id: "summer",
    cat: "ops",
    catLabel: "运营设计",
    title: "夏日出逃计划",
    sub: "夏季活动主视觉",
    desc: "以夏日逃离城市为主题，用清爽配色与 3D 场景营造自由氛围，输出夏季运营主视觉。",
    tags: ["夏季活动", "3D 场景", "清爽配色"],
    cover: "assets/work/summer-page.webp",
    images: []
  },
  {
    id: "aigc",
    cat: "aigc",
    catLabel: "AIGC 设计",
    title: "AIGC 虚拟少女与复古汽车",
    sub: "虚拟 IP、多场景渲染与复古汽车视觉资产",
    desc: "以 AIGC 驱动元气少女虚拟 IP，完成角色设定、多场景多姿态 3D 渲染与复古汽车系列视觉资产，适配品牌代言、内容创作与虚拟直播等多元商业场景。",
    tags: ["AIGC", "虚拟 IP", "3D 渲染", "复古汽车"],
    cover: "assets/work/aigc-cover.webp",
    images: ["assets/work/aigc-page.webp"]
  },
  {
    id: "baozi",
    cat: "ip",
    catLabel: "IP 设计",
    title: "包仔 IP 设计",
    sub: "天津狗不理包子 IP",
    desc: "以天津狗不理包子为原型，打造软萌治愈的「包仔」IP，融合天津地标、国风服饰与周边物料，构建完整 IP 视觉体系。",
    tags: ["IP 形象", "天津地标", "文创周边"],
    cover: "assets/work/baozi-cover.webp",
    images: ["assets/work/baozi-page.webp", "assets/work/baozi-detail-2.webp"]
  }
];

const grid = document.getElementById("workGrid");
const filterBar = document.getElementById("filterBar");
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const heroSlides = document.querySelectorAll(".hero-slide");

function projectCard(project) {
  const mobileCover = project.cover.replace(".webp", "-m.webp");
  return `
    <article class="work-card" data-open="${project.id}">
      <div class="work-thumb">
        <img src="${project.cover}" srcset="${mobileCover} 820w, ${project.cover} 1400w" sizes="(max-width: 560px) 92vw, (max-width: 1024px) 46vw, 31vw" alt="${project.title}" loading="lazy">
      </div>
      <div class="work-info">
        <span class="work-cat">${project.catLabel}</span>
        <h3>${project.title}</h3>
        <p>${project.sub}</p>
      </div>
    </article>
  `;
}

function renderGrid(filter) {
  const list = filter === "all" ? projects : projects.filter((p) => p.cat === filter);
  grid.innerHTML = list.map(projectCard).join("");
  observeCards();
}

function openModal(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;
  const images = [project.cover, ...project.images]
    .map((src) => {
      const mobileSrc = src.replace(".webp", "-m.webp");
      return `<img src="${mobileSrc}" srcset="${mobileSrc} 820w, ${src} 1400w" sizes="(max-width: 760px) 92vw, 1000px" alt="${project.title}" decoding="async"${src.includes("likes-long") || src.includes("class-detail-1") ? ' class="img-narrow"' : ""}>`;
    })
    .join("");
  modalBody.innerHTML = `
    <div class="modal-head">
      <span class="feature-tag">${project.catLabel}</span>
      <h2>${project.title}</h2>
      <p class="modal-sub">${project.sub}</p>
      <p class="modal-desc">${project.desc}</p>
      <div class="tag-list">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>
    <div class="modal-media">${images}</div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const preloaded = new Set();

function preloadImages(srcs) {
  srcs.forEach((src) => {
    if (preloaded.has(src)) return;
    preloaded.add(src);
    const deviceSrc = window.innerWidth < 760 ? src.replace(".webp", "-m.webp") : src;
    const img = new Image();
    img.src = deviceSrc;
  });
}

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const project = projects.find((p) => p.id === entry.target.dataset.open);
        if (project) {
          preloadImages([project.cover, ...project.images]);
        }
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "300px" }
);

function observeCards() {
  document.querySelectorAll(".work-card").forEach((card) => cardObserver.observe(card));
}

renderGrid("all");

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  filterBar.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
  renderGrid(button.dataset.filter);
});

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open]");
  if (opener) {
    openModal(opener.dataset.open);
    return;
  }
  if (event.target.closest("[data-close]")) {
    closeModal();
  }
});

document.addEventListener(
  "pointerdown",
  (event) => {
    const card = event.target.closest("[data-open]");
    if (!card) return;
    const project = projects.find((p) => p.id === card.dataset.open);
    if (project) {
      preloadImages([project.cover, ...project.images]);
    }
  },
  { passive: true }
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "打开菜单");
});

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  projects.forEach((project) => preloadImages([project.cover, ...project.images]));
});

if (heroSlides.length > 1) {
  let heroIndex = 0;
  setInterval(() => {
    heroSlides[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add("active");
  }, 5200);
}
