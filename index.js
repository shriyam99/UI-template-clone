var ctx = document.getElementById("myChart");
var chart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa
      }
    ]
  }
});