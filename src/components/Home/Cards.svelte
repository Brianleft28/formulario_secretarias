<script>
  export let cols;
  export let text;
  export let text_2;
  export let href;
</script>

<a
  href="/{href}"
  class="custom-hover text-center bg-body-tertiary flex flex-col justify-content-center gap-4 col-md-{cols} card shadow-lg"
>
  <div class="mx-auto">
    <span>{text}</span>
    <span>{text_2}</span>
  </div>
</a>

<style>
  .card {
    max-width: 140px;
    min-height: 140px;
    padding: 10px;
    border-radius: 10px;
  }
  .card span {
    font-size: 1rem;
    font-weight: 700;
  }
  .custom-hover:hover {
    background-color: #343a40 !important;
    cursor: pointer;
    color: #f2f2f2;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
    /* Cambia el color de fondo al hacer hover */
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    font-weight: bold;
  }
</style>
