import React from 'react'
import ReactDOM  from 'react-dom'

// 引入路由
import {BrowserRouter as Router,HashRouter,MemoryRouter,Route,Switch,Redirect} from 'react-router-dom'
// 引入demo案列
import Page1 from './pages/page1.js'
import Page2 from './pages/page2.js'
import Page3 from './pages/page3.js'
import Error from './pages/error.js'
//  引入路由配置
import Nav from './nav/index.js'

ReactDOM.render(
    // basename='demo'
    // forceRefresh={true}
     <Router   >
        <div>
           <Nav/>
           <Switch>
                <Route  exact path='/'  component={Page1}></Route>
                <Route path='/page2/:param1/:param2' component={Page2}></Route> 
                <Route path='/page3' component={Page3}></Route>
                <Redirect from='/redirect' to='/page2/1/2'></Redirect>
                <Route component={Error}></Route> 
                             
           </Switch>
        </div>
     </Router>
    ,
    document.getElementById('app'))