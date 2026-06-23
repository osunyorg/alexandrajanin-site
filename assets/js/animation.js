// Animation formes (shape)
(function () {
  var shape = document.querySelector('body.page-shape .hero picture');
  if (!shape) return;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        shape.style.transform = 'translate('+ window.scrollY * 0.05 +'%,' + window.scrollY * 0.12 + '%) rotate(-' + window.scrollY * 0.12 + 'deg)';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();