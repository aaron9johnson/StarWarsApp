<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/Star_Wars_Logo.svg">
    <h1>Star Wars App</h1>
    <router-view/>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | -->
      <router-link to="/films">Films</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
table {
  width: 100%;
}
td {
  text-align: left;
  border-bottom: 1px solid rgba(0,0,0,0.12);
}
th {
  width: 150px;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  border-right: 1px solid rgba(0,0,0,0.12);
}
img {
  height: 100px;
}
</style>
