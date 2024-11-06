<template>
  <div>
    <h1>Tabla Multiplicar</h1>
    <table border="1px">
      <thead>
        <tr>
          <th>Operacion</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(num, index) in tabla" :key="num">
          <td>{{ this.$route.params.numero }}*{{ index + 1 }}</td>
          <td>{{ num }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicarRouting",
  data() {
    return {
      tabla: [],
    };
  },
  methods: {
    generarTabla() {
      this.tabla = [];
      let paramMultiplicar = parseInt(this.$route.params.numero);
      if (paramMultiplicar != "") {
        for (let i = 1; i < 11; i++) {
          let numeroMultiplicado = paramMultiplicar * i;
          this.tabla.push(numeroMultiplicado);
        }
        console.log(this.tabla);
      }
    },
  },
  mounted() {
    console.log("Parametro:" + this.$route.params.numero);
    this.generarTabla();
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        console.log("Parametro:" + this.$route.params.numero);
        this.generarTabla();
      }
    },
  },
};
</script>

<style></style>
