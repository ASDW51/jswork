function calendar(y){
    var nian = new Date().getFullYear()
    var month = new Date().getMonth()+1
    var day = new Date().getDate();
    var w = new Date(y,0).getDay();
    var html = '<div class="box">';
    for(var m =1; m <= 12; ++m){
        html += '<table>';
        html += '<tr class="title"><th colspan = "7">'+y +'年'+m+'月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>';
    
    var max = new Date(y,m,0).getDate();
    
    html += '<tr>';
    for(var d =1;d<=max;++d){
        if(w&&d == 1){
            html += '<td colspan ="' + w +'"></td>';

        }
        if(y==nian&&m==month&&d==day){
            html+='<td class="class">'+d+'</td>'
        }else{
            html += '<td>' + d + '</td>';}
            if(w == 6 && d != max){
                html += '</tr><tr>';
            } else if (d==max ){
                html += '</tr>';
            }
            w = (w + 1 > 6) ? 0 : w + 1;
    }
    html += '</table>';
}
html += '</div>';
return html;
}