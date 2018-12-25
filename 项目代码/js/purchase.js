//头部固定栏下拉框
$(".hd_menu li:last-child").on("mouseenter",function(){
		$(".hd_dropdown").stop(true,true).show(300)
		//console.log(111)
})
$(".hd_menu li:last-child").on("mouseleave",function(){
		$(".hd_dropdown").stop(true,true).hide(300)
		//console.log(111)
})	;

//件数增加
$(".pre_top").on("click",function(){
	var re=/^[0-9]*$/;
	var $val= $("#t1").val()
	if(!re.test($val)){
		alert("请输入正确！");
		$("#t1").val("")
		return
	}
	$val++;
	$("#t1").val($val)
})
$(".pre_bottom").on("click",function(){
	var re=/^(?:0|[1-9][0-9]*)$/
	var $val= $("#t1").val()
	if(!re.test($val) || $val == 1){
		$("#t1").val("")
		return
	}
	$val--;
	$("#t1").val($val)
})



$(function(){						//图片轮播，鼠标移入事件，图片随着底部框框轮播
	//商品套餐轮播
	var page=-1;
	var flash=false;
	var len=$(".silde-page li").length;
	$(".silde-page li").click(function(){
//			console.log(111)
		page=$(this).index();			//获取li标签下标
		$(".silde").stop(true,true).animate({
			left:-990*page
		},400)
	$(this).addClass("on").siblings().removeClass("on");
	})
	
	//套餐打勾
	$("#b1").click(function(){
		var $val=parseFloat($(this).val());
		var num = 148;
		$valNew = $val + num;
		//被选中的checkbox
		//console.log($(this)[0].checked)
        if ($(this)[0].checked == true){
        	//console.log(111)
            $("#p1").html($valNew);
        }
        
		if ($(this)[0].checked == false){
			//console.log(111)
		    $("#p1").html(num);
		 
		}
	})
	$("#b3").click(function(){
		var $val=parseFloat($(this).val());
		var num = 148;
		$valNew = $val + num;
		//被选中的checkbox
		//console.log($(this)[0].checked)
        if ($(this)[0].checked == true){
        	//console.log(111)
            $("#p3").html($valNew);
        }
        
		if ($(this)[0].checked == false){
			//console.log(111)
		    $("#p3").html(num);
		 
		}
	})
	$("#b2").click(function(){
		var $val=parseFloat($(this).val());
		var num = 148;
		$valNew = $val + num;
		//被选中的checkbox
		//console.log($(this)[0].checked)
        if ($(this)[0].checked == true){
        	//console.log(111)
            $("#p2").html($valNew);
        }
        
		if ($(this)[0].checked == false){
			//console.log(111)
		    $("#p2").html(num);
		 
		}
	})
	
	
	//滚动条事件 
	$(function(){
		$(window).on("scroll",function(){
			//console.log($(document).scrollTop())
			if($(this).scrollTop()>100){
//				$(".f_cartR").animate({
//						width:35
//				},300);
				$(".rightMenu").animate({
						bottom:0
				},300);
			}
			else{
				$(".rightMenu").stop(true,true).animate({
						bottom:-40
				},500);			//广告出现，置顶按钮移出页面
			}
			if($(this).scrollTop()>1063){
				//console.log(111)
				$(".f_head").css("display","none")
				$(".sp_group").css({
					"position":"fixed",
					"top":0,
					"background":"#F6F6F6",
					"width":788,
//					"left":514,
					"z-index":99
				})

			}
			if($(this).scrollTop()<1063){
				//console.log(111)
				$(".f_head").css("display","block");
				$(".sp_group").css({
					"position":"static",
					"top":0,
					"background":"#fff",
					"width":"",
//					"left":514
				})

			}
		});
			
		//点击页面置顶
		$(".rightMenu").on("click",function(){
			$("html,body").animate({scrollTop:0},300);
		});
	});
	
	//右侧提示栏出现
	$(".c_money").on("mouseenter",function(){
		$(".my_money").stop(true,true).animate({
			opacity:1
		},300);
	});
	$(".c_money").on("mouseleave",function(){
		$(".my_money").stop(true,true).animate({
			opacity:0
		},300);
	});
	
	$(".c_collection").on("mouseenter",function(){
		$(".my_collection").stop(true,true).animate({
			opacity:1
		},1000);
	});
	$(".c_collection").on("mouseleave",function(){
		$(".my_collection").stop(true,true).animate({
			opacity:0
		},300);
	});
	
	$(".c_see").on("mouseenter",function(){
		$(".my_see").stop(true,true).animate({
			opacity:1
		},300);
	});
	$(".c_see").on("mouseleave",function(){
		$(".my_see").stop(true,true).animate({
			opacity:0
		},300);
	});
	
	$(".c_feedback").on("mouseenter",function(){
		$(".my_feedback").stop(true,true).animate({
			opacity:1
		},300);
	});
	$(".c_feedback").on("mouseleave",function(){
		$(".my_feedback").stop(true,true).animate({
			opacity:0
		},300);
	});
	
	$(".c_pic").on("mouseenter",function(){
		$(".my_pic").stop(true,true).animate({
			opacity:1
		},300);
	});
	$(".c_pic").on("mouseleave",function(){
		$(".my_pic").stop(true,true).animate({
			opacity:0
		},300);
	});
	
	$(".rightMenu").on("mouseenter",function(){
		$(".my_top").stop(true,true).animate({
			opacity:1
		},300);
	});
	$(".rightMenu").on("mouseleave",function(){
		$(".my_top").stop(true,true).animate({
			opacity:0
		},300);
	});
		
	
	$(".ad_con").on("click",function(){
		$(".f_ad").fadeOut();
		$(this).fadeOut();
	})
})



