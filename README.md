# react-build-pro
react全家桶，主要包括项目构建和路由。

# 使用官方脚手架构建项目
```
npm i -g create-react-app
create-react-app react-pro1(不能写驼峰大写字母)
npm run start or npm start
```

# 使用第三方脚手架
需要yoeman支持
```
1.
  npm i -g yo
2.
  npm i -g  generator-react-webpack
3.
  mkdir 项目名
  yo react-wepack
```

# 自己使用webpack一步步构建项目
```
1.创建项目文件，安装依赖
  mkdir react-pro3
  cd react-pro3
  npm init -y
  npm i -D webpack
  npm i -D webpack-dev-server
2.创建打包源文件
  cd react-pro3
  mkdir app
  touch index.js
3.写webpack配置文件
  touch webpack.config.js
  
  const path = require('path')
  module.export = {
    entry:'./app/index.js',
    output:{
      filename:'index.html',
      path:path.resolve(__dirname,'dist'), //dist文件夹可以不用创建，会自动生成
      publicPath:'temp/', //指向内存，为了热更新
    },
    devServer:{
      contentBase:'./',
      compress:true,
      host:'localhost',
      port:'4000'
    }
  }
4.webpack需要针对es6和react进行配置
  cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
  webpack.config.js中增加mduole配置
  module:{
     loaders:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loaders:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        }
    ]   
  }
5.wepback解析css文件样式设置
npm install --save-dev style-loader css-loader
 webpack.config.js
  loaders里面添加
   {
    test:/\.css$/,
    loader:['style-loader','css-loader']
   }

6.书写react代码
cnpm install --save react  react-dom
```


# react引入的组件其实是一个函数，这里要注意,也就是说ReactDOM.render的第一个参数其实是一个函数
所以创建状态组件可以export一个匿名函数

# react创建组件必须引入
```
import React(这里必须是这个单词) from 'react'
import ReactDOM(这里就可以自定义命名) from 'react-rotuer-dom'
```
# 路由的引入和书写
- React创建组件的三种方式及其区别
https://www.cnblogs.com/wonyun/p/5930333.html

- react exact 路由严格匹配
http://blog.csdn.net/mapbar_front/article/details/72832057
```
npm install --save react-router react-router-dom

在打包根文件index中
improt {BrowserRouter as Router,Route} from 'react-rotuer-dom'
渲染
<Router>
  <Route exact='/'  component={}></Route>
</Router>
```
# 路由的配置
```
import React from 'react'
improt {NavLink} from 'react-router-dom'
export default  ()=>{
    <div>
      <NavLink exatct to=''></NavLink>
    </div>
}
```

# 样式的引入可调用
- css文件
```
 import '../css/nav.css'
 className='样式名'
```
- 暴力强制方法
```
  style={{fontSize:'30px',background:'red'}}
```
- NavLink 激活状态样式设置
```
  activeClassName='样式名'
  设置.active,react会帮我们自动识别 
```

#  路由404 和 redirect
```
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
<Router>
   <Switch>
      <Redirect from='/redirect'  to='page1 or page2 or page3' >redirect跳转</Redirect>
      <Route component={404component}></Route>  最后面才配置404
   </Switch>
</Router>
```

# 通过路由传值
- 这种方式很少使用，有更优雅的方式

```
打包根文件
<Route   path='page1/:param1/:param2'  component={}></Route>
路由导向组件
<div>
   参数1:{this.props.match.params.param1}
   参数2:{this.props.match.params.param2}
</div>
```
- 这里发现一个坑，用第三种方式创建组件不用打逗号(后面发现不是坑，是es6类的写法)
```
  componentWillMount(){
  }//此处不用逗号
  render(){}
```
#  路由器Router属性操作
- basename  路由分区 主要用于功能划分
- forceRrefresh  路由开关 布尔值 为true时，真实的服务器请求信息，整个页面DOM进行本地缓存，生成React Router实现本地单页应用
- 路由的5中模式
1.  BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。
2.  HashRouter：在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
3.  MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
4.  NativeRouter：经常配合ReactNative使用，多用于移动端，以后ReactNative课程中会详细讲解。
5.  StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。


# propt(提示) 
在MemoryRouter内存路由模式中是不起作用的
```
  import {Prompt} from 'react-router-dom'
  true 启用
  false 不启用
  <Prompt message='是否要忍心离开'   when={true}></Prompt>
```
# 坑点总结
1.  组件方法中this是不会自动指定的，需要constructor中bind指定
2.  

# es6 class
http://es6.ruanyifeng.com/?search=constructor&x=0&y=0#docs/class
JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```
上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的class改写，就是下面这样。
```
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。

Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

# es6 extends
http://es6.ruanyifeng.com/?search=constructor&x=0&y=0#docs/class-extends


# 有关为什么子组件中super传入porps
https://segmentfault.com/q/1010000008340434
1.  调用super的原因：在ES6中，在子类的constructor中必须先调用super才能引用this
2.  super(props)的目的：在constructor中可以使用this.props
3.  最后，可以看下React文档，里面有一段
```
Class components should always call the base constructor with props.
```

```
如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
如果你在constructor中要使用this.props,就必须给super加参数：super(props)；
（无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）
如果没用到constructor,是可以不写的,直接：

class HelloMessage extends React.Component{
    render (){
        return (
            <div>nice to meet you! {this.props.name}</div>
        );
    }
}
//不过这种只是用render的情况，使用一般的ES6函数写会更简便：
const HelloMessage = (props)=>(
    <div>nice to meet you! {this.props.name}</div>
)
```




