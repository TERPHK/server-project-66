<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div {
  text-align: center;
}

h2 {
  text-align: center;
}

button {
  margin-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: rgb(110, 226, 110);
 
  border-radius: 5px;
  border-color: rgb(110, 226, 110);
  border-width: 2px;
}

button:hover {
  box-shadow: 0 10px 12px 0 white;
}

.btn {
  background-color: rgb(110, 226, 110);
  border-color: white;
  border-width: 2px;
}</style>