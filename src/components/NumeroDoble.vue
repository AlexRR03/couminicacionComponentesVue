<template>
  <div>
    <h1>Numero Doble</h1>
    <h2>{{ mensaje }}</h2>
    <h2>{{doble}}</h2>
    <button @click="redirectHomre()">Volver</button>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  methods:{
    redirectHomre(){
        this.$router.push("/")
    }
  },
  mounted() {
    console.log("Param:" + this.$route.params.numero);
    let paramNumero = this.$route.params.numero;
    if (paramNumero == "") {
      console.log("Sin parametro");
      this.mensaje = "Sin parametros";
    } else {
      let valor = parseInt(this.$route.params.numero)
      this.doble = valor*2
    }
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.mensaje="Esto ha cambiado"+this.$route.params.numero;
      }
    },
  },
  data() {
    return {
      mensaje: "",
      doble : 0,
      
    };
  },
};
</script>

<style></style>
