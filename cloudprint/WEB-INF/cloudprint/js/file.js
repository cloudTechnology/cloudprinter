$(document).ready(function(){

	// 加载用户文件
	// $.post("/cloudprint/findFile",{
	$.post("/cloudprint",{

	},function(result){
		var text={"file":[{"name":"aaa","date":"2015.01.01"},{"name":"bbb","date":"2016.02.02"},
		{"name":"ccc","date":"2016.03.03"},{"name":"ddd","date":"2016.04.04"}]};
		if(text!=null){
		for(var key in text){
			for(var i=0;i<text[key].length;i++){
				 $("#f-div").append('<div><input type="checkbox" name="file" value="'+text[key][i].name+'"/>'+text[key][i].name+
				 	'<span>'+text[key][i].date+'</span></div>');
			}
		}
	}else{
		alert("没有找到文件");
	}
	});

   // 删除用户文件
	$("#delButton").click(function(){
		$("input[type='checkbox']").each(function(){
			var input=$(this);
			var checked=input.prop("checked");
			var fname=input.val();
			
			if(checked==true){
			// $.post("/cloudprint/deleteFile",{
	        $.post("/cloudprint",{
	        	name:fname
	           },function(result){
		        var text=true;
		       if(text==true){
		       var div=input.parent();
		       div.remove();
		     }else{
		     	alert("删除"+fname+"文件失败");
		     }
	        });
			}
		});
	});

	   // 打印用户文件
	$("#priButton").click(function(){
		$("input[type='checkbox']").each(function(){
			var input=$(this);
			var checked=input.prop("checked");
			var fname=input.val();
			
			if(checked==true){
			// $.post("/cloudprint/printFile",{
	        $.post("/cloudprint",{
	        	name:fname
	           },function(result){
		        var text=true;
		       if(text==true){
		       	alert("打印"+fname+"文件成功");
		     }else{
		     	alert("打印"+fname+"文件失败");
		     }
	        });
			}
		});
	});

		   // 下载用户文件
	$("#dowButton").click(function(){
		$("input[type='checkbox']").each(function(){
			var input=$(this);
			var checked=input.prop("checked");
			var fname=input.val();
			
			if(checked==true){
			// $.post("/cloudprint/printFile",{
	        $.post("/cloudprint",{
	        	name:fname
	           },function(result){
		        var text=false;
		       if(text==true){
		     }else{
		     	alert("下载"+fname+"文件失败");
		     }
	        });
			}
		});
	});


});
