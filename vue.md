1. ### vue修饰符

   

2. ### vue插槽

   

3. ### vue生命周期

   1. #### beforeCreate(Function)

      在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

      ------

      

   2. #### created

      在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。

      ------

      

   3. #### beforeMount

      在挂载开始之前被调用：相关的 render 函数首次被调用。

      该钩子在服务器端渲染期间不被调用。

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

      

      ------

      

   5. #### beforeUpdata

      数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

      该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

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

       

4. ### vue指令

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

       

5. 

   

   

   

6. 

7. 

8. 

9. 

10. 

11. 

12. 

    ```
    
    ```

    