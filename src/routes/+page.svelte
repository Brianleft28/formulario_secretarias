<script>
  /* Home component */
  import Cards from "../components/Home/Cards.svelte";
</script>

<div
  class="d-flex flex-md-row flex-col gap-md-3 gap-2 justify-content-md-start justify-content-center"
>
  <div class="row gap-3">
    <Cards
      href={"formularios/secretarias"}
      cols="12"
      text={"Formulario"}
      text_2={"SECRETARIAS"}
    />
    <Cards
      cols="12"
      text={"Formulario"}
      text_2={"DEPENDENCIAS"}
      href={"formularios/dependencias"}
    />
  </div>
</div>
