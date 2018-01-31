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
5.书写react代码
cnpm install --save react  react-dom
```

# 脚手架中使用router和组件书写
- React创建组件的三种方式及其区别
https://www.cnblogs.com/wonyun/p/5930333.html

- react exact 路由严格匹配
http://blog.csdn.net/mapbar_front/article/details/72832057
```
npm install --save react-router react-router-dom
```