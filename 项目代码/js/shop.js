//头部固定栏下拉框
$(".hd_menu li:last-child").on("mouseenter",function(){
		$(".hd_dropdown").stop(true,true).show(300)
		//console.log(111)
})
$(".hd_menu li:last-child").on("mouseleave",function(){
		$(".hd_dropdown").stop(true,true).hide(300)
		//console.log(111)
})	
//选项框下拉特效
var num=0;
$(".border_btn").on("click",function(){
		if(num==0){
			$(".f_tab .tab_2").animate({
				height:127
			},300);	
			num++;
			$(this).html("精简选项<i class='iconfont icon-up'></i>")
			//$(".border_btn i").removeClass("icon-xialaanniu").addClass("icon-up")
		}
		else{
			$(".f_tab .tab_2").animate({
				height:0
			},300);
			num--;
			$(this).html("更多选项<i class='iconfont icon-xialaanniu'></i>")
			//$(".border_btn i").removeClass("icon-up").addClass("icon-xialaanniu")
		}
})	



//瀑布流
$(function(){
	//全局变量
	var $wrap = $('.f_content');
	var $li = $(".f_content>ul>li");
	var index = -1;
	
	//显示图片
	function show(num){
		//console.log(111);
		index++;
		var $div=createDiv(index);
		if(!$div) return;	//找不到$div返回
		var i=minIndex();
		$div.fadeIn(1000);
		$li.eq(i).append($div);		//将新增的对象加到最小的li里面
		$div.find("img").on("load",function(){
			if(index<num){			//递归方法，函数开头index++，外头定义最大值num
				show(num);			//所以一开始打开窗口时只能打印<11张图
				//console.log(3333)
			}
		})
		//console.log(index);
	}
	show(8);	//起始显示商品个数
	
	//创建动态div对象,获取新创建的对象
	function createDiv(index){
		if(imgData[index]){		//有数据才进来
			var $divDom=$("<div class='cnt_g'>"+
"						<div class='cnt_goods' onclick=\"window.location.href= 'purchase.html';\">"+
"							<div class='gd_pic'>"+
"								<img src='"+imgData[index].src+"' />"+
"								<p class='blink'>免邮</p>"+		
"							</div>"+
"							<div class='gd_nr'>"+
"								<h3>￥178.00</h3>"+
"								<p><a href=''>"+imgData[index].dec+"</a></p>"+
"								<span>"+imgData[index].shopName+"</span>"+
"							</div>"+
"						</div>"+
"						<div class='gd_foot'>"+
"							<span>月成交34笔</span>"+
"							<span>评价&nbsp;113</span>"+
"							<span class='foot_call'><i class='iconfont icon-aliwangwang'></i></span>"+
"						</div>"+
"					</div>");
			//console.log($divDom)
			return $divDom;		//返回创建的新对象
		}
	}
	
	//获取最小高度的li的索引
	function minIndex(){
		var minHeight=$li.eq(0).height();		//第一个索引
		var index=0;		//定义下标
		for(var i=1;i<$li.length;i++){		
			//遍历下标,从第一个下标开始比对，如果比前一个还小则当前下标赋值给minHeight
			var cHeight=$li.eq(i).height();
			if(cHeight<minHeight){
				minHeight=cHeight;
				index=i;
			}
		}
		return index;
	}
	
	//瀑布流加载,获取滚动条高度，利用滚动条高度和li最小的高度进行比对
	$(window).on("scroll",function(){
		var i=minIndex();
		var minliHeight=$li.eq(i).height()+$wrap.offset().top;
		//窗口的高度+滚动条的高度 > 最小li整体的高度
		if($(window).height()+$(window).scrollTop()>minliHeight){
			var num=index+4;		//每次加载个数		
			show(num);
		}
	})
});

////鼠标聚焦特效
//$(".cnt_g").on("mouseenter",function(){
//	console.log(111)
//	$(this).fadeIn(300,function(){
//		$(this).css({
//			border: "4px solid #ff0036",
//			margin: "-4px",
//			marginBottom: "16px"	
//		})
//	})
//})

//滚动条事件 
$(function(){
	$(window).on("scroll",function(){
		if($(this).scrollTop()>100){
			$(".f_cartR").animate({
					width:35
			},300);
			$(".rightMenu").animate({
					bottom:0
			},300);
		}
		else{
			$(".rightMenu").stop(true,true).animate({
					bottom:-40
			},500);			//广告出现，置顶按钮移出页面
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

//文字闪烁
function blinklink() {
	if(!document.getElementById('blink').style.color) {
		document.getElementById('blink').style.color = "red";
	}
	if(document.getElementById('blink').style.color == "red") {
		document.getElementById('blink').style.color = "black";
	} else {
		document.getElementById('blink').style.color = "red";
	}
		timer = setTimeout("blinklink()", 150);
	}

	function stoptimer() {
		clearTimeout(timer);
	}
blinklink()


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