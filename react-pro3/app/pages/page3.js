import React from 'react'
import {Prompt} from 'react-router-dom'
export default class extends React.Component{
    constructor(props){
       super(props)
       this.state = {
          promptStatus:false
       }
       this.change = this.change.bind(this)
       this.test = this.test.bind(this)
       console.log('sssssss',this) //这就是为什么要传入props参数在super中
    }
    getInitialState(){
        //经过测试，这个方法不用了
        console.log(1)
        return {
            testNum:1
        }
    }
    test(){
        console.log(this.props)
    }
    change(){
       this.setState({
           promptStatus:!this.state.promptStatus
       })
    }
    render(){
        return (
            <div>
               <p>默认页面C</p>
               <button onClick={this.test}>方法this测试</button>
               <button onClick={this.change}>{this.state.promptStatus ? '禁用' : '启用'}</button>
               <Prompt  message='是否要忍心离开' when={this.state.promptStatus}></Prompt>               
            </div>
        )
    }
}