# vue-copyright-icp-footer

## 项目介绍
`vue-copyright-icp-footer` 是一个风格简洁的以版权、备案（包括 ICP 备案、公安备案）信息为主的页脚。  

[示例](https://dbzz.house/)：  
![footer example](https://github.com/beta4x/vue-copyright-icp-footer/blob/main/public/img/footer-example.png?raw=true "vue-copyright-icp-footer example")  
（示例图片位置为 `public/img/footer-example.png`；如果无法显示图片，请先科学上网。）  

## 项目特点
* 风格简洁。  
* ICP 备案、公安备案信息都附有 icon，辨识度高。  
* 适配不同的页面长度。无论长页面、短页面，都能保证页脚在页面最底部。实现思路可参考：[CSS 将页脚固定在页面底部](https://pingx.sh/2024/07/20/css-pin-footer-to-the-bottom-of-page/)。  
* 提供了 flexbox/grid 两种实现方式，可按需选择。  

## 预览效果
步骤：  
1. 拉取代码：
```
git clone git@github.com:beta4x/vue-copyright-icp-footer.git
cd vue-copyright-icp-footer
```
2. 安装软件包：
```
npm install
```
3. 编译并执行：
```
npm run preview
```
4. 预览效果。

## 我该如何使用
* 确认想用 flexbox 还是 grid 布局来实现：如果想用 flexbox 布局实现，请参考 `src/FlexboxExample.vue` 及相关代码；如果想用 grid 布局实现，请参考 `src/GridExample.vue` 及相关代码。  
* 版权、备案（包括 ICP 备案、公安备案）信息都定义在 `components/FooterContent.vue` 文件中，自己做相应修改即可。  

## 代码结构
### 目录树
```
src
├── components
│   ├── FlexboxCopyrightIcpFooter.vue
│   ├── FooterContent.vue
│   ├── GridCopyrightIcpFooter.vue
│   └── MainContent.vue
└── views
    ├── FlexboxExample.vue
    └── GridExample.vue
```

### 调用链
说明：箭头（→、↓）都表示调用关系。  

```
src/FlexboxExample.vue → components/MainContent.vue + components/FlexboxCopyrightIcpFooter.vue
                                                                ↓
                                                      components/FooterContent.vue

src/GridExample.vue → components/MainContent.vue + components/GridCopyrightIcpFooter.vue
                                                             ↓
                                                   components/FooterContent.vue
```

### `components` 目录
* `MainContent.vue`  
对应网页的主体部分（除了 footer 以外的部分）。  
* `FooterContent.vue`  
对应网页的 footer 部分（只涉及较少的 CSS），包含版权、ICP 备案、公安备案等信息。  
* `FlexboxCopyrightIcpFooter.vue`  
用 flexbox 布局实现了 footer；调用了 `FooterContent.vue`。  
* `GridCopyrightIcpFooter.vue`  
用 grid 布局实现了 footer；调用了 `FooterContent.vue`。  

### `views` 目录
* `FlexboxExample.vue`  
用 flexbox 布局来组织 main content 和 footer 的关系；调用了 `components/MainContent.vue` 和 `components/FlexboxCopyrightIcpFooter.vue`。  
* `GridExample.vue`  
用 grid 布局来组织 main content 和 footer 的关系；调用了 `components/MainContent.vue` 和 `components/GridCopyrightIcpFooter.vue`。  


