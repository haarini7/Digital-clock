function clock(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var day_nyt="AM";
    if(h>12){
        day_nyt="PM";
        h=h-12;
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    console.log(h+":"+m+":"+s+day_nyt);
    setTimeout(clock,5000);
}
clock();