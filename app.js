const quizData = [
  { char: "ㄱ", audio: "가" }, { char: "ㄴ", audio: "나" },
  { char: "ㄷ", audio: "다" }, { char: "ㄹ", audio: "라" },
  { char: "ㅁ", audio: "마" }, { char: "ㅂ", audio: "바" },
  { char: "ㅅ", audio: "사" }, { char: "ㅇ", audio: "아" },
  { char: "ㅈ", audio: "자" }, { char: "ㅊ", audio: "차" },
  { char: "ㅋ", audio: "카" }, { char: "ㅌ", audio: "타" },
  { char: "ㅍ", audio: "파" }, { char: "ㅎ", audio: "하" },
  { char: "ㄲ", audio: "까" }, { char: "ㄸ", audio: "따" },
  { char: "ㅃ", audio: "빠" }, { char: "ㅆ", audio: "싸" },
  { char: "ㅉ", audio: "짜" }, { char: "ㅏ", audio: "아" },
  { char: "ㅑ", audio: "야" }, { char: "ㅓ", audio: "어" },
  { char: "ㅕ", audio: "여" }, { char: "ㅗ", audio: "오" },
  { char: "ㅛ", audio: "요" }, { char: "ㅜ", audio: "우" },
  { char: "ㅠ", audio: "유" }, { char: "ㅡ", audio: "으" },
  { char: "ㅣ", audio: "이" }, { char: "ㅐ", audio: "애" },
  { char: "ㅒ", audio: "얘" }, { char: "ㅔ", audio: "에" },
  { char: "ㅖ", audio: "예" }, { char: "ㅘ", audio: "와" },
  { char: "ㅙ", audio: "왜" }, { char: "ㅚ", audio: "외" },
  { char: "ㅝ", audio: "워" }, { char: "ㅞ", audio: "웨" },
  { char: "ㅟ", audio: "위" }, { char: "ㅢ", audio: "의" },
];

const vowelCues = {
  "ㅡ": { emoji: "😐", label: "mulut datar" },
  "ㅣ": { emoji: "😬", label: "gigi terlihat" },
  "ㅓ": { emoji: "😮", label: "mulut terkejut" },
  "ㅏ": { emoji: "🥱", label: "mulut terbuka lebar" },
  "ㅗ": { emoji: "😯", label: "mulut bulat seperti O" },
  "ㅜ": { emoji: "😗", label: "mulut mencium" },
};

const romanization = {
  "ㄱ": "g/k", "ㄴ": "n", "ㄷ": "d/t", "ㄹ": "r/l", "ㅁ": "m",
  "ㅂ": "b/p", "ㅅ": "s", "ㅇ": "ng / diam", "ㅈ": "j", "ㅊ": "ch",
  "ㅋ": "k", "ㅌ": "t", "ㅍ": "p", "ㅎ": "h", "ㄲ": "kk",
  "ㄸ": "tt", "ㅃ": "pp", "ㅆ": "ss", "ㅉ": "jj", "ㅏ": "a",
  "ㅑ": "ya", "ㅓ": "eo", "ㅕ": "yeo", "ㅗ": "o", "ㅛ": "yo",
  "ㅜ": "u", "ㅠ": "yu", "ㅡ": "eu", "ㅣ": "i", "ㅐ": "ae",
  "ㅒ": "yae", "ㅔ": "e", "ㅖ": "ye", "ㅘ": "wa", "ㅙ": "wae",
  "ㅚ": "oe", "ㅝ": "wo", "ㅞ": "we", "ㅟ": "wi", "ㅢ": "ui",
};

