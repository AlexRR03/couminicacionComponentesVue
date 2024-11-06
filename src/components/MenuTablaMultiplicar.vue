<template>
  <div>
        <ul>
            <li>
                <router-link to="/">HOME</router-link>
            </li>
            <li v-for="parametro in parametros" :key="parametro">
                <router-link :to="`/tablaMultiplicar/${parametro}`">TABLA: {{parametro}}</router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    name:"MenuTablaMultiplicar",
    data(){
        return{
            parametros : [1,2,3,4,5,6,7,8,9,10]
        }
    }
}
</script>

<style>
    li{
        display: inline;
        padding: 4px;

    }
   
</style>