const birthDate = new Date("2006-06-02T20:52:00");

function updateAgeCounter() {
    const now = new Date();
    const difference = now - birthDate;

    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365.25);
    const months = Math.floor((totalDays % 365.25) / 30.4375);
    const days = Math.floor((totalDays % 365.25) % 30.4375);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const ageInYears = `${years} anos`;
    const ageDisplayElement = document.getElementById("age-display");
    if (ageDisplayElement) {
        ageDisplayElement.innerText = ageInYears;
    }

    document.getElementById('count-years').innerText = years;
    document.getElementById('count-months').innerText = months;
    document.getElementById('count-days').innerText = days;
    document.getElementById('count-hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('count-minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('count-seconds').innerText = String(seconds).padStart(2, '0');
}

function updateCourseProgress() {
    const courseStartDate = new Date("2025-02-01T00:00:00");
    const courseEndDate = new Date("2028-12-15T23:59:59");
    const now = new Date();

    const totalDuration = courseEndDate - courseStartDate;
    const elapsedTime = now - courseStartDate;

    let percentage = (elapsedTime / totalDuration) * 100;
    percentage = Math.max(0, Math.min(percentage, 100));

    const progressBarElement = document.getElementById("course-progress-bar");
    const percentageTextElement = document.getElementById("progress-percentage");

    if (progressBarElement && percentageTextElement) {
        progressBarElement.style.height = `${percentage}%`;
        percentageTextElement.innerText = `Progresso: ${percentage.toFixed(6)}%`;
    }
}

setInterval(() => {
    updateAgeCounter();
    updateCourseProgress();
}, 1000);

updateAgeCounter();
updateCourseProgress();

document.addEventListener('DOMContentLoaded', () => {
    const scrollableElements = document.querySelectorAll('.left-column, .right-column');
    let scrollTimer = null;

    scrollableElements.forEach(element => {
        element.addEventListener('scroll', () => {
            element.classList.add('scrolling');

            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(() => {
                element.classList.remove('scrolling');
            }, 1500);
        });
    });
});