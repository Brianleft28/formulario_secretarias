<script>
  export let cols;
  export let color;
  export let type;
  export let style;
  export let text;
  export let event;
</script>

<div class="col-md-{cols}">
  <button {type} on:click={event} class="btn {style} w-100 btn-outline-{color}"
    >{text}</button
  >
</div>
