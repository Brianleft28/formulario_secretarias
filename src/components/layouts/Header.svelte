<!-- Navbar -->
<script lang="ts">
  let activeLink: string = "";
  let theme: string = "dark";

  const themeToggle = () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", theme);
    console.log(theme);
  };

  function handleActive(id: string) {
    activeLink = id;
    console.log(activeLink);
  }
</script>

<nav class="navbar fixed-top bg-dark" style="padding: 0.5rem">
  <!-- Div del contenido del navbar -->
  <div class="container mx-sm-2 mx-md-5 mx-0">
    <!-- Logo -->
    <div class="d-flex img align-items-center">
      <a href="/">
        <img
          src="/img/brand.png"
          class="navbar-brand"
          style="width: 60px;"
          alt="logo de Municipilidad De Ituzaingo"
        />
      </a>
    </div>
    <!-- Boton del aside -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-list text-white"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
    <!-- Aside -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <!-- Div del header del aside -->
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
        <button
          type="button"
          class="btn btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body bg-body-tertiary">
        <!-- Div del contenido del aside (menú) -->
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a
              class="nav-link text-body-secondary{activeLink === 'home'
                ? 'active'
                : ''}"
              aria-current="page"
              on:click={() => {
                handleActive("home");
              }}
              href="/">Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-body-secondary{activeLink === 'correo'
                ? 'active'
                : ''}"
              aria-current="page"
              on:click={() => {
                handleActive("correo");
              }}
              href="/correos">correos</a
            >
          </li>
        </ul>
        <div class="mt-4 nav-item">
          <button class=" btn btn-outline-primary" on:click={themeToggle}
            >Cambiar tema</button
          >
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
</style>
