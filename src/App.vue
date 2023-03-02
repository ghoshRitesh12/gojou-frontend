<template>
  <nav>
    <router-link to="/" active-class="active-nav">Home</router-link> |
    <router-link to="/about" active-class="active-nav">About</router-link>
  </nav>
  <router-view/>

</template>

<script setup>

</script>

<style>
#__app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  @apply text-accent-200;
}
</style>
