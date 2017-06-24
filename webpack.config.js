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
                test:/\.(css|scss)$/,
                //use:['style-loader',{loader:'css-loader',options:{modules:true,sourceMap:true,importLoaders:1,localIdentName: "[name]--[local]--[hash:base64:8]"}},'sass-loader',"postcss-loader"]
                //use:['style-loader',{loader:'css-loader',options:{modules:true,sourceMap:true,importLoaders:1,localIdentName: "[name]"}},'sass-loader',"postcss-loader"]
                use:['style-loader',{loader:'css-loader',options:{modules:true,sourceMap:true,localIdentName:'[name]__[local]--[hash:base64:8]'}},'postcss-loader']
            },
            {
                test:/\.(svg|woff|woff2|ttf|eot)$/,
                use:'file-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.htmls','.css','.scss']
    },
    plugins:[
      //new webpack.optimize.CommonsChunkPlugin({names: ["apps","vendor"]}),
      new webpack.NamedModulesPlugin(),
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
        contentBase:[path.join(__dirname,'./dist/'),path.join(__dirname,'./conf/'),path.join(__dirname,'./ext/')],
        disableHostCheck: true
    }
}