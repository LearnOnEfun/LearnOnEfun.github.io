nihao = "你好世界"
alert(nihao);

function disp_prompt()
  {
    var name=prompt("请问你叫什么名字？")
    if (name != null && name != "")
      {
        name += "，你好"
        document.write(name)
      }
  }
function close_win()
{
if (window.confirm("是否关闭页面"))
  {
  alert("nihao")
   window.opener=null;
   window.open('','_self');
   window.close();
  }
}
