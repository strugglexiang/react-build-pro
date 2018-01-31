import React from 'react'
import ReactDOM  from 'react-dom'

// 引入路由
import {BrowserRouter as Router,Route} from 'react-router-dom'
// 引入demo案列
import Page1 from './pages/page1.js'
import Page2 from './pages/page2.js'
import Page3 from './pages/page3.js'


ReactDOM.render(
     <Router>
        <div>
            <Route  exact path='/' component={Page1}></Route>
            <Route path='/page2' component={Page2}></Route>
            <Route path='/page3' component={Page3}></Route>
        </div>
     </Router>
    ,
    document.getElementById('app'))