const path = require('path');
const webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV||'DEVELOPMENT';

console.log(`Enviroment=${process.env.NODE_ENV}`);

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
      })
    ];


var serverHost = process.env.SERVER_HOST?process.env.SERVER_HOST:'localhost:8080';
var serverPath = process.env.SERVER_PATH?process.env.SERVER_PATH:'/dds';

var buildConfig = {
    serverHost:serverHost,
    baseHttp:`http://${serverHost}/${serverPath}`,
    baseWebsocket:`ws://${serverHost}/${serverPath}`
}


var externals = {
        'conf/config':'require("cfg")',
        'build-config':JSON.stringify(buildConfig)
};

module.exports = {
    entry:{
        app:'./src/app.js',
        admin:'./src_admin/app.js',
        webclient:'./src_webclient/app.js',        
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
    externals: externals
}