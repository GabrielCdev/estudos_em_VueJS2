new Vue({
  el: "#desafio",
  data: {
    classeDestaque: "destaque",
    verde: true,
    classe3: "",
    classe4: "",
		cor: '',
		retangulo: {
			width: '200px',
			height: '100px'
		},
		larguraProgresso: '0'
  },
  computed: {},
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classeDestaque =
          this.classeDestaque == "destaque" ? "encolher" : "destaque";
      }, 1500);
    },
    iniciarProgresso() {
			let valor = 0;
			const progresso = setInterval(() => {
				valor += 5;
				this.larguraProgresso = `${valor}%`

				if(valor == 100) clearInterval(progresso)
			}, 500)
		},
    booleanParameter(event) {
			event.target.value == "true" ? this.verde = true : this.verde = false
		},
  },
});
