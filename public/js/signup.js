const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const contact = document.querySelector("#contact-number").value.trim();

  if (firstName && lastName && email && password && contact) {
    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        f_name: firstName,
        l_name: lastName,
        email: email,
        password: password,
        contactNo: contact,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/userdash");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signup-submit")
  .addEventListener("click", signupFormHandler);
