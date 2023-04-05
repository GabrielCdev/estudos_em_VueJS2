new Vue({
  el: "#desafio",
  data: {
    nome: "Gabriel",
    idade: 23,
    imgLink: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
  },
  methods: {
    multiplicacao() {
      return this.idade * 3;
    },
    randomico() {
      return Math.random();
    },
  },
});
