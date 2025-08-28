document.addEventListener('DOMContentLoaded', () => {
  const listEl   = document.getElementById('items');
  const linkEl   = document.querySelector('.confirm-add');
  const formEl   = document.getElementById('addItem');
  const inputEl  = document.getElementById('itemInput');
  const errorEl  = document.getElementById('error');

  function showError(msg) {
    errorEl.textContent = msg || '';
    errorEl.classList.toggle('active', !!msg);
  }

  
  listEl.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li || !listEl.contains(li)) return;

    const prev = listEl.querySelector('li.active');
    if (prev && prev !== li) prev.classList.remove('active');
    li.classList.toggle('active');
  });

  if (linkEl) {
    linkEl.addEventListener('click', (e) => {
      const ok = window.confirm('Перейти за посиланням?');
      if (!ok) {
        e.preventDefault();
      }
    });
  }

  const normalizedValue = () => inputEl.value.trim();

  function isValidValue(v) {
    return v.length >= 3;
  }

  inputEl.addEventListener('input', () => {
    const v = normalizedValue();
    if (v.length === 0) {
      showError('Поле не може бути порожнім.');
    } else if (!isValidValue(v)) {
      showError(`Мінімум 3 символи (зараз: ${v.length}).`);
    } else {
      showError('');
    }
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const v = normalizedValue();

    if (v.length === 0) {
      showError('Поле не може бути порожнім.');
      inputEl.focus();
      return;
    }
    if (!isValidValue(v)) {
      showError('Значення закоротке (мінімум 3 символи).');
      inputEl.focus();
      return;
    }

    const li = document.createElement('li');
    li.textContent = v;

    const prev = listEl.querySelector('li.active');
    if (prev) prev.classList.remove('active');
    li.classList.add('active');

    listEl.appendChild(li);

    formEl.reset();
    showError('');

    inputEl.focus();
  });
});
