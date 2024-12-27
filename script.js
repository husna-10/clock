function updateDigitalClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  function updateAnalogClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    const hourDeg = (hours + minutes / 60) * 30; // 360° / 12 = 30° per hour
    const minuteDeg = (minutes + seconds / 60) * 6; // 360° / 60 = 6° per minute
    const secondDeg = seconds * 6; // 360° / 60 = 6° per second
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
  
  function updateClocks() {
    updateDigitalClock();
    updateAnalogClock();
  }
  
  // Update every second
  setInterval(updateClocks, 1000);
  updateClocks(); // Initialize immediately
  