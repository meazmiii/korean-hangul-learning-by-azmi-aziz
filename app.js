// Monolithic app.js (single-file version)
const quizData = [
  { char: "ㄱ", answer: "G / K" },
  { char: "ㄴ", answer: "N" },
  { char: "ㄷ", answer: "D / T" },
  { char: "ㄹ", answer: "R / L" },
  { char: "ㅁ", answer: "M" },
  { char: "ㅂ", answer: "B / P" },
  { char: "ㅅ", answer: "S" },
  { char: "ㅇ", answer: "NG / Diam" },
  { char: "ㅈ", answer: "J" },
  { char: "ㅊ", answer: "Ch" },
  { char: "ㅋ", answer: "Kh" },
  { char: "ㅌ", answer: "Th" },
  { char: "ㅍ", answer: "Ph" },
  { char: "ㅎ", answer: "H" },
  { char: "ㄲ", answer: "KK" },
  { char: "ㄸ", answer: "TT" },
  { char: "ㅃ", answer: "PP" },
  { char: "ㅆ", answer: "SS" },
  { char: "ㅉ", answer: "JJ" },
  { char: "ㅏ", answer: "A" },
  { char: "ㅑ", answer: "YA" },
  { char: "ㅓ", answer: "EO" },
  { char: "ㅕ", answer: "YEO" },
  { char: "ㅗ", answer: "O" },
  { char: "ㅛ", answer: "YO" },
  { char: "ㅜ", answer: "U" },
  { char: "ㅠ", answer: "YU" },
  { char: "ㅡ", answer: "EU" },
  { char: "ㅣ", answer: "I" },
  { char: "ㅐ", answer: "AE" },
  { char: "ㅒ", answer: "YAE" },
  { char: "ㅔ", answer: "E" },
  { char: "ㅖ", answer: "YE" },
  { char: "ㅘ", answer: "WA" },
  { char: "ㅙ", answer: "WAE" },
  { char: "ㅚ", answer: "OE / WE" },
  { char: "ㅝ", answer: "WO" },
  { char: "ㅞ", answer: "WE" },
  { char: "ㅟ", answer: "WI" },
  { char: "ㅢ", answer: "UI / EUI" },
];

const vocabData = [
  {
    k: "안녕하세요",
    r: "annyeonghaseyo",
    t: "Halo / Selamat pagi / siang / malam",
  },
  { k: "안녕하십니까", r: "annyeonghasimnika", t: "Halo (lebih formal)" },
  {
    k: "안녕히 가세요",
    r: "annyeonghi gaseyo",
    t: "Selamat jalan (kepada yang pergi)",
  },
  {
    k: "안녕히 계세요",
    r: "annyeonghi gyeseyo",
    t: "Selamat tinggal (kepada yang tinggal)",
  },
  { k: "감사합니다", r: "gamsahamnida", t: "Terima kasih" },
  { k: "고맙습니다", r: "gomapseumnida", t: "Terima kasih" },
  { k: "미안합니다", r: "mianhamnida", t: "Maaf" },
  { k: "죄송합니다", r: "joesonghamnida", t: "Mohon maaf / Maaf" },
  {
    k: "괜찮습니다",
    r: "gwaenchansumnida",
    t: "Tidak apa-apa / Baik-baik saja",
  },
  { k: "괜찮아요", r: "gwaenchanayo", t: "Tidak apa-apa / Baik-baik saja" },
  { k: "어디", r: "eodi", t: "Mana / Di mana" },
  { k: "여기", r: "yeogi", t: "Sini / Di sini" },
  { k: "거기", r: "geogi", t: "Situ / Di situ" },
  { k: "저기", r: "jeogi", t: "Sana / Di sana" },
  { k: "화장실", r: "hwajangsil", t: "Toilet / Kamar mandi" },
  { k: "공항", r: "gonghang", t: "Bandara" },
  { k: "역", r: "yeok", t: "Stasiun" },
  { k: "지하철", r: "jihacheol", t: "Kereta bawah tanah / MRT" },
  { k: "택시", r: "taeksi", t: "Taksi" },
  { k: "버스", r: "beoseu", t: "Bus" },
  { k: "식당", r: "sikdang", t: "Restoran / Rumah makan" },
  { k: "호텔", r: "hotel", t: "Hotel" },
  { k: "얼마", r: "eolma", t: "Berapa (harga)" },
  { k: "이것", r: "igeot", t: "Ini / Barang ini" },
  { k: "이거", r: "igeo", t: "Ini / Barang ini (kolokial)" },
  { k: "주세요", r: "juseyo", t: "Tolong beri / Minta" },
  { k: "물", r: "mul", t: "Air" },
  { k: "밥", r: "bap", t: "Nasi / Makanan" },
  { k: "메뉴", r: "menyu", t: "Menu" },
  { k: "계산", r: "gyesan", t: "Perhitungan / Pembayaran" },
  { k: "카드", r: "kadeu", t: "Kartu (kredit/debit)" },
  { k: "현금", r: "hyeongeum", t: "Uang tunai" },
  { k: "맛있어요", r: "masisseoyo", t: "Enak" },
];

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

