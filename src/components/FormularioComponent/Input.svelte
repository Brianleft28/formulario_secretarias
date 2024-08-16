<script>
  export let cols;
  export let placeholder;
  export let style;
</script>

<div class="col-md-{cols} {style}">
  <input
    class="form-control bg-body-secondary"
    {placeholder}
    id="floatingTextarea"
  />
</div>
