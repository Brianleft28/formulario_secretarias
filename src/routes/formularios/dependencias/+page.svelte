<script>
  import ButtonOutline from "../../../components/FormularioComponent/ButtonOutline.svelte";
  import CardLabel from "../../../components/FormularioComponent/CardLabel.svelte";
  import Input from "../../../components/FormularioComponent/Input.svelte";
  import Select from "../../../components/FormularioComponent/Select.svelte";

  const handleBack = () => {
    console.log("ay");
  };
</script>

<div class="mx-auto">
  <h1>Formulario para carga de dependencias</h1>
  <!-- Admin content -->
  <div class="table-group-divider"></div>
</div>

<div
  class="mt-4 gap-2 py-4 pb-4 container bg-body-tertiary pb-3 justify-content-center mx-auto row shadow-lg"
>
  <!-- DEPENDENCIAS -->
  <CardLabel cols={12}>
    <Input
      label={"Nombre de la dependencia"}
      style={"mt-2"}
      cols={6}
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
        { id: 4, nombre: "Subsecretaria" },
      ]}
      cols={6}
    />
    <!-- Otrro select -->
    <Select
      style={"mt-3"}
      label={"Seleccione la Unidad Ejecutora "}
      data={[
        { id: 1, nombre: "Innovación" },
        { id: 2, nombre: "Privada" },
        { id: 3, nombre: "Promoción Social" },
        { id: 4, nombre: "Economia y Hacienda" },
      ]}
      cols={12}
    />
    <Input
      style={"mt-3"}
      cols={6}
      label={"Correo"}
      placeholder="tusecretaria@correo.com"
    />
    <Input
      style={"mt-3 mb-3"}
      cols={6}
      label={"Teléfono"}
      placeholder="0000-1234"
    />
    <a href="/" class="col-md-6">
      <ButtonOutline
        style={"mt-md-4 col w-full mt-0"}
        text={"Volver"}
        type={"danger"}
        event={handleBack}
        cols={12}
      />
    </a>
    <ButtonOutline
      style={"mt-md-4 mt-0 col w-full"}
      text={"Agregar"}
      event={"default"}
      type={"primary"}
      cols={6}
    />
  </CardLabel>
</div>
