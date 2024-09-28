const endDate = "30 January 2025 02:39 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // convert milliseconds to seconds
    if (diff < 0) return;

    // Calculate time components
    inputs[0].value = Math.floor(diff / 3600 / 24); // Days
    inputs[1].value = Math.floor(diff / 3600) % 24; // Hours
    inputs[2].value = Math.floor(diff / 60) % 60; // Minutes
    inputs[3].value = Math.floor(diff) % 60; // Seconds
}

// Initial call
clock();

// Update every second
setInterval(clock, 1000);

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('light-mode')) {
        toggleBtn.innerText = 'Switch to Dark Mode';
    } else {
        toggleBtn.innerText = 'Switch to Light Mode';
    }
});
