const electron1 = document.getElementById('electron-1');
const electron2 = document.getElementById('electron-2');

// Create an animation for the second electron
setInterval(() => {
    electron1.style.transform = `rotate(${(parseFloat(getComputedStyle(electron1).transform.split(',')[1]) + 1)}deg)`;
    electron2.style.transform = `rotate(${(parseFloat(getComputedStyle(electron2).transform.split(',')[1]) + 1)}deg)`;
}, 100);
