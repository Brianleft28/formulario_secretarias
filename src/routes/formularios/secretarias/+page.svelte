<script>
  import ButtonOutline from "../../../components/FormularioComponent/ButtonOutline.svelte";
  import CardLabel from "../../../components/FormularioComponent/CardLabel.svelte";
  import Input from "../../../components/FormularioComponent/Input.svelte";
  import Select from "../../../components/FormularioComponent/Select.svelte";
</script>

<div class="mx-auto">
  <h1>Formulario para carga de secretarias</h1>
  <!-- Admin content -->
  <div class="table-group-divider"></div>
</div>

<div
  class="mt-4 gap-2 py-4 pb-4 container bg-body-tertiary pb-3 justify-content-center mx-auto row shadow-lg"
>
  <!-- div de secretarias -->
  <CardLabel cols={12}>
    <Input
      style={"mt-1"}
      label={"Nombre de secretaria"}
      cols={6}
      placeholder="Nombre de secretaria"
    />
    <Input
      style={"mt-1"}
      label={"Teléfono de secretaria"}
      cols={6}
      placeholder="Télefono"
    />
    <Input
      label={"Correo de secretaria"}
      style={"mt-3"}
      cols={12}
      placeholder={"secretaria@correo.com.ar"}
    />
    <a class="col-md-6" href="/">
      <ButtonOutline
        style={"mt-4"}
        outline={true}
        text={"Volver"}
        type={"danger"}
        cols={12}
      />
    </a>
    <ButtonOutline
      style={"mt-4"}
      text={"Agregar secretaria"}
      type={"primary"}
      cols={6}
    />
  </CardLabel>
</div>
