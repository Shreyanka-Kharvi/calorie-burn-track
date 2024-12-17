const MET_VALUES = {
  running: 0.1,
  cycling: 0.08,
  walking: 0.05,
};

document.getElementById("calculateBtn").addEventListener("click", () => {
  const activity = document.getElementById("activity").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const duration = parseFloat(document.getElementById("duration").value);

  if (isNaN(weight) || isNaN(duration) || weight <= 0 || duration <= 0) {
    document.getElementById("result").textContent = "Please enter valid inputs!";
    return;
  }

  const calorieBurnRate = MET_VALUES[activity];
  const caloriesBurned = calorieBurnRate * weight * duration;

  document.getElementById("result").textContent = 
    You burned approximately ${caloriesBurned.toFixed(2)} calories.;
});
