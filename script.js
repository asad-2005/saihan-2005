function exittab(){
    window.close();
}
function showdate(){
    let now=new Date();
    let date=now.toLocaleDateString();
    let time=now.toLocaleTimeString();
    document.getElementById("clock").innerHTML="DATE:"+date+"  TIME:"+time;
    
    console.log(date,time);
}
window.onload = function() {
    showdate();
    setInterval(showdate, 1000);
};
