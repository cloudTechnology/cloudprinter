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

		});