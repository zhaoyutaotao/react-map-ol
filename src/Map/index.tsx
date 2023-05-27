/*
 * @Author: zhaoyutao 1048@163.com
 * @Date: 2023-05-22 12:24:29
 * @LastEditors: zhaoyutao 1048@163.com
 * @Description:
 */
import React, { type FC, useEffect, CSSProperties } from 'react';
import { default as Mapol } from 'ol/Map.js';
import View from 'ol/View.js';
import { Tile } from 'ol/layer';
import { XYZ } from 'ol/source';
import { FullScreen, defaults as defaultControls } from 'ol/control';
import 'ol/ol.css';
export interface MapProps {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  target: string | HTMLElement;
  /** 中心点坐标 */
  center: [number, number];
  /** 缩放级别 */
  zoom: number;
  /** 地图初始化时的默认配置 */
  defaultOptions?: object;
  /** 个性化地图样式 */
  // mapStyleV2?: BMapGL.MapStyleV2;
  /** 地图最小缩放级别 */
  minZoom?: number;
  /** 地图最大缩放级别 */
  maxZoom?: number;
  /** 地图类型，普通地图或地球模式 */
  // mapType?: 'normal' | 'earth';
  /** 地图背景颜色，传rgba格式长度为4的数组 */
  backgroundColor?: number[];
  /** 地图显示配置 */
  displayOptions?: object;
  /** 地图旋转角度 */
  heading?: number;
  /** 地图倾斜角度 */
  tilt?: number;
  /** 是否开启鼠标滚轮缩放 */
  enableScrollWheelZoom?: boolean;
  /** 是否开启双击鼠标缩放 */
  enableDoubleClickZoom?: boolean;
  /** 是否开启地图旋转功能 */
  enableRotate?: boolean;
  /** 是否开启地图倾斜功能 */
  enableTilt?: boolean;
  /** 是否开启地图可拖拽缩放 */
  enableDragging?: boolean;
  /** 鼠标左键单击事件的回调函数 */
  onClick?(e: Event): void;
  /** 地图容器的class类名 */
  className?: string;
  /** 地图容器父元素的style样式 */
  style?: CSSProperties;
}
const Map: FC<MapProps> = (props) => {
  const {
    target = 'map',
    center = [116.46, 39.92],
    zoom = 10,
    minZoom = 0,
    maxZoom = 18,
  } = props;
  useEffect(() => {
    const view = new View({
      center,
      zoom,
      minZoom,
      maxZoom,
      projection: 'EPSG:4326', // 默认值为球形墨卡托EPSG:3857
    });

    const tileLayer = new Tile({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      }),
    });
    new Mapol({
      target,
      layers: [tileLayer],
      view,
      controls: defaultControls().extend([new FullScreen()]),
    });
  }, []);
  return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Map;
