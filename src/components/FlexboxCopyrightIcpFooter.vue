<script setup>
import FoooterContent from '../components/FooterContent.vue'
</script>

<template>
  <FoooterContent />
</template>

<style scoped lang="scss">
@import '@/styles/global.scss';
#copyright-icp-footer {
  flex: none;
  width: 100%;
  height: 3rem;
  display: flex;
  display: -webkit-flex; // Safari
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

:deep(#copyright-icp-hr) {
  flex: none;
  // width: 100%;
  margin-left: 0;
  margin-right: 0;
  align-self: stretch; // 当 flex container 的 align-items 属性取值不是 stretch 时，必须加上该属性。
}

:deep(#copyright-icp-ul) {
  flex: auto;
  list-style-type: none;
  margin: 0.3rem 0;
  padding: 0;
  height: auto;
  white-space: pre;
  color: gray;
  display: flex;
  display: -webkit-flex; // Safari
  flex-wrap: wrap;
  justify-content: center; // 在移动设备上，屏幕较窄，当 height 被拉高、多行显示时，会用上。
  align-items: center;
  column-gap: 2rem;
}
</style>
