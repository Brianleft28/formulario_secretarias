<script lang="ts">
  import ButtonOutline from "../../../components/FormularioComponent/ButtonOutline.svelte";
  import CardLabel from "../../../components/FormularioComponent/CardLabel.svelte";
  import Input from "../../../components/FormularioComponent/Input.svelte";
  import { SecretariaService } from "$lib/secretarias";

  const secretariaServices = new SecretariaService();

  let nombre = "";
  let telefono: string = "";
  let correo = "";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const validate = SecretariaService.validate(nombre, telefono, correo);
      alert(validate);

      const response = await secretariaServices.createSecretaria({
        nombre,
        telefono,
        correo,
      });

      alert("Secretaria creada con éxito");
      return response;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
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
