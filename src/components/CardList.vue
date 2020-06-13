<template>
  <div id="cardList">
    <div class="title-container">
        <div class="title">Active Prescriptions</div>
    </div>
    <div class="coloured-container">
        <div v-for="(drug, index) in drugs" v-bind:key="`drug-${index}`">
            <Card v-bind:drug="drug"/>
        </div>
    </div>
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
            text-align: left;
        }

        .title-container {
            margin-bottom: 15px;
        }

        .coloured-container {
            background-color: $background-default;
            padding: 20px;
        }
    }

</style>
