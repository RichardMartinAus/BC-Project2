// const sequelize = require("../../config/connection");
const timeSlots = document.getElementById("#time-slots");
const bookingBtn12 = document.getElementById("#btn-12");
const bookingBtn14 = document.getElementById("#btn-14");
const bookingBtn18 = document.getElementById("#btn-18");
const bookingBtn20 = document.getElementById("#btn-20");
debugger
let timeSelection = function () {
  if (bookingBtn12 == active) {
    return 12;
  } else if (bookingBtn14 == active) {
    return 14;
  } else if (bookingBtn18 == active) {
    return 18;
  } else if (bookingBtn20 == active) {
    return 20;
  }
};

const bookingFormHandler = async (event) => {
  event.preventDefault();

  const dateBooked = document.querySelector("#date-dropdown").value;
  const guests = document.querySelector("#guest-number").value;
  const selectedTime = timeSelection();

  if (bookedForDate && time && guestsNo) {
    const response = await fetch(`/api/booking`, {
      method: "POST",
      body: JSON.stringify({
        bookedForDate: dateBooked,
        time: selectedTime,
        guestsNo: guests,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // popup or add text to page "booking successful"
      document.location.replace("/userdash");
    } else {
      alert("Please enter all fields!");
    }
  }
};

document
  .querySelector("#submit-btn")
  .addEventListener("click", bookingFormHandler);
