const button = document.querySelector('.button');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close');

button.addEventListener('click', () => {
  overlay.style.display = 'block';
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});