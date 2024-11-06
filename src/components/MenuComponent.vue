<template>
  <div>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        
        <li><router-link to="/checkbox">Suma checkbox</router-link></li>
        
        
        <li v-for="parametro in parametros" :key="parametro">
            <router-link :to="`/numeroDoble/${parametro}`">Numero Doble: {{parametro}} </router-link>
        </li>
    </ul> 
    
  </div>
</template>

<script>
export default {
    name:"MenuComponent",
    data(){
        return{ 
        parametros:[5,12,7,21]
        }
    }
}
</script>

<style>
    li{
        display:inline;
        padding: 4px;
        list-style: none;

    }
</style>