const keys = document.querySelectorAll('.key');

const noteFiles = {
  c: 'audio/c.wav',
  'c-sharp': 'audio/c-sharp.wav',
  d: 'audio/d.wav',
  'd-sharp': 'audio/d-sharp.wav',
  e: 'audio/e.wav',
  f: 'audio/f.wav',
  'f-sharp': 'audio/f-sharp.wav',
  g: 'audio/g.wav',
  'g-sharp': 'audio/g-sharp.wav',
  a: 'audio/a.wav',
  'a-sharp': 'audio/a-sharp.wav',
  b: 'audio/b.wav',
  c2: 'audio/c2.wav'
};

const keyMap = {
  a: 'c-key',
  w: 'c-sharp-key',
  s: 'd-key',
  e: 'd-sharp-key',
  d: 'e-key',
  f: 'f-key',
  t: 'f-sharp-key',
  g: 'g-key',
  y: 'g-sharp-key',
  h: 'a-key',
  u: 'a-sharp-key',
  j: 'b-key',
  k: 'high-c-key'
};

function playNoteForKey(keyElement) {
  const note = keyElement.dataset.note;
  const src = noteFiles[note];
  if (!src) return;

  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play().catch(err => console.error('Audio error:', src, err));
}

function keyPlay(event) {
  const key = event.target;
  key.style.backgroundColor = 'yellow';
  key.classList.add('playing');
  playNoteForKey(key);
}

function keyReturn(event) {
  const key = event.target;
  key.style.backgroundColor = '';
  key.classList.remove('playing');
}

function eventAssignment(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
  note.onmouseleave = keyReturn;
}

keys.forEach(eventAssignment);

document.addEventListener('keydown', function(event) {
  const keyId = keyMap[event.key.toLowerCase()];
  if (!keyId) return;

  const keyElement = document.getElementById(keyId);
  if (!keyElement || keyElement.classList.contains('playing')) return;

  keyElement.classList.add('playing');
  keyElement.style.backgroundColor = 'yellow';
  playNoteForKey(keyElement);
});

document.addEventListener('keyup', function(event) {
  const keyId = keyMap[event.key.toLowerCase()];
  if (!keyId) return;

  const keyElement = document.getElementById(keyId);
  if (!keyElement) return;

  keyElement.classList.remove('playing');
  keyElement.style.backgroundColor = '';
});

const nextOne = document.getElementById('first-next-line');
const nextTwo = document.getElementById('second-next-line');
const nextThree = document.getElementById('third-next-line');
const startOver = document.getElementById('fourth-next-line');
const lastLyric = document.getElementById('column-optional');

nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
};

nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
};

nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none';
};

startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  nextTwo.hidden = true;
  nextThree.hidden = true;
  lastLyric.style.display = 'none';

  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
};