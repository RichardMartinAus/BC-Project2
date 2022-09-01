// JS TO HANDLE USER DASHBOARD ONCE LOGGED IN
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

document
  .querySelector('#log-out')
  .addEventListener('click', logout);