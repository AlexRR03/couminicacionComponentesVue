<template>
  <div>
        <h1>Componente Padre Deportes</h1>
        <h2 style="color:darkgreen">
            Su deporte Favorito es: {{favorito}}
        </h2>
        <ul v-for="deporte in deportes" :key="deporte">
            <HijoDeporte :nombredeporte="deporte" v-on:seleccionarFavaritoParent="seleccionarFavaritoParent"/>
        </ul>
        
  </div>
</template>

<script>
import HijoDeporte from'./HijoDeporte'
export default {
    name:"PedreDeportes",
    methods:{
        //CREAR METODO PARA QUE SEA LLAMADO DESDE EL HIJO
        seleccionarFavaritoParent(deporteFavorito){
            console.log("Yo soy tu padre")
            this.favorito = deporteFavorito
        }
    },
    components:{
        HijoDeporte
    },
    data(){
        return{
            deportes:["Furbol","Basket","Las peleah","Los Coches","Tenis","Tenis para disminuidos (padel)"],
            favorito:null

        }
    }
}
</script>

<style>
    h1{
        color: steelblue;
    }
</style>