/*
 * @Author: zhaoyutao 1048@163.com
 * @Date: 2023-05-22 12:24:29
 * @LastEditors: zhaoyutao 1048@163.com
 * @Description:
 */
import React, { type FC, useEffect } from 'react';
import { default as Mapol } from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const Map: FC<{ title: string }> = () => {
  useEffect(() => {
    new Mapol({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);
  return <div id="map" style={{ width: 200, height: 200 }}></div>;
};

export default Map;
