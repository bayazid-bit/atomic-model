const ping = document.getElementById('ping');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    ping.style.display = 'block';
    ping.style.animation = 'none'; // Reset animation
    void ping.offsetWidth; // Trigger reflow
    ping.style.animation = 'ping-animation 1s linear infinite';

    setTimeout(() => {
        ping.style.display = 'none';
    }, 5000); // Stop ping after 5 seconds
});
