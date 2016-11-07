function alerttest()
{
  nihao = "你好世界"
  alert(nihao)
}


function disp_prompt()
  {
    var name = prompt("请问你叫什么名字？")
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
  //alert("nihao")
   window.opener=null;
   window.open('','_self');
   window.close();
  }
 }

function guess_age()
{
  var age = prompt("请输入年龄"，20160101)
  if (age != null && age.length == 8 && age.type == int )
  {
    age = 20161101 - age
    document.write(<p>你的年龄是：</p>,age)
  }
  else{

  }
}


  /*var a = prompt("说出你的名字：");
 var b = prompt("留下你的芳龄：");
var c=prompt("来自哪个地方：")
 var d=prompt("告诉我你的职业：")
 var user1 = [a,b]*/
function collect_user()
 {
  var user = [1,2,3,4]
  /*user[0]=prompt("说出你的名字：")
  user[1]=prompt("留下你的芳龄：")
  user[2]=prompt("来自哪个地方：")
  user[3]=prompt("告诉我你的职业：")*/
  document.wirte(user)


  document.wirteln(user[0],user[1])

 }
