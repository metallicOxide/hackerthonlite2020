<template>
  <div class="card">
    <b-card :title="drug.name" :sub-title="drug.dosage">
      <b-card-text>
        {{dateString}}
      </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import Drug from '../model/drugs';

  @Component
  export default class Card extends Vue {
    @Prop () private drug!: Drug;
    dateString = "Date prescribed: " + this.drug.datePrescribed
  }
</script>

<style lang="scss" scoped>

</style>
