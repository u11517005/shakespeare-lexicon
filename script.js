(() => {
  const words = window.VOCABULARY || (typeof VOCABULARY !== 'undefined' ? VOCABULARY : []);
  const $ = (id) => document.getElementById(id);
  if (!words.length) { console.error('找不到 VOCABULARY，請確認 vocabulary.js 已上傳。'); return; }
  let current = 0;
  const learned = new Set(JSON.parse(localStorage.getItem('shakespeare-learned') || '[]'));
  const letters = $('alphabet');
  const grid = $('wordGrid');
  function setAudio(id, path) { const audio = $(id); audio.pause(); audio.src = path; audio.load(); }
  function render(index) {
    current = (index + words.length) % words.length;
    const item = words[current];
    $('entryIndex').textContent = `WORD ${String(current + 1).padStart(2, '0')} / 26`;
    $('initial').textContent = item.letter;
    $('imageLetter').textContent = item.letter;
    $('word').textContent = item.word;
    $('part').textContent = item.part || '';
    $('meaning').textContent = item.meaning || '';
    $('definition').textContent = item.definition || '';
    $('quote').textContent = `“${item.quote}”`;
    $('play').textContent = item.play || '';
    $('scene').textContent = item.scene || '';
    $('wordImage').src = `assets/images/${item.letter}.jpg`;
    $('wordImage').alt = `${item.word} 印象派風格油畫`;
    setAudio('wordAudio', `assets/audio/words/${item.letter}.mp3`);
    setAudio('quoteAudio', `assets/audio/quotes/${item.letter}.mp3`);
    $('bookmark').textContent = learned.has(item.letter) ? '★' : '☆';
    $('bookmark').classList.toggle('learned', learned.has(item.letter));
    [...letters.children].forEach((button, i) => button.classList.toggle('active', i === current));
  }
  words.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = item.letter; button.setAttribute('aria-label', `學習 ${item.word}`);
    button.addEventListener('click', () => { render(index); $('explore').scrollIntoView({behavior:'smooth'}); });
    letters.appendChild(button);
    const card = document.createElement('button');
    card.type = 'button'; card.className = 'word-card';
    card.innerHTML = `<img src="assets/images/${item.letter}.jpg" alt="${item.word} 主題插畫" loading="lazy"><span class="word-card-body"><strong>${item.letter} · ${item.word}</strong><small>${item.meaning || ''}</small></span>`;
    card.addEventListener('click', () => { render(index); window.scrollTo({top:$('explore').offsetTop - 15,behavior:'smooth'}); });
    grid.appendChild(card);
  });
  $('prevBtn').addEventListener('click', () => render(current - 1));
  $('nextBtn').addEventListener('click', () => render(current + 1));
  $('bookmark').addEventListener('click', () => {
    const letter = words[current].letter;
    learned.has(letter) ? learned.delete(letter) : learned.add(letter);
    localStorage.setItem('shakespeare-learned', JSON.stringify([...learned]));
    render(current);
  });
  render(0);
})();
