$(document).ready(function(){
	$("#user").focus(function(){
		$(".list-p").siblings("input").removeClass();
		$(".list-p").addClass("focusd")
	})
	$("#user").blur(function(){
		$(".list-p").removeClass("focusd")
	})
	$("#pass").focus(function(){
		$(".list2-p").siblings("input").removeClass();
		$(".list2-p").addClass("focusd")
	})
	$("#pass").blur(function(){
		$(".list2-p").removeClass("focusd")
	})
	
	
	/*
	 * 判断input的val
	 */
	
	$(".btn").on("click",function(){
		var $user =$("#user").val()
		var $pass =$("#pass").val()
		var res = /^[0-9]*$/
		var z = /^[\u4e00-\u9fa5]+$/
		console.log($user)
		console.log($pass)
		if ($user =="") {
			$('.validation').html('账户不能为空');
		}else if($pass ==""){
			$('.validation').html('密码不能为空')
		}else if(res.test($user)){
			$('.validation').html('账户不能以数字开头')			
		}else if(z.test($user)){
			$('.validation').html('账户不能以文字开头')						
		}else if( $pass == "wt23"){
			location="index.html";
			alert("欢迎来到奇恋豆")
		}else {
			$('.validation').html('账户或密码不正确')						
		}
								
	})
	
})


		/*var btn = document.getElementsByClassName("btn")[0];
		var user =document.getElementById("user").value;
		var pass =document.getElementById("pass").value;
		var validation =document.getElementsByClassName("validation")
		btn.onclick=function(){
			alert(111)
		}
		if (user ==""|| pass=="") {
			//validation.style.innerText="账户或密码不能为空";
			var html =document.createTextNode("账户或密码不能为空");
			validation.appendChild("html");
		}*/
	
//用户名添加到本地存储中
var userFlag=0;	
$(".btn").on("click",function(){
	userFlag=1;
	var uName = $("#user").val();
	//console.log(uName);
	localStorage.setItem("userName",uName)
})

//监听别的页面
window.addEventListener("storage",function(e){
	//console.log(111)
	if(e.key == "userName"){
		var newUser = e.newValue;
		//关键代码
		storage = newArr;
			if(userFlag==1){
				$("#userName").html(newUser)
			}
	}
})

//页面刷新  从localStorage寻找userName
if(localStorage.getItem("userName")){
	console.log(1111)
	$("#user").html(localStorage.getItem('userName'))  
}