const input = document.getElementById('inputExcel');

let datos = localStorage.getItem('Datos') ? JSON.parse(localStorage.getItem('Datos')) : [];

const aprendices = document.getElementById('aprendices');
const aprendicesMasculinos = document.getElementById('aprendicesMasculinos');
const aprendicesFemeninos = document.getElementById('aprendicesFemeninos');
const aprendicesNoBinarios = document.getElementById('aprendicesNoBinarios');
const grupos = document.getElementById('grupos');
const precenciales = document.getElementById('precenciales');
const virtuales = document.getElementById('virtuales');
const tecnicos = document.getElementById('tecnicos');
const tecnologos = document.getElementById('tecnologos');
const activos = document.getElementById('activos');

const selectModalidad = document.getElementById('filtroModalidad');
const selectNombre = document.getElementById('filtroNombre');
const selectNivel = document.getElementById('filtroNivel');

selectModalidad.addEventListener('input', ()=> cambioFiltro(1));
selectNombre.addEventListener('input', ()=> cambioFiltro(2));
selectNivel.addEventListener('input', ()=> cambioFiltro(3));

console.log(datos); 

let filtroModalidad = "";

let filtroNivel = "";

let filtroNombre = "";

let cambioFiltroModalidad = false;
let cambioFiltroNombre = false;
let cambioFiltroNivel = false;


let totalAprendicesActivos = 0;
let totalAprendicesFemeninos = 0;
let totalAprendicesMasculinos = 0;
let totalAprendicesNoBinarios = 0;
let precencial = 0;
let virtual = 0;
let totalAprendices = 0;
let totalGrupos = 0;
let totalTecnicos = 0;
let totalTecnologos = 0;

let validarCalculo = true;

let modalidad = {};
let nivel = {};

CalcularDatos()

function cambioFiltro(filtro){

    if(filtro == 1){

        filtroModalidad = selectModalidad.value;
        cambioFiltroModalidad = true;

    }

    if(filtro == 2){

        filtroNombre = selectNombre.value;
        cambioFiltroNombre = true;

    }
    
    if(filtro == 3){

        filtroNivel = selectNivel.value;
        cambioFiltroNivel = true;

    }

    CalcularDatos();

}



function CalcularDatos(){

    

    totalAprendicesFemeninos = 0;
    totalAprendicesMasculinos = 0;
    totalAprendicesNoBinarios = 0;
    precencial = 0;
    virtual = 0;
    totalAprendices = 0;
    totalGrupos = 0;    
    totalAprendicesActivos = 0;
    totalTecnicos = 0;
    totalTecnologos = 0;


    datos.forEach(dato => {
        
        validarCalculo = true;

        if (cambioFiltroNombre == true && filtroNombre != dato.NOMBRE_PROGRAMA_FORMACION){

            validarCalculo = false

        }

        if (cambioFiltroModalidad == true && filtroModalidad != dato.MODALIDAD_FORMACION){

            validarCalculo = false

        }

        if (cambioFiltroNivel == true && filtroNivel != dato.NIVEL_FORMACION){

            validarCalculo = false

        }

        if(validarCalculo == true){

            if (dato.NIVEL_FORMACION=="TÉCNICO"){

            totalTecnicos ++;

            } else if (dato.NIVEL_FORMACION=="TECNÓLOGO"){

                totalTecnologos ++;

            }

            if (dato.MODALIDAD_FORMACION=="PRESENCIAL"){

                precencial ++;

            } else if (dato.MODALIDAD_FORMACION=="VIRTUAL"){

                virtual ++;

            }

            totalGrupos ++;
            totalAprendicesMasculinos += dato.TOTAL_APRENDICES_MASCULINOS;
            totalAprendicesFemeninos += dato.TOTAL_APRENDICES_FEMENINOS;
            totalAprendicesNoBinarios += dato.TOTAL_APRENDICES_NOBINARIO;
            totalAprendicesActivos += dato.TOTAL_APRENDICES_ACTIVOS;
            totalAprendices += dato.TOTAL_APRENDICES;

        }
        

        



    });

    modalidad = {

        virtual:virtual,
        precencial:precencial

    }

    nivel = {

        tecnicos:totalTecnicos,
        tecnologos:totalTecnologos

    }

    localStorage.setItem('modalidad', JSON.stringify(modalidad));

    localStorage.setItem('nivel', JSON.stringify(nivel));

    imprimirDatos();

}

function imprimirDatos(){


    aprendices.textContent = totalAprendices;
    aprendicesMasculinos.textContent = totalAprendicesMasculinos;
    aprendicesFemeninos.textContent = totalAprendicesFemeninos;
    aprendicesNoBinarios.textContent = totalAprendicesNoBinarios;
    activos.textContent = totalAprendicesActivos;       
    virtuales.textContent = virtual;
    grupos.textContent = totalGrupos;
    virtuales.textContent = virtual;
    precenciales.textContent = precencial;
    tecnicos.textContent = totalTecnicos;
    tecnologos.textContent = totalTecnologos;

}

input.addEventListener('input', ()=>{

    let archivoExcel = input.files[0];

    const lector = new FileReader();
    lector.readAsArrayBuffer(archivoExcel);
    lector.onload = function(e) {

        const workbook = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const datos = XLSX.utils.sheet_to_json(sheet);
        

        localStorage.setItem('Datos', JSON.stringify(datos));

    };

    location.reload();

    CalcularDatos();

})

const eliminarArchivo = document.getElementById('btnEliminar');
eliminarArchivo.addEventListener('click', ()=>{

    localStorage.clear();

    location.reload();

})