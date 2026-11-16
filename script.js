const grid = document.getElementById('lexiconGrid');
const alphaNav = document.getElementById('alphaNav');
const audioPlayer = document.getElementById('globalAudioPlayer');
const toast = document.getElementById('toastNotification');

let activePlayBtn = null;
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initAlphabetNav() {
  LEXICON_DATA.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'alpha-btn';
    btn.textContent = item.letter;
    btn.dataset.letter = item.letter;
    alphaNav.appendChild(btn);
  });

  alphaNav.addEventListener('click', (e) => {
    if (!e.target.classList.contains('alpha-btn')) return;
    document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderCards(e.target.dataset.letter);
  });
}

function renderCards(filterLetter = 'ALL') {
  grid.innerHTML = '';
  const filtered = filterLetter === 'ALL'
    ? LEXICON_DATA
    : LEXICON_DATA.filter(d => d.letter === filterLetter);

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'lexicon-card';

    card.innerHTML = `
      <div class="card-image-wrap">
        <span class="letter-badge">${item.letter}</span>
        <img 
          src="${item.imageFile}" 
          alt="${item.word} - 印象派油畫配圖" 
          loading="lazy"
          onerror="this.parentElement.innerHTML='<span class=\'letter-badge\'>${item.letter}</span><div class=\'img-placeholder\'><span>Impressionist Canvas · ${item.word}</span>請將油畫檔放入 ${item.imageFile}</div>'"
        />
      </div>
      <div class="card-body">
        <div class="word-header">
          <h2 class="word-title">${item.word}</h2>
          <button class="audio-btn" data-audio="${item.wordAudio}" data-label="${item.word}">
            🔊 單字發音
          </button>
        </div>
        <div class="phonetic">${item.phonetic}</div>
        <div class="meaning">${item.meaning}</div>
        <p class="nuance">${item.nuance}</p>
        <div class="quote-box">
          <p class="quote-en">${item.quoteEn}</p>
          <p class="quote-zh">${item.quoteZh}</p>
          <div class="quote-footer">
            <span>— <em>${item.citation}</em></span>
            <button class="quote-play" data-audio="${item.quoteAudio}" data-label="${item.word} 金句">
              ▶ 朗讀金句
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-audio]');
  if (!btn) return;

  const audioSrc = btn.dataset.audio;

  if (activePlayBtn === btn && !audioPlayer.paused) {
    audioPlayer.pause();
    btn.classList.remove('playing');
    activePlayBtn = null;
    return;
  }

  if (activePlayBtn) {
    activePlayBtn.classList.remove('playing');
  }

  activePlayBtn = btn;
  btn.classList.add('playing');
  audioPlayer.src = audioSrc;

  audioPlayer.play().catch(() => {
    btn.classList.remove('playing');
    activePlayBtn = null;
    showToast(`尚未偵測到音檔：${audioSrc}（請確認已放入對應 MP3）`);
  });
});

audioPlayer.addEventListener('ended', () => {
  if (activePlayBtn) {
    activePlayBtn.classList.remove('playing');
    activePlayBtn = null;
  }
});

initAlphabetNav();
renderCards();
