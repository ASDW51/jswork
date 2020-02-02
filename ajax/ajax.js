function ajax(url,fnsucess,fnfalse){
var oAjax = new XMLHttpRequest();//创建对象
oAjax.open('GET',url+'?t='+new Date().getTime(),true)//连接服务器
oAjax.send()//发送请求
oAjax.onreadystatechange = function(){//绑定事件处理函数，当readystate属性值改变时执行该绑定函数
alert(oAjax.readyState)
    if(oAjax.readyState==4){//等于4时表示请求完成
        if(oAjax.status==200){//200表示文件已找到
            fnsucess(oAjax.responseText)
        }else{
           if(fnfalse){
            alert("错误:"+oAjax.status)
           }
        }
}
}
}
