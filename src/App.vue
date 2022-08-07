<template>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
  export default{
    name: "App",
    components: { Navbar }
}
</script>

<style>
    @import '../node_modules/bulma/css/bulma.min.css';
</style>