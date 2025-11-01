const monthlyInput = document.getElementById("monthly");
const rateInput = document.getElementById("rate");
const yearsInput = document.getElementById("years");

const monthlyDisplay = document.getElementById("monthlyDisplay");
const rateDisplay = document.getElementById("rateDisplay");
const yearsDisplay = document.getElementById("yearsDisplay");

const totalInvestment = document.getElementById("totalInvestment");
const expectedReturn = document.getElementById("expectedReturn");
const futureValue = document.getElementById("futureValue");

// Live updates
monthlyInput.oninput = () => monthlyDisplay.textContent = `₹ ${monthlyInput.value}`;
rateInput.oninput = () => rateDisplay.textContent = `${rateInput.value}%`;
yearsInput.oninput = () => yearsDisplay.textContent = `${yearsInput.value} Yr`;

function calculateSIP() {
  const P = parseFloat(monthlyInput.value);
  const r = parseFloat(rateInput.value) / 100 / 12;
  const n = parseFloat(yearsInput.value) * 12;

  const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = P * n;
  const returns = fv - invested;

  totalInvestment.textContent = invested.toLocaleString("en-IN");
  expectedReturn.textContent = returns.toLocaleString("en-IN");
  futureValue.textContent = fv.toLocaleString("en-IN");
}
