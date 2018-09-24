const hint = document.querySelector('#hint');
const content = document.querySelector('#content');
if (hint) {
  hint.style.display = 'none';

  let button = document.createElement('button');
  button.innerHTML = `Show Hint`;
  content.appendChild(button);

  button.addEventListener('click', e => {
    button.style.display = 'none';
    hint.style.display = 'block';
  });
};