//评论排序窗口
$(".rt_sort").on("mouseenter",function(){
	$(".st_choice").css("display","block")
});
$(".rt_sort").on("mouseleave",function(){
	$(".st_choice").css("display","none")
})

//详情与评论选项卡
$(".gp_2").on("click",function(){
	$(".gp_1").removeClass("active");
	$(".gp_1 a").removeClass("active");
	$(this).addClass("active");
	$(".gp_2 a").addClass("active");
	$(".f_ad").fadeIn();
	$(".ad_con").fadeIn();
	
	$(".sp_ms").stop(true,true).animate({
		height:0,
		opacity:0
	},300,function(){
		$(".ms_kuang").css("display","none")
		$(".ms_date").css("display","none")
		$(".ms_pic").css("display","none")
	});
});
$(".gp_1").on("click",function(){
	$(".gp_2 a").removeClass("active");
	$(".gp_2").removeClass("active");
	$(this).addClass("active");
	$(".gp_1 a").addClass("active");
	$(".ms_kuang").css("display","block")
	$(".ms_date").css("display","block")
	$(".ms_pic").css("display","block")
	$(".sp_ms").stop(true,true).animate({
		height:10308,
		opacity:1
	},300)
});


//页面刷新  从localStorage中去shop
if(localStorage.getItem("userName")){
	console.log(localStorage.getItem('userName'))
	$("#userName").html(localStorage.getItem('userName'));
	$("#zhuce").html("登出")
	//$("#zhuce").css("display","none")
}

$("#zhuce").on("click",function(){
	if(localStorage.getItem("userName")){
		localStorage.removeItem("userName")
	}
})

//遮罩层
function showMask(){     
    $("#mask").css("height",$(document).height());     
    $("#mask").css("width",$(window).width()-200);     
    $("#mask").show();     
}


//右侧购物车商品栏
$("#jieshou").on("click",function(){
	$(".ctR_r").show(200);
	showMask();
})

$(".mask").on("click",function(){
	$(".mask").hide(); 
	$(".ctR_r").hide(200)
})


//购物车内计算
var allLengthS=$("input[class='sp_checked']").length; //所有商品的checkbox的长度

	//全选
$("#allXuan").click(function(){//给全选按钮加上点击事件
	var xz = $(this).prop("checked");//判断全选按钮的选中状态
	var sum = 0;//价格总数
	var yxuanN = 0;//选中件数总数
    $("input").prop("checked",xz);  //让选中状态和全选按钮的选中状态一致。  
    //console.log($(this).prop("checked"))
    var selectedLength=$("input[class='sp_checked']:checked").length;	//所有选中的商品checkbox的长度
	$(".sp_jg label").each(function(){
		var num = $(this).parents(".sp_jg").siblings(".sp_sl").find(".sp_num").text();	//当前商品个数
		var jg = parseFloat($(this).text());//当前的li下的价格
		sum += jg*num;
		//console.log(jg)
		yxuanN++;
		$("#cart_sum").html(parseFloat(sum).toFixed(2))//保留两位小数
		$("#tXuan").html(yxuanN);
	})
    if($(this).prop("checked")==false){
		sum = 0.00;
		yxuanN = 0;
		$("#cart_sum").html(parseFloat(sum).toFixed(2));
		$("#tXuan").html(yxuanN);
    }
})

	//店铺按钮
$(".dp_checked").click(function(){
	var jg = parseFloat($(this).parents(".conr_dp").siblings(".conr_sp").find(".sp_jg").children("label").text());//当前的li下的价格
	var sum = parseFloat($("#cart_sum").text());
	var xz = $(this).prop("checked");		//选中的按钮
	var yxuanN = parseInt($("#tXuan").text());
	var num = $(this).parents(".conr_dp").siblings(".conr_sp").find(".sp_num").text();
	$(this).parents(".conr_dp").siblings(".conr_sp").find(".sp_checked").prop("checked",xz);
	if($(this).prop("checked")==false){
		$("#allXuan").prop("checked",false)
	}
	if($(this).prop("checked")==true){
		sum = sum + jg*num;
		//console.log(sum)
		$("#cart_sum").html(parseFloat(sum).toFixed(2))//保留两位小数
		yxuanN ++;
		$("#tXuan").html(yxuanN);
	}
	else if($(this).prop("checked")==false){
		sum = sum - jg*num;
		//console.log(sum)
		$("#cart_sum").html(parseFloat(sum).toFixed(2));
		yxuanN --;
		$("#tXuan").html(yxuanN);
	}
})
	
	//商品按钮