const vocabData = [
  { k: "안녕하세요", t: "Halo / Selamat pagi / siang / malam" },
  { k: "안녕하십니까", t: "Halo (lebih formal)" },
  { k: "안녕히 가세요", t: "Selamat jalan (kepada yang pergi)" },
  { k: "안녕히 계세요", t: "Selamat tinggal (kepada yang tinggal)" },
  { k: "감사합니다", t: "Terima kasih" },
  { k: "고맙습니다", t: "Terima kasih" },
  { k: "미안합니다", t: "Maaf" },
  { k: "죄송합니다", t: "Mohon maaf / Maaf" },
  { k: "괜찮습니다", t: "Tidak apa-apa / Baik-baik saja" },
  { k: "괜찮아요", t: "Tidak apa-apa / Baik-baik saja" },
  { k: "어디", t: "Mana / Di mana" },
  { k: "여기", t: "Sini / Di sini" },
  { k: "거기", t: "Situ / Di situ" },
  { k: "저기", t: "Sana / Di sana" },
  { k: "화장실", t: "Toilet / Kamar mandi" },
  { k: "공항", t: "Bandara" },
  { k: "역", t: "Stasiun" },
  { k: "지하철", t: "Kereta bawah tanah / MRT" },
  { k: "택시", t: "Taksi" },
  { k: "버스", t: "Bus" },
  { k: "식당", t: "Restoran / Rumah makan" },
  { k: "호텔", t: "Hotel" },
  { k: "얼마", t: "Berapa (harga)" },
  { k: "이것", t: "Ini / Barang ini" },
  { k: "이거", t: "Ini / Barang ini (kolokial)" },
  { k: "주세요", t: "Tolong beri / Minta" },
  { k: "물", t: "Air" },
  { k: "밥", t: "Nasi / Makanan" },
  { k: "메뉴", t: "Menu" },
  { k: "계산", t: "Perhitungan / Pembayaran" },
  { k: "카드", t: "Kartu (kredit/debit)" },
  { k: "현금", t: "Uang tunai" },
  { k: "맛있어요", t: "Enak" },
].map((item, index) => ({
  ...item,
  category: index < 10 ? "greetings" : index < 22 ? "places" : "food",
}));

const storageKey = "korean-learning-progress";
const defaultState = {
  manualProgressVersion: 1,
  knownWords: [],
  completedUnits: [],
  bestScores: {},
  quizCount: 0,
  streak: 0,
  lastStudyDate: "",
  dailyDate: "",
  dailyCorrect: 0,
};
const createDefaultState = () => ({
  ...defaultState,
  knownWords: [],
  completedUnits: [],
  bestScores: {},
});

const categoryNames = {
  all: "Semua",
  greetings: "Sapaan",
  places: "Tempat",
  food: "Makan & belanja",
};
const wordGroups = [
  { id: "greetings", title: "Sapaan", start: 0, end: 10 },
  { id: "places", title: "Tempat & arah", start: 10, end: 22 },
  { id: "food", title: "Makan & belanja", start: 22, end: 33 },
];
const letterSets = {
  all: { title: "Semua huruf", chars: quizData },
  vowels: { title: "10 vokal dasar", chars: quizData.filter((item) => "ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ".includes(item.char)) },
  expanded: { title: "11 vokal perluasan", chars: quizData.filter((item) => "ㅢㅐㅒㅔㅖㅞㅘㅙㅟㅝㅚ".includes(item.char)) },
  consonants: { title: "14 konsonan dasar", chars: quizData.filter((item) => "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅎㅊㅋㅌㅍ".includes(item.char)) },
  tense: { title: "5 konsonan tegang", chars: quizData.filter((item) => "ㄲㄸㅃㅆㅉ".includes(item.char)) },
};
const weeklyPlan = [
  { title: "Hari 1", theme: "Vokal dasar", type: "vowels", target: 10 },
  { title: "Hari 2", theme: "Konsonan dasar", type: "consonants", target: 14 },
  { title: "Hari 3", theme: "Vokal perluasan", type: "expanded", target: 11 },
  { title: "Hari 4", theme: "Konsonan tegang", type: "tense", target: 5 },
  { title: "Hari 5", theme: "Sapaan", type: "greetings", target: 10 },
  { title: "Hari 6", theme: "Tempat & arah", type: "places", target: 12 },
  { title: "Hari 7", theme: "Makan & belanja", type: "food", target: 11 },
];

