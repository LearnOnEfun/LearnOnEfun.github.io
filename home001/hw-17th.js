//画布
window.onload = function plot(){
  var canvas = document.querySelector("#canvas")
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


function draw(){

}


setInterval(draw, 10);
