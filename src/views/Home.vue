<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <create-receipt></create-receipt>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateReceipt from '@/components/CreateReceipt.vue'; // @ is an alias to /src

@Component({
  components: {
    CreateReceipt,
  },
})
export default class Home extends Vue {}
</script>
