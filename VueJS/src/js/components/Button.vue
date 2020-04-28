<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonComponent',
  methods: {
    doClick(): void {
      alert('I am working!');
    }
  }
});
</script>


<template>
  <div>
    <button @click="doClick">
      Press Me!
    </button>
  </div>
</template>



<style>
</style>

