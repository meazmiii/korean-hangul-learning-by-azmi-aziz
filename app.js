// Monolithic app.js (single-file version)
const quizData = [
  { char: "ㄱ", audio: "가" },
  { char: "ㄴ", audio: "나" },
  { char: "ㄷ", audio: "다" },
  { char: "ㄹ", audio: "라" },
  { char: "ㅁ", audio: "마" },
  { char: "ㅂ", audio: "바" },
  { char: "ㅅ", audio: "사" },
  { char: "ㅇ", audio: "아" },
  { char: "ㅈ", audio: "자" },
  { char: "ㅊ", audio: "차" },
  { char: "ㅋ", audio: "카" },
  { char: "ㅌ", audio: "타" },
  { char: "ㅍ", audio: "파" },
  { char: "ㅎ", audio: "하" },
  { char: "ㄲ", audio: "까" },
  { char: "ㄸ", audio: "따" },
  { char: "ㅃ", audio: "빠" },
  { char: "ㅆ", audio: "싸" },
  { char: "ㅉ", audio: "짜" },
  { char: "ㅏ", audio: "아" },
  { char: "ㅑ", audio: "야" },
  { char: "ㅓ", audio: "어" },
  { char: "ㅕ", audio: "여" },
  { char: "ㅗ", audio: "오" },
  { char: "ㅛ", audio: "요" },
  { char: "ㅜ", audio: "우" },
  { char: "ㅠ", audio: "유" },
  { char: "ㅡ", audio: "으" },
  { char: "ㅣ", audio: "이" },
  { char: "ㅐ", audio: "애" },
  { char: "ㅒ", audio: "얘" },
  { char: "ㅔ", audio: "에" },
  { char: "ㅖ", audio: "예" },
  { char: "ㅘ", audio: "와" },
  { char: "ㅙ", audio: "왜" },
  { char: "ㅚ", audio: "외" },
  { char: "ㅝ", audio: "워" },
  { char: "ㅞ", audio: "웨" },
  { char: "ㅟ", audio: "위" },
  { char: "ㅢ", audio: "의" },
];

const vocabData = [
  {
    k: "안녕하세요",
    t: "Halo / Selamat pagi / siang / malam",
  },
  { k: "안녕하십니까", t: "Halo (lebih formal)" },
  {
    k: "안녕히 가세요",
    t: "Selamat jalan (kepada yang pergi)",
  },
  {
    k: "안녕히 계세요",
    t: "Selamat tinggal (kepada yang tinggal)",
  },
  { k: "감사합니다", t: "Terima kasih" },
  { k: "고맙습니다", t: "Terima kasih" },
  { k: "미안합니다", t: "Maaf" },
  { k: "죄송합니다", t: "Mohon maaf / Maaf" },
  {
    k: "괜찮습니다",
    t: "Tidak apa-apa / Baik-baik saja",
  },
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
];

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function speakKorean(text) {
  const status = document.getElementById("audio-status");
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    if (status) status.textContent = "Audio tidak didukung di browser ini.";
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    window.speechSynthesis.addEventListener(
      "voiceschanged",
      () => speakKorean(text),
      { once: true },
    );
    window.setTimeout(() => {
      if (!window.speechSynthesis.getVoices().length && status) {
        status.textContent =
          "Suara Korea belum tersedia. Tambahkan suara Korea di pengaturan perangkat.";
      }
    }, 1500);
    return;
  }
  const koreanVoice = voices.find((voice) =>
    voice.lang.toLowerCase().startsWith("ko"),
  );
  if (!koreanVoice) {
    if (status) {
      status.textContent =
        "Suara Korea belum tersedia. Tambahkan suara Korea di pengaturan perangkat.";
    }
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.voice = koreanVoice;
  utterance.rate = 0.85;
  utterance.onstart = () => {
    if (status) status.textContent = "";
  };
  utterance.onerror = (event) => {
    if (event.error === "canceled" || event.error === "interrupted") return;
    if (status) status.textContent = "Audio gagal diputar. Coba lagi.";
  };
  window.speechSynthesis.speak(utterance);
}

