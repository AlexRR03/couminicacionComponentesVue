<template>
  <div>
    <PadreNumero />
  </div>
</template>

<script>

import PadreNumero from './components/PadreNumero'


export default {
  name: 'App',
  components: {
    PadreNumero
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
