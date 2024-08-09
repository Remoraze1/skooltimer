function updateTimer() {
    const targetTime = new Date();
    targetTime.setHours(15, 15, 0); // Set the target time to 3:15 PM
    targetTime.setMinutes(targetTime.getMinutes() + targetTime.getTimezoneOffset() + 570); // Convert to ACST (UTC+9:30)

    const now = new Date();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
        document.getElementById('timer').textContent = "School's out!";
        clearInterval(interval);
    } else {
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);
        
        document.getElementById('timer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

const interval = setInterval(updateTimer, 1000);
