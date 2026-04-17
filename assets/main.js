// ====== CONFIG (edit these later) ======
const WHATSAPP_NUMBER = "60169687232";
const GOOGLE_FORM_URL = "https://forms.gle/DRx6Xe3i98VodQKK8";

const addressText = "2-4, E Sekyen U13 2, Jalan Setia Prima A U13/A, Setia Alam, 40170 Shah Alam, Selangor";
const hours = [
  { dayEN: "Monday", dayCN: "星期一", timeEN: "Closed", timeCN: "休息" },
  { dayEN: "Tuesday", dayCN: "星期二", timeEN: "9:00 AM – 10:00 PM", timeCN: "9:00 – 22:00" },
  { dayEN: "Wednesday", dayCN: "星期三", timeEN: "9:00 AM – 10:00 PM", timeCN: "9:00 – 22:00" },
  { dayEN: "Thursday", dayCN: "星期四", timeEN: "9:00 AM – 5:00 PM", timeCN: "9:00 – 17:00" },
  { dayEN: "Friday", dayCN: "星期五", timeEN: "9:00 AM – 10:00 PM", timeCN: "9:00 – 22:00" },
  { dayEN: "Saturday", dayCN: "星期六", timeEN: "9:00 AM – 2:00 PM", timeCN: "9:00 – 14:00" },
  { dayEN: "Sunday", dayCN: "星期日", timeEN: "Closed", timeCN: "休息" }
];

