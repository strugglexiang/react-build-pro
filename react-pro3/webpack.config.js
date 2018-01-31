const path = require('path')
module.exports = {
    entry:'./app/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'temp/' //文件夹指向内存
    },
    devServer:{
        contentBase:'./',
        compress:true,
        host:'localhost',
        port:4000,   
    },
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
}