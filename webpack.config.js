const path=require("path");
const HtmlWP=require("html-webpack-plugin");
const CleanWP=require("clean-webpack-plugin");

//导出一个配置文件
module.exports={
    entry:path.resolve(__dirname,"./src/js/main.js"),
    //输出
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //插件配置
    plugins:[
        new HtmlWP({
            template:"./src/index.html",
            filename:"index.html",
            inject:"body"
        }),
        new CleanWP(['dist'])
    ],
    //模块配置
    module:{
        //配置模块规则
        rules:[
            //css
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //less
            {
                 test:/\.less$/,
                 use:['style-loader','css-loader','less-loader']
            },
            //html
            {
                test:/\.(thml|tpl)$/,
                use:['html-loader']
            },
            //静态资源引用
            {
                test:/\.(png|jpeg|gif|svg|mp3|ttf)$/,
                use:[
                    {loader:'url-loader',options:{limit:10240}}
                ]
            },
            //js
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules')
            },
            //vue
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    }
}