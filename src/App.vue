<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue' // Cambiado aquí

export default {
  components: {
    NavBar,
    AppFooter, // Cambiado aquí
  }
}
</script>