// Build a quiz pool of `count` items from `data`, allowing repeats when data.length < count
function createQuizPool(data, count) {
  const pool = [];
  const src = data.slice();
  while (pool.length < count) {
    // take a random element from src
    const item = src[Math.floor(Math.random() * src.length)];
    pool.push(item);
  }
  return shuffle(pool);
}

// --- Main (40 huruf) ---
let shuffledQuiz = [];
let currentQuestion = 0;
let score = 0;

function initCheatSheet() {
  const grid = document.getElementById("cheat-grid");
  if (!grid) return;
  grid.innerHTML = "";
  quizData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cheat-item";
    div.innerHTML = `<div class="char">${item.char}</div><div class="ans">${item.answer}</div>`;
    // click -> open Huruf tab and jump to that character
    div.addEventListener("click", () => {
      // reset quiz to full list and jump to selected char
      shuffledQuiz = shuffle(quizData.slice());
      const idx = shuffledQuiz.findIndex((q) => q.char === item.char);
      currentQuestion = idx >= 0 ? idx : 0;
      // activate tab/panel
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
      const tab = document.querySelector('.tab[data-tab="huruf"]');
      if (tab) tab.classList.add("active");
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      const panel = document.getElementById("panel-huruf");
      if (panel) panel.classList.add("active");
      loadQuestion();
    });
    grid.appendChild(div);
  });
}

function initGame() {
  shuffledQuiz = createQuizPool(quizData, 50);
  currentQuestion = 0;
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("total-num").innerText = shuffledQuiz.length;
  initCheatSheet();
  loadQuestion();
}

function loadQuestion() {
  const container = document.getElementById("options-container");
  const koreanEl = document.getElementById("korean-text");
  if (!shuffledQuiz || shuffledQuiz.length === 0) {
    if (koreanEl) koreanEl.innerText = "-";
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num").innerText = 0;
    return;
  }
  const q = shuffledQuiz[currentQuestion];
  if (koreanEl) koreanEl.innerText = q.char;
  document.getElementById("current-num").innerText = currentQuestion + 1;

  let options = [q.answer];
  while (options.length < 4) {
    let randomAns =
      quizData[Math.floor(Math.random() * quizData.length)].answer;
    if (!options.includes(randomAns)) options.push(randomAns);
  }
  options = shuffle(options);

  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.addEventListener("click", () => checkAnswer(btn, opt === q.answer));
    container.appendChild(btn);
  });
}

