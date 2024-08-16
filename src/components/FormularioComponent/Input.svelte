<script>
  export let cols;
  export let placeholder;
  export let style;
  export let label;
</script>

<div class="col-md-{cols} {style}">
  <label for="secretaria" class="form-label">{label}</label>
  <input
    class="form-control shadow-lg bg-body-secondary"
    {placeholder}
    id="floatingTextarea"
  />
</div>
