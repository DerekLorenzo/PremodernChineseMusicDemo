const notes = document.querySelectorAll('.note');

function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}

notes.forEach(note => {
  note.addEventListener('click', () => {
    const sound = note.dataset.sound;
    playSound(sound);
  });
});
