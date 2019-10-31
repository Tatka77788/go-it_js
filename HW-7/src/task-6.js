const element = document.getElementById('validation-input');
element.addEventListener('blur', event => {
  const target = event.currentTarget;
  const dataLength = target.getAttribute('data-length');
  const currentLength = target.value.length;
  if (currentLength >= dataLength) {
    element.style.cssText = ' border-color: #f44336;';
  } else {
    element.style.cssText = 'border-color: #4caf50;';
  }
});