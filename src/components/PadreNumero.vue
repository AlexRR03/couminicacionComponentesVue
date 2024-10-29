<template>
  <div>
    <h1>Padre Numero</h1>
        <button @click="generarNumeroAleatorio()">Generar numeros</button>
        <h2>Suma Total = {{suma}}</h2>
        <div v-for="num in listaNumeros" :key="num">
            <HijoNumero :numero="num" v-on:sumarNumerosParent="sumarNumerosParent"/>
        </div>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero'
export default {
    name:"PadreNumero",
    components:{
        HijoNumero
    },
    data(){
        return{
            listaNumeros:[12,7,69,4],
            suma:0
        }
    },
    methods:{
        generarNumeroAleatorio(){
            let nuevoNumero = Math.floor(Math.random() * (100 - 1) + 1)
            this.listaNumeros.push(nuevoNumero)
        },
        sumarNumerosParent(numero){
            this.suma+=numero
        }
    }
}
</script>

<style>

</style>