let state = loadState();
let activePage = "home";
let activeLetterSet = "vowels";
let activeVocabCategory = "all";
let activeVocabIndex = 0;
let vocabRevealed = false;
let vocabListOpen = false;
let currentQuiz = null;
let toastTimer = 0;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const hasManualProgress = stored.manualProgressVersion === defaultState.manualProgressVersion;
    return {
      ...defaultState,
      ...stored,
      knownWords: hasManualProgress && Array.isArray(stored.knownWords)
        ? stored.knownWords.filter((word) => vocabData.some((item) => item.k === word))
        : [],
      completedUnits: hasManualProgress && Array.isArray(stored.completedUnits) ? stored.completedUnits : [],
      bestScores: stored.bestScores && typeof stored.bestScores === "object" ? stored.bestScores : {},
    };
  } catch {
    return createDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    return true;
  } catch {
    showToast("Progres tidak bisa disimpan di browser ini.");
    return false;
  }
}

function shuffle(items) {
  const result = items.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function changeStudyDay() {
  const today = todayKey();
  if (state.dailyDate !== today) {
    state.dailyDate = today;
    state.dailyCorrect = 0;
    saveState();
  }
}

function recordStudyDay() {
  const today = todayKey();
  if (state.lastStudyDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    state.streak = state.lastStudyDate === todayKey(yesterday) ? state.streak + 1 : 1;
    state.lastStudyDate = today;
    saveState();
  }
}

function speakKorean(text) {
  const status = document.getElementById("audio-status");
  status.textContent = "";
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    status.textContent = "Audio tidak didukung di browser ini.";
    return;
  }
  const voice = window.speechSynthesis.getVoices()
    .find((item) => item.lang.toLowerCase().startsWith("ko"));
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.85;
  if (voice) utterance.voice = voice;
  utterance.onerror = (event) => {
    if (event.error !== "canceled" && event.error !== "interrupted") {
      status.textContent = voice
        ? "Audio gagal diputar. Coba lagi."
        : "Browser tidak menemukan suara Korea. Pastikan Google Speech Services aktif.";
    }
  };
  window.speechSynthesis.speak(utterance);
}

