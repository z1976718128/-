//头部固定栏下拉框
$(".hd_menu li:last-child").on("mouseenter",function(){
		$(".hd_dropdown").stop(true,true).show(300)
		//console.log(111)
})
$(".hd_menu li:last-child").on("mouseleave",function(){
		$(".hd_dropdown").stop(true,true).hide(300)
		//console.log(111)
})	

$(function(){
	
	//轮播特效
	(function(){						//图片轮播，鼠标移入事件，图片随着底部框框轮播
		var page=-1;
		var flash=false;
		var len=$(".silde-page li").length;
		$(".silde-page li").mouseover(function(){
			page=$(this).index();			//获取li标签下标
			$(".silde li").eq(page).stop(true,true).fadeIn(200).siblings().stop(true,true).fadeOut(200);
		$(this).addClass("on").siblings().removeClass("on");
		})
		
		//自动播放图片，运用定时器自动播放
		function auto(){
			if(!flash){
				page++;
				if(page==len){
					page=0;				//播放到最后一张图片，回到第一张图片
				}
				$(".silde-page li").eq(page).addClass("on").siblings().removeClass("on");
				$(".silde li").eq(page).fadeIn(800).siblings().fadeOut(300);
			}
			setTimeout(auto,3000);
		}
		auto();
		
		
		//当鼠标移入时，自动播放停止
		$(".f_focus").hover(function(){
			flash=true;
		},function(){
			flash=false;
		})
	})();	
	
	
	
	//文字滚动部分
	$("#myCarousel").carousel({
		interval:false,
		//pause:"hover",//默认鼠标划上去，carousel不会滚动
		wrap:true
	})
	
	//排列是选项卡部分
	//第一个
	$(".tab_1 h2").on("click",function(){
		//获取点击的索引
		var $index = $(this).index();
		//让当前的a添加active，同辈的a移除active
		$(this).addClass("on").siblings().removeClass("on");
		//对应content里面的div实现显示隐藏
		$(".content>div").eq($index).siblings().stop(true,true).fadeOut(200,function(){
			$(".content>div").eq($index).stop(true,true).fadeIn(300);
		});
	});
	//第二个
	$(".tab_2 h2").on("click",function(){
		//获取点击的索引
		var $index = $(this).index()+2;
		//让当前的a添加active，同辈的a移除active
		$(this).addClass("on").siblings().removeClass("on");
		//对应content里面的div实现显示隐藏
		$(".content>div").eq($index).siblings().stop(true,true).fadeOut(200,function(){
			$(".content>div").eq($index).stop(true,true).fadeIn(300);
		});
	});
	
	$(".tab_1 .tuijian li").on("mouseenter",function(){
		var $index = $(this).index();
		$(".cle_g").eq($index).addClass('cle_r');
		//console.log($index)
	})
	//第一个
	$(".tab_1 .tuijian li").on("mouseleave",function(){
		var $index = $(this).index();
		//console.log($index)
		$(".cle_g").eq($index).removeClass('cle_r');
	})
	//第二个
	$(".tab_2 .tuijian li").on("mouseenter",function(){
		var $index = $(this).index()+6;
		$(".cle_g").eq($index).addClass('cle_r');
		//console.log($index)
	})
	$(".tab_2 .tuijian li").on("mouseleave",function(){
		var $index = $(this).index()+6;
		//console.log($index)
		$(".cle_g").eq($index).removeClass('cle_r');
	})
	
	
	
	//美食图片标题选项卡
	$(".w5 .ui_title_wrap h3").on("click",function(){
		//console.log($(window).scrollTop())
		var $index = $(this).index();
		var scrollTop= $(window).scrollTop();
		$(this).addClass("on").siblings().removeClass("on");
		$(".big4_list ul").eq($index).siblings().stop(true,true).fadeOut(200,function(){
			$(".big4_list ul").eq($index).stop(true,true).fadeIn(300);
		});
		$("html,body").animate({scrollTop:scrollTop+1},200);		//移动滚动条让懒加载生效
	})
	
	//评论喜欢部分
	var numL=0;
	$(".pin_love").on("click",function(){
		var num=$(this).attr("val");
		if(numL==0){
			num++;
			$(this).html(num+"个喜欢<i class='iconfont icon-msnui-love'>");
			numL++;
		}
		else{
			$(this).html(num+"个喜欢<i class='iconfont icon-xihuan'>");
			numL--;
		}
	})
})
//懒加载图片
$(function(){
	$("img.lazy").show().lazyload({
		effect:"fadeIn",		//入场效果
		threshold:10,			//延距离多远显示
	});
	//console.log($(window).scrollTop()+1)
});
//滚动条事件 
$(function(){
	$(window).on("scroll",function(){
		if($(this).scrollTop()>100){
			$(".rightMenu").animate({
					bottom:50
			},700);
		}
		else{
			$(".rightMenu").stop(true,true).css("bottom",-150);			//广告出现，置顶按钮移出页面
		}
	});
		
	//点击页面置顶
	$(".rightMenuBox a").on("click",function(){
		$("html,body").animate({scrollTop:0},300);
	});
});



//页面刷新  从localStorage寻找userName
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

//点击评论
//var $li=$(".clear")
var flag=0
$(".pin_foot").on("click",function(){
	//console.log(111)
	if(flag==0){
		$(this).parents(".c").siblings(".textK").stop(true,true).show(400)	
		flag++;
	}
	else{
		$(this).parents(".c").siblings(".textK").stop(true,true).hide(400)	
		flag--;
	}
})

//点击提交评论
$(".tk_btn").on("click",function _button(){
	if($(this).siblings().val()==""){
		zeroModal.show({
	        //title: 'hello world',
	        content: '内容不能为空！！',
	        ok: true,
	        cancel: true,
	        okFn: function(opt) {
	       			
	        }
	    });
	    return;
	}
	var id = localStorage.getItem("userName");
	var info = $(this).siblings().val();
	var div =$("<p><span>"+id+":&nbsp;</span><span>"+info+"</span></p>");
	console.log($(this).parents(".textK").siblings());
	$(this).parents(".textK").siblings(".c").children(".c-newTalk").append(div);
    $(this).siblings().val("");

})
