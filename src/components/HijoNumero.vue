<template>
  <div>
    <h2 style="color:red">Numero: {{numero}}</h2>
    <button @click="sumarNumeros()">Sumar {{numero}}</button>
  </div>
</template>

<script>
export default {  
  name:"HijoNumero",
  props:["numero"],
  methods:{
    sumarNumeros(){
      this.$emit("sumarNumerosParent",this.numero)
    }
  }
}
</script>

<style>

</style>