// ====== i18n text ======
const I18N = {
  en: {
    nav_ems:"EMS", nav_programs:"Programs", nav_pricing:"Pricing", nav_booking:"Booking", nav_contact:"Contact",
    cta_whatsapp:"WhatsApp Now", cta_book:"Book Free Trial", cta_directions:"Get Directions", cta_inquiry:"WhatsApp Inquiry",
    hero_pill:"Setia Alam • EMS Training",
    hero_title:"Get 2 hours of workout results in just 20 minutes.",
    hero_sub:"Designed for busy professionals who want real results — guided EMS training, personalized intensity, no wasted time.",
    hero_tick1:"Perfect for busy schedules", hero_tick2:"Beginner-friendly with coach guidance", hero_tick3:"Personalized training for faster results",
    hero_note:"*Results vary by individual. Consistency, nutrition, and recovery matter.",
    hero_note2:"First time trying EMS? No experience needed — our coach will guide you step by step.",
    hero_card_title:"Quick Info", hero_card_addr_k:"Address", hero_card_hours_k:"Hours",
    ems_title:"What is EMS?",
    ems_desc:"EMS (Electrical Muscle Stimulation) helps activate muscles through controlled impulses while you perform guided movements. It’s popular for time-efficient training — especially for busy people.",
    ems_c1_t:"Time-efficient", ems_c1_d:"Short sessions built for busy schedules — commonly around 20 minutes.",
    ems_c2_t:"Coach-guided", ems_c2_d:"Training is supervised for technique, safety, and progression.",
    ems_c3_t:"Personalized intensity", ems_c3_d:"Intensity is adjusted to match your level and goals.",
    programs_title:"Programs",
    p1_t:"Fat loss & toning", p1_d:"Structured sessions to support body composition goals (with nutrition guidance as needed).",
    p2_t:"Strength & conditioning", p2_d:"Progressive EMS training for strength, posture, and overall fitness.",
    p3_t:"Beginner-friendly", p3_d:"Low barrier entry — coached, controlled, and adjusted per person.",
    p4_t:"Busy schedule plan", p4_d:"20-minute sessions designed for people who can’t spend hours in the gym.",
    testimonials_title:"What Clients Say",
    testimonials_desc:"Real feedback from people who trained with JXB Fit Club.",
    t1_quote:"“The sessions are short but intense. Perfect for my work schedule.”",
    t1_name:"— Sarah, Marketing Executive",
    t2_quote:"“I was worried because I was a beginner, but the coach guided me step by step.”",
    t2_name:"— Jason, 32, First-time EMS User",
    t3_quote:"“I like that it saves time and still feels like a serious workout.”",
    t3_name:"— Mei, 28, Busy Office Worker",
    faq_title:"Frequently Asked Questions",
    faq_desc:"Quick answers for first-time EMS clients.",
    faq_q1:"Does EMS hurt?",
    faq_a1:"EMS feels different from normal exercise, but the intensity is adjusted based on your comfort and fitness level.",
    faq_q2:"Is EMS suitable for beginners?",
    faq_a2:"Yes. First-timers are welcome, and our coach will guide you step by step during the session.",
    faq_q3:"What should I wear?",
    faq_a3:"Wear comfortable workout clothing. If anything specific is needed, we will let you know before your session.",
    faq_q4:"How long is one session?",
    faq_a4:"A typical EMS session is around 20 minutes, making it suitable for busy schedules.",
    pricing_title:"Pricing",
    pricing_desc:"Pricing may vary by package and coaching plan. Contact us for the latest packages and trial availability.",
    price1_t:"Trial Session", price1_d:"Ideal for first-timers to understand EMS and your goals.",
    price2_t:"Starter Package", price2_d:"For building consistency with weekly sessions.",
    price3_t:"Coaching Plan", price3_d:"Personalized training + progression with a coach.",
    booking_title:"Booking",
    booking_desc:"Fastest way: WhatsApp us. You can also use a simple booking form (Google Form) for trial requests.",
    booking_whatsapp_t:"WhatsApp", booking_whatsapp_d:"Tap the button and tell us your preferred date/time.",
    booking_tip:"Tip: Include your goal (fat loss/toning/strength) and your available time. We'll help you find the best time slot.",
    booking_form_t:"Book via Form", booking_form_d:"Complete the form and we will contact you to confirm your session.",
    cta_open_form:"Book via Form",
    contact_title:"Contact",
    contact_addr_t:"Address", contact_hours_t:"Hours", contact_map_t:"Map",
    footer_note:"All rights reserved."
  },
  zh: {
    nav_ems:"EMS 训练", nav_programs:"课程方案", nav_pricing:"价格", nav_booking:"预约", nav_contact:"联系",
    cta_whatsapp:"WhatsApp 立即咨询", cta_book:"预约免费体验", cta_directions:"导航到店", cta_inquiry:"WhatsApp 咨询",
    hero_pill:"Setia Alam • EMS 训练",
    hero_title:"20 分钟，达到传统训练 2 小时效果。",
    hero_sub:"专为忙碌人士设计的 EMS 训练——教练带练、强度可调、省时高效。",
    hero_tick1:"适合忙碌上班族", hero_tick2:"新手也能轻松开始", hero_tick3:"根据目标定制训练",
    hero_note:"*效果因人而异，规律训练 + 饮食 + 休息很关键。",
    hero_note2:"第一次体验 EMS？无需经验，我们会全程指导。",
    hero_card_title:"快速信息", hero_card_addr_k:"地址", hero_card_hours_k:"营业时间",
    ems_title:"什么是 EMS？",
    ems_desc:"EMS（电刺激肌肉训练）会在你进行动作时，通过可控电脉冲帮助激活肌肉。它常用于“高效率、节省时间”的训练方式，适合忙碌人群。",
    ems_c1_t:"节省时间", ems_c1_d:"适合忙碌作息，常见单次约 20 分钟。",
    ems_c2_t:"教练带练", ems_c2_d:"全程指导动作与强度，提升安全与效果。",
    ems_c3_t:"强度可调", ems_c3_d:"根据体能与目标调整强度与进度。",
    programs_title:"课程方案",
    p1_t:"减脂塑形", p1_d:"以体态与体脂管理为目标（必要时可配合饮食建议）。",
    p2_t:"力量与体能", p2_d:"循序渐进提升力量、体态与整体体能。",
    p3_t:"新手友好", p3_d:"门槛低、节奏可控、因人调整。",
    p4_t:"忙碌人士方案", p4_d:"用更短时间完成高效训练安排。",
    testimonials_title:"用户评价",
    testimonials_desc:"来自 JXB Fit Club 学员的真实反馈。",
    t1_quote:"“训练时间短，但强度很够，真的很适合我的工作时间安排。”",
    t1_name:"— Sarah，市场执行人员",
    t2_quote:"“我一开始担心自己是新手会跟不上，但教练会一步一步带我。”",
    t2_name:"— Jason，32岁，首次体验 EMS",
    t3_quote:"“我最喜欢的是它很省时间，但训练起来还是很扎实。”",
    t3_name:"— Mei，办公室上班族",
    faq_title:"常见问题",
    faq_desc:"给第一次体验 EMS 的你的一些快速解答。",
    faq_q1:"EMS 会不会痛？",
    faq_a1:"EMS 的感觉会和一般运动不同，但强度会根据你的舒适度和体能状况进行调整。",
    faq_q2:"新手适合 EMS 吗？",
    faq_a2:"适合。第一次体验也没问题，教练会在训练过程中一步一步带你。",
    faq_q3:"我需要穿什么？",
    faq_a3:"穿着舒适的运动服即可。如果有特别需要准备的东西，我们会在预约前告知你。",
    faq_q4:"一次训练多久？",
    faq_a4:"一般 EMS 训练约 20 分钟，适合忙碌的生活节奏。",
    pricing_title:"价格",
    pricing_desc:"价格会根据配套与教练计划而不同。欢迎咨询最新配套与体验课名额。",
    price1_t:"体验课", price1_d:"适合第一次了解 EMS 与评估你的目标。",
    price2_t:"入门配套", price2_d:"适合建立每周规律训练。",
    price3_t:"教练计划", price3_d:"个人化训练 + 进度规划。",
    booking_title:"预约方式",
    booking_desc:"最快方式：WhatsApp 联系我们。也可使用简单表单（Google Form）提交体验课预约。",
    booking_whatsapp_t:"WhatsApp", booking_whatsapp_d:"点击按钮，告诉我们你的日期/时间偏好。",
    booking_tip:"小贴士：请写明你的目标（减脂/塑形/力量）和可训练时间，我们会帮你安排最适合的时段。",
    booking_form_t:"通过表单预约", booking_form_d:"填写表单后，我们会联系您确认时间并安排体验课程。",
    cta_open_form:"通过表单预约",
    contact_title:"联系",
    contact_addr_t:"地址", contact_hours_t:"营业时间", contact_map_t:"地图",
    footer_note:"版权所有。"
  }
};

