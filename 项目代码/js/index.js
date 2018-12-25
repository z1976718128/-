$(document).ready(function(){
	/*页面刷新图片晃动*/

			$(".save").addClass("save")

	/*页面刷新图片结束*/
	
	$(document).on("scroll",function(){
	var $h =$(".fixed-top").offset().top;
	var $s =$(document).scrollTop();
	var num =300
	console.log($s)
	if ($s>num) {
		$(".fixed-top").css({"position":"fixed","background":"#eee","top":0})
		$(".box").hide()
	}else if($s<num){
		$(".fixed-top").css({"background":"#fff","position":"relative","top":10})
		$(".box").show()
	}
})
	$("#carousels").carousel({
				interval:2000,
				pause:"hover",
				wrap:true,
			})
			
			$("#sw").on("click",function(){
				$("#Modal").show(1500)
				$("#Modal").modal({
					backdrop:"static",
					keyboard:false,
					
				})
				
			})
			
			$("#sr").on("click",function(){
				$("#Modal2").show(1500)
				$("#Modal2").modal({
					backdrop:"static",
					keyboard:false,
					
				})
				
			})
	
	/*懒加载*/
	$(".lzj").lazyload({
				effect : "fadeIn",
				threshold:300,
			})
	/*回到顶部*/
	if ($('#back-to-top').length) {
            var scrollTrigger = 600; // px
  
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            });

            $('#back-to-top').on('click', function (e) {
                // html,body兼容浏览器
                $('html,body').animate({
                    scrollTop: 0
                }, 700);

                return false;
            });
        }
	/*回到顶部结束*/
	
	/*vue input跨域*/
	new Vue({
		el:".seach",
		data:{
			arr:[],
			wd:"",
			noindex:0,
			flag:false
		},
		methods:{
			fn(){
				var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?";
				this.$http.jsonp(url,{params:{wd:this.wd},jsonp:"cb"}).then(function(res){
					this.arr = res.data.s;
				},function(res){
					console.log(res.status)
				})
				
			},
			up:function(){				
					console.log("up")
					this.noindex--;
					if (this.noindex<0) {
						this.noindex=this.arr.length-1
					}
				},
				down:function(){
					console.log("down")
					this.noindex++;
					if (this.noindex>this.arr.length-1) {
						this.noindex=0
					}
				},
				fn3:function(){
					console.log();
				},
				bol:function(){
					this.arr = []
					
				}
				
		}
	})
	
	/*input跨域结束*/
	
		$("#myCarousel").carousel({
		 		interval:2000,
		 		pause:"hover",
		 		wrap:true,
		 	})
		 	$(window).ready(function() {
			    setTimeout(function(){
			    	$(".lzj").trigger("effect")
			    },2000)
			}); 
		 	$(document).on('ready', function(){
			    $('#input-1').rating({
			    	step: 1,
		       		starCaptions: {0:"暂无",1: '一星', 2: '两星', 3: '三星', 4: '四星', 5: '五星'},
		       		starCaptionClasses: {1: 'text-danger', 2: 'text-warning', 3: 'text-info', 4: 'text-primary', 5: 'text-success'}
			    });
			     $('#input-2').rating({
			    	step: 1,
		       		starCaptions: {0:"暂无",1: '一星', 2: '两星', 3: '三星', 4: '四星', 5: '五星'},
		       		starCaptionClasses: {1: 'text-danger', 2: 'text-warning', 3: 'text-info', 4: 'text-primary', 5: 'text-success'}
			    });
			     $('#input-3').rating({
			    	step: 1,
		       		starCaptions: {0:"暂无",1: '一星', 2: '两星', 3: '三星', 4: '四星', 5: '五星'},
		       		starCaptionClasses: {1: 'text-danger', 2: 'text-warning', 3: 'text-info', 4: 'text-primary', 5: 'text-success'}
			    });
			     $('#input-4').rating({
			    	step: 1,
		       		starCaptions: {0:"暂无",1: '一星', 2: '两星', 3: '三星', 4: '四星', 5: '五星'},
		       		starCaptionClasses: {1: 'text-danger', 2: 'text-warning', 3: 'text-info', 4: 'text-primary', 5: 'text-success'}
			    });
			     $('#input-5').rating({
			    	step: 1,
		       		starCaptions: {0:"暂无",1: '一星', 2: '两星', 3: '三星', 4: '四星', 5: '五星'},
		       		starCaptionClasses: {1: 'text-danger', 2: 'text-warning', 3: 'text-info', 4: 'text-primary', 5: 'text-success'}
			    });
			    
			});
	
	$(".n-app").on("mousemove",function(){
	$(".imgs").css("transform","rotateX(180deg)")
	$(".wx").show()
})
$(".n-app").on("mouseout",function(){
	$(".imgs").css("transform","rotateX(0deg)")
	$(".wx").hide()
})
$(".businessman").on("mousemove",function(){
	$(".img3").css("transform","rotateX(180deg)")
	$(".businessman-b").show()
})
$(".businessman").on("mouseout",function(){
	$(".img3").css("transform","rotateX(0deg)")
	$(".businessman-b").hide()
})

$(".Record").on("mousemove",function(){
	$(".img1").css("transform","rotateX(180deg)")
	$(".no-Record").show()
})
$(".Record").on("mouseout",function(){
	$(".img1").css("transform","rotateX(0deg)")
	$(".no-Record").hide()
})
$('.moves').on("mousemove",function(){
	$(".img4").css("transform","rotateX(180deg)")	
	$(".city").show()
})
$('.moves').on("mouseout",function(){
	$(".img4").css("transform","rotateX(0deg)")
	$(".city").hide()
})

$(".shop").on("mousemove",function(){
	$(".no-shop").show()
})
$(".shop").on("mouseout",function(){
	$(".no-shop").hide()
})
$(".compensate").on("mousemove",function(){
	$(".no-shop2").show()
})
$(".compensate").on("mouseout",function(){
	$(".no-shop2").hide()
})
$(".money").on("mousemove",function(){
	$(".no-shop3").show()
})
$(".money").on("mouseout",function(){
	$(".no-shop3").hide()
})

$(".index2").on("mousemove",function(){
	$("#imgxia").css("transform","rotateX(180deg)")
})
$(".index2").on("mouseout",function(){
	$("#imgxia").css("transform","rotateX(0deg)")
})


/*city*/
$(".tourism").on("mousemove",function(){
	$(".tourism-list").show()
})
$(".tourism").on("mouseout",function(){
	$(".tourism-list").hide()
})

$(".tourism2").on("mousemove",function(){
	$(".tourism-list2").show()
})
$(".tourism2").on("mouseout",function(){
	$(".tourism-list2").hide()
})
$(".tourism3").on("mousemove",function(){
	$(".tourism-list3").show()
})
$(".tourism3").on("mouseout",function(){
	$(".tourism-list3").hide()
})

$(".tourism4").on("mousemove",function(){
	$(".tourism-list4").show()
})
$(".tourism4").on("mouseout",function(){
	$(".tourism-list4").hide()
})

$(".index2").on("mousemove",function(){
	$(".index-x").show()
})
$(".index2").on("mouseout",function(){
	$(".index-x").hide()
})
})

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

