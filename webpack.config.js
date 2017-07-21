const path = require('path');
const webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');



var  plugins = [
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
      new HtmlPlugin({
        title: 'Test APP',
        chunks: ['application', 'vendors'],
        filename: 'index.html',
        template: path.join(__dirname, 'src', 'index.html')
      }),
      new HtmlPlugin({
        title: 'Admin APP',
        chunks: ['application', 'vendors'],
        filename: 'admin.html',
        template: path.join(__dirname, 'src_admin', 'admin.html')
      }),
      new HtmlPlugin({
        title: 'WebClient APP',
        chunks: ['application', 'vendors'],
        filename: 'webclient.html',
        template: path.join(__dirname, 'src_webclient', 'webclient.html')
      }),
      new HtmlPlugin({
        title: 'Authorize',
        chunks: ['application', 'vendors'],
        filename: 'auth.html',
        template: path.join(__dirname, 'src_auth', 'auth.html')
      })
    ];
module.exports = {
    entry:{
        app:'./src/app.js',
        admin:'./src_admin/app.js',
        webclient:'./src_webclient/app.js',
        auth:'./src_auth/app.js',         
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
        extensions:['.js','.htmls','.css','.scss'],
        modules: [path.resolve(__dirname, "lib"), "node_modules"]
    },
    plugins:plugins,
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'dist'),
        pathinfo: true
    },
    devServer:{
        host:'0.0.0.0',
        port:8081,
        contentBase:[path.join(__dirname,'./dist/'),path.join(__dirname,'./conf/'),path.join(__dirname,'./ext/')],
        disableHostCheck: true
    },
    // externals: externals
};