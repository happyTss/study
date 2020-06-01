##  同源策略
    协议 域名 端口 =>同源

## 浏览器为什么不支持跨域
    cookie localstorage
    DOM元素也有同源策略 iframe
    ajax 也不支持跨域

## 实现跨域

### 	1-jsonp

```
只能发送get请求,不支持post ,put,delete
不安全  xss攻击  现在不采用 
```

------

### 	2-cors 后端

```

```



------

### 	3-postmessage(两个页面进行通信)

------

### 	4-document.domain (子域名和父域名进行通信)

------

### 	5-window.name

------

### 	6-location.hash

------

### 	7-HTTP-proxy

------

### 	8-nginx

------

### 	9-websocket

