const input = document.querySelector('#validation-input');
input.addEventListener('blur', e => {
  e.preventDefault();
  const target = e.currentTarget;
  const dataLength = target.getAttribute('data-length');
  const currentLength = target.value.length;
  if (currentLength > dataLength || currentLength < dataLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
});
