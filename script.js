function calculateAge() {
    const birthDateValue = document.getElementById("birthDate").value;

    if (!birthDateValue) {
        document.getElementById("result").innerHTML = "Please select your birth date!";
        return;
    }

    const birthDate = new Date(birthDateValue);
    const now = new Date();

    // Calculate Years, Months, Days (Accurate)
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Difference in milliseconds
    const diffMs = now - birthDate;

    // Convert to various time units
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const weeks = Math.floor(hours / 24 / 7);
    const totalMonths = years * 12 + months;

    document.getElementById("result").innerHTML = `
        <div style="text-align:left;">
            <p><strong>Your Age Breakdown:</strong></p>
            <p>Years: <strong>${years}</strong></p>
            <p>Months: <strong>${totalMonths}</strong></p>
            <p>Weeks: <strong>${weeks}</strong></p>
            <p>Days: <strong>${Math.floor(hours / 24)}</strong></p>
            <p>Hours: <strong>${hours}</strong></p>
            <p>Minutes: <strong>${minutes}</strong></p>
            <p>Seconds: <strong>${seconds}</strong></p>
        </div>
    `;
}
