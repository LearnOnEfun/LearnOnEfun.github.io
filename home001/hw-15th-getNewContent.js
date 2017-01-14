function getNewContent(){
  var request = getHTTPObject();
  if (request){
    request.open("GET", "hw-15th.txt", true);
    request.onreadstatechange = function() {
      if (request.readState == 4) {
      var para = document.createElement("p");
      var text = document.createTextNode(request.resposeText);
      para.appendChild(txt);
      document.getElementById('new').appendChild(para);
      }
    };
    request.send(null);
  }
  else{
    alert('Sorry,your brower doesn\'t support XMLHttpRequest');
  }
}
addLoadEvent(getNewContent);
