(() => {
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.pill').forEach((a) => {
    if (a.getAttribute('href') === file) a.classList.add('active');
  });
})();
