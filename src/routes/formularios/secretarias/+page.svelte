<script>
  import ButtonOutline from "../../../components/FormularioComponent/ButtonOutline.svelte";
  import CardLabel from "../../../components/FormularioComponent/CardLabel.svelte";
  import Input from "../../../components/FormularioComponent/Input.svelte";
  import Select from "../../../components/FormularioComponent/Select.svelte";
</script>

<div class="mx-auto">
  <h1>Formulario para carga de secretarias y/o dependencias</h1>
  <!-- Admin content -->
  <div class="table-group-divider"></div>
</div>

<div
  class="mt-3 gap-2 container bg-body-tertiary pb-3 justify-content-center mx-auto row"
>
  <h4 class="mt-3 text-center">SECRETARIAS</h4>
  <!-- div de secretarias -->
  <CardLabel cols={12}>
    <Input style={"mt-1"} cols={6} placeholder="Nombre de secretaria" />
    <Input style={"mt-1"} cols={6} placeholder="Télefono" />
    <Input style={"mt-3"} cols={12} placeholder={"secretaria@correo.com.ar"} />
    <ButtonOutline
      style={"mt-4"}
      outline={true}
      text={"Volver"}
      type={"danger"}
      cols={6}
    />
    <ButtonOutline
      style={"mt-4"}
      text={"Agregar secretaria"}
      type={"primary"}
      cols={6}
    />
  </CardLabel>
</div>
<div class="mt-4">
  <a href="/" class="nav-item">Volver</a>
</div>
