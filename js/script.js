function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

window.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
});