const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
};
const state = {
  counter: 0,
  decrement() {
    state.counter -= 1;
    refs.value.textContent = state.counter;
  },

  increment() {
    state.counter += 1;
    refs.value.textContent = state.counter;
  },
};
function handleClick({ target }) {
  console.log(target.textContent);
  state[target.dataset.action]();
  console.log(state[target.dataset.action]);
}
refs.value.textContent = state.counter;
refs.counter.addEventListener('click', handleClick);
