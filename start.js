var i=0;
var delay=1000;
var cronometro;
function detener(){
    clearInterval(cronometro);
}
function carga()
{
cronometro = setInterval(function(){
    if(i<7){
       if(i%2==0){
            document.getElementById("fonter").style.color="red";
       }else{
            document.getElementById("fonter").style.color="white";
        }
        i++;
    }else{
        detener();
        document.getElementById("fonter").style.color="";
    }
    
    },1000);
}
carga();