function makeAudioButton(text) {
  return `<button class="audio-button" data-speak="${escapeAttribute(text)}" aria-label="Dengarkan ${escapeAttribute(text)}">♫</button>`;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

function escapeAttribute(text) {
  return escapeHtml(text);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}

function setPage(page) {
  activePage = page;
  document.querySelectorAll("[data-page-link]").forEach((button) => {
    button.classList.toggle("active", button.dataset.pageLink === page);
  });
  const moreToggle = document.getElementById("mobile-more-toggle");
  const moreMenu = document.getElementById("mobile-more-menu");
  const isMorePage = page === "roadmap" || page === "progress";
  moreToggle.classList.toggle("active", isMorePage);
  moreToggle.setAttribute("aria-expanded", "false");
  moreMenu.hidden = true;
  renderPage();
}

function renderPage() {
  const view = document.getElementById("app-view");
  const renderers = {
    home: renderHome,
    roadmap: renderRoadmap,
    hangul: renderHangul,
    vocabulary: renderVocabulary,
    practice: renderPractice,
    progress: renderProgress,
  };
  view.innerHTML = (renderers[activePage] || renderHome)();
  document.getElementById("streak-count").textContent = state.streak;
  bindPageEvents();
}

function renderHome() {
  const dailyProgress = Math.min(state.dailyCorrect / 5 * 100, 100);
  return `
    <section class="welcome-row">
      <div>
        <h1>Belajar <em>Korea.</em></h1>
        <button class="button button-primary" data-go="hangul">Mulai <span>→</span></button>
      </div>
      <div class="hero-art" aria-hidden="true"><div class="hero-disc">한</div><span class="hero-stamp">한국어<br>KOREAN</span><span class="hero-hill"></span></div>
    </section>
    <section class="section-block">
      <div class="section-heading"><h2>Belajar</h2><button class="text-button" data-go="progress">Progres →</button></div>
      <div class="learning-cards">
        <button class="learning-card" data-go="roadmap"><span class="learning-symbol">한</span><span class="card-title">Target 7 hari</span><span class="card-bottom">${state.completedUnits.length} / 4 kelompok <span>↗</span></span></button>
        <button class="learning-card" data-go="hangul"><span class="learning-symbol">가</span><span class="card-title">Hangul</span><span class="card-bottom">40 huruf <span>↗</span></span></button>
        <button class="learning-card" data-go="vocabulary"><span class="learning-symbol">말</span><span class="card-title">Kosakata</span><span class="card-bottom">${state.knownWords.length} / ${vocabData.length} kata <span>↗</span></span></button>
      </div>
    </section>
    <section class="daily-goal">
      <div class="goal-copy"><strong>Latihan hari ini</strong><small>${Math.min(state.dailyCorrect, 5)} / 5 benar</small></div>
      <div class="goal-track"><i style="width:${dailyProgress}%"></i></div>
      <button class="text-button" data-go="practice">Latihan →</button>
    </section>
    `;
}

function getWordGroupCount(group) {
  return state.knownWords.filter((word) => {
    const index = vocabData.findIndex((item) => item.k === word);
    return index >= group.start && index < group.end;
  }).length;
}

function getPlanProgress(day) {
  if (day.type === "vowels" || day.type === "expanded" || day.type === "consonants" || day.type === "tense") {
    return state.completedUnits.includes(day.type) ? day.target : 0;
  }
  const group = wordGroups.find((item) => item.id === day.type);
  return getWordGroupCount(group);
}

function renderRoadmap() {
  return `<div class="page-intro"><h1>Target <em>7 hari.</em></h1></div>
    <div class="roadmap-list">${weeklyPlan.map((day, index) => {
      const progress = getPlanProgress(day);
      const done = progress >= day.target;
      return `<article class="roadmap-day ${done ? "day-done" : ""}">
        <span class="day-marker">${done ? "✓" : String(index + 1).padStart(2, "0")}</span>
        <div class="day-copy"><strong>${day.theme}</strong><small>${progress} / ${day.target}</small></div>
        <div class="day-progress"><i style="width:${Math.min(progress / day.target * 100, 100)}%"></i></div>
        <button class="button button-light" data-plan-day="${index}">${done ? "Ulangi" : "Mulai"} →</button>
      </article>`;
    }).join("")}</div>`;
}

function renderHangul() {
  const set = letterSets[activeLetterSet];
  const progressItems = [
    ["vowels", "10 Vokal"],
    ["expanded", "11 Vokal perluasan"],
    ["consonants", "14 Konsonan"],
    ["tense", "5 Konsonan tegang"],
  ];
  return `<div class="page-intro"><h1><em>Hangul.</em></h1></div>
    <div class="content-card">
      <div class="lesson-tabs" role="tablist" aria-label="Kelompok huruf">${progressItems.map(([id, label]) => `<button role="tab" aria-selected="${activeLetterSet === id}" class="lesson-tab ${activeLetterSet === id ? "selected" : ""}" data-letter-set="${id}">${label.replace(/^\d+\s/, "")}</button>`).join("")}<button role="tab" aria-selected="${activeLetterSet === "all"}" class="lesson-tab ${activeLetterSet === "all" ? "selected" : ""}" data-letter-set="all">Semua</button></div>
      <div class="lesson-heading"><strong>${set.title}</strong><span>${set.chars.length}</span></div>
      <div class="hangul-grid">${set.chars.map((item) => `<article class="hangul-tile"><span class="hangul-char">${item.char}</span><span class="hangul-reading">${romanization[item.char]}</span><span class="hangul-example">${item.audio}</span>${makeAudioButton(item.audio)}</article>`).join("")}</div>
      <div class="lesson-footer">${activeLetterSet === "all" ? "" : `<button class="mastery-toggle ${state.completedUnits.includes(activeLetterSet) ? "mastered" : ""}" data-toggle-unit="${activeLetterSet}" aria-pressed="${state.completedUnits.includes(activeLetterSet)}">${state.completedUnits.includes(activeLetterSet) ? "✓ Lancar" : "□ Sudah lancar"}</button>`}<button class="button button-primary" data-practice-set="${activeLetterSet}">Latihan →</button></div>
    </div>`;
}

function getFilteredVocabulary() {
  return activeVocabCategory === "all"
    ? vocabData
    : vocabData.filter((item) => item.category === activeVocabCategory);
}

function renderVocabulary() {
  const categoryRanges = [
    ["all", "Semua", vocabData.length],
    ["greetings", "Sapaan", 10],
    ["places", "Tempat", 12],
    ["food", "Makan & belanja", 11],
  ];
  const deck = getFilteredVocabulary();
  activeVocabIndex %= deck.length;
  const item = deck[activeVocabIndex];
  const learned = state.knownWords.includes(item.k);
  return `<div class="page-intro"><h1><em>Kosakata.</em></h1></div>
    <div class="vocab-stats"><strong>${state.knownWords.length}<small> / ${vocabData.length}</small></strong><span>lancar</span><div class="mini-track"><i style="width:${state.knownWords.length / vocabData.length * 100}%"></i></div></div>
    <div class="vocab-filters">${categoryRanges.map(([id, label]) => `<button class="filter-chip ${activeVocabCategory === id ? "selected" : ""}" data-vocab-category="${id}">${label}</button>`).join("")}</div>
    <section class="vocab-study-card">
      <div class="vocab-card-top"><span>${categoryNames[item.category]}</span><span>${activeVocabIndex + 1} / ${deck.length}</span></div>
      <div class="vocab-word">${item.k}</div>
      ${vocabRevealed ? `<div class="vocab-answer">${item.t}</div>` : `<div class="vocab-answer is-hidden">Arti</div>`}
      <div class="vocab-actions">${makeAudioButton(item.k)}<button class="button button-light" id="reveal-word">${vocabRevealed ? "Tutup arti" : "Arti"}</button></div>
      <div class="vocab-controls"><button class="button button-light" id="previous-word" aria-label="Kata sebelumnya">←</button><button class="button ${learned ? "button-complete" : "button-dark"}" id="mark-word" aria-pressed="${learned}">${learned ? "Lancar ✓" : "Tandai lancar"}</button><button class="button button-light" id="next-word" aria-label="Kata berikutnya">→</button></div>
    </section>
    <button class="list-toggle" id="toggle-vocab-list">${vocabListOpen ? "Tutup daftar" : "Semua kata"}</button>
    <div class="vocab-list ${vocabListOpen ? "active" : ""}" id="vocab-list">${deck.map((word, index) => `<button class="vocab-list-item ${state.knownWords.includes(word.k) ? "known" : ""}" data-vocab-index="${index}"><span>${word.k}</span><small>${state.knownWords.includes(word.k) ? "Diingat" : word.t}</small></button>`).join("")}</div>`;
}

function renderPractice() {
  if (currentQuiz) return renderQuiz();
  const sets = [
    ["vowels", "10 Vokal", `${letterSets.vowels.chars.length} huruf`],
    ["expanded", "Vokal perluasan", `${letterSets.expanded.chars.length} huruf`],
    ["consonants", "Konsonan dasar", `${letterSets.consonants.chars.length} huruf`],
    ["tense", "Konsonan tegang", `${letterSets.tense.chars.length} huruf`],
    ["all", "Semua Hangul", `${quizData.length} huruf`],
    ["greetings", "Sapaan", "10 kata"],
    ["places", "Tempat & arah", "12 kata"],
    ["food", "Makan & belanja", "11 kata"],
    ["vocabulary", "Semua kosakata", `${vocabData.length} kata`],
  ];
  return `<div class="page-intro"><h1><em>Latihan.</em></h1></div>
    <div class="practice-grid">${sets.map(([id, label, detail]) => `<button class="practice-choice" data-start-quiz="${id}"><span class="practice-symbol">${id === "all" ? "한" : ["vowels", "expanded", "consonants", "tense"].includes(id) ? "가" : "말"}</span><span><strong>${label}</strong><small>${detail}</small></span><span class="choice-arrow">→</span></button>`).join("")}</div>`;
}

function renderQuiz() {
  if (currentQuiz.finished) {
    const percent = Math.round(currentQuiz.score / currentQuiz.questions.length * 100);
    const passed = percent >= 80;
    return `<section class="content-card quiz-result"><h1>${passed ? "Bagus!" : "Coba lagi."}</h1><div class="result-score">${currentQuiz.score}<small> / ${currentQuiz.questions.length}</small></div><div class="quiz-result-actions"><button class="button button-primary" id="repeat-quiz">Ulangi</button><button class="button button-light" id="finish-quiz">Latihan lain</button></div></section>`;
  }
  const question = currentQuiz.questions[currentQuiz.index];
  const isWordQuiz = currentQuiz.kind === "vocabulary";
  return `<section class="content-card quiz-card">
    <div class="quiz-topline"><button class="text-button" id="exit-quiz">← Keluar</button><span>SOAL ${currentQuiz.index + 1} / ${currentQuiz.questions.length}</span></div>
    <div class="quiz-track"><i style="width:${currentQuiz.index / currentQuiz.questions.length * 100}%"></i></div>
    <div class="quiz-prompt">${isWordQuiz ? question.k : "Dengarkan bunyinya"}</div>
    ${isWordQuiz ? "" : `<button class="audio-button" data-speak="${question.audio}">♫ Dengarkan</button>`}
    <p class="quiz-instruction">${isWordQuiz ? "Apa arti kata ini?" : "Pilih huruf yang sesuai dengan bunyi."}</p>
    <div class="answer-grid">${question.options.map((option) => `<button class="answer-option" data-answer="${escapeAttribute(option)}">${escapeHtml(option)}</button>`).join("")}</div>
    <p class="answer-feedback" aria-live="polite"></p>
  </section>`;
}

function renderProgress() {
  const total = letterSets.vowels.chars.length + letterSets.expanded.chars.length
    + letterSets.consonants.chars.length + letterSets.tense.chars.length + vocabData.length;
  const complete = state.completedUnits.reduce((count, id) => count + (letterSets[id]?.chars.length || 0), 0)
    + state.knownWords.length;
  const best = Math.max(0, ...Object.values(state.bestScores));
  const items = [
    ...Object.entries(letterSets).filter(([id]) => id !== "all").map(([id, set]) => ({
      id, title: set.title, detail: `${state.completedUnits.includes(id) ? set.chars.length : 0} / ${set.chars.length} huruf`, percent: state.completedUnits.includes(id) ? 100 : 0,
    })),
    ...wordGroups.map((group) => ({
      id: group.id, title: group.title, detail: `${getWordGroupCount(group)} / ${group.end - group.start} kata`, percent: getWordGroupCount(group) / (group.end - group.start) * 100,
    })),
  ];
  return `<div class="page-intro"><h1><em>Progres.</em></h1></div>
    <div class="progress-overview">
      <article class="overview-card progress-ring-card"><div class="progress-ring" style="--progress:${complete / total * 100}%"><span>${Math.round(complete / total * 100)}<small>%</small></span></div><div><span class="eyebrow">LANCAR</span><strong>${complete} / ${total}</strong></div></article>
      <article class="overview-card"><span class="eyebrow">KUIS</span><strong>${state.quizCount}</strong></article>
      <article class="overview-card"><span class="eyebrow">SKOR TERBAIK</span><strong>${best}%</strong></article>
    </div>
    <section class="section-block progress-section"><div class="section-heading"><h2>Materi</h2><button class="text-button" id="reset-progress">Atur ulang</button></div>
      <div class="progress-list">${items.map((item) => `<div class="progress-item"><span>${item.title}</span><div class="progress-item-track"><i style="width:${item.percent}%"></i></div><small>${item.detail.replace(/ huruf| kata/g, "")}</small></div>`).join("")}</div>
    </section>`;
}

function makeQuizQuestion(question, pool, kind) {
  const distractorAnswers = shuffle(pool.filter((item) => item !== question)
    .map((item) => kind === "vocabulary" ? item.t : item.char))
    .filter((answer, index, list) => answer !== (kind === "vocabulary" ? question.t : question.char)
      && list.indexOf(answer) === index)
    .slice(0, 3);
  const answer = kind === "vocabulary" ? question.t : question.char;
  return {
    ...question,
    options: shuffle([answer, ...distractorAnswers]),
    answer,
  };
}

function startQuiz(type) {
  const kind = ["vocabulary", "greetings", "places", "food"].includes(type) ? "vocabulary" : "hangul";
  const pool = kind === "vocabulary"
    ? type === "vocabulary" ? vocabData : vocabData.filter((item) => item.category === type)
    : letterSets[type]?.chars || quizData;
  if (pool.length < 2) {
    showToast("Materi belum cukup untuk membuat kuis.");
    return;
  }
  const questionCount = Math.min(10, pool.length);
  currentQuiz = {
    type,
    kind,
    questions: shuffle(pool).slice(0, questionCount).map((question) => makeQuizQuestion(question, pool, kind)),
    index: 0,
    score: 0,
    finished: false,
    answered: false,
  };
  setPage("practice");
}

function recordCorrectAnswer() {
  const today = todayKey();
  if (state.dailyDate !== today) {
    state.dailyDate = today;
    state.dailyCorrect = 0;
  }
  state.dailyCorrect += 1;
  recordStudyDay();
}

function answerQuestion(button) {
  if (!currentQuiz || currentQuiz.answered) return;
  currentQuiz.answered = true;
  const question = currentQuiz.questions[currentQuiz.index];
  const correct = button.dataset.answer === question.answer;
  if (correct) {
    currentQuiz.score += 1;
    recordCorrectAnswer();
  }
  document.querySelectorAll(".answer-option").forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === question.answer) option.classList.add("correct");
    else if (option === button) option.classList.add("wrong");
  });
  const feedback = document.querySelector(".answer-feedback");
  feedback.textContent = correct ? "Benar!" : `Jawaban: ${question.answer}`;
  feedback.classList.toggle("is-correct", correct);
  saveState();
  window.setTimeout(() => {
    currentQuiz.index += 1;
    currentQuiz.answered = false;
    if (currentQuiz.index >= currentQuiz.questions.length) {
      currentQuiz.finished = true;
      state.quizCount += 1;
      const percent = Math.round(currentQuiz.score / currentQuiz.questions.length * 100);
      state.bestScores[currentQuiz.type] = Math.max(state.bestScores[currentQuiz.type] || 0, percent);
      saveState();
      changeStudyDay();
    }
    renderPage();
  }, 650);
}

