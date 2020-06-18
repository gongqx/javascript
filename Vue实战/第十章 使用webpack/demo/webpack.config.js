// var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = {
    entry:{
        main:'./main'
    },
    output:{
        // path:path.join.apply(__dirname,'./dist'),
        path:'F:\\workspace-sel\\javascript\\Vue实战\\第十章 使用webpack\\demo\\dist',
        publicPath:'./dist',
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("main.css")
    ]
};
module.exports = config;