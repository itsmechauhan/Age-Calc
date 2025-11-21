function acceptCookies() {
  document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.style.display = 'none';
}

window.addEventListener('load', () => {
  const banner = document.getElementById('cookieBanner');
  if (!document.cookie.includes('cookiesAccepted')) {
    if (banner) banner.style.display = 'block';
  } else {
    if (banner) banner.style.display = 'none';
  }
});
