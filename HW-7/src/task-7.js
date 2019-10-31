const rng = document.getElementById('font-size-control');
const text = document.getElementById('text');
rng.addEventListener('input', () => {
  text.style.fontSize = rng.value + 'px';
});
