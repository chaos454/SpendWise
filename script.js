const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment'];
const amounts    = [4200, 1800, 2500, 1850, 1200];

const colors = ['#6c63ff', '#4d8dff', '#7ddaa8', '#ffa94d', '#ff7b7b'];

const chart = new Chart(document.getElementById('spendChart'), {
  type: 'doughnut',
  data: {
    labels: categories,
    datasets: [{
      data: amounts,
      backgroundColor: colors,
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',                      // bigger = thinner ring
    plugins: { legend: { display: false } }
  }
});

function updateTotal() {
  const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
  document.getElementById('totalSpent').textContent =
    '₹ ' + total.toLocaleString('en-IN');
}
updateTotal();

// Call this whenever your data changes
function updateChart(newCategories, newAmounts) {
  chart.data.labels = newCategories;
  chart.data.datasets[0].data = newAmounts;
  chart.update();
  updateTotal();
}