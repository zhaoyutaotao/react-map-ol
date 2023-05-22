/*
 * @Author: zhaoyutao 1048@163.com
 * @Date: 2023-05-22 12:24:29
 * @LastEditors: zhaoyutao 1048@163.com
 * @Description: 
 */
import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => <h4>{props.title}测试</h4>;

export default Foo;
