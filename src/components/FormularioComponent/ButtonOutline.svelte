<script>
  export let cols;
  export let type;
  export let style;
  export let text;
</script>

<div class="col-md-{cols}">
  <button class="btn {style} w-100 btn-{type}">{text}</button>
</div>
