<template>
  <div
    class="modal fade xx"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
        </div>
        <div class="modal-body">
          <Form @submit="submit" class="d-flex flex-column">
            <Field
              class="form-control my-2"
              name="email"
              type="email"
              rules="required|email"
              v-model="credentials.email"
            />
            <ErrorMessage class="text-danger my-2" name="email" />
            <Field
              class="form-control my-2"
              name="password"
              type="password"
              rules="required"
              v-model="credentials.password"
            />
            <ErrorMessage class="text-danger my-2" name="password" />
            <button
              class="btn btn-sm btn-success w-25 my-2"
              type="submit"
              :disabled="isAuthLoading"
            >
              Login
            </button>
          </Form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="hide"
            :disabled="isAuthLoading"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="showRegister"
            :disabled="isAuthLoading"
          >
            register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import { Modal } from "bootstrap";

export default defineComponent({
  name: "Login",
  data() {
    return {
      modalInstance: null,
      credentials: {
        email: null as null | string,
        password: null as null | string,
      },
    };
  },
  computed: { ...mapGetters(["isAuthLoading"]) },
  methods: {
    ...mapActions(["login", 'getProducts']),
    submit() {
      if (this.login(this.credentials)) {
        this.modalInstance.hide();
        this.$router.go("/");
      }
    },
    hide() {
      this.modalInstance.hide();
      this.$store.commit("AUTHENTICATE_USER");
    },
    showRegister() {
      this.hide();
      this.$emit("showRegister");
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.modalInstance = new Modal(document.getElementById("loginModal"));
      this.modalInstance.show();
    });
  },
});
</script>

<style>
</style>