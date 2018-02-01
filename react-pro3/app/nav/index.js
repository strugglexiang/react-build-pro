import React from 'react'
import {NavLink} from 'react-router-dom'
import  '../css/nav.css'
const nav = () => {
    return (
        <div>
            <NavLink exact to='/' className='test' activeClassName='bbb'>测试页面</NavLink> &nbsp;|&nbsp;
            <NavLink  to='/page2/:strugglexiang/:旷亚洲' style={{fontSize:'25px',color:'black'}}>测试页面2</NavLink>&nbsp;|&nbsp;
            <NavLink  to='/page3' activeClassName='ccc'>测试页面3</NavLink>&nbsp;|&nbsp;
            <NavLink  to='/redirect'>redirect跳转到page2</NavLink>&nbsp;|&nbsp;
            <NavLink  to='/afsd' >调到错误页面</NavLink>&nbsp;|&nbsp;
        </div>
    )    
}


export default nav
