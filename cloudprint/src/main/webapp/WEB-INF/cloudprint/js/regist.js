window.onload=function(){

  //点击注册按钮

var regist = document.getElementById("registButton");
   regist.onclick=function(){
    var f = document.getElementById("registForm");
    var e1 = document.getElementById("usernameError").innerHTML;
    var e2 = document.getElementById("passwordError").innerHTML;
    var e3 = document.getElementById("phoneError").innerHTML;
    var e4 = document.getElementById("verifyError").innerHTML;
    if(e1 == "" && e2  == ""  && e3  == ""  && e4  == ""){
      var username = document.getElementById("nameId").value;
      var password = document.getElementById("wordId").value;
      var phone = document.getElementById("phoneId").value;
      var xmlHttp = createXmlHttp();
      // xmlHttp.open("POST","/cloudprint/regist",true);
      xmlHttp.open("POST","/cloudprint",true);
      xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xmlHttp.send("username="+username+"&password="+password+"&phone="+phone);
      xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        // var text = xmlHttp.responseText;
        var text=true;
        if(text==false){
          alert("网络异常请重新注册！");
        }
      }
      };
     
    }else{
      alert("注册信息填写不正确！");
    }
};

//获取验证码按钮

   var vb = document.getElementById("verifyButton");
     vb.onclick=function(){
      vb.disabled="disabled";
      vb.innerHTML="60秒后重新获取";
      var i=59;
      var js=setInterval(function(){ if(i>=0){
      vb.innerHTML=i+"秒后重新获取";
      i--;
   }else{
      vb.innerHTML="重新获取";
      vb.disabled=null;
      clearInterval(js);
        }
   },1000);
      var phone = document.getElementById("phoneId").value;
      var xmlHttp = createXmlHttp();
      // xmlHttp.open("POST","/cloudprint/getVerify",true);
      xmlHttp.open("POST","/cloudprint",true);
      xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xmlHttp.send("phone="+phone);
      xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
          // var text = xmlHttp.responseText;
          var text = true;
          if(text==true){
            alert("验证码发送成功请注意查收！");
          }else{
            alert("验证码发送失败请重新发送！");
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
   mes1.innerHTML="用户名不能为空";
 }else if(nameValue.length > 20 || nameValue.length < 6){
       mes1.innerHTML="用户名只能是6-20位";
 }else if(patt1.test(nameValue)){
         mes1.innerHTML="用户名只能是字符";
 }else{
      var xmlHttp = createXmlHttp();
      // xmlHttp.open("POST","/cloudprint/findUser",true);
      xmlHttp.open("POST","/cloudprint",true);
      xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xmlHttp.send("username="+nameValue);
      xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
          // var text = xmlHttp.responseText;
          var text = true;
          if(text == true){
            mes1.innerHTML="";
          }else{
             mes1.innerHTML="用户名已被注册";
          }
        }
      };   
 }
};

//密码校验

  var wordFun = document.getElementById("wordId");
  wordFun.onblur=function(){
   var wordValue = wordFun.value;
   var mes2 = document.getElementById("passwordError");
   var patt2=/\W/;
   if(wordValue==null || wordValue.trim()==""){
   mes2.innerHTML="密码不能为空";
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
   mes3.innerHTML="手机号码不能为空";
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
   mes4.innerHTML="验证码不能为空";
 }else{
      var xmlHttp=createXmlHttp();
      // xmlHttp.open("POST","/cloudprint/verify",true);
      xmlHttp.open("POST","/cloudprint",true);
      xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xmlHttp.send("verifycode=" + verifyValue);
      xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
          // var text = xmlHttp.responseText;
          var text = true;
          if(text == true){
            mes4.innerHTML="";
          }else{
            mes4.innerHTML="验证码错误";
          }
        }
      };
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
