const refs = {
  input: document.querySelector('input[type="text"]'),
  name: document.getElementById('name-output'),
};
refs.input.addEventListener('input', handleInput);

function handleInput(e) {
  e.preventDefault();
  const { target } = e;
  console.log(target.value);
  refs.name.textContent = target.value;
}
