window.onload=function(){

  //注册按钮校验

var regist = document.getElementById("registButton");
   regist.onclick=function(){
    var f = document.getElementById("registForm");
    var e1 = document.getElementById("usernameError").innerHTML;
    var e2 = document.getElementById("passwordError").innerHTML;
    var e3 = document.getElementById("phoneError").innerHTML;
    var e4 = document.getElementById("verifyError").innerHTML;
    if(e1 == "" && e2  == ""  && e3  == ""  && e4  == ""){
      f.action="";
      f.method="post";
      f.submit();
    }else{
      alert("注册信息填写不正确！");
    }
};

//点击登陆按钮事件

   var registToLogin = document.getElementById("loginButton")
   registToLogin.onclick=function(){
      var formId = document.getElementById("registForm");
      formId.action = "login.html";
      formId.submit();
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
  };

  //用户名校验

  var nameFun = document.getElementById("nameId");
  nameFun.onblur=function(){
   var nameValue = nameFun.value;
   var mes1 = document.getElementById("usernameError");
   var patt1=/\W/;
   if(nameValue==null || nameValue.trim()==""){
   mes1.innerHTML="用户名不能为空！";
 }else if(nameValue.length > 20 || nameValue.length < 6){
       mes1.innerHTML="用户名只能是6-20位";
 }else if(patt1.test(nameValue)){
         mes1.innerHTML="用户名只能是字符";
 }else{
      mes1.innerHTML="";
      h1=1;
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
 }else if(wordValue.length > 20 || wordValue.length < 6){
       mes2.innerHTML="密码只能是6-20位";
 }else if(patt2.test(wordValue)){
         mes2.innerHTML="密码只能是字符";
 }else{
      mes2.innerHTML="";
 }
};

//手机号码校验

 var phoneFun = document.getElementById("phoneId");
  phoneFun.onblur=function(){
   var phoneValue = phoneFun.value;
   var mes3 = document.getElementById("phoneError");
   var patt3=/\D/;
   if(phoneValue==null || phoneValue.trim()==""){
   mes3.innerHTML="手机号码不能为空！";
 }else if(phoneValue.length != 11){
       mes3.innerHTML="手机号码只能是11位";
 }else if(patt3.test(phoneValue)){
         mes3.innerHTML="手机号码只能是数字";
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
