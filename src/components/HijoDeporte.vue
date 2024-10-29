<template>
  <div>
    <li style="color:lightred">{{nombredeporte}} <button @click="seleccionarFavorito()">Seleccionar favorito</button></li>
    
  </div>
</template>

<script>
export default {
    name:"HijoDeporte",
    props:["nombredeporte"],
    methods:{
        seleccionarFavorito(){
            console.log("Soy el hijo");
            //REALIZAR LLAMADA AL PADRE
            //SE HACE MEDIANTE STRING CON EL NOMBRE DEL METODO DEL PADRE

            this.$emit("seleccionarFavaritoParent",this.nombredeporte)
        }
    },
    mounted(){
        console.log(this.nombredeporte)
    }
}
</script>

<style>
    li{
        list-style: none;
    }
</style>