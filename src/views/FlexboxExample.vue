<script setup>
import MainContent from '../components/MainContent.vue'
import FlexboxCopyrightIcpFooter from '../components/FlexboxCopyrightIcpFooter.vue'
</script>

<template>
  <MainContent />
  <FlexboxCopyrightIcpFooter />
</template>

<style lang="scss">
@import '@/styles/global.scss';

#app {
  height: 100%;
  display: flex;
  display: -webkit-flex; // Safari
  flex-direction: column;
}
</style>
