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
  class="mt-3 gap-5 container align-items-start justify-content-center mx-auto row"
>
  <!-- DEPENDENCIAS -->
  <CardLabel>
    <h4>Dependencia</h4>
    <Input
      style={""}
      cols={12}
      placeholder="Nombre de la dirección, coordinación o subsecretaria"
    />
    <!-- Select -->
    <Select
      style={"mt-2"}
      label={"Seleccione el tipo de dependencia"}
      data={[
        { id: 1, nombre: "Coordinación" },
        { id: 2, nombre: "Dirección" },
        { id: 3, nombre: "Jefatura" },
        { id: 4, nombre: "Coordinación" },
      ]}
      cols={12}
    />
    <!-- Otrro select -->
    <Select
      style={"mt-1"}
      label={"Seleccione la Unidad Ejecutora de la dependencia"}
      data={[
        { id: 1, nombre: "Innovación" },
        { id: 2, nombre: "Privada" },
        { id: 3, nombre: "Promoción Social" },
        { id: 4, nombre: "Economia y Hacienda" },
      ]}
      cols={12}
    />
    <Input
      style={"mt-2"}
      cols={12}
      placeholder="Nombre de la secretaria a la que pertenece"
    />
    <ButtonOutline
      style={"mt-3"}
      text={"Guardar dependencia"}
      type={"dark"}
      cols={12}
    />
  </CardLabel>

  <!-- div de direcciones, subsecretarias y coordinaciones -->
</div>
