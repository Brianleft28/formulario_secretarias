<script>
  export let cols;
  export let type;
  export let style;
  export let text;
  export let event;
</script>

<div class="col-md-{cols}">
  <button onClick={event} class="btn {style} w-100 btn-outline-{type}"
    >{text}</button
  >
</div>
