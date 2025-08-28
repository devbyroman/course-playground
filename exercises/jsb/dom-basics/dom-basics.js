document.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.getElementById('title');
  const listEl  = document.getElementById('items');
  const inputEl = document.getElementById('newItem');
  const addBtn  = document.getElementById('addBtn');
  const clearBtn= document.getElementById('clearBtn');

  const normalize = (s) => s.trim();

  // Task 5
  function refreshIndexes() {
    const items = listEl.children;
    for (let i = 0; i < items.length; i++) {
      items[i].dataset.index = String(i);
    }
  }

  // Task 1
  function refreshTitle() {
    const count = listEl.children.length;
    titleEl.textContent = `Items (${count})`;
  }

  refreshIndexes();
  refreshTitle();

  // Task 3
  listEl.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li || !listEl.contains(li)) return;

    console.log('Clicked data-index:', li.dataset.index);

    const prev = listEl.querySelector('li.active');
    if (prev && prev !== li) prev.classList.remove('active');
    li.classList.toggle('active');
  });

  // Task 2
  function addItemFromInput() {
    const raw = inputEl.value;
    const text = normalize(raw);
    if (text.length === 0) {
      inputEl.value = '';
      inputEl.focus();
      return;
    }
    const li = document.createElement('li');
    li.textContent = text;

    listEl.appendChild(li);
    refreshIndexes();   // Task 5
    refreshTitle();     // Task 1

    inputEl.value = '';
    inputEl.focus();
  }

  addBtn.addEventListener('click', addItemFromInput);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addItemFromInput();
  });

  // Task 4
  clearBtn.addEventListener('click', () => {
    listEl.replaceChildren();
    refreshIndexes();
    refreshTitle();
  });
});
