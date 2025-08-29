
var statistics_chart = document.getElementById("graficaDos").getContext('2d');

let modalidad = JSON.parse(localStorage.getItem('modalidad'))

var myChart = new Chart(statistics_chart, {
  type: 'line',
  data: {
    labels: ["Virtual", "Precencial"],
    datasets: [{
      label: 'Statistics',
      data: [modalidad.virtual, modalidad.precencial],
      borderWidth: 5,
      borderColor: '#6777ef',
      backgroundColor: 'transparent',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#6777ef',
      pointRadius: 4
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: false, 
          maxRotation: 45, 
          minRotation: 45  
        }
      }],
      yAxes: [{
        gridLines: { display: false, drawBorder: false },
        ticks: { stepSize: 5 }
      }]
    }
  }
});

$('#visitorMap').vectorMap(
{
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: .8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: .8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
  pins: {
    id: '<div class="jqvmap-circle"></div>',
    my: '<div class="jqvmap-circle"></div>',
    th: '<div class="jqvmap-circle"></div>',
    sy: '<div class="jqvmap-circle"></div>',
    eg: '<div class="jqvmap-circle"></div>',
    ae: '<div class="jqvmap-circle"></div>',
    nz: '<div class="jqvmap-circle"></div>',
    tl: '<div class="jqvmap-circle"></div>',
    ng: '<div class="jqvmap-circle"></div>',
    si: '<div class="jqvmap-circle"></div>',
    pa: '<div class="jqvmap-circle"></div>',
    au: '<div class="jqvmap-circle"></div>',
    ca: '<div class="jqvmap-circle"></div>',
    tr: '<div class="jqvmap-circle"></div>',
  },
});