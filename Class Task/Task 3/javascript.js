//for the widget
const currentTimeElement = document.getElementById('current-time');
const currentDateElement = document.getElementById('current-date');

function updateStatistics() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  
  currentTimeElement.textContent = time;
  currentDateElement.textContent = date;
}

updateStatistics();
setInterval(updateStatistics, 1000); // update every 1 second