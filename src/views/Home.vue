<template>
  <div class="home">
    <b-container>
      <div class="home-title">My Dashboard</div>
      <b-row>
        <b-col>
          <CardList />
        </b-col>
        <b-col>
          <MyDoc />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CardList from '../components/CardList.vue';
  import MyDoc from '../components/myDoctor.vue';

  @Component({
    components: {
      CardList,
      MyDoc
    }
  })
  export default class Home extends Vue {

  }
</script>

<style lang="scss">
  $background-default: rgb(150,237,222);

  .home-title {
    font-size: 30px;
    color: $background-default;
    padding-top: 20px;
    font-weight: 500;
    padding-bottom: 20px;
  }
</style>