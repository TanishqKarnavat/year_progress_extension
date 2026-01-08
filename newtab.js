function calculateYearProgress() {
  const now = new Date();
  const year = now.getFullYear();

  const startOfYear = new Date(year, 0, 1);
  const startOfNextYear = new Date(year + 1, 0, 1);

  const totalMs = startOfNextYear - startOfYear;
  const elapsedMs = now - startOfYear;

  const percentage = (elapsedMs / totalMs) * 100;

  return {
    year: year,
    percentage: percentage.toFixed(2),
  };
}

function updateDisplay() {
  const data = calculateYearProgress();

  document.getElementById("year").textContent = data.year;
  document.getElementById("percentage").textContent = data.percentage + "%";
  document.getElementById("progress").style.width = data.percentage + "%";
}

updateDisplay();
setInterval(updateDisplay, 60000);