// ====== helpers ======
let lang = "en";

function setText() {
  document.documentElement.lang = (lang === "en") ? "en" : "zh";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = I18N[lang][key] ?? el.textContent;
  });
  document.getElementById("langBtn").textContent = (lang === "en") ? "中文" : "EN";
  renderHours();
}

function renderHours(){
  const hoursTextEl = document.getElementById("hoursText");
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    hoursTextEl.textContent = (lang === "en")
      ? "See full hours below"
      : "完整营业时间请看下方";
  } else {
    const hoursText = hours
      .map(h => `${(lang==="en"?h.dayEN:h.dayCN)}: ${(lang==="en"?h.timeEN:h.timeCN)}`)
      .join(" • ");
    hoursTextEl.textContent = hoursText;
  }

  const list = document.getElementById("hoursList");
  list.innerHTML = "";
  hours.forEach(h=>{
    const row = document.createElement("div");
    row.className = "row";

    const d = document.createElement("span");
    d.textContent = (lang==="en"?h.dayEN:h.dayCN);

    const t = document.createElement("span");
    t.textContent = (lang==="en"?h.timeEN:h.timeCN);

    row.appendChild(d);
    row.appendChild(t);
    list.appendChild(row);
  });
}

window.addEventListener("resize", renderHours);

function buildWhatsAppLink(){
  // Safe fallback: if number not set, disable links
  const msgEN = encodeURIComponent(
`Hi JXB Fit Club 👋

I’m interested in trying EMS training.

Name:
Preferred date/time (e.g. weekday evening / weekend):
Goal (fat loss / toning / strength):
First time trying EMS? (Yes/No):

Looking forward to your reply, thanks!`
);

  const msgZH = encodeURIComponent(
`你好 👋

我想了解 JXB Fit Club 的 EMS 体验课。

姓名：
方便时间（例如：平日晚上 / 周末）：
目标（减脂 / 塑形 / 增肌）：
是否第一次体验 EMS？（是/否）：

谢谢，期待你的回复！`
);

  if(!WHATSAPP_NUMBER){
    // disable
    ["waTop","waHero","waBook","waContact","waFloat"].forEach(id=>{
      const a = document.getElementById(id);
      if(!a) return;
      a.href = "#booking";
      a.title = "Add WhatsApp number in assets/main.js";
    });
    return;
  }

  const msg = (lang==="en") ? msgEN : msgZH;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  ["waTop","waHero","waBook","waContact","waFloat"].forEach(id=>{
    const a = document.getElementById(id);
    if(a) a.href = url;
  });
}

function buildDirections(){
  const q = encodeURIComponent("JXB Fit Club Setia Alam");
  const url = `https://www.google.com/maps/search/?api=1&query=${q}`;

  const dirBtn = document.getElementById("dirBtn");
  if (dirBtn) dirBtn.href = url;

  const dirHero = document.getElementById("dirHero");
  if (dirHero) dirHero.href = url;
}

function buildFormLink(){
  const a = document.getElementById("formLink");
  if(!GOOGLE_FORM_URL){
    a.href = "#booking";
    a.title = "Add Google Form link in assets/main.js";
    return;
  }
  a.href = GOOGLE_FORM_URL;
}

function initFloatingWhatsApp() {
  const hero = document.querySelector(".hero");
  const waFloat = document.getElementById("waFloat");
  if (!hero || !waFloat) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      waFloat.classList.toggle("show", !entry.isIntersecting);
    },
    {
      threshold: 0.05
    }
  );

  observer.observe(hero);
}
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("langBtn").addEventListener("click", ()=>{
  lang = (lang === "en") ? "zh" : "en";
  setText();
  buildWhatsAppLink();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".links");

if(menuToggle && navLinks){
  menuToggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".links a").forEach(link=>{
  link.addEventListener("click", ()=>{
    navLinks.classList.remove("show");
  });
});

document.addEventListener("click", (e)=>{
  if(!navLinks.contains(e.target) && !menuToggle.contains(e.target)){
    navLinks.classList.remove("show");
  }
});

// init
setText();
buildWhatsAppLink();
buildDirections();
buildFormLink();
initFloatingWhatsApp();
