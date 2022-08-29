const newFormHandler = async (event) => {
  event.preventDefault();

  const bookedForDate = document.querySelector('#select-date').value.trim();
  const time = document.querySelector('#time-slot').value.trim();
  const guestsNo = document.querySelector('#number-of-guests').value.trim();

  if (bookedForDate && time && guestsNo) {
    const response = await fetch(`/api/booking`, {
      method: 'POST',
      body: JSON.stringify({ bookedForDate, time, guestsNo }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // popup or add text to page "booking successful"
      document.location.replace('/profile');
      
    } else {
      alert('Please enter all fields!');
    }
  }
};

document
  .querySelector('.booking')
  .addEventListener('submit', newFormHandler);

