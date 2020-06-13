<template>
  <div class="imageItem">
    <img width="100%" :src="getImgUrl()" v-bind:alt="pic" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  getImgUrl() {
    return require("../assets/hack.png");
  }
}
</script>

<style lang="scss" scoped>
$background-default: rgb(150, 237, 222);
.card {
  background-color: $background-default !important;
  border: 4px solid #fff;
  border-radius: 20px;
}

.cardItem {
  padding-bottom: 10px;
}
</style>
