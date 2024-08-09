<script setup>
import MainContent from '../components/MainContent.vue'
import GridCopyrightIcpFooter from '../components/GridCopyrightIcpFooter.vue'
</script>

<template>
  <MainContent />
  <GridCopyrightIcpFooter />
</template>

<style lang="scss">
@import '@/styles/global.scss';

#app {
  height: 100%;
  display: grid;
  display: -webkit-grid; // Safari
  grid-template-rows: auto 3rem;
}
</style>
