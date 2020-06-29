1. 为何 Vue 采用异步更新

   vue 是组件级别更新, 如果不采用异步更新,那么每次更新都会对当前组件进行重新渲染,所以为了性能考虑,vue 会在本轮数据更新后,再去异步更新视图

2. ### vue 修饰符

3. ### vue指令

   1. 自定义指令的时候在注册方法的时候必须是小写,否则注册的指令会失效.标签体内寻找到的指令都是会自动转换成小写

      ```js
        //注册全局指令
          /* 
            el:指令属性所在的标签对象
            binding:包含指令相关信息数据对象,value存的就是表达式的值
          */
          Vue.directive('upper-text', (el, binding) => {
            el.innerText = binding.value.toUpperCase()
          })
                //注册局部指令 只能在当前vm实例里面有效
            directives: {
              'lower-text': (el, binding) => {
                el.innerText = binding.value.toLowerCase()
              },
              'lowertext': (el, binding) => {
                console.log(binding)
                el.innerText = binding.value.toLowerCase()
      
              }
            }
      ```

      

4. ### vue 插槽

5. ### vue 生命周期

   在 created 阶段已经进行了数据的劫持代理
   用户发请求一般都是在 mounted 里面进行,如何必须要用户看到实时信息的话需要放在 beforeMount 里面.一般情况下,在 beforeMount 里面发请求的时候,如果数据量大,有很多运算之内的操作等,会造成页面卡顿,加载费时等,用户体验性不好.
   虚拟 DOM 挂载完成是在 mounted 阶段
   \$el 是当前 Vue 应用所有的虚拟 DOM 对象编译完成的真是 DOM 对象片段,在 mounted 可见

   ##### **为什么不在 created 里去发 ajax？created 可是比 mounted 更早调用啊，更早调用意味着更早返回结果，那样性能不是更高？**

   首先，一个组件的 created 比 mounted 也早调用不了几微秒，性能没啥提高； 而且，等到异步渲染开启的时候，created 就可能被中途打断，中断之后渲染又要重做一遍，想一想，在 created 中做 ajax 调用，代码里看到只有调用一次，但是实际上可能调用 N 多次，这明显不合适。

   相反，若把发 ajax 放在 mounted，因为 mounted 在第二阶段，所以绝对不会多次重复调用，这才是 ajax 合适的位置

   ***

   1. #### beforeCreate(Function)

   在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

   在数据观测和初始化事件还未开始,data、watcher、methods 都还不存在，但是\$route 已存在，可以根据路由信息进行重定向等操作

   ***

   2. #### created

   在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，\$el property 目前尚不可用。

   **在实例创建之后被调用，该阶段可以访问 data，使用 watcher、events、methods，也就是说 数据观测(data observer) 和 event/watcher 事件配置 已完成。但是此时 dom 还没有被挂载。该阶段允许执行 http 请求操作。**

   ***

   3. #### beforeMount

   在挂载开始之前被调用：相关的 render 函数首次被调用。

   该钩子在服务器端渲染期间不被调用。

   **将 HTML 解析生成 AST 节点，再根据 AST 节点动态生成渲染函数。相关 render 函数首次被调用(划重点)**

   ***

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

   **在挂载完成之后被调用，执行 render 函数生成虚拟 dom，创建真实 dom 替换虚拟 dom，并挂载到实例。可以操作 dom，比如事件监听**

   ***

   5. #### beforeUpdate

   数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

   该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

   **vm.data 更新之后，虚拟 dom 重新渲染之前被调用。在这个钩子可以修改 vm.data 更新之后，虚拟 dom 重新渲染之前被调用。在这个钩子可以修改 vm.data 更新之后，虚拟 dom 重新渲染之前被调用。在这个钩子可以修改 vm.data，并不会触发附加的冲渲染过程。**

   ***

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

   **虚拟 dom 重新渲染后调用，若再次修改\$vm.data，会再次触发 beforeUpdate、updated，进入死循环**

   ***

   7. #### actived

   被 keep-alive 缓存的组件激活时调用。

   该钩子在服务器端渲染期间不被调用。

   ***

   8. #### deactived

   被 keep-alive 缓存的组件停用时调用。

   ***

   9. #### beforeDestroy

   实例销毁之前调用。在这一步，实例仍然完全可用。

   该钩子在服务器端渲染期间不被调用。

   ***

   10. #### destroy

   实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

   该钩子在服务器端渲染期间不被调用。

   ***

   11. #### errorCaptured

       **2.5.0+ 新增**
       当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。

       ***

6. ### vue 指令

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

7. 路由守卫

   ```js
   router.beforeEach((to,from,next) = >{
   	//to 将要跳转到的组件(目标组件)
     next()//进入下一个组建的钩子函数
     next(false)//阻止跳转,中断导航
     next("/login")//进入指定的组件钩子函数
   })
   ```

8. vue 组件通信

   1. 父子间通信
      1. 父传子
         - props 选项值形式
         - props 数据验证
      2. 子传父
         - 自定义事件
         - \$emit
   2. 非父子组件通信
      - ref 绑定来完成
      - event-bus 事件总线
   3. vue-router

      - 路由传参

   4. 多组件通信

- vuex

8. vuex
   组件 => dispach => Actions => commit => Mutation => mutate => State => Render

   1. State

   - vuex 中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.\$store.state 来获取我们定义的数据；

   2. Getters：

   - Getter 相当于 vue 中的 computed 计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义 vuex 的 Getter 来获取，Getters 可以用于监听、state 中的值的变化，返回计算后的结果，

   3. Mutations：
      \*mutations 是操作 state 数据的方法的集合，比如对该数据的修改、增加、删除等等。

   4. Actions 异步操作
   
   5. Modules 模块化状态管理
   
      ​	当项目庞大，状态非常多时，可以采用模块化管理模式。Vuex 允许我们将 store 分割成模块（module）。	每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。
   
9. 

10. 







    ```
    
    ```
