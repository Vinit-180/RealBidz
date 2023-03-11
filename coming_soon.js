var countdownDate=new Date();
countdownDate.setDate(2);
countdownDate.setMonth(3);
var countdownDFun=setInterval(function() {
    var now=new Date().getTime();
    var difference=countdownDate-now;
    var days=Math.floor(difference/(1000*60*60*24));
    var hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((difference)%(1000*60*60)/(1000*60));
    var seconds=Math.floor((difference)%(1000*60)/(1000));
    document.getElementById("coming").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";
    if(difference<0)
    {
        clearInterval(countdownDFun);
        document.getElementById("coming").innerHTML="EXPIRED";
    }
}, 1000);