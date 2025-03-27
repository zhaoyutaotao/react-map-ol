---
title: Map # 组件的标题，会在菜单侧边栏展示
description: Map组件
order: 1
nav:
  title: 组件
  order: 2
group: # 分组
  title: 容器组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

## Map

### 介绍

Map 是地图容器组件，相关地图组件与 Hooks 需放到容器组件内部才能使用，容器组件可通过属性配置不同的地图

```jsx
/**
 * iframe: true
 */
import { Map } from 'react-map-ol';

export default () => <Map id="map" />;
```

## api

<API id="Map"></API>