function checkAnswer(btn, isCorrect) {
  const buttons = document.querySelectorAll("#options-container button");
  buttons.forEach((b) => (b.disabled = true));
  if (isCorrect) {
    btn.classList.add("correct");
    score += 10;
    document.getElementById("score").innerText = score;
  } else {
    btn.classList.add("wrong");
  }
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < shuffledQuiz.length) loadQuestion();
    else {
      alert(
        `Selesai! Skor akhir kamu: ${score} dari ${shuffledQuiz.length * 10}`,
      );
      initGame();
    }
  }, 600);
}

// --- 10 Vokal ---
let shuffledQuizVokal = [];
let currentQuestionVokal = 0;
let scoreVokal = 0;
function getVowel10Quiz() {
  const vowels = ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"];
  return quizData.filter((it) => vowels.includes(it.char));
}
function initCheatSheetVokal() {
  const grid = document.getElementById("cheat-grid-vokal");
  if (!grid) return;
  grid.innerHTML = "";
  getVowel10Quiz().forEach((item) => {
    const d = document.createElement("div");
    d.className = "cheat-item";
    d.innerHTML = `<div class="char">${item.char}</div><div class="ans">${item.answer}</div>`;
    // click -> open 10 Vokal tab and jump to that vowel
    d.addEventListener("click", () => {
      shuffledQuizVokal = shuffle(getVowel10Quiz());
      const idx = shuffledQuizVokal.findIndex((q) => q.char === item.char);
      currentQuestionVokal = idx >= 0 ? idx : 0;
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
      const tab = document.querySelector('.tab[data-tab="vokal10"]');
      if (tab) tab.classList.add("active");
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      const panel = document.getElementById("panel-vokal10");
      if (panel) panel.classList.add("active");
      loadQuestionVokal();
    });
    grid.appendChild(d);
  });
}
function initGameVokal() {
  shuffledQuizVokal = createQuizPool(getVowel10Quiz(), 50);
  currentQuestionVokal = 0;
  scoreVokal = 0;
  document.getElementById("score-vokal").innerText = scoreVokal;
  document.getElementById("total-num-vokal").innerText =
    shuffledQuizVokal.length || 0;
  initCheatSheetVokal();
  loadQuestionVokal();
}
function loadQuestionVokal() {
  const container = document.getElementById("options-container-vokal");
  const koreanEl = document.getElementById("korean-text-vokal");
  if (!shuffledQuizVokal || shuffledQuizVokal.length === 0) {
    if (koreanEl) koreanEl.innerText = "-";
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num-vokal").innerText = 0;
    return;
  }
  const q = shuffledQuizVokal[currentQuestionVokal];
  if (koreanEl) koreanEl.innerText = q.char;
  document.getElementById("current-num-vokal").innerText =
    currentQuestionVokal + 1;
  let options = [q.answer];
  while (options.length < 4) {
    let randomAns =
      quizData[Math.floor(Math.random() * quizData.length)].answer;
    if (!options.includes(randomAns)) options.push(randomAns);
  }
  options = shuffle(options);
  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.addEventListener("click", () =>
      checkAnswerVokal(btn, opt === q.answer),
    );
    container.appendChild(btn);
  });
}
function checkAnswerVokal(btn, isCorrect) {
  const buttons = document.querySelectorAll("#options-container-vokal button");
  buttons.forEach((b) => (b.disabled = true));
  if (isCorrect) {
    btn.classList.add("correct");
    scoreVokal += 10;
    document.getElementById("score-vokal").innerText = scoreVokal;
  } else btn.classList.add("wrong");
  setTimeout(() => {
    currentQuestionVokal++;
    if (currentQuestionVokal < shuffledQuizVokal.length) loadQuestionVokal();
    else {
      alert(
        `Selesai! Skor akhir kamu: ${scoreVokal} dari ${shuffledQuizVokal.length * 10}`,
      );
      initGameVokal();
    }
  }, 600);
}

