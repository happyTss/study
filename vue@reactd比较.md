vue和 React的区别

1. ### React数据是不是可变的

   react整体是函数的思想,把组件设计成纯组件,状态和逻辑通过参数传入,所以在react中,是单向数据流,推崇结合immutable来实现数据的不可变,react在setState之后重新走渲染流程,如果shouldComponentUpdate返回的是true,就继续渲染,如果返回了false,就不会重新渲染,pureComponent就是重写了shouldComponentUpdate,然后在里面做了props和state的浅层对比.

   ------

   vue的思想是响应式的,也就是基于数据可变的,通过对应每一个属性建立Watcher来监听,当属性变化的时候,响应式的更新对应的虚拟Dom

   ------

   

   <u>react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。</u>

2. ### 通过js来操作一切,还是用各自的处理方式

   react的设计思路是all in js  ,通过js来生成HTML,所以设计了jsx,还有js操作css

   ```
   
   ```

   vue是把HTML,css,js组合到一起,用各自的处理方式,vue有单文件组织,可以把HTML,css,js写到一个文件中,html提供模板引擎来处理.

   

3. ### 类式的组件写法,还是声明式的组件写法

   react是类式的写法,api很少

   vue是声明式写法,通过传入各种options,api和参数都很多,

   所以react和typescript更容易写在一起,vue稍显复杂

   vue结合vue-class-component也可以实现类式的写法，但是还是需要通过decorator来添加声明，并不纯粹。

   react可以通过高阶组件（Higher Order Components--HOC）来扩展，而vue需要通过mixins来扩展

4. ### 什么功能内置，什么交给社区去做

   react做的事情很少，很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些，
    比如 redux的combineReducer就对应vuex的modules，
    比如reselect就对应vuex的getter和vue组件的computed，
    vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要。

   

   





​	











​			