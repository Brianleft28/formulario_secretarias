<script>
</script>

<div>
    <h1>Formulario para carga de secretarias y/o dependencias</h1>
    <!-- Admin content -->
    <div class="table-group-divider"></div>
</div>
<div class="mt-3 gap-5 container align-items-start  row">
    <!-- div de secretarias -->
    <div class="row align-items-start gap-3 col-md-6 p-md-4 p-3 bg-body-tertiary rounded-3">
            <h4>SECRETARIAS</h4>
            <div class="col-md-12">
                <input    
                class="form-control bg-body-secondary"
                placeholder="Nombre de secretaria"
                id="floatingTextarea"
                />
            </div>
        <div class="col-md-12">
            <button class="btn w-100 btn-outline-dark">
                Guardar secretaria
            </button>
        </div>
    </div>
    <div class="row col-md-6 p-md-4 p-3 bg-body-tertiary rounded-3">
        <h4>Dependencia</h4>
        <div class="col-md-12 h-auto">
            <input    
            class="form-control bg-body-secondary"
            placeholder="Nombre de la dirección, coordinación o subsecretaria"
            id="floatingTextarea"
            />
        </div>
        <!-- este -->
        <div class="col-md-12 mt-3 h-auto">
            <label for="secretaria" 
            class="form-label">Seleccione el tipo de dependencia</label>
            <select
            class="form-select bg-body-secondary text-body-secondary">
                <option value={'direccion'}>Dirección</option>
                <option value={'coordinacion'}>Coordinación</option>
                <option value={'subsecretaria'}>Subsecretaria</option>
        </div>
        <div class="col-md-12 mt-3 h-auto">
        <button class="btn w-100 btn-outline-dark">
            Guardar 
        </button>
    </div>

    </div>


    <!-- div de direcciones, subsecretarias y coordinaciones -->
  
</div>