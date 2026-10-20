// data structure block
const label = ['Red', 'Blue', 'Yellow'];
const datapoints = [
  [12, 19, 3, 5, 3, 30],
  [12, 19, 3, 5, 6, 15],
  [12, 19, 3, 5, 9, 9],
];
const bgc = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'];
const bc = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'];

const colorDatasets = label.map((color, index) => ({
  label: color,
  data: datapoints[index],
  backgroundColor: bgc[index],
  borderColor: bc[index],
}));

// data block
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [colorDatasets[2], colorDatasets[1], colorDatasets[0]],
};

// config block
const config = {
  type: 'bar',
  data,
  options: {
    borderWidth: 1,
    scales: {
      y: { beginAtZero: true },
    },
  },
};

// init render block
const myChart = new Chart(document.getElementById('myChart'), config);
