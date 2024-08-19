<script>
  import ButtonOutline from "../../../components/FormularioComponent/ButtonOutline.svelte";
  import CardLabel from "../../../components/FormularioComponent/CardLabel.svelte";
  import Input from "../../../components/FormularioComponent/Input.svelte";
  import Select from "../../../components/FormularioComponent/Select.svelte";
  import { getSecretarias, createSecretaria } from "$lib/secretarias";

  let nombre = "";
  let telefono = "";
  let correo = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim() || !correo.trim()) {
      alert("Por favor, complete todos los campos");
      return;
    }

    if (telefono.length < 8) {
      alert("El teléfono debe tener al menos 8 dígitos");
      return;
    }
    if (!correo.includes("@")) {
      alert("Introduzca una dirección válida");
      return;
    }
    try {
      const response = await createSecretaria({ nombre, telefono, correo });
      console.log(response);
      alert("Secretaria creada con éxito");
    } catch (error) {
      console.error(error);
    }
  };
</script>

<div class="mx-auto">
  <h1>Formulario para carga de secretarias</h1>
  <!-- Admin content -->
  <div class="table-group-divider"></div>
</div>

<div
  class="mt-2 py-4 pb-4 container bg-body-tertiary pb-3 justify-content-center mx-auto row shadow-lg"
>
  <!-- div de secretarias -->
  <CardLabel cols={12}>
    <Input
      style={"mt-1"}
      label={"Nombre de secretaria"}
      cols={6}
      bind:valor={nombre}
      placeholder="Nombre de secretaria"
    />
    <Input
      style={"mt-1"}
      bind:valor={telefono}
      label={"Teléfono de secretaria"}
      cols={6}
      placeholder="Télefono"
    />
    <Input
      label={"Correo de secretaria"}
      style={"mt-3"}
      bind:valor={correo}
      cols={12}
      placeholder={"secretaria@correo.com.ar"}
    />
    <a class="col-md-6" href="/">
      <ButtonOutline
        event={""}
        style={"mt-5"}
        text={"Volver"}
        color={"dark"}
        type={"button"}
        cols={12}
      />
    </a>
    <ButtonOutline
      style={"mt-5"}
      event={handleSubmit}
      type={"submit"}
      text={"Agregar secretaria"}
      color={"dark"}
      cols={6}
    />
  </CardLabel>
</div>
