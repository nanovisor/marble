(function() {
  var menuBtn = document.querySelector('#mobile-menu-btn');
  var nav = document.querySelector('#main-nav');

  menuBtn.addEventListener('click', function() {
    nav.classList.toggle('main-nav--show-menu');
  });
})();
