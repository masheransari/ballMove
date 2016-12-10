var x = document.getElementById("ball");
var num = 0;
function to(){

 
   var save =  x.style.marginTop = num + "px";
  num = num + 10;

}
function bo(){
    x.style.marginTop = num + "px";
    num = num - 10;
}
function right(){
    x.style.left =num + "px";
    num = num - 40;
}
function left(){

    x.style.left =num + "px";
    num= num + 40;
}
function center(){
    num = 0;
   // x.style.position = "relative";
    x.style.right = num + "px" ;
}