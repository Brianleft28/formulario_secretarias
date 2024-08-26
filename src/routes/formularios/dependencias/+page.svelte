<script lang="ts">
  import ButtonOutline from "../../../components/FormularioComponent/ButtonOutline.svelte";
  import CardLabel from "../../../components/FormularioComponent/CardLabel.svelte";
  import Input from "../../../components/FormularioComponent/Input.svelte";
  import Select from "../../../components/FormularioComponent/Select.svelte";
  import { SecretariaService } from "$lib/secretarias";
  import { Coordinaciones } from "$lib/dependencias/coordinaciones";
  import { onMount } from "svelte";
  import { Direcciones } from "$lib/dependencias/direcciones";
  import { Jefaturas } from "$lib/dependencias/jefaturas";
  import { Subsecretarias } from "$lib/dependencias/subsecretarias";
  import { Dependencias } from "$lib/dependencias";

  const secretariaService = new SecretariaService();

  let secretarias: [] = [];

  let nombre = "";
  let dependencia = "";
  let unidadEjecutora = "";
  let correo = "";
  let telefono = "";

  onMount(() => {
    secretariaService.getSecretarias().then((res) => {
      console.log(res);
      secretarias = res;
    });
  });

  const handleBack = () => {
    console.log("ay");
  };
  //
  function getDependenciaInstance(dependencia: string) {
    switch (dependencia) {
      case "coordinaciones":
        return new Coordinaciones();
      case "direcciones":
        return new Direcciones();
      case "jefaturas":
        return new Jefaturas();
      case "subsecretaria":
        return new Subsecretarias();
      default:
        throw new Error("Dependencia no válida");
    }
  }

  const handleSubmit = async () => {
    console.log("Iniciando validaciones...");
    try {
      Dependencias.validate(
        nombre,
        dependencia,
        unidadEjecutora,
        telefono,
        correo
      );
      console.log("Validaciones completando. Creando dependencia...");

      const dependenciaInstance = getDependenciaInstance(dependencia);
      const response = await dependenciaInstance.create({
        nombre,
        secretarias_id: unidadEjecutora,
        correo,
      });
      console.log("Dependencia creada exitosamente:", response);
    } catch (error) {
      console.error("Error en handleSubmit:", error);
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert("Error desconocido");
      }
    }
  };
</script>

<div class="mx-auto">
  <h1>Formulario para carga de dependencias</h1>
  <!-- Admin content -->
  <div class="table-group-divider"></div>
</div>

<div
  class="mt-2 py-4 pb-4 container bg-body-tertiary pb-3 justify-content-center mx-auto row shadow-lg"
>
  <!-- DEPENDENCIAS -->
  <CardLabel cols={12}>
    <Input
      label={"Nombre de la dependencia"}
      style={"mt-2"}
      bind:valor={nombre}
      cols={6}
      placeholder="Nombre de la dirección, coordinación o subsecretaria"
    />
    <!-- Select -->
    <Select
      style={"mt-2"}
      label={"Seleccione el tipo de dependencia"}
      bind:valor={dependencia}
      data={[
        { id: "coordinaciones", nombre: "coordinaciones" },
        { id: "direcciones", nombre: "direcciones" },
        { id: "jefaturas", nombre: "jefaturas" },
        { id: "subsecretarias", nombre: "subsecretarias" },
      ]}
      cols={6}
    />
    <!-- Otrro select -->
    <Select
      style={"mt-3"}
      bind:valor={unidadEjecutora}
      label={"Seleccione la Unidad Ejecutora "}
      data={secretarias}
      cols={12}
    />
    <Input
      style={"mt-3"}
      bind:valor={correo}
      cols={6}
      label={"Correo"}
      placeholder="tusecretaria@correo.com"
    />
    <Input
      style={"mt-3 mb-3"}
      cols={6}
      bind:valor={telefono}
      label={"Teléfono"}
      placeholder="0000-1234"
    />
    <a href="/" class="col-md-6">
      <ButtonOutline
        type={"button"}
        style={"mt-md-4 col w-full mt-0"}
        text={"Volver"}
        color={"dark"}
        event={handleBack}
        cols={12}
      />
    </a>
    <ButtonOutline
      type={"submit"}
      style={"mt-md-4 mt-0 col w-full"}
      text={"Agregar"}
      event={handleSubmit}
      color={"dark"}
      cols={6}
    />
  </CardLabel>
</div>