// --- 11 Vokal ---
let shuffledQuizVokal11 = [];
let currentQuestionVokal11 = 0;
let scoreVokal11 = 0;
function getVowel11Quiz() {
  const chars = [
    "ㅢ",
    "ㅐ",
    "ㅒ",
    "ㅔ",
    "ㅖ",
    "ㅞ",
    "ㅘ",
    "ㅙ",
    "ㅟ",
    "ㅝ",
    "ㅚ",
  ];
  const mapping = {
    ㅢ: "UI / EUI",
    ㅐ: "AE",
    ㅒ: "YAE",
    ㅔ: "E",
    ㅖ: "YE",
    ㅞ: "WE",
    ㅘ: "WA",
    ㅙ: "WAE",
    ㅟ: "WI",
    ㅝ: "WO",
    ㅚ: "OE / WE",
  };
  return chars.map((ch) => ({ char: ch, answer: mapping[ch] }));
}
function initCheatSheetVokal11() {
  const grid = document.getElementById("cheat-grid-vokal11");
  if (!grid) return;
  grid.innerHTML = "";
  getVowel11Quiz().forEach((item) => {
    const d = document.createElement("div");
    d.className = "cheat-item";
    d.innerHTML = `<div class="char">${item.char}</div><div class="ans">${item.answer}</div>`;
    // click -> open 11 Vokal tab and jump to that vowel
    d.addEventListener("click", () => {
      shuffledQuizVokal11 = shuffle(getVowel11Quiz());
      const idx = shuffledQuizVokal11.findIndex((q) => q.char === item.char);
      currentQuestionVokal11 = idx >= 0 ? idx : 0;
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
      const tab = document.querySelector('.tab[data-tab="vokal11"]');
      if (tab) tab.classList.add("active");
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      const panel = document.getElementById("panel-vokal11");
      if (panel) panel.classList.add("active");
      loadQuestionVokal11();
    });
    grid.appendChild(d);
  });
}
function initGameVokal11() {
  shuffledQuizVokal11 = createQuizPool(getVowel11Quiz(), 50);
  currentQuestionVokal11 = 0;
  scoreVokal11 = 0;
  document.getElementById("score-vokal11").innerText = scoreVokal11;
  document.getElementById("total-num-vokal11").innerText =
    shuffledQuizVokal11.length || 0;
  initCheatSheetVokal11();
  loadQuestionVokal11();
}
function loadQuestionVokal11() {
  const container = document.getElementById("options-container-vokal11");
  const koreanEl = document.getElementById("korean-text-vokal11");
  if (!shuffledQuizVokal11 || shuffledQuizVokal11.length === 0) {
    if (koreanEl) koreanEl.innerText = "-";
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num-vokal11").innerText = 0;
    return;
  }
  const q = shuffledQuizVokal11[currentQuestionVokal11];
  if (koreanEl) koreanEl.innerText = q.char;
  document.getElementById("current-num-vokal11").innerText =
    currentQuestionVokal11 + 1;
  let options = [q.answer];
  while (options.length < 4) {
    let randomAns =
      quizData[Math.floor(Math.random() * quizData.length)].answer;
    if (!options.includes(randomAns)) options.push(randomAns);
  }
  options = shuffle(options);
  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.addEventListener("click", () =>
      checkAnswerVokal11(btn, opt === q.answer),
    );
    container.appendChild(btn);
  });
}
function checkAnswerVokal11(btn, isCorrect) {
  const buttons = document.querySelectorAll(
    "#options-container-vokal11 button",
  );
  buttons.forEach((b) => (b.disabled = true));
  if (isCorrect) {
    btn.classList.add("correct");
    scoreVokal11 += 10;
    document.getElementById("score-vokal11").innerText = scoreVokal11;
  } else btn.classList.add("wrong");
  setTimeout(() => {
    currentQuestionVokal11++;
    if (currentQuestionVokal11 < shuffledQuizVokal11.length)
      loadQuestionVokal11();
    else {
      alert(
        `Selesai! Skor akhir kamu: ${scoreVokal11} dari ${shuffledQuizVokal11.length * 10}`,
      );
      initGameVokal11();
    }
  }, 600);
}

