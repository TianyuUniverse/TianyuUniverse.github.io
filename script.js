document.documentElement.classList.add("has-js");

const translations = {
  en: {
    skip: "Skip to main content",
    homeLabel: "Back to home",
    menuOpenLabel: "Open navigation",
    menuCloseLabel: "Close navigation",
    navLabel: "Primary navigation",
    languageLabel: "Language selection",
    profileLabel: "Profile information",
    researchOverviewLabel: "Research overview",
    skillsLabel: "Technical interests",
    stackAriaLabel: "Technology stack",
    focusLabel: "Areas of interest",
    navAbout: "About",
    navResearch: "Research",
    navOpenSource: "Open Source",
    navAwards: "Recognition",
    navContact: "Contact",
    heroEyebrow: "Research · Engineering · Open Source",
    heroHello: "Hello, I’m",
    heroName: "Tianyu Chen",
    heroPunctuation: ".",
    heroLede: "An undergraduate in Data Science and Big Data Technology at South China University of Technology, focused on deep learning, large language models, RAG, AI agents, and time-series modeling.",
    viewResearch: "View research",
    schoolLabel: "University",
    schoolValue: "SCUT",
    disciplineLabel: "Focus",
    disciplineValue: "AI × Time Series",
    statusLabel: "Status",
    statusValue: "Exploring open source",
    profileIndex: "Research profile / 01",
    visualKicker: "Learning structure from signals",
    aboutTitle: "Turning research questions into working code.",
    aboutP1: "I am an undergraduate in Data Science and Big Data Technology at the School of Future Technology, South China University of Technology. My interests sit at the intersection of machine learning research and engineering: understanding models while caring about how they are implemented, evaluated, and applied.",
    aboutP2: "I have contributed to deep learning research on nonintrusive load monitoring, working on model implementation, experiment execution, result analysis, and visualization. I am now exploring large language models, retrieval-augmented generation, and agent memory.",
    skill1: "Deep Learning & PyTorch",
    skill2: "Time Series & Zero-Shot Learning",
    skill3: "Large Language Models & RAG",
    skill4: "AI Agents & Long-Term Memory",
    researchTitle: "Identifying appliance-level energy use in unlabeled homes.",
    paperType: "Research paper · IEEE Transactions on Smart Grid",
    researchSummary: "For realistic target homes without appliance-level labels, this research combines contrastive learning and multiscale dual-path temporal fusion to enable nonintrusive load monitoring with cross-domain generalization.",
    roleLabel: "My contribution",
    roleText: "Model implementation, experiment execution, result analysis, and visualization.",
    doiLink: "View DOI / IEEE",
    problemLabel: "Problem",
    problemText: "Only aggregate power sequences are available in the target domain, with no appliance-level labels for fine-tuning.",
    methodLabel: "Approach",
    methodText: "Contrastive learning, multiscale feature extraction, residual power decoupling, and dual-path temporal fusion.",
    stackLabel: "Stack",
    openSourceTitle: "Connecting model capabilities to real systems.",
    openSourceIntro: "Tencent Open Source Talent Plan interests: LLM applications, agent long-term memory, and reliable knowledge retrieval.",
    focus1: "Interested in the capability boundaries, application development, and engineering optimization of large language models.",
    focus2: "Exploring how retrievable, evolving long-term memory can support agent decision-making.",
    focus3: "Focused on document understanding, retrieval-augmented generation, and knowledge-base user experience.",
    awardsTitle: "Continuously testing analytical, modeling, and collaborative skills.",
    award1Title: "Mathematical Contest in Modeling",
    award2Title: "SCUT Mathematics & Physics Competition",
    award2Prize: "First Prize",
    award3Title: "Chinese Mathematics Competitions · Guangdong",
    award3Prize: "Second Prize",
    award4Title: "SCUT Dingjia Cup",
    award4Prize: "Third Prize",
    contactTitle: "Let’s discuss research, code, and open source.",
    contactText: "Reach me by email or connect with me on GitHub.",
    footerText: "Keep learning through clear questions, reliable experiments, and working code.",
    backTop: "Back to top"
  }
};

const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach((node) => {
  originalText.set(node, node.textContent.trim());
});

const metadata = {
  zh: {
    title: "陈天宇｜研究与开源",
    description: "陈天宇，华南理工大学数据科学与大数据技术专业本科生，关注深度学习、大语言模型、RAG、AI Agent 与时序建模。",
    locale: "zh_CN"
  },
  en: {
    title: "Tianyu Chen | Research & Open Source",
    description: "Tianyu Chen is a Data Science undergraduate at SCUT, focused on deep learning, LLMs, RAG, AI agents, and time-series modeling.",
    locale: "en_US"
  }
};

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const languageButtons = document.querySelectorAll("[data-lang]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setLanguage(language) {
  const isEnglish = language === "en";
  document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  document.querySelector(".hero-alias").hidden = isEnglish;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = isEnglish ? translations.en[key] : originalText.get(node);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    const chineseLabels = {
      homeLabel: "返回首页",
      menuOpenLabel: "打开导航",
      navLabel: "主要导航",
      languageLabel: "语言选择",
      profileLabel: "个人信息",
      researchOverviewLabel: "研究概览",
      skillsLabel: "技术关注领域",
      stackAriaLabel: "技术栈",
      focusLabel: "关注方向"
    };
    node.setAttribute("aria-label", isEnglish ? translations.en[key] : chineseLabels[key]);
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  const meta = metadata[language];
  document.title = meta.title;
  document.querySelector('meta[name="description"]').content = meta.description;
  document.querySelector('meta[property="og:title"]').content = meta.title;
  document.querySelector('meta[property="og:description"]').content = meta.description;
  document.querySelector('meta[property="og:locale"]').content = meta.locale;
  localStorage.setItem("preferred-language", language);

  if (navToggle.getAttribute("aria-expanded") === "true") {
    navToggle.setAttribute("aria-label", isEnglish ? translations.en.menuCloseLabel : "关闭导航");
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    const currentLanguage = document.documentElement.lang === "en" ? "en" : "zh";

    if (language === currentLanguage || document.body.classList.contains("is-language-changing")) {
      return;
    }

    if (reducedMotion.matches) {
      setLanguage(language);
      return;
    }

    document.body.classList.add("is-language-changing");
    document.body.setAttribute("aria-busy", "true");
    languageButtons.forEach((languageButton) => {
      languageButton.disabled = true;
    });

    window.setTimeout(() => setLanguage(language), 260);
    window.setTimeout(() => {
      document.body.classList.remove("is-language-changing");
      document.body.removeAttribute("aria-busy");
      languageButtons.forEach((languageButton) => {
        languageButton.disabled = false;
      });
    }, 560);
  });
});

navToggle.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  siteNav.classList.toggle("is-open", willOpen);
  const isEnglish = document.documentElement.lang === "en";
  navToggle.setAttribute(
    "aria-label",
    willOpen ? (isEnglish ? translations.en.menuCloseLabel : "关闭导航") : (isEnglish ? translations.en.menuOpenLabel : "打开导航")
  );
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.documentElement.classList.add("is-jumping-top");
    window.scrollTo(0, 0);
    history.replaceState(null, "", "#top");
    window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("is-jumping-top");
    });
  });
});

const preferredLanguage = localStorage.getItem("preferred-language");
if (preferredLanguage === "en") {
  setLanguage("en");
}

document.getElementById("current-year").textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
