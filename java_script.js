function removeHighlight() {
  const list = document.querySelectorAll('[class^="high"]');
  list[0].classList.remove('underline');
  list[1].classList.remove('underline');
  list[2].classList.remove('underline');
}

// eslint-disable-next-line no-unused-vars
function showMenu() {
  removeHighlight();
  document.querySelector('.nav-bar').classList.add('open');
  document.querySelector('.menu-btn').classList.add('hide');
  document.querySelector('.menu-btnn').classList.add('show');
}

function closeMenu() {
  document.querySelector('.nav-bar').classList.remove('open');
  document.querySelector('.menu-btn').classList.remove('hide');
  document.querySelector('.menu-btnn').classList.remove('show');
}

// eslint-disable-next-line no-unused-vars
function highLight(name) {
  closeMenu();
  const width = window.innerWidth;
  if (width >= 768) {
    removeHighlight();
    document.querySelector(name).classList.add('underline');
  }
}
