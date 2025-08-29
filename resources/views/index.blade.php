@extends ('layout.master')

@section ('contenido')

    <section class="section">
        <div class="section-header">
            <h1>Dashboard</h1>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card card-statistic-1">
                <div class="card-icon bg-info">
                    <i class="fas fa-file-excel"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                        <h4>Subir Excel</h4>
                    </div>
                    <div class="d-flex card-body">
                        <input class="btn btn-primary " type="file" id="inputExcel" accept=".xlsx,.xls" />
                        <button class="btn btn-danger mx-2" id="btnEliminar">Sacar Archivo</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card card-statistic-1">
                <div class="card-icon bg-info">
                <i class="fas fa-filter"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                        <h4>Filtra</h4>
                    </div>
                    <div class="card-body mt-2">
                        <select id="filtroModalidad" class="form-control">
                            <option value="" selected disabled>Modalidad</option>
                            <option value="VIRTUAL"  >Virtual</option>
                            <option value="PRECENCIAL"  >Precencial</option>
                        </select>
                    </div>
                    <div class="card-body mt-2">
                        <select id="filtroNombre" class="form-control">
                            <option value="" selected disabled>Nombre Programa</option>
                            <option value="PROGRAMACION DE SOFTWARE ."  >PROGRAMACION DE SOFTWARE</option>
                            <option value="ANALISIS Y DESARROLLO DE SOFTWARE."  >ANALISIS Y DESARROLLO DE SOFTWARE</option>
                            <option value="SISTEMAS TELEINFORMÁTICOS"    >SISTEMAS TELEINFORMÁTICOS</option>
                            <option value="INTEGRACION DE CONTENIDOS DIGITALES."    >INTEGRACION DE CONTENIDOS DIGITALES</option>
                            <option value="PROGRAMACION PARA ANALITICA DE DATOS."    >PROGRAMACION PARA ANALITICA DE DATOS</option>
                            <option value="MANEJO DE INFORMACION PARA SISTEMAS DE GESTION"    >MANEJO DE INFORMACION PARA SISTEMAS DE GESTION</option>
                            <option value="DESARROLLO MULTIMEDIA Y WEB"    >DESARROLLO MULTIMEDIA Y WEB</option>
                            <option value="PROCESAMIENTO DE DATOS PARA MODELOS DE INTELIGENCIA ARTIFICIAL."    >PROCESAMIENTO DE DATOS PARA MODELOS DE INTELIGENCIA ARTIFICIAL</option>
                        </select>
                    </div><div class="card-body mt-2">
                        <select id="filtroNivel" class="form-control">
                            <option value="" selected disabled>Nivel</option>
                            <option value="TECNICO"   >TECNICO</option>
                            <option value="TECNOLOGO"   >TECNOLOGO</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-primary">
                    <i class="far fa-user"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Aprendices</h4>
                    </div>
                    <div class="card-body" id="aprendices">
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-primary">
                    <i class="far fa-user"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Aprendices Masculinos</h4>
                    </div>
                    <div class="card-body" id="aprendicesMasculinos">
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-primary">
                    <i class="far fa-user"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Aprendices Femeninos</h4>
                    </div>
                    <div class="card-body" id="aprendicesFemeninos">
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-primary">
                    <i class="far fa-user"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Aprendices no binarios</h4>
                    </div>
                    <div class="card-body" id="aprendicesNoBinarios">
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-warning">
                    <i class="far fa-file"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Numero de grupos</h4>
                    </div>
                    <div class="card-body" id="grupos">
                        
                    </div>
                </div>
                </div>
            </div>  
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-warning">
                    <i class="far fa-file"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Aprendices activos</h4>
                    </div>
                    <div class="card-body" id="activos">
                        
                    </div>
                </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-warning">
                    <i class="far fa-file"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Virtuales</h4>
                    </div>
                    <div class="card-body" id="virtuales">
                        
                    </div>
                </div>
                </div>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-warning">
                    <i class="far fa-file"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Precenciales</h4>
                    </div>
                    <div class="card-body" id="precenciales">
                        
                    </div>
                </div>
                </div>
            </div>  
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-warning">
                    <i class="far fa-file"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Tecnicos</h4>
                    </div>
                    <div class="card-body" id="tecnicos">
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                <div class="card-icon bg-warning">
                    <i class="far fa-file"></i>
                </div>
                <div class="card-wrap">
                    <div class="card-header">
                    <h4>Tecnologos</h4>
                    </div>
                    <div class="card-body" id="tecnologos">
                        
                    </div>
                </div>
                </div>
            </div>              
        </div>
    </section>

    <script src="{{asset('backend/assets/js/excel.js')}}"></script>

@endsection