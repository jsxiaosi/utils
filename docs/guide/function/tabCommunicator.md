---
outline: deep
---

# 浏览器跨标签通讯

用于在浏览器的多个标签页间进行通信。

## 基础用法

``` js
import { TabCommunicator } from 'tab-communicator';

// 创建一个新的TabCommunicator实例
const communicator = new TabCommunicator('unique-key');

function callbackFunction(data) {
  console.log('Received:', data);
};

// 监听某个事件
communicator.on('someEvent', callbackFunction);

// 发送某个事件
communicator.emit('someEvent', 'Hello, World!');

// 停止监听某个事件
communicator.off('someEvent', callbackFunction);

// 销毁TabCommunicator实例
communicator.destroy();
```

## Typescript

``` ts
import { TabCommunicator } from 'tab-communicator';

// ✅ 正确使用使用示例

type EventsType = {
  someEvent: string;
  typeEvent: string;
}

const communicator = new TabCommunicator<EventsType>('unique-key');

function callbackFunction(data) {
  console.log('Received:', data);
};

communicator.on('someEvent', (data) => {
  console.log('Received:', data);
})
communicator.emit('someEvent', 'Hello, World!');

// ❌ 错误使用示例

// Type error 类型“"foo"”的参数不能赋给类型“"someEvent" | "typeEvent"”的参数。ts(2345)
communicator.on('foo', (data) => {
  console.log('Received:', data);
})
communicator.emit('foo', 'Hello, World!');

// Type error 类型“number”的参数不能赋给类型“string”的参数。ts(2345)
communicator.on('someEvent', (data: number) => {
  console.log('Received:', data);
})
communicator.on('foo', 12)

```

## 参数

### TabCommunicator

参数 | 说明 | 类型
---------|----------|---------
key | 通道ID，所有使用相同key的TabCommunicator实例将可以互相通信。 | string

## API

- ### emit

  发送一个事件。

  参数：

  参数 | 说明 | 类型
  ---|---|---
  event | 需要触发的事件的名称。该名称必须是 T 类型对象的键 | `K`/`string`
  data | 事件相关的数据。其类型与 T 类型对象中对应键的值的类型相同。 | `T[K]`

- ### on

  监听一个事件。

  参数：

  参数|说明|类型
  ---|---|---
  event|要监听的事件的名称|`string`
  callback|当事件被触发时，将会被调用的回调函数|`Function`

- ### off

  停止监听一个事件。

  参数：

  参数|说明|类型
  ---|---|---
  event|要停止监听的事件的名称|`string`
  callback|当事件被触发时，被调用的回调函数。这个回调函数必须和之前在on方法中注册的回调函数完全相同。如果不传就删除给定类型的所有回调|`Function`

- ### getAllListeners

  获取所有已注册监听器的对象

- ### destroy

  销毁TabCommunicator实例。销毁后的实例将无法发送或接收任何事件。

## 注意事项⚠️

::: warning

- `TabCommunicator`类使用浏览器的`BroadcastChannel` API进行通信。在不支持`BroadcastChannel` API的浏览器中，`TabCommunicator`将会使用`localStorage`作为备选方案。

- 在同一个浏览器窗口的不同标签页中，可以使用相同的key创建多个`TabCommunicator`实例，这些实例将能够互相通信。在不同的浏览器窗口中，也可以使用相同的key创建`TabCommunicator`实例，但是这些实例将无法互相通信。

- `TabCommunicator`实例在创建时会自动开始监听事件，但是在不需要时，应该调用destroy方法来销毁实例，以避免内存泄漏。
:::
