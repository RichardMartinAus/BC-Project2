const bookingForm = async () => {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/booking");
  } else {
    alert(response.statusText);
  }
};

//document.querySelector("#booking-btn").addEventListener("click", bookingForm);
