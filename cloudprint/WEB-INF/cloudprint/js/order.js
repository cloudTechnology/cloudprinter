$(document).ready(function(){

		// 加载用户订单
	// $.post("/cloudprint/findOrder",{
	$.post("/cloudprint",{

	},function(result){
		var text={"order":[{"name":"aaa","price":10.12,"count":1,"subtotal":10.12,"state":"0","date":"2016.01.01"},
		                   {"name":"bbb","price":10.17,"count":2,"subtotal":20.34,"state":"1","date":"2016.02.01"},
		                   {"name":"bbb","price":10.17,"count":2,"subtotal":20.34,"state":"0","date":"2016.02.01"},
		                   {"name":"ccc","price":10.19,"count":3,"subtotal":30.57,"state":"1","date":"2016.03.01"},
		                   {"name":"ccc","price":10.19,"count":3,"subtotal":30.57,"state":"0","date":"2016.03.01"},
		                   {"name":"ddd","price":10.17,"count":4,"subtotal":40.68,"state":"2","date":"2016.04.01"},
		                   {"name":"ddd","price":10.17,"count":4,"subtotal":40.68,"state":"0","date":"2016.04.01"}]};
		if(text!=null){
		for(var key in text){
			for(var i=0;i<text[key].length;i++){
				if(text[key][i].state==0){
				 $("#o-tr").after('<tr><td><input type="checkbox" name="order" value="'+text[key][i].name+'"/>'
				 	+text[key][i].name+'</td><td>'+text[key][i].price+'</td><td>'+text[key][i].count+'</td><td id="subtotal">'
				 	+text[key][i].subtotal+'</td><td>'+text[key][i].date+'</td></tr>');
			}else if(text[key][i].state==1){
				$("#a-tr").after('<tr><td><input type="checkbox" name="order" value="'+text[key][i].name+'"/>'
				 	+text[key][i].name+'</td><td>'+text[key][i].price+'</td><td>'+text[key][i].count+'</td><td>'
				 	+text[key][i].subtotal+'</td><td>'+text[key][i].date+'</td></tr>');
			}else if(text[key][i].state==2){
				$("#c-tr").after('<tr><td><input type="checkbox" name="order" value="'+text[key][i].name+'"/>'
				 	+text[key][i].name+'</td><td>'+text[key][i].price+'</td><td>'+text[key][i].count+'</td><td>'
				 	+text[key][i].subtotal+'</td><td>'+text[key][i].date+'</td></tr>');
			}
			}
		}
	}else{
		alert("还没有任何订单哦！");
	}
	});

	// 取消订单
	$("#cancel").click(function(){
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
		       var div=input.parent().parent();
		       var subtotal=div.find("#subtotal").text();
		       var money=parseFloat(subtotal);
		       var total=parseFloat($("#total").text());
		       if(!isNaN(money)){
		       total-=money;
		       $("#total").text(total.toFixed(2));
		       }
		       div.remove();
		     }else{
		     	alert("取消"+fname+"订单失败");
		     }
	        });
			}
		});
	});


    // 显示总价钱
    $("#div1").click(function(){
    	var total=0;
	$("input[type='checkbox']").each(function(){
		var input=$(this);
			var checked=input.prop("checked");
			var fname=input.val();
			if(checked==true){
		       var div=input.parent().parent();
		       var subtotal=div.find("#subtotal").text();
		       var money=parseFloat(subtotal);
		       if(!isNaN(money)){
		       total+=money; 
		       }
			}
		});
	$("#total").text(total.toFixed(2));
    });
	
});