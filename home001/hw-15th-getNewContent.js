function getNewContent(){
  var request = getHTTPObject();
  if (request){
    request.open("GET", "hw-15th.txt", true);
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
      alert("返回值，收到！")
      var para = document.createElement("p");
      var text = document.createTextNode(request.responseText);
      para.appendChild(text);
      document.getElementById('new').appendChild(para);
      }
    };
    request.send(null);
  }
  else{
    alert('Sorry,your brower doesn\'t support XMLHttpRequest');
  }
  alert("函数结束")
}
addLoadEvent(getNewContent);
