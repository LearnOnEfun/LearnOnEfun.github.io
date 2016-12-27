function showPic(whicpic){
  var source = whicpic.getAttribute("href");
  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');
  var text = whicpic.getAttribute("title");
  placeholder.setAttribute("src",source);
  description.firstChild.nodeValue = text;
}
