//画布
window.onload = function plot(){
//  var canvas = document.querySelector("#canvas")
//是否可以表格内的线条也调节细点？
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  cW = canvas.width;
  cH = canvas.height;
  len = 100;
  w = cW / len ;
  h = cH / len ;

  function drawline(x1,y1,x2,y2){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  for (var i = 0; i <= len; i++){
    drawline(w * i, 0, w * i, cH)
    drawline(0, h * i, cW, h * i)
  }
}

//获取鼠标位置
function getMousePos(event) {
            var e = event || window.event;
            return {'x':e.clientX,'y':clientY}
        }
//填色
function draw(){

}


setInterval(draw, 10);
