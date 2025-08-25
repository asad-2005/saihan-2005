function exittab(){
    window.close();
}
function showdate(){
    let now=new Date();
    let date=now.toLocaleDateString();
    let time=now.toLocaleTimeString();
    document.getElementById("clock").innerHTML=date+""+time;
    setInterval(showdate,1000);
    showdate();
    console.log(date,time);
}
