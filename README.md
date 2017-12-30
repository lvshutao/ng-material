## 知识点

* [共享模块](src/app/shared/shared.module.ts) 和 [核心模块](src/app/core/core.module.ts) 的使用特点
* flex 布局 (css), 居中


## material

需要用到哪个 UI 组件，引入它即可，根据其类别，可以分为

### Navigation

* Menu
* Sidenav

用途：侧边栏导航，同时可以作为容器；
侧滑的三种模式: over, push, side
一般和 `<mat-sidenav-container>` 联合使用

```
<mat-sidenav-container>
  <mat-sidenav mode="over">Start</mat-sidenav>
  <mat-sidenav position="end">End</mat-sidenav>
  <section>Main</section>
</mat-sidenav-container>
```

* Toolbar

用于：一般用于头部、标题栏；通过 `<mat-toolbar-row>` 实现支持多行；
默认内部布局是基于 flex 的

### Form Controls

* Autocomplete
* Checkbox
* Datepicker
* Form field

* Radio button
* Select
* Slider
* Slide toggle

### Layout 

* List
* Grid list
* Card
* Stepper
* Tabs
* Expansion Panel

### Buttons & Indicators

* Button
* Button toggle
* Chips
* Icon

1. [内置](https://material.io/icons/) 的图标；
引入 [materialicons](src/styles.css) 中的字体。[参考 Api](https://material.angular.io/components/icon/api)
包含；比如容易实现，通常与 MatButtonModule 搭配，以实现[透明化的按钮](src/app/core/header/header.component.html)
2. SVG 资源，如src/assets/cart.svg. 参考文件: src/app/utils/svg.util.ts,src/app/core/core.module.ts
3. [FontAwesome](https://fortawesome.github.io/Font-Awesome/examples/)，以及 


* Progress spinner
* Progress bar

### Popups & Modals

* Dialog
* Tooltip
* Snackbar

### Data Table

* Table
* Sort header
* Paginator