function markCurrentWord() {
  const item = getFilteredVocabulary()[activeVocabIndex];
  if (state.knownWords.includes(item.k)) {
    state.knownWords = state.knownWords.filter((word) => word !== item.k);
  } else {
    state.knownWords.push(item.k);
  }
  saveState();
  renderPage();
}

function bindPageEvents() {
  document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.go)));
  document.querySelectorAll("[data-letter-set]").forEach((button) => button.addEventListener("click", () => {
    activeLetterSet = button.dataset.letterSet;
    renderPage();
  }));
  document.querySelectorAll("[data-practice-set]").forEach((button) => button.addEventListener("click", () => startQuiz(button.dataset.practiceSet)));
  document.querySelectorAll("[data-toggle-unit]").forEach((button) => button.addEventListener("click", () => {
    const unit = button.dataset.toggleUnit;
    state.completedUnits = state.completedUnits.includes(unit)
      ? state.completedUnits.filter((item) => item !== unit)
      : [...state.completedUnits, unit];
    saveState();
    renderPage();
  }));
  document.querySelectorAll("[data-start-quiz]").forEach((button) => button.addEventListener("click", () => startQuiz(button.dataset.startQuiz)));
  document.querySelectorAll("[data-plan-day]").forEach((button) => button.addEventListener("click", () => {
    const plan = weeklyPlan[Number(button.dataset.planDay)];
    if (["greetings", "places", "food"].includes(plan.type)) {
      activeVocabCategory = plan.type;
      activeVocabIndex = 0;
      setPage("vocabulary");
    } else {
      activeLetterSet = plan.type;
      setPage("hangul");
    }
  }));
  document.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    speakKorean(button.dataset.speak);
  }));
  document.querySelectorAll("[data-vocab-category]").forEach((button) => button.addEventListener("click", () => {
    activeVocabCategory = button.dataset.vocabCategory;
    activeVocabIndex = 0;
    vocabRevealed = false;
    renderPage();
  }));
  document.getElementById("previous-word")?.addEventListener("click", () => {
    activeVocabIndex = (activeVocabIndex - 1 + getFilteredVocabulary().length) % getFilteredVocabulary().length;
    vocabRevealed = false;
    renderPage();
  });
  document.getElementById("next-word")?.addEventListener("click", () => {
    activeVocabIndex = (activeVocabIndex + 1) % getFilteredVocabulary().length;
    vocabRevealed = false;
    renderPage();
  });
  document.getElementById("reveal-word")?.addEventListener("click", () => {
    vocabRevealed = !vocabRevealed;
    renderPage();
  });
  document.getElementById("mark-word")?.addEventListener("click", markCurrentWord);
  document.querySelectorAll("[data-vocab-index]").forEach((button) => button.addEventListener("click", () => {
    activeVocabIndex = Number(button.dataset.vocabIndex);
    vocabRevealed = false;
    renderPage();
  }));
  document.getElementById("toggle-vocab-list")?.addEventListener("click", () => {
    vocabListOpen = !vocabListOpen;
    renderPage();
  });
  document.querySelectorAll(".answer-option").forEach((button) => button.addEventListener("click", () => answerQuestion(button)));
  document.getElementById("exit-quiz")?.addEventListener("click", () => {
    currentQuiz = null;
    renderPage();
  });
  document.getElementById("finish-quiz")?.addEventListener("click", () => {
    currentQuiz = null;
    setPage("practice");
  });
  document.getElementById("repeat-quiz")?.addEventListener("click", () => startQuiz(currentQuiz.type));
  document.getElementById("reset-progress")?.addEventListener("click", () => {
    if (!window.confirm("Yakin mau mengatur ulang semua progres belajar?")) return;
    state = createDefaultState();
    saveState();
    renderPage();
    showToast("Progres belajar sudah diatur ulang.");
  });
}

document.querySelectorAll("[data-page-link]").forEach((button) => button.addEventListener("click", (event) => {
  event.preventDefault();
  setPage(button.dataset.pageLink);
}));

document.getElementById("mobile-more-toggle").addEventListener("click", () => {
  const toggle = document.getElementById("mobile-more-toggle");
  const menu = document.getElementById("mobile-more-menu");
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  menu.hidden = isOpen;
});

document.addEventListener("click", (event) => {
  const menu = document.getElementById("mobile-more-menu");
  const toggle = document.getElementById("mobile-more-toggle");
  if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const menu = document.getElementById("mobile-more-menu");
  const toggle = document.getElementById("mobile-more-toggle");
  if (!menu.hidden) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }
});

changeStudyDay();
saveState();
renderPage();
