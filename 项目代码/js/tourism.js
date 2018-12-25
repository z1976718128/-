(function(){
	$(".bg-list").children("li").hover(function(){
		$(this).addClass("colo").siblings().removeClass("colo");
	},function(){
		$(this).children("li").hide();
		$(this).removeClass("colo");

	})

	$(".Today-list").find("a").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
	},function(){
		$(this).find("a").hide();
		$(this).removeClass("active")
	})
	
	$('.National-tit').find("a").hover(function(){
		$(this).addClass('blu').siblings().removeClass("blu")
		
	},function(){
		$(this).find("a").hide();
		$(this).removeClass("blu")
	})
	
	$('National-img-r').find("li").hover(function(){
		$(this).addClass("bor").siblings().removeClass("bor");
	})
	//旅游开始
	$(function(){
			$('.tabbox2 .content ul').width(1000*$('.tabbox2 .content li').length+'px');
			$(".tabbox2 .tab a").mouseover(function(){
				$(this).addClass('on').siblings().removeClass('on');
				var index = $(this).index();
				number = index;
				var distance = -1000*index;
				$('.tabbox2 .content ul').stop().animate({
					left:distance
				});
			});
			
			var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
			if(auto ==1){
				var number = 0;
				var maxNumber = $('.tabbox2 .tab a').length;
				function autotab(){
					number++;
					number == maxNumber? number = 0 : number;
					$('.tabbox2 .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
					var distance = -1000*number;
					$('.tabbox2 .content ul').stop().animate({
						left:distance
					});
				}
				var tabChange = setInterval(autotab,3000);
				//鼠标悬停暂停切换
				$('.tabbox2').mouseover(function(){
					clearInterval(tabChange);
				});
				$('.tabbox2').mouseout(function(){
					tabChange = setInterval(autotab,3000);
				});
			  }  
	});

			$(".strategy-left").hover(function(){
				var $w=$(this).find(".strategy-box").outerHeight();
				var $top =$(this).outerHeight()-$w;
				console.log($top)
				$(this).find(".strategy-box").css({"top":$top,'background':"rgba(0, 0, 0, .4)"});
			},function(){
				$(this).find(".strategy-box").css({'top':"none",'background':"none"})
			})
			
			$(".strategy").hover(function(){
				var $w=$(this).find(".strategy-box2").outerHeight();
				var $top =$(this).outerHeight()-$w;
				console.log($top)
				$(this).find(".strategy-box2").css({"top":$top,'background':"rgba(0, 0, 0, .4)"});
			},function(){
				$(this).find(".strategy-box2").css({'top':"none",'background':"none"})
			})
		
	//旅游结束
	//旅游攻略
	$(function(){
			$('.tabbox .content ul').width(1000*$('.tabbox .content li').length+'px');
			$(".tabbox .tab a").mouseover(function(){
				$(this).addClass('on').siblings().removeClass('on');
				var index = $(this).index();
				number = index;
				var distance = -1000*index;
				$('.tabbox .content ul').stop().animate({
					left:distance
				});
			});
			
			var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
			if(auto ==1){
				var number = 0;
				var maxNumber = $('.tabbox .tab a').length;
				function autotab(){
					number++;
					number == maxNumber? number = 0 : number;
					$('.tabbox .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
					var distance = -1000*number;
					$('.tabbox .content ul').stop().animate({
						left:distance
					});
				}
				var tabChange = setInterval(autotab,3000);
				//鼠标悬停暂停切换
				$('.tabbox').mouseover(function(){
					clearInterval(tabChange);
				});
				$('.tabbox').mouseout(function(){
					tabChange = setInterval(autotab,3000);
				});
			  }  
	});

			$(".strategy-left").hover(function(){
				var $w=$(this).find(".strategy-box").outerHeight();
				var $top =$(this).outerHeight()-$w;
				console.log($top)
				$(this).find(".strategy-box").css({"top":$top,'background':"rgba(0, 0, 0, .4)"});
			},function(){
				$(this).find(".strategy-box").css({'top':"none",'background':"none"})
			})
			
			$(".strategy").hover(function(){
				var $w=$(this).find(".strategy-box2").outerHeight();
				var $top =$(this).outerHeight()-$w;
				console.log($top)
				$(this).find(".strategy-box2").css({"top":$top,'background':"rgba(0, 0, 0, .4)"});
			},function(){
				$(this).find(".strategy-box2").css({'top':"none",'background':"none"})
			})
			
	$("#myCarousel").carousel({
		 		interval:1500,
		 		pause:"hover",
		 		wrap:true,
		 	})
		 	
		 	$(".lzj").lazyload({
				effect : "fadeIn",
				threshold:300,
			})
		
			//tab
			$(function() {
				$("#tab4").rTabs({
					ind: 'click',
					animation: 'fadein'

				});

			})
			//tab
			<!--页面加载图片2秒后刷新-->   
			$(window).ready(function() {
			    setTimeout(function(){
			    	$(".lzj").trigger("effect")
			    },2000)
			});  
			
		 	/*回到顶部*/
			 	if ($('#back-to-top').length) {
	            var scrollTrigger = 100; 
	            $(window).on('scroll', function () {
	                if ($(window).scrollTop() > scrollTrigger) {
	                    $('#back-to-top').addClass('show');
	                } else {
	                    $('#back-to-top').removeClass('show');
	                }
	            });
	            $('#back-to-top').on('click', function (e) {
	                // html,body 都写是为了兼容浏览器
	                $('html,body').animate({
	                    scrollTop: 0
	                }, 700);
	
	                return false;
	            });
	        }		
	
	//旅游攻略结束
	
	//当季推荐开始
//   $('.tabbox .content ul').width(1000*$('.tabbox .content li').length+'px');
     $(".r-tab a").on("mousemove",function(){
     	$(this).addClass("on").siblings().removeClass("on");
		
		
     })
	//当季推荐结束
	$(".plght4").on("mousemove",function(){
		$(".head-bg-list4").show()
		$(".ico4").css("transform","rotateX(180deg)")
		
	})
	$(".plght4").on("mouseout",function(){
		$(".head-bg-list4").hide()
		$(".ico4").css("transform","rotateX(0deg)")
		
	})
	$(".plght5").on("mousemove",function(){
		$(".head-bg-list5").show()
		$(".ico5").css("transform","rotateX(180deg)")
		
	})
	$(".plght5").on("mouseout",function(){
		$(".head-bg-list5").hide()
		$(".ico5").css("transform","rotateX(0deg)")
		
	})
	$(".plght6").on("mousemove",function(){
		$(".head-bg-list6").show()
		$(".ico6").css("transform","rotateX(180deg)")
		
	})
	$(".plght6").on("mouseout",function(){
		$(".head-bg-list6").hide()
		$(".ico6").css("transform","rotateX(0deg)")
		
	})
	$(".plght7").on("mousemove",function(){
		$(".head-bg-list7").show()
		$(".ico6").css("transform","rotateX(180deg)")
		
	})
	$(".plght7").on("mouseout",function(){
		$(".head-bg-list7").hide()
		$(".ico7").css("transform","rotateX(0deg)")
		
	})
	$(".plght").on("mousemove",function(){
		$(".head-bg-list").show()
		$(".ico1").css("transform","rotateX(180deg)")
	})
	$(".plght").on("mouseout",function(){
		$(".head-bg-list").hide()
		$(".ico1").css("transform","rotateX(0deg)")
	})
	$(".plght2").on("mousemove",function(){
		$(".head-bg-list2").show()
		$(".ico2").css("transform","rotateX(180deg)")
		
	})
	$(".plght2").on("mouseout",function(){
		$(".head-bg-list2").hide()
		$(".ico2").css("transform","rotateX(0deg)")
		
	})
	$(".plght3").on("mousemove",function(){
		$(".ico3").css("transform","rotateX(180deg)")
		
		$(".head-bg-list3").show()
	})
	$(".plght3").on("mouseout",function(){
		$(".head-bg-list3").hide()
		$(".ico3").css("transform","rotateX(0deg)")
		
	})
})()

