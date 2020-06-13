<template>
  <div id="cardList">
    <div class="title-container">
        <div class="title">Past Prescriptions</div>
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
  import Card from './expiredCard.vue';

  @Component({
      components: {
          Card
      }
  })
  export default class CardList extends Vue {
    drugs: Array<Drug> = [
        {
            name: "Vicodin",
            datePrescribed: "01/05/2020",
            dosage: "300mg"
        },
        {
            name: "Codeine",
            datePrescribed: "04/04/2020",
            dosage: "100mg"
        },
        {
            name: "Lyrica ",
            datePrescribed: "01/06/2020",
            dosage: "40mg"
        }
    ];

  }
</script>

<style lang="scss" scoped>
    $dark-blue: #0373fc;

    #cardList {
        .title {
            text-align: left;
        }

        .title-container {
            margin-bottom: 15px;
        }

        .coloured-container {
            padding: 20px;
            border: 2px solid $dark-blue;
            height: 240px;
            overflow: scroll;
        }
    }

</style>
