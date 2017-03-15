var cW = canvas.width = 500;
var cH = canvas.height = 500;
var cellNum = 50; //cell 个数
var w = cW / cellNum ; //cell的长10px
var h = cH / cellNum ;//cell的宽10px

var point = 100

//画布
window.onload = plot()

function plot(){
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  function drawline(x1,y1,x2,y2){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  for (var i = 0; i <= cellNum; i++){
    drawline(w * i, 0, w * i, cH)
    drawline(0, h * i, cW, h * i)
  }
}



//初始随机数组
function randomCell(){
  var random_Cell_coordinate = [];
  for (var i=0; i< point; i++){
      var coordinate = [];
      x = Math.floor(Math.random()*cW/w)*10;
      y = Math.floor(Math.random()*cH/h)*10;
      coordinate = [x,y];
      random_Cell_coordinate.push(coordinate);
  }
  return random_Cell_coordinate;
  console.log(random_Cell_coordinate)
}

//填色
function drawcell(f){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  len = f.length
  for (var i=0; i< len; i++){
      x = f[i][0]
      y = f[i][1]
      ctx.fillStyle= "#FF0000"
      ctx.fillRect(x,y,w-1,h-1)
  }
}

//初代演变
function NextLife(){
    var every_cell = []
    //遍历每个cell周围8个cell
    for (var x=0; x< cellNum; x++){
      for (var y=0; y< cellNum; y++){
        z1 = [(x-1)*w,(y-1)*h]
        z2 = [x*w,(y-1)*h]
        z3 = [(x+1)*w,(y-1)*h]
        z4 = [(x-1)*w ,y*h]
        z5 = [(x+1)*w, y*h]
        z6 = [(x-1)*w, (y+1)*h]
        z7 = [x*w, (y+1)*h]
        z8 = [(x+1)*w,(y+1)*h]
        z9 = [x*w,y*h] //主cell
        every_cell.push([z1,z2,z3,z4,z5,z6,z7,z8,z9])
      }
    }
    //console.log(every_cell)

    var f = randomCell()//导入随机数组
    var f_len = f.length
    var length = every_cell.length

    var tmp_obj = {}
    for (var x =0; x < f_len; x++){ //利用一个对象方法来验证某个数组是否在一个多元数组（直接的js array方法没找到）
      tmp_obj[f[x]] = x
    }

    for (var x=0; x< length; x++){
      for (var y=0; y< 9; y++){
          //console.log(every_cell[x][y])
          if (tmp_obj.hasOwnProperty(every_cell[x][y])){
            every_cell[x][y][2] = 1           //判断每个点是否属于初始数组,1表示在，0表示否
            //console.log(every_cell[x][y])
          }
          else {
            every_cell[x][y][2] = 0
            //console.log(every_cell[x][y])
          }
        }
      }
      //co'nsole.log(every_cell)

  //判断下一轮cell存活与否
    var next = []
    for (var x = 0; x < length; x++){
      var count = 0
      for (var y = 0; y < 8; y++){ //周围8个点存活情况加总
        count = count + every_cell[x][y][2]
      }
      if (every_cell[x][8][2] == 0 && count >= 3){
          next.push(every_cell[x][8])
      }
      if (every_cell[x][8][2] == 1 &&  2 <= count <=3  ){
        next.push(every_cell[x][8])
      }

    }
    //console.log(next)
    return next
}


function init(){
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plot()
  setInterval(drawcell(NextLife()));
}
