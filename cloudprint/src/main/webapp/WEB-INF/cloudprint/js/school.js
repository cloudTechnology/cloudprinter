window.onload=function(){

document.getElementById("s-div").style.height=screen.height+"px";

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
