<script>
  export let cols;
  export let text;
  export let text_2;
  export let href;
</script>

<div
  class="custom-hover bg-body-tertiary p-4+ flex flex-col justify-content-center gap-4 align-items-center col-md-{cols} card shadow-lg"
>
  <a href="/{href}" class="nav-item mx-auto">
    <span>{text}</span>
    <span>{text_2}</span>
  </a>
</div>

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
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
    /* Cambia el color de fondo al hacer hover */
  }
</style>
