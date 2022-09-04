const bookingFormHandler = async (event) => {
  event.preventDefault();

  const dateBooked = document.querySelector("#date-dropdown").value;
  const guests = document.querySelector("#guest-number").value;
  const selectedTime = document.querySelector("#time-slot").value;

  if (dateBooked && selectedTime && guests) {
    const response = await fetch("/userdash", {
      method: "POST",
      body: JSON.stringify({
        bookedForDate: dateBooked,
        time: selectedTime,
        guestsNo: guests,
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
  .querySelector("#submit-btn")
  .addEventListener("click", bookingFormHandler);