// --- 14 Konsonan ---
let shuffledQuizKonsonan = [];
let currentQuestionKonsonan = 0;
let scoreKonsonan = 0;
function getKonsonan14Quiz() {
  const chars = [
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅎ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
  ];
  const overrides = { ㅊ: "Ch", ㅋ: "Kh", ㅌ: "Th", ㅍ: "Ph", ㅇ: "NG / Diam" };
  return quizData
    .filter((it) => chars.includes(it.char))
    .map((it) => ({ char: it.char, answer: overrides[it.char] || it.answer }));
}
function initCheatSheetKonsonan() {
  const grid = document.getElementById("cheat-grid-konsonan");
  if (!grid) return;
  grid.innerHTML = "";
  getKonsonan14Quiz().forEach((item) => {
    const d = document.createElement("div");
    d.className = "cheat-item";
    d.innerHTML = `<div class="char">${item.char}</div><div class="ans">${item.answer}</div>`;
    // click -> open 14 Konsonan tab and jump to that consonant
    d.addEventListener("click", () => {
      shuffledQuizKonsonan = shuffle(getKonsonan14Quiz());
      const idx = shuffledQuizKonsonan.findIndex((q) => q.char === item.char);
      currentQuestionKonsonan = idx >= 0 ? idx : 0;
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
      const tab = document.querySelector('.tab[data-tab="konsonan14"]');
      if (tab) tab.classList.add("active");
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      const panel = document.getElementById("panel-konsonan14");
      if (panel) panel.classList.add("active");
      loadQuestionKonsonan();
    });
    grid.appendChild(d);
  });
}
function initGameKonsonan() {
  shuffledQuizKonsonan = createQuizPool(getKonsonan14Quiz(), 50);
  currentQuestionKonsonan = 0;
  scoreKonsonan = 0;
  document.getElementById("score-konsonan").innerText = scoreKonsonan;
  document.getElementById("total-num-konsonan").innerText =
    shuffledQuizKonsonan.length || 0;
  initCheatSheetKonsonan();
  loadQuestionKonsonan();
}
function loadQuestionKonsonan() {
  const container = document.getElementById("options-container-konsonan");
  const koreanEl = document.getElementById("korean-text-konsonan");
  if (!shuffledQuizKonsonan || shuffledQuizKonsonan.length === 0) {
    if (koreanEl) koreanEl.innerText = "-";
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num-konsonan").innerText = 0;
    return;
  }
  const q = shuffledQuizKonsonan[currentQuestionKonsonan];
  if (koreanEl) koreanEl.innerText = q.char;
  document.getElementById("current-num-konsonan").innerText =
    currentQuestionKonsonan + 1;
  let options = [q.answer];
  while (options.length < 4) {
    let randomAns =
      quizData[Math.floor(Math.random() * quizData.length)].answer;
    if (!options.includes(randomAns)) options.push(randomAns);
  }
  options = shuffle(options);
  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.addEventListener("click", () =>
      checkAnswerKonsonan(btn, opt === q.answer),
    );
    container.appendChild(btn);
  });
}
function checkAnswerKonsonan(btn, isCorrect) {
  const buttons = document.querySelectorAll(
    "#options-container-konsonan button",
  );
  buttons.forEach((b) => (b.disabled = true));
  if (isCorrect) {
    btn.classList.add("correct");
    scoreKonsonan += 10;
    document.getElementById("score-konsonan").innerText = scoreKonsonan;
  } else btn.classList.add("wrong");
  setTimeout(() => {
    currentQuestionKonsonan++;
    if (currentQuestionKonsonan < shuffledQuizKonsonan.length)
      loadQuestionKonsonan();
    else {
      alert(
        `Selesai! Skor akhir kamu: ${scoreKonsonan} dari ${shuffledQuizKonsonan.length * 10}`,
      );
      initGameKonsonan();
    }
  }, 600);
}

