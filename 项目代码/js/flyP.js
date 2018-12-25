
function fly() {
    var x = $("#fashe").offset().left;
    var y = $("#fashe").offset().top;
    //console.log($("#fashe").offset().top)
    pwxTex(x, y);
}
var flag=0;
// 抛物线特效
function pwxTex(x, y) {
	if(flag==0){
		flag=1;
		//console.log($("#cartN").text())
	    var speedI = 2;
	    var leftI = $(window).scrollLeft()-70;
	    var topI = $(window).scrollTop()-30;
		var cartNum = 0;
		var catN=parseInt($("#cartN").text());
	    // 获得目标的偏移量
	    var offset = $('#jieshou').offset();
	    var div = document.createElement('div');
	    div.className = 'pao';
	    div.style.cssText = 'transform: translate3d(0, 0, 0);' +
	                        'width: 0.75rem;' +
	                        'height: 0.75rem;' +
	                        'border-radius: 50%;' +
	                        'background: red;' +
	                        'position: relative;' +
	                        'z-index: 99999999;' +
	                        'top:'+x+'px;left:'+y+'px';
	    // 将生成的 div 写入 body 标签下
	    $('#fashe').append(div);
	    // 获得生成的抛物线效果对象
	    var flyer = $('.pao');
	    var e_leftI =  $("#jieshou").offset().left ;
	   // console.log($('#jieshou').offset().left - $("#fashe").offset().left)
	    var e_topI = $("#jieshou").offset().top-$(window).scrollTop();
	    flyer.fly({
	        start: {
	            left: x - leftI,
	            top: y - topI
	        },
	        end: {
	//                  left: (offset.left + $('#jieshou').width() / 2), //结束位置
	//                  top: (offset.top + $('#jieshou').height() / 1)
	            left : e_leftI,
	            top : e_topI
	        },
	        speed: speedI, // 越大越快，默认1.2
	        onEnd: function () { // 结束回调
	        	//$(".pao").css({transform:"scale(4)"},500);
	           	//$('#jieshou').css({'transform': 'scale(0.5)'}, 100);
	            this.destroy(); // 销毁这个对象
	            var spNum=parseInt($("#t1").val());
	            if(isNaN(spNum)){
	            	spNum=1;
	            	//console.log(spNum)
	            }
	            //console.log(typeof spNum)
	            catN += spNum;
	            $("#cartN").html(catN)
	            flag=0;
	            $("#cartN").css({
	            	display:"block"
	            })
	        }
	    });
	}
    
    
}