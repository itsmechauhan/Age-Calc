/* Age Calculator + optional live counter */
const calcBtn = document.getElementById('calcBtn');
const toggleLiveBtn = document.getElementById('toggleLiveBtn');
const birthInput = document.getElementById('birthDate');
const resultBox = document.getElementById('result');
let liveInterval = null;

function pad(n){ return n < 10 ? '0'+n : n; }

function calculateAgeNow() {
  const birthVal = birthInput.value;
  if (!birthVal) {
    resultBox.innerHTML = '<p>Please select your birth date.</p>';
    return;
  }

  const dob = new Date(birthVal);
  const now = new Date();

  if (dob > now) {
    resultBox.innerHTML = '<p>Birth date is in the future — please select a valid date.</p>';
    return;
  }

  // Years, months, days
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    // get days of previous month
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Difference in ms
  const diffMs = now - dob;
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const daysTotal = Math.floor(hours / 24);
  const weeks = Math.floor(daysTotal / 7);
  const totalMonths = years * 12 + months;

  resultBox.innerHTML = `
    <p><strong>Your Age:</strong></p>
    <p>Years: <strong>${years}</strong></p>
    <p>Months (total): <strong>${totalMonths}</strong></p>
    <p>Weeks: <strong>${weeks}</strong></p>
    <p>Days (total): <strong>${daysTotal}</strong></p>
    <p>Hours: <strong>${hours}</strong></p>
    <p>Minutes: <strong>${minutes}</strong></p>
    <p>Seconds: <strong>${seconds}</strong></p>
  `;
}

function startLiveCounter() {
  if (liveInterval) return;
  toggleLiveBtn.textContent = 'Stop Live Counter';
  liveInterval = setInterval(calculateAgeNow, 1000);
}

function stopLiveCounter() {
  if (!liveInterval) return;
  clearInterval(liveInterval);
  liveInterval = null;
  toggleLiveBtn.textContent = 'Start Live Counter';
}

calcBtn && calcBtn.addEventListener('click', calculateAgeNow);
toggleLiveBtn && toggleLiveBtn.addEventListener('click', () => {
  if (liveInterval) stopLiveCounter(); else startLiveCounter();
});

// set current year in footer
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
