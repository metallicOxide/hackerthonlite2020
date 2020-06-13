<template>
  <div class="myDoctor">
    <div class="title-container">
        <div class="title">My Doctor</div>
    </div>
    <div class="dr-note-container">
        <b-row>
            <b-col cols="2">
                <b-icon-person font-scale="1.8" ></b-icon-person>
            </b-col>
            <b-col cols="10">
                <div class="text-item float-left">
                    Dr Ken Hurt
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="2">
                <b-icon-house font-scale="1.8" ></b-icon-house>
            </b-col>
            <b-col cols="10">
                <div class="text-item float-left">
                    Carlingford Medical Center
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="2">
                <b-icon-phone font-scale="1.8" ></b-icon-phone>
            </b-col>
            <b-col cols="10">
                <div class="text-item float-left">
                    041438990
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>

                <b-button variant="primary">Contact now</b-button>
            </b-col>
        </b-row>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class Card extends Vue {
    @Prop () private message!: string;
    
  }
</script>

<style lang="scss" scoped>
    $dark-blue: #0373fc;
    .title {
        text-align: left;
    }

    .title-container {
        margin-bottom: 15px;
    }

    .dr-note-container {
        border: 2px solid $dark-blue;
        height: 180px;
        padding-top: 20px;
    }

    .text-item {
        margin-left: -30px;
    }
</style>
