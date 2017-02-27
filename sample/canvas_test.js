var c=document.getElementById("mycanvas");
var cxt=c.getContext("2d");//对象是内建的 HTML5 对象
//简便写法
//var ctx = document.getElementById("mycanvas").getContext("2d");
//fillStyle 方法将其染成红色，fillRect 方法规定了形状、位置和尺寸
cxt.fillStyle="#FF0000";
cxt.beginPath();
//语法：arc(前两个元素定义圆的中心点，三代表半径，四起始角度，结束角度，和绘图方向：顺时针或逆时针)
cxt.arc(100,40,30,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();
