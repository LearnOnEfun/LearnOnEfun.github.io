function alerttest()
{
  nihao = "你好世界";
  alert(nihao);
}


function disp_prompt()
  {
    var name = prompt("请问你叫什么名字？");
    if (name != null && name != "");
      {
        name += "，你好";
        document.write(name);
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
  var age = prompt("请输入出生年份:", 2016);
  if (age != null && age.length == 4  )
  {
    var nowDate = new Date();
    var year = nowDate.getFullYear();

    age = year - age;
    document.write('<p>你的年龄是：</p>' + age);
  }
  else {
    alert("输入数值不当，请重新输入！");
  }

}


function collect_user()
 {
  var personinfo = Array();
  personinfo[0] = document.getElementById('name');
  /*user[0]=prompt("说出你的名字：")
  user[1]=prompt("留下你的芳龄：")
  user[2]=prompt("来自哪个地方：")
  user[3]=prompt("告诉我你的职业：")*/
  document.write(personinfo)

 }
