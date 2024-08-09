<script setup>
import FoooterContent from '../components/FooterContent.vue'
</script>

<template>
  <FoooterContent />
</template>

<style scoped lang="scss">
@import '@/styles/global.scss';
#copyright-icp-footer {
  width: 100%;
  height: 3rem;
  display: grid;
  display: -webkit-grid; // Safari
  grid-template-rows: 1px auto;
}

:deep(#copyright-icp-ul) {
  list-style-type: none;
  margin: 0.3rem 0;
  padding: 0;
  height: auto;
  white-space: pre;
  color: gray;
  display: grid;
  display: -webkit-grid; // Safari
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  align-content: center;
  column-gap: 0;
}
</style>
