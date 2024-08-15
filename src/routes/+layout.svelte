<script>
  import Header from "../components/layouts/Header.svelte";
</script>

<Header />
<div class="container">
  <slot />
</div>

<style>
  .container {
    margin-top: 100px;
  }
</style>
