window.onload=function(){

  var xmlHttp=creatXmlHttp();

  //登陆按钮校验

var login = document.getElementById("loginButton");
   login.onclick=function(){
    var f = document.getElementById("loginForm");
    var e1 = document.getElementById("usernameError").innerHTML;
    var e2 = document.getElementById("passwordError").innerHTML;
    var e4 = document.getElementById("verifyError").innerHTML;
    if(e1 == "" && e2  == ""  && e4  == ""){
      f.action="";
      f.method="post";
      f.submit();
    }else{
      alert("登陆信息填写有误！");
    }
};

//注册按钮事件

  document.getElementById("registButton").onclick=function(){
		var formId = document.getElementById("loginForm");
		formId.action = "regist.html";
		formId.submit();
	};

//忘记密码事件

		document.getElementById("recoverButton").onclick=function(){
		var formId = document.getElementById("loginForm");
		formId.action = "recovery.html";
		formId.submit();
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

  var wordFun = document.getElementById("wordId");
  wordFun.onblur=function(){
   var wordValue = wordFun.value;
   var mes2 = document.getElementById("passwordError");
   var patt2=/\W/;
   if(wordValue==null || wordValue.trim()==""){
   mes2.innerHTML="密码不能为空！";
 }else{
      mes2.innerHTML="";
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

//创建XMLHttpRequest

function creatXmlHttp(){
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

//更换验证码

function change(){
  var ci=document.getElementById("verifyImg");
  ci.src="?xjenfcdh=" + new Date().getTime();
}
