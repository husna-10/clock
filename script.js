function updateDigitalClock() {
    const digitalClock = document.getElementById('digital-clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  function updateAnalogClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // 360 / 12 = 30 degrees/hour
    const minuteDegrees = minutes * 6 + (seconds / 60) * 6; // 360 / 60 = 6 degrees/minute
    const secondDegrees = seconds * 6; // 360 / 60 = 6 degrees/second
  
    hourHand.style.transform = `rotate(${90 + hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${90 + minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${90 + secondDegrees}deg)`;
  }
  
  function updateClocks() {
    updateDigitalClock();
    updateAnalogClock();
  }
  
  // Update the clocks every second
  setInterval(updateClocks, 1000);
  
  // Initialize immediately
  updateClocks();
  