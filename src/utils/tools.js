//导出第三方js，教程 https://webpack.toobug.net/zh-cn/chapter4/exports-loader.html，确保绑定在window下的函数名
//并在webpack.base.conf.js中配置loader
import popup from "./popup";
const fnGroup = {
    dialog:function(param,callback){
        if(param){
            //param暂时没用~~~
            alert("进入房间的钥匙丢了～～");
        }
    }
}

export default fnGroup;
