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
* Input
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
