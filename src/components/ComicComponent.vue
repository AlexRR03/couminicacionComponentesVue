<template>
  <div>
    <h2>{{comic.titulo}}</h2>
    <button @click="seleccionarFavorito()">
        Seleccionar favorito
    </button>
    <button class="rojo" @click="eliminarComic()">
        Eliminar
    </button>
    <p>{{comic.descripcion}}</p>
    <img :src="comic.imagen" alt="">
    <h4 :class="{
        rojo:comic.year<=2000,
        verde:comic.year>=2000
    }">
        Año: {{comic.year}}
    </h4>
  </div>
</template>

<script>
export default {
    name:"ComicComponent",
    props:["comic","index"],
    methods:{
        seleccionarFavorito(){
            this.$emit("seleccionarFavorito",this.comic)
        },
        eliminarComic(){
            this.$emit("eliminarComic",this.index)
        }
    }
}
</script>

<style> 
    @import '../assets/css/estilosComic.css'
</style>