"use strict";

var statistics_chart = document.getElementById("graficaUno").getContext('2d');

let datos = JSON.parse(localStorage.getItem('Datos'));

let programacion = 0;
let analisis = 0;
let sistemas = 0;
let integracion = 0;
let programacionAnalitica = 0;
let manejoInformacion = 0;
let desarrolloMultimedia = 0;
let procesamientoIa = 0;

if (localStorage.getItem('Datos')){

  datos.forEach(dato => {
    
    if (dato.NOMBRE_PROGRAMA_FORMACION == "PROGRAMACION DE SOFTWARE ."){

      programacion ++;

    }else if (dato.NOMBRE_PROGRAMA_FORMACION == "ANALISIS Y DESARROLLO DE SOFTWARE."){

      analisis ++;

    } else if (dato.NOMBRE_PROGRAMA_FORMACION == "SISTEMAS TELEINFORMÁTICOS"){

      sistemas ++;

    } else if (dato.NOMBRE_PROGRAMA_FORMACION == "INTEGRACION DE CONTENIDOS DIGITALES."){

      integracion ++;

    } else if (dato.NOMBRE_PROGRAMA_FORMACION == "PROGRAMACION PARA ANALITICA DE DATOS."){

      programacionAnalitica ++;

    } else if (dato.NOMBRE_PROGRAMA_FORMACION == "MANEJO DE INFORMACION PARA SISTEMAS DE GESTION"){

      manejoInformacion ++;

    } else if (dato.NOMBRE_PROGRAMA_FORMACION == "DESARROLLO MULTIMEDIA Y WEB"){

      desarrolloMultimedia ++;

    } else if (dato.NOMBRE_PROGRAMA_FORMACION == "PROCESAMIENTO DE DATOS PARA MODELOS DE INTELIGENCIA ARTIFICIAL"){

      procesamientoIa ++;

    }

  });

}

var myChart = new Chart(statistics_chart, {
  type: 'line',
  data: {
    labels: ["programacion de software", "analisis y desarrollo de software","sistemas teleinformaticos", "integracion de contenidos digitales", "programacion para analitica de datos", "manejo de informacion para sistemas de gestion", "Desarrollo multimedia y web", "procesamiento de datos para modelos de ia"],
    datasets: [{
      label: 'Statistics',
      data: [programacion, analisis, sistemas, integracion, programacionAnalitica, manejoInformacion, desarrolloMultimedia, procesamientoIa],
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