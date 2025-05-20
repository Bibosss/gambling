document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');

  if (
    !localStorage.getItem('cookiesAccepted') &&
    !localStorage.getItem('cookiesRejected')
  ) {
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
  }

  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.removeItem('cookiesRejected');
    banner.style.display = 'none';
  });

  rejectBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesRejected', 'true');
    localStorage.removeItem('cookiesAccepted');
    banner.style.display = 'none';
  });
});