// --- Vocab module ---
let shuffledVocab = [];
let currentVocab = 0;
let vocabRevealed = false;
function initVocab() {
  shuffledVocab = shuffle(vocabData);
  currentVocab = 0;
  vocabRevealed = false;
  const totalEl = document.getElementById("vocab-total-num");
  if (totalEl) totalEl.innerText = shuffledVocab.length;
  renderVocabCard();
  renderVocabList();
  document.getElementById("prev-vocab").addEventListener("click", () => {
    currentVocab =
      (currentVocab - 1 + shuffledVocab.length) % shuffledVocab.length;
    vocabRevealed = false;
    renderVocabCard();
  });
  document.getElementById("next-vocab").addEventListener("click", () => {
    currentVocab = (currentVocab + 1) % shuffledVocab.length;
    vocabRevealed = false;
    renderVocabCard();
  });
  document.getElementById("reveal-vocab").addEventListener("click", () => {
    vocabRevealed = !vocabRevealed;
    renderVocabCard();
  });
  document.getElementById("toggle-vocab-list").addEventListener("click", () => {
    document.getElementById("vocab-list").classList.toggle("active");
  });
}
function renderVocabCard() {
  if (!shuffledVocab.length) return;
  const item = shuffledVocab[currentVocab];
  const k = document.getElementById("vocab-korean");
  const r = document.getElementById("vocab-rom");
  const t = document.getElementById("vocab-trans");
  if (k) k.innerText = item.k;
  if (r) r.innerText = vocabRevealed ? item.r : "";
  if (t) t.innerText = vocabRevealed ? item.t : "";
  const revealBtn = document.getElementById("reveal-vocab");
  if (revealBtn)
    revealBtn.innerText = vocabRevealed ? "Sembunyikan" : "Tampilkan";
  const cur = document.getElementById("vocab-current-num");
  if (cur) cur.innerText = currentVocab + 1;
}
function renderVocabList() {
  const grid = document.getElementById("vocab-list");
  if (!grid) return;
  grid.innerHTML = "";
  shuffledVocab.forEach((it, idx) => {
    const div = document.createElement("div");
    div.className = "cheat-item";
    div.innerHTML = `<div class="char">${it.k}</div><div class="ans">${it.r}<br/><span style="color:#ccc;font-size:0.85rem">${it.t}</span></div>`;
    div.addEventListener("click", () => {
      currentVocab = idx;
      vocabRevealed = false;
      renderVocabCard();
    });
    grid.appendChild(div);
  });
}

// --- Tabs handling ---
function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");
  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      t.classList.add("active");
      const id = t.getAttribute("data-tab");
      if (id === "huruf") {
        document.getElementById("panel-huruf").classList.add("active");
        initGame();
      } else if (id === "vokal10") {
        document.getElementById("panel-vokal10").classList.add("active");
        initGameVokal();
      } else if (id === "vokal11") {
        document.getElementById("panel-vokal11").classList.add("active");
        initGameVokal11();
      } else if (id === "konsonan14") {
        document.getElementById("panel-konsonan14").classList.add("active");
        initGameKonsonan();
      } else if (id === "kata") {
        document.getElementById("panel-kata").classList.add("active");
      }
    }),
  );
  const cheats = document.querySelectorAll(".btn-cheat[data-panel]");
  cheats.forEach((b) =>
    b.addEventListener("click", () => {
      const panel = b.getAttribute("data-panel");
      let id = "cheat-sheet";
      if (panel && panel !== "huruf") {
        if (panel === "vokal10") id = "cheat-sheet-vokal";
        else if (panel === "vokal11") id = "cheat-sheet-vokal11";
        else if (panel === "konsonan14") id = "cheat-sheet-konsonan";
        else id = `cheat-sheet-${panel.replace(/panel-?/, "")}`;
      }
      const el = document.getElementById(id);
      if (el) el.classList.toggle("active");
    }),
  );
}

// init on DOM ready
window.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initGame();
  initVocab();
});
