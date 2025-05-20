document.addEventListener('DOMContentLoaded', () => {
  const modalWindow = document.querySelector('.modal-overlay-menu');
  const openMobMenu = document.querySelector('.btn-mob-menu');
  const btnClose = document.querySelector('.mobmenu-btn-close');
  const mobMenuNavigation = document.querySelector('.mobmenu-list');

  if (openMobMenu && modalWindow) {
    openMobMenu.addEventListener('click', () => {
      modalWindow.classList.add('is-open');
    });
  }

  if (btnClose && modalWindow) {
    btnClose.addEventListener('click', () => {
      modalWindow.classList.remove('is-open');
    });
  }

  if (mobMenuNavigation) {
    mobMenuNavigation.addEventListener('click', event => {
      if (event.target.classList.contains('mobmenu-list-link')) {
        modalWindow.classList.remove('is-open');
      }
    });
  }
});
