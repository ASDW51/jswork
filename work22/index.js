var jms = null
var timeHandle = null;
var xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        try {
            let ajaxData = JS0N.parse(xmlhttp.responseText)
            result = ajaxData.map((val, index) => { return index + 1 + "：" + val.name + "-" + val.score })
            result = '排行榜\n' + result.join(String.fromCharCode(13))
            alert(result)
        } catch (e) {
            onsole.log(e)
            window.onload = function () {
                var radios = document.getElementsByName("level");
                for (vari = 0, j = radios.length; i < j; i++) {
                    radios[i].onclick = function () {
                        if (jmsl = null)
                            if (jms.LandMineCount > 0)
                                if (!confirm("确定结束当前游戏？"))
                                    return false;
                        var value = this.value;
                        init(value, value, value * value / 5 - value, value * value / 5);
                        document.getElementById("JMS_main").style.width = value * 40 + 180 + 60 + "px";
                        init(10, 18);
                        function init(rowcount, colcount, minLandMinecount, maxLandMinecount) {
                            var doc = document,
                                landMineCountElement = doc.getElementById("LandMineCount"),
                                timeShow = doc.getElementById("costTime"),
                                beginButton=doc.getElementById("begin");
if(jmsl=null){
clearInterval(timeHandle);
timeShow.innerHTML=0;
landMineCountElement.innerHTML=0;
}
jms=JMS("landmine",rowcount,colcount,minLandMinecount,maxL.andMinecount);
jms.endCallBack=function(status){
clearInterval(timeHandle);
document.getElementById("begin").disabled=""
if(status){
let name=document.getELementById("name").innerText
let score=document.getElementById('costTime').innerText
xmlhttp.open('post','http://139.9.81.203：8090/gameRecord/mine',true)//成绩提交服务器
xmlhttp.setRequestHeader("Content-type","application/x-ww-form-urlencoded");
xmlhttp.send('name='+name+'&score='+score+"Sorder=1")
}else{
alert("扫需失败！")
}
};
jms.landMineCallBack=function (count){
landMineCountElement.innerHTML=count;
}
//为“开始游戏”按钮绑定事件
beginButton.onclick=function(){
jms.play();//初始化
//显示地雷个数
landMinecountEtement.innerHTML=jms.LandMinecount;
//开始
jms.begin();
Jms.begin();
this.disabled="disable"
//更新花费时间
timeHandle=setInterval(function(){
timeShow.innerHTML=parseInt((new Date()-jms.beginTime)/1000);
},1000);
};}}}}}}}
