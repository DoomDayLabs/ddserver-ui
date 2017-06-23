const path = require('path');
const webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        app:'./src/app.js',
        vendor:['react','react-dom','jquery']
    },
    module:{
        loaders:[
            {
                test:/\.(js)$/,
                exclude: /node_modules/,                
                loaders:'babel-loader',
                query: {
                    presets: ['es2015','react','stage-2']
                }
            },
            {
                test:/\.html$/,
                use:'html-loader'
            },
            {
                test:/\.(css)$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions:['.js','.htmls','.css']
    },
    plugins:[
      //new webpack.optimize.CommonsChunkPlugin({names: ["apps","vendor"]}),
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
      new HtmlPlugin({
        title: 'Test APP',
        chunks: ['application', 'vendors'],
        filename: 'index.html',
        template: path.join(__dirname, 'src', 'index.html')
      })  
    ],
    output:{
        filename:'app.js',
        path: path.resolve(__dirname,'dist'),
        pathinfo: true
    },
    devServer:{
        host:'0.0.0.0',
        contentBase:'./dist/',
        disableHostCheck: true
    }
}