<script>
  import Header from "../components/layouts/Header.svelte";
</script>

<Header />
<div class="container mx-auto">
  <slot />
</div>

<style>
  .container {
    margin-top: 125px;
  }
</style>
