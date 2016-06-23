window.onload=function(){ 

//提交按钮校验

var recovery = document.getElementById("recoveryButton");
   recovery.onclick=function(){
    var f = document.getElementById("recoveryForm");
    var e1 = document.getElementById("usernameError").innerHTML;
    var e2 = document.getElementById("oneError").innerHTML;
    var e3 = document.getElementById("twoError").innerHTML;
    var e4 = document.getElementById("verifyError").innerHTML;
    if(e1 == "" && e2  == ""  && e3  == ""  && e4  == ""){
      var username=document.getElementById("nameId").value;
      var onePassword=document.getElementById("oneId").value;
      var twoPassword=document.getElementById("twoId").value;
      var verifycode=document.getElementById("verify").value;
      var xmlHttp=createXmlHttp();
      // xmlHttp.open("POST","/cloudprint/recovery",true);
      xmlHttp.open("POST","/cloudprint",true);
      xmlHttp.setRequestHeader("Content-Type","applicotiaon/x-www-form-urlencoded");
      xmlHttp.send("username="+username+"&onePassword="+onePassword+"&twoPassword"+twoPassword+"&verifycode="+verifycode);
      xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState==4&&xmlHttp.status==200){
          // var text=xmlHttp.responseText;
          var text="该用户不存在！";
          if(!(text == null || text.trim() == "")){
            alert(text);
          }else{
            alert("修改成功！");
          }
        }
      };
    }else{
      alert("信息填写有误！");
    }
};

//获取验证码按钮

   var vb = document.getElementById("verifyButton");
     vb.onclick=function(){
      var i=60;
      var js=setInterval(function(){ if(i>=0){
      vb.innerHTML=i+"秒后重新获取";
      i--;
      vb.disabled="disabled";
   }else{
      vb.innerHTML="重新获取";
      vb.disabled=null;
      clearInterval(js);
    }
   },1000);
      var username=document.getElementById("nameId").value;
      var xmlHttp = createXmlHttp();
      // xmlHttp.open("POST","/cloudprint/getVerify",true);
      xmlHttp.open("POST","/cloudprint",true);
      xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xmlHttp.send("username="+username);
      xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
          // var text = xmlHttp.responseText;
          var text = "该用户不存在！";
          if(text == null || text.trim() == ""){
            alert("验证码发送成功请注意查收！");
          }else{
            alert(text);
          }
        }
      };
   };

   //用户名校验

  var nameFun = document.getElementById("nameId");
  nameFun.onblur=function(){
   var nameValue = nameFun.value;
   var mes1 = document.getElementById("usernameError");
   var patt1=/\W/;
   if(nameValue==null || nameValue.trim()==""){
   mes1.innerHTML="用户名不能为空！";
 }else{
      mes1.innerHTML="";
 }
};

//密码校验

  var oneFun = document.getElementById("oneId");
  oneFun.onblur=function(){
   var oneValue = oneFun.value;
   var mes2 = document.getElementById("oneError");
   var patt2=/\W/;
   if(oneValue==null || oneValue.trim()==""){
   mes2.innerHTML="密码不能为空！";
 }else if(oneValue.length > 20 || oneValue.length < 6){
       mes2.innerHTML="密码只能是6-20位";
 }else if(patt2.test(oneValue)){
         mes2.innerHTML="密码只能是字符";
 }else{
      mes2.innerHTML="";
 }
};

//确认密码校验

  var twoFun = document.getElementById("twoId");
  twoFun.onblur=function(){
   var twoValue = twoFun.value;
   var mes3 = document.getElementById("twoError");
   if(twoValue==null || twoValue.trim()==""){
   mes3.innerHTML="不能为空";
 }else if(twoValue!=oneFun.value){
     mes3.innerHTML="两次输入密码不一致";
 }else{
      mes3.innerHTML="";
 }
};

//验证码校验

 var verifyFun = document.getElementById("verify");
  verifyFun.onblur=function(){
   var verifyValue = verifyFun.value;
   var mes4 = document.getElementById("verifyError");
   if(verifyValue==null || verifyValue.trim()==""){
   mes4.innerHTML="验证码不能为空！";
 }else{
      mes4.innerHTML="";
 }
};

};

function createXmlHttp(){
  try{
    return new XMLHttpRequest();
  }catch(e){
    try{
      return ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
      try{
        return ActiveXObject("Microsoft.XMLHTTP");
      }catch(e){
        alert("不支持的浏览器类型");
        throw e;
      }
    }
  }
}
