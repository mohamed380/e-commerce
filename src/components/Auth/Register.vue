<template>
  <div
    class="modal show"
    id="registerModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Register</h5>
        </div>
        <div class="modal-body">
          <Form @submit="submit" class="d-flex flex-column">
            <Field
              placeholder="full name"
              class="form-control my-2"
              name="fullName"
              type="text"
              v-model="registerData.fullName"
            />
            <ErrorMessage class="text-danger my-2" name="fullName" />
            <Field
              placeholder="email"
              name="email"
              type="email"
              v-model="registerData.email"
              class="form-control my-2"
              rules="email"
            />
            <ErrorMessage class="text-danger my-2" name="email" />
            <Field
              placeholder="password"
              name="password"
              type="password"
              rules="required"
              v-model="registerData.password"
              class="form-control my-2"
            />
            <ErrorMessage class="text-danger my-2" name="password" />
            <Field
              placeholder="password confirmation"
              name="confirmation"
              type="password"
              rules="confirmed:@password"
              class="form-control my-2"
            />
            <ErrorMessage class="text-danger my-2" name="confirmation" />
            <button
              @click="$emit('showRegister')"
              :disabled="isAuthLoading"
              class="btn btn-primary"
            >
              Sign up
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
  name: "Register",
  data() {
    return {
      modalInstance: null,
      registerData: {
        fullName: null as null | string,
        email: null as null | string,
        password: null as null | string,
      },
    };
  },
  computed: { ...mapGetters(["isAuthLoading"]) },
  methods: {
    ...mapActions(["register"]),
    submit() {
      if (this.register(this.registerData)) {
        this.modalInstance.hide();
      }
    },
    hide() {
      this.modalInstance.hide();
      this.$store.commit('AUTHENTICATE_USER');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.modalInstance = new Modal(document.getElementById("registerModal"));
      this.modalInstance.show();
    });
  },
});
</script>

<style>
</style>