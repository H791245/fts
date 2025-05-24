let total = 0;

function addSteps() {
  const input = document.getElementById("stepsInput").value;
  total += parseInt(input) || 0;
  document.getElementById("totalSteps").innerText = "Total Steps: " + total;
}
