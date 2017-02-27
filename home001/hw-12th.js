function showPic(whicpic){
  var source = whicpic.getAttribute("href");
  var text = whicpic.getAttribute("title");
  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');

  placeholder.setAttribute("src",source);
  //description.setAttribute("title",text)
  description.firstChild.nodeValue = text;
}
