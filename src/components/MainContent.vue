<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { usePageTypeStore } from '@/stores/pageType.js'
import constant from '@/util/constant'
import util from '@/util/util'

const pageTypeStore = usePageTypeStore()

onMounted(() => {
  setLayoutImplentationMethodViaUrl()
  handlePageType(pageTypeStore.pageType, 'new_page')
})

let idTmp = 0
const layoutImplentationMethods = ref([
  {
    id: idTmp++,
    value: constant.defaultLayoutImplentationMethod,
    clicked: true
  },
  {
    id: idTmp++,
    value: 'grid',
    clicked: false
  }
])
const validLayoutImplentationMethods = computed(() => {
  return new Set(layoutImplentationMethods.value.map((item) => item.value))
})

idTmp = 0
const pageTypes = ref([
  {
    id: idTmp++,
    value: constant.defaultPageType,
    description: '长页面',
    clicked: true
  },
  {
    id: idTmp++,
    value: 'short',
    description: '短页面',
    clicked: false
  }
])

function setLayoutImplentationMethodViaUrl() {
  const route = useRoute()
  const path = util.trimAny(route.path, ['/', ' '])
  const layoutImplentationMethod = validLayoutImplentationMethods.value.has(path) ? path : constant.defaultLayoutImplentationMethod
  // console.log(`path:${path} layoutImplentationMethod:${layoutImplentationMethod}`)
  setLayoutImplentationMethod(layoutImplentationMethod)
}

// 作用：模拟调整至不同的页面长度。
function setOptionBoxHeight(pageType) {
  const element = document.querySelector('#option-box')
  switch (pageType) {
    case constant.defaultPageType:
      element.style.setProperty('height', '150vh')
      break
    case 'short':
      element.style.setProperty('height', 'auto')
      break
    default:
      console.log(`Ooops, we are out of ${pageType}.`)
  }
}

function setLayoutImplentationMethod(layoutImplentationMethod) {
  layoutImplentationMethods.value.forEach((item) => {
    item.clicked = item.value == layoutImplentationMethod
  })
}

// actionType 取值：click，表示点击了 pageType 按钮；new_page，表示切换了页面。
function handlePageType(pageType, actionType = 'click') {
  pageTypes.value.forEach((item) => {
    item.clicked = item.value == pageType
  })
  if (actionType == 'click') {
    pageTypeStore.set(pageType)
  }
  setOptionBoxHeight(pageType)
}
</script>

<template>
  <div class="main">
    <div class="project-introduction">
      <h1>vue-copyright-icp-footer</h1>
      <a href="https://github.com/beta4x/vue-copyright-icp-footer" title="vue-copyright-icp-footer" target="_blank">GitHub</a>
    </div>

    <hr id="main-hr" />

    <div id="option-box">
      <div class="option-item">
        <div class="option-head"><span class="option-title">布局实现方法</span>：</div>
        <div class="option-body">
          <div class="option-body-items">
            <ul>
              <li v-for="item in layoutImplentationMethods" :key="item.id">
                <RouterLink :to="`/${item.value}`" @click.native="setLayoutImplentationMethod(item.value)" :class="[{ 'option-clicked': item.clicked }]">{{ item.value }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="option-item">
        <div class="option-head"><span class="option-title">页面类型</span>：</div>
        <div class="option-body">
          <div class="option-body-items">
            <ul>
              <li v-for="item in pageTypes" :key="item.id">
                <a href="#" @click="handlePageType(item.value)" :class="[{ 'option-clicked': item.clicked }]">{{ item.description }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/global.scss';

.main {
  margin: 10rem auto;
  flex: auto;
  display: flex;
  display: -webkit-flex; // Safari
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 32px;
}

#main-hr {
  flex: none;
  // width: 100%;
  margin-left: 0;
  margin-right: 0;
  align-self: stretch; // 当 flex container 的 align-items 属性取值不是 stretch 时，必须加上该属性。
}

#option-box {
  // border: 1px solid #e8e8e8;
  padding: 4px 20px;
  // height: 13rem;
  display: inline-flex;
  display: -webkit-inline-flex; // Safari
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.option-item {
  height: auto;
  display: flex;
  display: -webkit-flex; // Safari
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5em;
}

.option-head {
  display: flex;
  display: -webkit-flex; // Safari
}

.option-title {
  display: inline-block;
  width: 6rem;
  text-align: justify;
  text-align-last: justify;
  text-justify: distribute-all-lines; // IE
  // TODO: 不兼容 Safari
}

.option-body-items ul {
  list-style-type: none;
  padding: 0;
  height: auto;
  display: flex;
  display: -webkit-flex; // Safari
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 2rem;
}

.option-body-items a {
  text-decoration: none;
}

.option-clicked {
  color: #00a36c !important;
}
</style>
