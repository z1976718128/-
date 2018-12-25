		//游记部分开始 
		//header头部
			//导航条部分
			$(".span-hov").hover(function() {
				$(".span-hov").find("i").removeClass("icon-xia").addClass("icon-icon-arrow-top")
			}, function() {
				$(".span-hov").find("i").removeClass("icon-icon-arrow-top").addClass("icon-xia")
			})
			$(".span-hov").hover(function() {
				$(".span-hov").css("background", "#788296").children().css("opacity", 1)
			}, function() {
				$(".span-hov").css("background", "transparent").children("div").css("opacity", 0)
			})

			$(".item-ul").hover(function() {
				$(".item-ul>.icon-xia").removeClass("icon-xia").addClass("icon-icon-arrow-top")
				$(this).css("background", "#788296").find("a").css("opacity", 1)
			}, function() {
				$(".item-ul>.icon-icon-arrow-top").removeClass("icon-icon-arrow-top").addClass("icon-xia")
				$(this).css("background", "transparent")
				$(".item-ul a").css("opacity", 0)
			})

			$(".heid-span span").siblings("span").hover(function() {
				$(this).css("background", "red")
			}, function() {
				$(this).css("background", "#788296")
			})
			$(".item-ul a span").siblings("span").hover(function() {
				$(this).css("background", "red")
			}, function() {
				$(this).css("background", "#788296")
			})

			$(".iphoe li:nth-child(1)").find("i").hover(function() {
				$(this).removeClass("icon-liwu").addClass("icon-liwu1")
			}, function() {
				$(this).removeClass("icon-liwu1").addClass("icon-liwu")
			})

			$(".iphoe li:nth-child(2)").find("i").hover(function() {
				$(this).removeClass("icon-shouji").addClass("icon-shouji1")
			}, function() {
				$(this).removeClass("icon-shouji1").addClass("icon-shouji")
			})

			/*瀑布流*/
			$(function() {
				var $wrap = $('#wrap');
				var $li = $("#wrap li");
				var index = -1;

				//显示图片的方法
				function show(num) {
					index++;
					var $div = createDiv(index);
					if(!$div) return; //如果没有数据了，直接结束代码
					//获取最小的索引
					var i = getMinIndex();
					$div.fadeIn(1000);
					$li.eq(i).append($div);
					$div.find("img").on("load", function() {
						if(index < num) {
							show(num); //递归调用
						}
					})
				}
				show(10);

				//滚动窗口的时候
				//窗口的高度+滚动条的高度 > 最小li整体的高度
				$(window).on("scroll", function() {
					var i = getMinIndex();
					var minLiHeight = $li.eq(i).height() + $wrap.offset().top;
					if($(window).height() + $(window).scrollTop() + 20 > minLiHeight) {
						//需要加载图片 5
						var num = index + 5;
						show(num);
					}
				});

				//创建detail对象
				function createDiv(index) {
					if(imgData[index]) {
						var $divElement = $("			<li>" +
							"				<div class='kk-index'>" +
							"					<div class='kk-img'>" +
							"						<img src='" + imgData[index].src + "' alt='' />" +
							"						<p>认真有彩蛋！我的Philippines style-长滩岛(多图...)</p>" +
							"						<i class='i-op'></i>" +
							"						<a href=''>almmo</a>" +
							"						<i id='mmmmmm' class='i-ou iconfont icon-shou'></i>" +
							"					</div>" +
							"					<div class='foor-img'>" +
							"						<p>说说这次旅行 说到西南，重庆、贵州、云南、四川成都这四省旅游资源绝对是不相上下的。重庆，是麻辣山城；贵州，是多彩之城；...</p>" +
							"					</div>" +
							"					<div class='xinxi'>" +
							"						<i class='iconfont icon-yanjing'></i>1268" +
							"						<i class='iconfont icon-icon-test1'></i>11" +
							"					</div>" +
							"					<div class='forter'>" +
							"						<i class='iu-op'></i>" +
							"						<div>" +
							"							" +
							"							<span>loss</span>回复:好" +
							"						</div>" +
							"					</div>" +
							"				</div>" +
							"			</li>" +
							"			<li></li>" +
							"			<li></li>" +
							"			<li></li>" +
							"		</ul>");
						return $divElement;
					}

				}

				//获取四个li所在的最小索引
				function getMinIndex() { //100 50 30 20
					var minHeight = $li.eq(0).height();
					var index = 0;
					for(var i = 1; i < $li.length; i++) {
						//获取对应li的高度
						var nHeight = $li.eq(i).height();
						if(nHeight < minHeight) {
							minHeight = nHeight;
							index = i;
						}
					}
					return index;
				}

			})
		//游记部分结束