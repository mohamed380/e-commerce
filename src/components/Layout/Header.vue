<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item" v-if="authUser">
            <RouterLink to="/cart" class="nav-link">cart</RouterLink>
          </li>
          <li class="nav-item d-flex align-center" v-if="authUser">
            <button @click="logoutHandler" class="btn btn-sm btn-secondary">
              logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  computed: { ...mapGetters(["authUser"]) },
  methods: {
    ...mapActions(["logout", "getProducts"]),
    logoutHandler() {
      this.logout();
      this.$router.go("/");
    },
  },
});
</script>

<style>
</style>