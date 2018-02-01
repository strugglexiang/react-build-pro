import React from 'react'

export default class extends React.Component{
    componentWillMount(){
       console.log(this.props)
    }
    render(){
        return (
            <div>
               默认页面B&nbsp;
               参数1：{this.props.match.params.param1}&nbsp;
               参数2：{this.props.match.params.param2}&nbsp;
            </div>
        )
    }
}