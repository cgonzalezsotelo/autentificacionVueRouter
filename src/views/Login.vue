<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h2>Iniciar Sesión para Ingresar al Home</h2>
      </div>
      <div class="col-6 justify-content-center pt-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="correo" class="form-label">Correo</label>
            <input
              type="email"
              class="form-control"
              id="correo"
              v-model="correo"
              required
            />
          </div>
          <div class="mb-3">
            <label for="contrasena" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="contrasena"
              v-model="contrasena"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Firebase from "firebase";

export default {
  data: () => ({
    correo: "",
    contrasena: "",
  }),
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.correo, this.contrasena)
        .then((response) => {
          this.$store.dispatch("usuarioActual", {
            correo: response.user.email,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
