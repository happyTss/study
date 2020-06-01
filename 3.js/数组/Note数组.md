1. join

   ```
   该方法只接受一个参数,即分隔符
   const arr = [1,2,3]
   console.log(arr.join("-"))//1-2-3
   
   衍生用法
     function repeatString(str,n){
       return new Array(n+1).join(str)
     }
     console.log(repeatString(arr,2))
     1,2,31,2,3
   ```

2. 