$(".sp_checked").click(function(){
	var jg = parseFloat($(this).siblings("span").children("label").text());
	var sum = parseFloat($("#cart_sum").text());
	var xz = $(this).prop("checked");
	var yxuanN = parseInt($("#tXuan").text())
	var selectdpspLength = $(this).parents(".conr_sp").children("div").find("input[class='sp_checked']:checked").length;//当前店铺内的选中商品长度
	var num = $(this).siblings(".sp_sl").find(".sp_num").text();
	//console.log(jg)
	$(this).parents(".conr_sp").siblings(".conr_dp").find(".dp_checked").prop("checked",xz);//当商品选中时店铺选中
	if($(this).prop("checked")==false){
		$("#allXuan").prop("checked",false)
	}
	if($(this).prop("checked")==true ){
		sum = sum + jg*num;
		//console.log(sum)
		$("#cart_sum").html(parseFloat(sum).toFixed(2))//保留两位小数
		yxuanN ++;
		$("#tXuan").html(yxuanN);
	}
	else if($(this).prop("checked")==false){
		sum = sum - jg*num;
		//console.log(sum)
		$("#cart_sum").html(parseFloat(sum).toFixed(2))
		yxuanN --;
		$("#tXuan").html(yxuanN);
	}
})
	//子项店铺选择控制全选
var allLength=$("input[class='dp_checked']").length; //所有的checkbox的长度
$("input[class='dp_checked']").each(function(){
	$(this).on('click',function(){	
		var selectedLength=$("input[class='dp_checked']:checked").length;	//所有的选中的checkbox的长度
		if(selectedLength==allLength){
			$('#allXuan').prop("checked",true); 	//全选按钮
		}else{		
			$('#allXuan').prop("checked",false);
		}	
	})
})
	//子项商品选择控制全选
$("input[class='sp_checked']").each(function(){
	//var jg = parseFloat($(this).siblings("span").children("label").text());
	//var sum = parseFloat($("#cart_sum").text());
	$(this).on('click',function(){
		//console.log(jg)
		var selectedLength=$("input[class='sp_checked']:checked").length;	//所有的选中的checkbox的长度
		if(selectedLength==allLengthS){
			$('#allXuan').prop("checked",true); //全选按钮
		}
		else{
			$('#allXuan').prop("checked",false);
		}
	})
})

	//商品数目增加
$(".sp_add").on("click",function(){
	var jg = parseFloat($(this).parents(".sp_sl").siblings("span").children("label").text());//当前商品价格
	var num = parseFloat($(this).siblings(".sp_num").text());//商品数目
	var sum = parseFloat($("#cart_sum").text());
	num++;
	$(this).siblings(".sp_num").html(num);
	if($(this).parents(".conr_sp").find(".sp_checked").prop("checked")==true){
		sum += jg;
		$("#cart_sum").html(parseFloat(sum).toFixed(2));
	}
})

	//商品数目减少
$(".sp_del").on("click",function(){
	var jg = parseFloat($(this).parents(".sp_sl").siblings("span").children("label").text());//当前商品价格
	var num = $(this).siblings(".sp_num").text();//商品数目
	var sum = parseFloat($("#cart_sum").text());
	if(num==1){
		return;
	}
	num--;
	$(this).siblings(".sp_num").html(num);
	if($(this).parents(".conr_sp").find(".sp_checked").prop("checked")==true){
		sum -= jg;
		$("#cart_sum").html(parseFloat(sum).toFixed(2));
	}
})

	//去掉商品
$(".sp_close").on("click",function(){
	$(this).parents("li").animate({
		"opacity":"0"
	},function(){		
		$(this).remove();//直接移除
		if($(this).find(".sp_checked").prop("checked")==true){
			console.log($(this).find(".sp_checked").prop("checked"))
			var allSum=parseFloat($("#cart_sum").text());
			var allNum=parseInt($("#tXuan").text());
			var num=parseInt($(this).find(".sp_num").text());
			var jg=parseFloat($(this).find(".sp_jg").find("label").text());
			allSum = allSum -(num*jg);
			allNum --;
			$("#cart_sum").html(parseFloat(allSum).toFixed(2));
			$("#tXuan").html(parseFloat(allNum))
		}
	})
})
	//增加商品
var newli = $("#ssY").html();
var spSum = $("#ssYou").text()-1;
$("#fashe").on("click",function(){
	var spNum = parseInt($("#t1").val());
	if(isNaN(spNum)){
    	spNum=1;
    	//console.log(spNum)
    }
	//console.log(spNum)
	spSum += spNum;
	$("#ssYou").html(spSum)
	if($("#ssY")[0]){
		return;
	}
	else{
		console.log(newli)
		var newli2=$("<li>"+newli+"</li>")
		$(".cr_container ul").append(newli2)
	}
})
	
