document.addEventListener('DOMContentLoaded', function () {
  const openModalBtns = document.querySelectorAll(
    '.btn-cta:not(.btn-see-more)'
  );
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modalOverlay.classList.add('active');
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
});
