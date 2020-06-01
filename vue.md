1. 为何Vue采用异步更新

   vue是组件级别更新, 如果不采用异步更新,那么每次更新都会对当前组件进行重新渲染,所以为了性能考虑,vue会在本轮数据更新后,再去异步更新视图

2. ### vue修饰符

   

3. ### vue插槽

   

4. ### vue生命周期

   在created阶段已经进行了数据的劫持代理
   用户发请求一般都是在mounted里面进行,如何必须要用户看到实时信息的话需要放在beforeMount里面.一般情况下,在beforeMount里面发请求的时候,如果数据量大,有很多运算之内的操作等,会造成页面卡顿,加载费时等,用户体验性不好.
   虚拟DOM挂载完成是在mounted阶段
   $el 是当前Vue应用所有的虚拟DOM对象编译完成的真是DOM对象片段,在mounted可见

   

   ##### **为什么不在 created 里去发ajax？created 可是比 mounted 更早调用啊，更早调用意味着更早返回结果，那样性能不是更高？**

   首先，一个组件的 created 比 mounted 也早调用不了几微秒，性能没啥提高； 而且，等到异步渲染开启的时候，created 就可能被中途打断，中断之后渲染又要重做一遍，想一想，在 created 中做ajax调用，代码里看到只有调用一次，但是实际上可能调用 N 多次，这明显不合适。

   相反，若把发ajax 放在 mounted，因为 mounted 在第二阶段，所以绝对不会多次重复调用，这才是ajax合适的位置

   

   ------

   

   1. #### beforeCreate(Function)

      在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

      在数据观测和初始化事件还未开始,data、watcher、methods都还不存在，但是$route已存在，可以根据路由信息进行重定向等操作

      ------

      

   2. #### created

      在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。

      **在实例创建之后被调用，该阶段可以访问data，使用watcher、events、methods，也就是说 数据观测(data observer) 和event/watcher 事件配置 已完成。但是此时dom还没有被挂载。该阶段允许执行http请求操作。**

      ------

      

   3. #### beforeMount

      在挂载开始之前被调用：相关的 render 函数首次被调用。

      该钩子在服务器端渲染期间不被调用。

      **将HTML解析生成AST节点，再根据AST节点动态生成渲染函数。相关render函数首次被调用(划重点)**

      ------

      

   4. #### mounted

      实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。

      注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 

      ```js
      vm.$nextTick：
      mounted: function () {
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered
        })
      }
      ```

      **在挂载完成之后被调用，执行render函数生成虚拟dom，创建真实dom替换虚拟dom，并挂载到实例。可以操作dom，比如事件监听**

      ------

      

   5. #### beforeUpdata

      数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

      该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

      **vm.data更新之后，虚拟dom重新渲染之前被调用。在这个钩子可以修改vm.data更新之后，虚拟dom重新渲染之前被调用。在这个钩子可以修改vm.data更新之后，虚拟dom重新渲染之前被调用。在这个钩子可以修改vm.data，并不会触发附加的冲渲染过程。**

      ------

      

   6. #### updated

      由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

      当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

      注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用

      ```js
      vm.$nextTick：
      
      updated: function () {
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been re-rendered
        })
      }
      ```

      **该钩子在服务器端渲染期间不被调用。**

      **虚拟dom重新渲染后调用，若再次修改$vm.data，会再次触发beforeUpdate、updated，进入死循环**

      ------

      

   7. #### actived

      被 keep-alive 缓存的组件激活时调用。

      该钩子在服务器端渲染期间不被调用。

      ------

      

   8. #### deactived

      被 keep-alive 缓存的组件停用时调用。

      ------

      

   9. #### beforeDestroy

      实例销毁之前调用。在这一步，实例仍然完全可用。

      该钩子在服务器端渲染期间不被调用。

      ------

      

   10. #### destroy

       实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

       该钩子在服务器端渲染期间不被调用。

       ------

       

   11. #### errorCaptured

       **2.5.0+ 新增**
       当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。

       ------

       

5. ### vue指令

   1. v-text

   2. v-html

   3. v-show

   4. v-if

   5. v-else

   6. v-else-if

   7. v-for

   8. v-on

   9. v-bind

   10. v-model

   11. v-slot

   12. v-pre

   13. v-cloak

   14. v-once

   15. <u>**当和 v-if 一起使用时，v-for 的优先级比 v-if 更高。**</u>

       

6. 路由守卫

   ```js
   router.beforeEach((to,from,next) = >{
   	//to 将要跳转到的组件(目标组件)
     next()//进入下一个组建的钩子函数
     next(false)//阻止跳转,中断导航
     next("/login")//进入指定的组件钩子函数
   })
   ```

   

   

   

   

7. vue组件通信

   1. 父子间通信
      1. 父传子
         - props选项值形式
         - props数据验证
      2. 子传父
         - 自定义事件
         - $emit
   2. 非父子组件通信
      - ref绑定来完成
      - event-bus事件总线
   3. vue-router
      - 路由传参
   4. 多组件通信
      - vuex

   

8. 

9. 

10. 

11. 

12. 

13. 

    ```
    
    ```

    