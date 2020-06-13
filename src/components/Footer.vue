<template>
  <div id="NavBar">
    <div class="container">
      <h1 class="logo"></h1>
      <nav>
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
body {
  margin: 0;
  background: #222;
  font-family: "Work Sans", sans-serif;
  font-weight: 100;
}

.container {
  width: 80%;
  margin: 0 auto;
}

#NavBar {
  background: rgb(120, 120, 120);
  padding: 0px;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
}

#NavBar::after {
  content: "";
  display: table;
  clear: both;
}

.logo {
  float: left;
  padding: 10px 0;
}

nav {
  float: center;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;

  position: relative;
}

nav a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 10px;
}

nav a:hover {
  color: #000;
}

nav a::before {
  content: "";
  display: block;
  height: 5px;
  background-color: #fff;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}
</style>
