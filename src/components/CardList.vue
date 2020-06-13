<template>
  <div id="cardList">
    <div class="title">Active Prescriptions</div>
    <b-container class="coloured-container">
        <div v-for="(drug, index) in drugs" v-bind:key="`drug-${index}`">
            <Card v-bind:drug="drug"/>
        </div>
    </b-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Drug from '../model/drugs';
  import Card from './Card.vue';

  @Component({
      components: {
          Card
      }
  })
  export default class CardList extends Vue {
    drugs: Array<Drug> = [
        {
            name: "Vicodin",
            datePrescribed: "05/06/2020",
            dosage: "100mg"
        },
        {
            name: "Codeine",
            datePrescribed: "03/06/2020",
            dosage: "200mg"
        },
        {
            name: "Lyrica ",
            datePrescribed: "01/06/2020",
            dosage: "40mg"
        }
    ];

  }
</script>

<style lang="scss">
    $background-default: rgb(150,237,222);

    #cardList {
        .title {
            
        }

        .coloured-container {
            background-color: $background-default;
            padding-bottom: 20px;
            padding-top: 20px;
        }
    }

</style>
