$(document).ready(function(){

		var iframe=$("#iframe");
		var myFile=$("#myFile");
		myFile.click(function(){
		  iframe.attr("src","file.html");
		 });

		var myOrder=$("#myOrder");
		 myOrder.click(function(){
		 	iframe.attr("src","order.html");
		});

	    // 添加用户名称
			// $.post("/cloudprint/addUsername",{
	        $.post("/cloudprint",{
	           },function(result){
	           	var text="username";
	           	$("#uname").text("您好！"+text);
		 });

        // 查询文件
	        $("#seaButton").click(function(){
	        	var searchName=$("#search").val();
	        	$("#iframe").attr("src","search.html");
	        	// $.post("/cloudprint/search",{
	        $.post("/cloudprint",{
	        	sname:searchName
	           },function(){
		    });
	     });
	   
});