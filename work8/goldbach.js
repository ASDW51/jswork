function goldbach(){ 
    var s=document.getElementById('odd').value
    if (s%2!=0||i<2){
        alert('请输入偶数数字')
        return false
}
let goldbach=document.getElementById('goldbach')
    var arr=[]
    var a=0
    for(var i =2;i<=s;i++){
        a=0
        for(let j=2;j<i;j++){
            if (i%j==0){
                a++
            }
        }
        if(a==0){
            arr.push(i)
        }
    }
    var str=''
    for(let i=0;i<(arr.length)/2;i++){
        for(let j=0;j<arr.length;j++){
            if((arr[i]+arr[j])===Number(s)){
                str+='<div>'+s+"可以拆分为两个素数"+arr[i]+"与"+arr[j]+"的和"+'</div>'
            }
        }
    }
    goldbach.innerHTML=str
}