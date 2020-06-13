<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  left: 0;
  right: 0;
  z-index: -1;
  margin-top: 30px;
  position: absolute;
}
</style>
