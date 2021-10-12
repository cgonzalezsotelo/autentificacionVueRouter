import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioActual: null,
  },
  mutations: {
    SET_USUARIO_ACTUAL(state, nuevoUsuario) {
      state.usuarioActual = nuevoUsuario;
    },
  },
  actions: {
    usuarioActual(context, usuario) {
      context.commit("SET_USUARIO_ACTUAL", usuario);
    },
  },
  modules: {},
});