function createAudioButton(text, label = "Dengarkan") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "audio-button";
  button.textContent = `🔊 ${label}`;
  button.setAttribute("aria-label", `${label}: ${text}`);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    speakKorean(text);
  });
  return button;
}

function renderHangulOptions(question, data, containerId, onAnswer) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const distractors = shuffle(data.filter((item) => item.char !== question.char))
    .slice(0, 3);
  const options = shuffle([question, ...distractors]);
  container.replaceChildren();
  options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.char;
    button.setAttribute("aria-label", `Pilih ${option.char}`);
    button.addEventListener("click", () =>
      onAnswer(button, option.char === question.char),
    );
    container.appendChild(button);
  });
}

function renderCheatSheet(gridId, data) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.replaceChildren();
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "cheat-item";
    const char = document.createElement("div");
    char.className = "char";
    char.textContent = item.char;
    card.append(char, createAudioButton(item.audio));
    grid.appendChild(card);
  });
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
  renderCheatSheet("cheat-grid", quizData);
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
  if (!shuffledQuiz || shuffledQuiz.length === 0) {
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num").innerText = 0;
    return;
  }
  const q = shuffledQuiz[currentQuestion];
  document.getElementById("current-num").innerText = currentQuestion + 1;
  document.getElementById("play-audio").onclick = () => speakKorean(q.audio);
  renderHangulOptions(q, quizData, "options-container", checkAnswer);
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
  renderCheatSheet("cheat-grid-vokal", getVowel10Quiz());
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
  if (!shuffledQuizVokal || shuffledQuizVokal.length === 0) {
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num-vokal").innerText = 0;
    return;
  }
  const q = shuffledQuizVokal[currentQuestionVokal];
  document.getElementById("current-num-vokal").innerText =
    currentQuestionVokal + 1;
  document.getElementById("play-audio-vokal").onclick = () =>
    speakKorean(q.audio);
  renderHangulOptions(
    q,
    getVowel10Quiz(),
    "options-container-vokal",
    checkAnswerVokal,
  );
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
  return quizData.filter((item) => chars.includes(item.char));
}
function initCheatSheetVokal11() {
  renderCheatSheet("cheat-grid-vokal11", getVowel11Quiz());
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
  if (!shuffledQuizVokal11 || shuffledQuizVokal11.length === 0) {
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num-vokal11").innerText = 0;
    return;
  }
  const q = shuffledQuizVokal11[currentQuestionVokal11];
  document.getElementById("current-num-vokal11").innerText =
    currentQuestionVokal11 + 1;
  document.getElementById("play-audio-vokal11").onclick = () =>
    speakKorean(q.audio);
  renderHangulOptions(
    q,
    getVowel11Quiz(),
    "options-container-vokal11",
    checkAnswerVokal11,
  );
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
  return quizData
    .filter((it) => chars.includes(it.char));
}
function initCheatSheetKonsonan() {
  renderCheatSheet("cheat-grid-konsonan", getKonsonan14Quiz());
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
  if (!shuffledQuizKonsonan || shuffledQuizKonsonan.length === 0) {
    if (container)
      container.innerHTML =
        '<div class="instructions">Tidak ada huruf untuk ditampilkan.</div>';
    document.getElementById("current-num-konsonan").innerText = 0;
    return;
  }
  const q = shuffledQuizKonsonan[currentQuestionKonsonan];
  document.getElementById("current-num-konsonan").innerText =
    currentQuestionKonsonan + 1;
  document.getElementById("play-audio-konsonan").onclick = () =>
    speakKorean(q.audio);
  renderHangulOptions(
    q,
    getKonsonan14Quiz(),
    "options-container-konsonan",
    checkAnswerKonsonan,
  );
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
  const t = document.getElementById("vocab-trans");
  if (k) k.innerText = item.k;
  document.getElementById("play-vocab-audio").onclick = () =>
    speakKorean(item.k);
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
    const word = document.createElement("div");
    word.className = "char";
    word.textContent = it.k;
    const translation = document.createElement("div");
    translation.className = "vocab-trans";
    translation.textContent = it.t;
    div.append(word, createAudioButton(it.k), translation);
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
