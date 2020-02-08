let year = new Date().getFullYear()
console.log(year)//getFullYear()返回当前年份

//2020.02.07 补 晚上10：30完成 275760年

document.getElementById("cal").innerHTML = calendar(year)
//当前
//      换成输入框
// var curyear = document.getElementById('curyear')
// curyear.innerHTML=year
//上一年
var preyear = document.getElementById('preyear')
var last =new Date().getFullYear()-1;
preyear.innerHTML = '<<'+last;
console.log(last)
preyear.onclick=function(){
    year--;
    last--;
    next--;
    // curyear.innerHTML=year //换成输入框
    ipt.value = year
    preyear.innerHTML = '<<'+last;
    nextyear.innerHTML = '>>'+ parseInt(last+2);
    console.log(year)
    document.getElementById("cal").innerHTML = calendar(year)

}
//下一年
var nextyear = document.getElementById('nextyear')
var next = new Date().getFullYear()+1
nextyear.innerHTML = '>>'+ next;
nextyear.onclick=function(){
    year++
    last++
    next++
    // curyear.innerHTML=year
    ipt.value = year
    preyear.innerHTML = '<<'+parseInt(next-2);
    nextyear.innerHTML = '>>'+ next;
    document.getElementById("cal").innerHTML = calendar(year)

}
var ipt = document.getElementById('ipt1')
var num =parseInt(ipt.value)

ipt.onchange = function(){
    num=parseInt(this.value)
    console.log(num)
    console.log(typeof num)
    console.log(num)
    last=num-1;
    next=num+1;
    year =num
    preyear.innerHTML = '<<'+parseInt(this.value-1);
    nextyear.innerHTML = '>>'+ (num+1);

    // alert('内容已改变'+this.value)
    document.getElementById("cal").innerHTML = calendar(this.value)
    
}
document.onkeydown=function(){
    if(event.keyCode==39){
        //39向右
        nextyear.click()    
    }
    if(event.keyCode==37){
        //37向左
        preyear.click()
    }
    // alert(event.keyCode)

}

function setCalendar(year){
    // var preyear = document.getElementById('preyear')
    // preyear.onclick=function(){
    //     console.log(year)
    //     year--;
    //     console.log(year)
    //     document.getElementById("cal").innerHTML = calendar(year)
  
    // }
}