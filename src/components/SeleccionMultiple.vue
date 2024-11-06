<template>
  <div>
    <h1>Seleccion multiple</h1>
    <select v v-model="datoSelec" multiple>
        <option   v-for="dato in datos" :key="dato">{{dato}}</option>
    </select>
    <button @click="dibujar()">Dibujar seleccion</button>
        <div style="background-color:lightblue" v-html="html">
        </div>
  </div>
</template>

<script>
export default {
    name:"SeleccionMultiple",
    methods:{
        dibujar(){
         if (this.datoSelec.length>0 ) {
            this.html ="<ul>"
            for (const sel of this.datoSelec) {
                this.html += "<li>"+sel+"<li>"
            }
            this.html+="</ul>"
         }   
            
        }
    },
    data(){
        return{ 
            html:"",
            datoSelec:[],
            datos:["Thor","Ironman","Hulk","Viuda Negra","Vision","Bruja escarlata","Capitan America"]
        }
    }
}
</script>

<style>

</style>