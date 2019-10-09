<template>
  <div class="">
    <input class="input" value="test"/>
    <button v-on:click="createReceipt">create new receipt</button>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from './../store';
import Receipt from './receipt';

@Component
export default class CreateReceipt extends Vue {
  private createReceipt() {
    const receipt = new Receipt('test', []);
    store.dispatch('newReceipt', receipt);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  line-height: 1.5em;
  border: solid  grey 3px;
  border-radius: 5% ;
}
</style>
