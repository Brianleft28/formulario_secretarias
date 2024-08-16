<script>
  /* Home component */
  import Cards from "../components/Home/Cards.svelte";
</script>

<div class="row justify-content-center align-items-center">
  <div
    class="row gap-3 col-md-12 col justify-content-center align-items-center"
  >
    <div class="col-md-2">
      <Cards
        href={"formularios/secretarias"}
        cols="12"
        text={"Formulario"}
        text_2={"SECRETARIAS"}
      />
    </div>
    <div class="col-md-2">
      <Cards
        cols="12"
        text={"Formulario"}
        text_2={"DEPENDENCIA"}
        href={"formularios/dependencias"}
      />
    </div>
  </div>
</div>
