// JS TO HANDLE LOG OUT
const logout = async () => {
  const response = await fetch('/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

if (document.querySelector('#log-out')) {
    document
    .querySelector('#log-out')
    .addEventListener('click', logout);
}
