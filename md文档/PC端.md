# About

此次进行花礼网的项目开发,主要搭建了 [主页](http://localhost:8080/#/login) [鲜花](<http://localhost:8080/#/flower>) [永生花](<http://localhost:8080/#/yongshenghua>)  [蛋糕]() [详情页](<http://localhost:8080/#/product>) [购物车]() [登陆](http://localhost:8080/#/login)等页面,实现了登陆验证以及跳转,

## 1.项目结构图

![1574658274354](C:\Users\51218\AppData\Roaming\Typora\typora-user-images\1574658274354.png)

## 2.技术结构图

![1574658296447](C:\Users\51218\AppData\Roaming\Typora\typora-user-images\1574658296447.png)

##  3.技术栈

1.  页面交互:vue + vuex + vueLazyload +element-UI + sweiper   

2. 服务请求:express + ajax + nodemon 

3. ele的使用到的组件

   1. ```javascript
      import { 
        Button, Select,Pagination,
        Loading,Message,Backtop,
        Image, Dropdown,DropdownMenu,
        DropdownItem,InputNumber,
        Form,Input,FormItem,Tabs,TabPane,
      } from 'element-ui';
      ```

      

4. swiper的banner使用

   1. 

      1. ```html
             <div class="swiper-container">
               <div class="swiper-wrapper">
                 <div class="swiper-slide" v-for="(el, index) in arrItem" :key="index">
                     <img class="img" :src="el.imgUrl" />
                 </div>
               </div>
               <!-- 如果需要分页器 -->
               <div class="swiper-pagination"></div>
             </div>
         ```

         

   2. 

      1. ```javascript
         mounted:function(){
         	new Swiper('.swiper-container', {
         		loop: true, // 循环模式选项
         		// 如果需要分页器
         		pagination: {
         			el: '.swiper-pagination',
         		},
         	})
         },
         ```

      

## 4.遇到的问题

 1. #### .静态页面问题

     	1.	前期页面构建的时候没有进行统一协调,组件拆分不合理,导致后期进行路由跳转的时候无法统一到一个页面,需要重新拆分组合页面,导致样式出现问题.
     	2.	

 2. ##### 第三方库遇到的问题

     	1.	Element - UI 给按钮添加的计数器位置修改不起作用    解决办法:给计数器嵌套一个盒子,通过调整父盒子的位置来调整按钮的位置
     	2.	Element-UI  实现tabs标签页切换的时候配合form表单 使用的时候,form表单设置的部分表单验证无法调用 ,以及在tabs绑定vu的click事件的时候无法生效.原因是内置了tab-click事件
     	3.	登陆方式的切换,导致封装的前台表单验证失效,目前还没有找到具体原因
     	4.	swiper库使用banner图的时候,由于banner图上有定位元素将其覆盖,使其无法自动轮播

## 6.个人总结

### 徐媛媛

 	1.	鲜花列表内容动态展示,实现鲜花列表的分页功能,鲜花按销量升序和降序并分页展示
 	2.	鲜花分类列表项动态展示,收藏和取消收藏动态并保存vuex和localStorage
 	3.	蛋糕页: 省市区的三级联动,蛋糕数据展示,城市按字母点击高亮
 	4.	后台服务器搭建
 	5.	整体路由的跳转

### 谈磊

1. 首页: 页面搭建以及通过vuex实现数据动态展示
2. 登录:通过element-ui实现3种登录方式的切换, 登录验证,保存本地保存token
3. Axios二次封装
4. 复用组件拆分(拆分过于细致,导致后期出现问题)
5. question
    写登录页面的时候,将三种登录方式分别封装成了三个组件,然后嵌套在一个包裹容器中的时候  每个子组件的表单验证失效

### 王林

 1. 给element,ui的按钮,调整大小,设置按钮计数器的每一回加的数值

2. 写购物车,  永生花页面遍历动态数据

3. 使用阿里巴巴矢量图标

   

### 姚磊

1. 搭建详情页,以及动态数据交互

2. 使用阿里巴巴矢量图标

   ###### 遇到的问题

   1. 动态数据渲染  层级不清楚
   2. 静态布局中 元素块级运用不熟悉 

## 7.项目总结

 	1.	通过项目深入了解组件化,模块化,工程化的开发模式
 	2.	自己封装Asios发送请求,模拟后端数据,实现前后端分离开大
 	3.	学会vue-router开发单页面
 	4.	学会vue-lazyload实现图片懒加载
 	5.	学会使用element-ui组件库构建页面
 	6.	学会使用stylus,icon-font,以及弹性盒布局



​	