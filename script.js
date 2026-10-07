document.addEventListener('DOMContentLoaded', () => {
  const lampSwitch = document.getElementById('lampSwitch');
  const loginContainer = document.getElementById('loginContainer');

  // Toggle light and form visibility on lamp pull string click
  lampSwitch.addEventListener('click', () => {
    loginContainer.classList.toggle('is-off');
  });
});
