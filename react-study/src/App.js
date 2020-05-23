import React, { Component } from 'react'

export default class App extends Component {
  state = {
    num:0
  }
  // constructor(props){
  //   super(props);
  // }
  
  componentWillMount() {
    //页面将要挂载
    console.log("----------componentWillMount----------")
  }
  
  componentDidMount() {
    // 页面挂载完毕  ajax通信也是在此时进行
    console.log("----------componentDidMount----------")
    let num = this.state.num
    setInterval(() => {
      //vue this.xxx = value
      //小程序 this.setData 
      
      this.setState({
        num:num++
      },() => {})
    }, 1000);
    setTimeout(() => {
      // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }, 3000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 是否要更新   性能优化在此时
    console.log("----------shouldComponentUpdate----------")
    return true
    
  }

  componentWillUpdate(nextProps, nextState) {
    // 页面将要更新
    console.log("----------componentWillUpdate----------")
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    // 页面更新完成
    console.log("----------componentDidUpdate----------")
    
  }
  
  componentWillUnmount() {
    // 将要卸载
    console.log("----------componentWillUnmount----------")
    
  }
  
  componentWillReceiveProps(nextProps) {
    // 父组件改变Props是触发
    console.log("----------componentWillReceiveProps----------")
    
  }
  

  render() {
    return (
      <div>
        <h1>App</h1>
        <p>{this.state.num}</p>
      </div>
    )
  }
}
