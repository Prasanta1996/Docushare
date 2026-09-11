if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', function () {
    navigator.sendBeacon('/oauth2/sign_out');
  });
}
