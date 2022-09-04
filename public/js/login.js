// JS TO HANDLE LOGIN
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/userdash');
    } else {
      if (response.status === 400) {
        alert('Incorrect email or password, please try again');
      } else {
        alert('Sever errors');
      }
      
      
    }
  }
};

document
  .querySelector('#login-submit')
  .addEventListener('click', loginFormHandler);
