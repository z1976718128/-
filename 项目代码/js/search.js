var box=new Vue({
	el:"#box",
	data:{
		flag:false,
		msg:"",
		arr:[],
		searchIndex:-1,
		current:-1,
	},
	methods:{
		out:function(){									//鼠标移出
			this.current=-1;
			this.searchIndex=-1;
		},
		inS:function(index){							//鼠标移入
			this.current=index;
			this.searchIndex=this.current;
			//console.log(this.searchIndex);
		},
		up:function(){									//键盘上键事件
			//this.current=this.searchIndex;
			this.current=-1;
			this.searchIndex--;
			if(this.searchIndex<0){
				this.searchIndex=this.arr.length-1;
			}
		},
		down:function(){								//键盘下键事件
			this.current=-1;
			this.searchIndex++;
			//console.log(this.searchIndex);
			if(this.searchIndex>this.arr.length-1){
				this.searchIndex=0;
			}
			this.msg=this.arr[this.searchIndex];
		},
		clickMe:function(e){
			if(e.keyCode === 38 || e.keyCode === 40) {	//如果是上下键，就return不执行
				return
			}
			if (e.keyCode === 13) {
				window.open('https://www.baidu.com/s?wd=' + this.msg);
				this.msg = '';
			}
			var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?";
			this.$http.jsonp(url,{params:{wd:this.msg},jsonp:"cb"}).then(function(res){
				this.arr=res.data.s
				if(this.arr.length>0){
					this.flag=true;
				}
				else{
					this.flag=false;
				}
				//this.searchIndex=-1
				//console.log(res.data.s);
			})
		}
	}
})