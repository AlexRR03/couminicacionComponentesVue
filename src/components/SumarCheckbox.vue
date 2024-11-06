<template>
    <div>
        <h1>Ejemplo Checkbox</h1>
        <button @click="generarCheckbox()">Generar Checkbox</button>
        <div v-html="html">

        </div>
        <h2 style="color:red">Suma total : {{suma}} </h2>
        <button @click="sumar()">Sumar</button>
    </div>
</template>

<script>
export default {
    name:"SumarCheckbox",
    methods:{
        generarCheckbox(){
            this.html =""
            for (let i = 0; i <5; i++) {
            let valorRandom =  Math.floor(Math.random() * (50 - 1) + 1)
               this.valores.push(valorRandom)
                
            }
            for (const valor of this.valores) {
               this.html+="<p>"+valor+"</p><input type='checkbox'value="+valor+ ">" 
            }
        
        },
        sumar(){
            console.log(this.valoresSelec)
        }
    },
    data(){
        return{ 
            valores:[],
            valoresSelec:[],
            html:"",
            suma:0
        }
    }

}
</script>

<style>
    
</style>