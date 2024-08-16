<script>
  /* Home component */

  import Cards from "../components/Home/Cards.svelte";
</script>

<div
  class="row container gap-4
"
>
  <Cards
    href={"formularios/secretarias"}
    cols="12"
    text={"Formulario"}
    text_2={"SECRETARIAS"}
  />
  <Cards cols="12" text={"Formulario"} text_2={"DEPENDENCIAS"} />
</div>
