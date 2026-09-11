const translations = {
  zh: {
    siteTitle: "陈洪侃",
    authorName: "陈洪侃",
    navAbout: "简介",
    navNews: "动态",
    navPublications: "发表论文",
    navAwards: "荣誉",
    navService: "服务",
    navEducation: "教育经历",
    sidebarBio: "北京大学信息管理系"
  },
  en: {
    siteTitle: "Hongkan Chen",
    authorName: "Hongkan Chen",
    navAbout: "About",
    navNews: "News",
    navPublications: "Publications",
    navAwards: "Awards",
    navService: "Teaching and Service",
    navEducation: "Education",
    sidebarBio: "Department of Information Management, Peking University"
  }
};

const STORAGE_KEY = "preferred-language-v2";
const DEFAULT_LANGUAGE = "en";

const navTargets = {
  zh: {
    navAbout: "#about",
    navNews: "#news",
    navPublications: "#publications",
    navAwards: "#awards",
    navService: "#service",
    navEducation: "#education"
  },
  en: {
    navAbout: "#about-en",
    navNews: "#news-en",
    navPublications: "#publications-en",
    navAwards: "#awards-en",
    navService: "#service-en",
    navEducation: "#education-en"
  }
};

const button = document.querySelector("[data-lang-toggle]");
const blocks = document.querySelectorAll("[data-lang-content]");
let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  blocks.forEach((block) => {
    block.hidden = block.getAttribute("data-lang-content") !== lang;
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translations[lang][key] || node.textContent;
    if (node.tagName === "A" && navTargets[lang][key]) {
      node.setAttribute("href", navTargets[lang][key]);
    }
  });
  button.textContent = lang === "zh" ? "EN" : "中文";
  localStorage.setItem(STORAGE_KEY, lang);
}

button.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLanguage(currentLang);
});

applyLanguage(currentLang);
