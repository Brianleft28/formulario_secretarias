<script>
  export let data;
  export let cols;
  export let label;
  export let style;
</script>

<div class="col-md-{cols} {style} h-auto">
  <label for="secretaria" class="form-label">{label}</label>
  <select class="form-select shadow-md bg-body-secondary text-body-secondary">
    {#each data as item}
      <option value={item.id}>{item.nombre}</option>
    {/each}
  </select>
</div>
