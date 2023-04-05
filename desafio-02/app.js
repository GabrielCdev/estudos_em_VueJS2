new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    alertaClick() {
      alert("Alerta de clique");
    },
    keyEvents(event) {
      this.valor = event.target.value;
    },
  },
});
