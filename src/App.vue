<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/Settings">Settings</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default{
    name:'App'
  }
</script>

<style>
    @import '../node_modules/bulma/css/bulma.min.css';
</style>