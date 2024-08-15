<script>
  import InputWrapper from "../common/InputWrapper.svelte";
  import Input from "../features/Input.svelte";
</script>

<div class="">
  <InputWrapper titulo={"Razon Social"}>
    <div class="row">
      <Input nombre={"Razon Social"} cols={6} />
      <Input nombre={"Documento"} cols={6} />
      <Input nombre={"Nombre y Apellido"} cols={6} />
      <Input nombre={"Telefono"} cols={6} />
      <Input nombre={"Email"} cols={6} />
    </div>
  </InputWrapper>

  <h3 class="mb-3">DATOS DEL COMERCIO O INDUSTRIA</h3>
  <div class="row">
    <div class="col-md-6">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre y Apellido"
        />
        <label for="nombre">Direccion</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="documento"
          placeholder="Numero de documento"
        />
        <label for="documento">Numero</label>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre y Apellido"
        />
        <label for="nombre">Nombre fantasia</label>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre y Apellido"
        />
        <label for="nombre">Rubros</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre y Apellido"
        />
        <label for="nombre">Barrio</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre y Apellido"
        />
        <label for="nombre">Manzana</label>
      </div>
    </div>
  </div>

  <h3>HABILITACION</h3>
  <!--checks-->
  <div class="row">
    <div class="col-3">Comercio o industria</div>
    <div class="col-3"></div>
    <div class="col-3"></div>
    <div class="col-3">Numero</div>

    <div class="col-2 form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1">
        Definitiva
      </label>
    </div>
    <div class="col-4">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>
    <div class="col-6">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>

    <div class="col-2 form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Provisoria
      </label>
    </div>
    <div class="col-4">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>
    <div class="col-6">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>

    <div class="col-2 form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault3"
      />
      <label class="form-check-label" for="flexRadioDefault3">
        Inicio de tramite
      </label>
    </div>
    <div class="col-4">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>
    <div class="col-6">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>

    <div class="col-2 form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault3"
      />
      <label class="form-check-label" for="flexRadioDefault3">
        Sin habilitacion
      </label>
    </div>
    <div class="col-4">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>
    <div class="col-6">
      <input
        type="text"
        class="form-control form-floating mb-3"
        id="fechaDefinitiva"
        placeholder=""
      />
    </div>
  </div>

  <!--Luego de los check-->

  <div class="row">
    <div class="input-group mb-3">
      <span class="col-2 p-2" id="inputGroup-sizing-default"
        >Fecha de habilitacion</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <div class="input-group mb-3">
      <span class="col-2 p-2" id="inputGroup-sizing-default"
        >Cantidad de empleados</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <div class="input-group mb-3">
      <span class="col-2 p-2" id="inputGroup-sizing-default"
        >Residentes de Ituzaingó</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>

    <div class="row">
      <div class="col-6">
        <div class="input-group mb-3">
          <span class="col-4 p-2" id="inputGroup-sizing-default"
            >Metros cuadrados</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div class="col-4">CAA en caso de industria</div>
      <div class="col-1">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> Si </label>
      </div>
      <div class="col-1">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> No </label>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row pb-2">
      <div class="col-6">Mesas y sillas en via pública</div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> Si </label>
      </div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> No </label>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row pb-2">
      <div class="col-6">¿Tiene permiso?</div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> Si </label>
      </div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> No </label>
      </div>
    </div>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default"
      >Fecha de inicio de actividades</span
    >
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    />
  </div>

  <div class="container">
    <div class="row pb-2">
      <div class="col-3">El local</div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> Propio </label>
      </div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3">
          Alquila
        </label>
      </div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3">
          Comodato
        </label>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row align-items-start">
      <div class="col-3">¿Pudo censar?</div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> Si </label>
      </div>
      <div class="col-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3"> No </label>
      </div>
    </div>
  </div>
</div>

<footer class="container p-4 m-4 blockquote-footer">
  <div class="row">
    <div class="col-md-4 col-12 mb-3 mb-md-0">
      <h5>Contacto</h5>
      <p>Teléfono: XXX-XXX-XXXX</p>
      <p>Email: info@example.com</p>
    </div>
    <div class="col-md-4 col-12 mb-3 mb-md-0">
      <h5>Descripción</h5>
      <p>Secretaría de Gobierno, Seguridad y Justicia</p>
      <p>Dirección de Habilitaciones</p>
    </div>
    <div class="col-md-4 col-12 text-center">
      <img src="img/logo.png" alt="Imagen" class="img-fluid" />
    </div>
  </div>
</footer>

<!-- COMPONENTES NUEVOS -->
<div class="container"></div>
