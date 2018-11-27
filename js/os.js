
document.onreadystatechange = loadingChange;
//当页面加载状态改变的时候执行这个方法.
function loadingChange() 
{ 

	if(document.readyState == "complete"){ 
			//当页面加载状态为完全结束时渐隐进入 
			$("body").fadeIn(10);

		}else{
			$("body").fadeOut(0);
		}
	}

	// 点击进入全屏 方法、
	var fullscreen=function(){
		elem=document.body;
		if(elem.webkitRequestFullScreen){
			elem.webkitRequestFullScreen();   
		}else if(elem.mozRequestFullScreen){
			elem.mozRequestFullScreen();
		}else if(elem.requestFullScreen){
			elem.requestFullscreen();
		}else{
        //浏览器不支持全屏API或已被禁用
    }
}
// 点击退出全屏 方法
var exitFullscreen=function(){
	var elem=document;
	if(elem.webkitCancelFullScreen){
		elem.webkitCancelFullScreen();    
	}else if(elem.mozCancelFullScreen){
		elem.mozCancelFullScreen();
	}else if(elem.cancelFullScreen){
		elem.cancelFullScreen();
	}else if(elem.exitFullscreen){
		elem.exitFullscreen();
	}else{
        //浏览器不支持全屏API或已被禁用
    }
}

document.oncontextmenu = function() {
	return false;
}

//动画显示消失
function sIn(obj,sin,sout,time){
	$(obj).fadeIn(time);
	$(obj).addClass("animated "+sin);
	$(obj).removeClass(sout);


}
function sOut(obj,sin,sout,time){
	$(obj).fadeOut(time);
	$(obj).addClass(sout);
	$(obj).removeClass(sin);

}

//获取鼠标位置
function getMousePos(event) {
	var e = event || window.event;
	return {'x':e.clientX,'y':clientY}
}

//拖拽函数
function drag(obj) {

	obj.onmousedown = function(ev) {
		//alert(ev+"-88");
		var ev = ev || event;

		var disX = ev.clientX - this.offsetLeft;
		var disY = ev.clientY - this.offsetTop;

		if ( obj.setCapture ) {
			obj.setCapture();
		}

		document.onmousemove = function(ev) {
			var ev = ev || event;

			obj.style.left = ev.clientX - disX + 'px';
			obj.style.top = ev.clientY - disY + 'px';
			console.log(obj.style.left+"---"+obj.style.top);
			//console.log();

			//$("#text").text("left:"+obj.style.left+" -----------  top:"+obj.style.top);
		}

		document.onmouseup = function() {
			document.onmousemove = document.onmouseup = null;
                //释放全局捕获 releaseCapture();
                if ( obj.releaseCapture ) {
                	obj.releaseCapture();
                }
            }

            return false;

        }

    }

  function drags(obj){
  	$(obj).mousedown(function(e){
  		alet("999");
    
	    var positionDiv = $(this).offset();
	    var distenceX = e.pageX - positionDiv.left;
	    var distenceY = e.pageY - positionDiv.top;
	    
	    $(document).mousemove(function(e){
	      var x = e.pageX - distenceX;
	      var y = e.pageY - distenceY;
	      if(x<0){
	        x=0;
	      }else if(x>$(document).width()-$(obj).outerWidth(true)){
	        x = $(document).width()-$(obj).outerWidth(true);
	      }
	      if(y<0){
	        y=0;
	      }else if(y>$(document).height()-$(obj).outerHeight(true)){
	        y = $(document).height()-$(obj).outerHeight(true);
	      }
	      $(obj).css({
	        'left':x+'px',
	        'top':y+'px'
	      });
	    });
	    $(document).mouseup(function(){
	      $(document).off('mousemove');
	    });
	  });


  }
//弹出框定义函数
function stip(title,content,footer,time,large){//title content footer time
	if (large == "large") {
		$(".stip").css({
			"margin-top" :"50px",
			"top":"0",
			"background" : "rgba(255,255,255,0.5)",
			"box-shadow" : "0 3px 3px #cccccc",
			"width" : "80%",
			"margin-left" : "0px",
			"left" :"10%"

		});

	}else{
		$(".stip").css({
			"margin-top" :"-"+($(".stip").height()/2+50)+"px",
			"top":"50%",
			"background" : "rgba(255,255,255,0.5)",
			"box-shadow" : "0 3px 3px #cccccc",

		})
	}

	if (title == 0) {
		var title='';
	}else{
		var title="<div class='title'>"+title+"</div>";
	}

	if (content == 0) {
		var content="<p class='content'></p>";
	}else if(content == "success"){
		success="<div class='stip-s'> <i class='fa fa-smile-o fa-5x' aria-hidden='true'></i><p>success !!!</p></div>";
		var content=success;
	}else if(content == "error"){
		var error="<div class='stip-e'> <i class='fa fa-frown-o fa-5x' aria-hidden='true'></i><p>error !!!</p></div>";
		var content =error;
	}else{
		var content="<div class='content'  style='height:400px'>"+content+"</div>";
	}

	if (footer == 0) {
		var footer="";
	}else{
		var footer = "<div class='footer'><button class='cancle right'>关闭</button></div>";
	}

	if (time == -1) {

	}else{
		setTimeout(function(){
			$(".stip").css({
				"margin-top" :"-250%" ,

			});
		},time+800);
	}


	$(".stip").html(title+content+footer);

	$(".cancle").click(function(){
		$(".stip").css({
			"margin-top" :"-250%" ,

		});
	})


	$(window).resize(function(){
		var width = $(window).width();
		if (large == "large") {
			$(".stip").css({
				"margin-top" :"50px",
				"top":"0%",
				"width" : "80%",
				"margin-left" : "0px",
				"left" :"10%"

			});

		}else{
			if (width>=768) {
				$(".stip").css({
					"width" : "500px",
					"margin-left" :"-250px" ,
					"left" :"50%"		
				});
			}else {
				$(".stip").css({
					"width" : "90%",
					"left" :"5%",	
					"margin-left":"0px"	
				});
			}

		}


	});
}

function minWindow(obj){
	//alert($(".os-footer-min-ico").find("img").hasClass("footer-bar-"+$(obj).attr("data")));
	if ($(".os-footer-min-ico").find("img").hasClass("footer-bar-"+$(obj).attr("data"))) {

		$(".os-footer-min-ico").find(".footer-bar-"+$(obj).attr("data")).remove();
		
	}else{

		sOut($("."+$(obj).attr("data")+"-iframe"),"pulse","fadeOutDown",500);
		$(".os-footer-min-ico").html($(".os-footer-min-ico").html()+"<img class=' "+$(obj).attr("data")+"  footer-bar-ico footer-bar-"+$(obj).attr("data")+"' src=' "+$(obj).find("img").attr("src")+" '/>");
		
		//alert($(".os-footer-min-ico").find("img").hasClass("footer-bar-"+$(obj).attr("data")));
	}

	//alert($(obj).find("img").attr("src"));
	
}

function closeWindow(obj){

	sOut($("."+$(obj).attr("data")+"-iframe"),"pulse","fadeOutUp",500);
}




$(function(){



	$("#test").load('https://www.yuque.com');
	//自定义弹出框初始化
	$("body").html($("body").html()+"<div class='stip'></div>");
	var width = $(window).width();

	if (width>=768) {
		$(".stip").css({
			"width" : "500px",
			"margin-left" :"-250px" ,
			"left" :"50%",		
		});
	}else {
		$(".stip").css({
			"width" : "90%",
			"left" :"5%",		
		})
	}

	//总界面鼠标点击事件
	$("#content").mousedown(function(e) {
		//console.log(e.which);
			    //右键为3
			    if (3 == e.which) {
			    	$(".os-menu-list").eq(0).fadeOut(0);
			    	$(".os-menu-list").removeClass("flipInX flipOutY");
			    	$(".os-menu-list").eq(0).fadeIn(0);
			    	$(".os-menu-list").addClass("animated flipInX");
			    	$(".os-menu-list").eq(0).css({
			    		"top" :e.clientY,
			    		"left" :e.clientX
			    	})

			    } else if (1 == e.which) {

			    	$(".os-menu-list").addClass("flipOutY");
			    	$(".os-menu-list").eq(0).hide(1000);

			    	//右边控制栏目点选
			    	if ($(".os-right-control").hasClass("fadeInRight")) {

			    		sOut($(".os-right-control"),"fadeInRight","fadeOutRight",1000);

			    	}
			    }
			})

	/*右边控制栏目点选控制*/
	$(".os-control-btn").click(function(){
		if ($(".os-right-control").hasClass("fadeInRight")) {
			sOut($(".os-right-control"),"fadeInRight","fadeOutRight",1000);

		}else{

			sIn($(".os-right-control"),"fadeInRight","fadeOutRight",1000);
		}
	})

	/*开始栏目点击*/

	$(".os-start-btn").click(function(){
		if ($(".os-start-page").hasClass("flipInX")) {

			sOut($(".os-start-page"),"flipInX","hinge",1000);

		}else{

			sIn($(".os-start-page"),"flipInX","hinge",1000);
		}
	})

	//窗口关闭
	$(".close-window").click(function(){
		//alert($(this).attr("data-close"));
		closeWindow("."+String($(this).attr("data-close")));
	})
	//窗口最小化
	$(".min-window").click(function(){
		//alert($(this).attr("data-min"));
		minWindow("."+String($(this).attr("data-min")));
	})

	/*微信打开*/
	$(".weixin").click(function(){
		minWindow(this);
		document.getElementById('myframe').src="http://web2.qq.com";
		window.open("https://wx.qq.com/","_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no,channelmode=1,fullscreen=1, copyhistory=no, width=960, height=800,top=40,left=400");
	})



	/*QQ打开*/
	var qqNum=0;
	$(".qq").click(function(){
		if (($(".qq-iframe").hasClass("fadeOutUp")) || (qqNum==0) ) {
			document.getElementsByClassName('qq-frame-src')[0].src="http://web2.qq.com";
			$(".qq-iframe").removeClass("fadeOutUp");
			qqNum++;
		}else{qqNum=1;}			
		$(".os-footer-min-ico").find(".footer-bar-qq").remove();
		sIn($(".qq-iframe"),"pulse","fadeOutDown",800);
		
	})

	var qq=document.getElementById("qq");
	var weibo=document.getElementById("weibo");
	drag(qq);
	drag(weibo);

	alert($(".os-menu-ico").eq(1).height() +Math.floor(1.22)+ " ------- " +$(window).height() + " ------- " +Math.floor(($(window).height()-50)/110));

	//var 

	/*微博打开*/
	var windowNum=0;
	$(".weibo").click(function(){
		if (($(".weibo-iframe").hasClass("fadeOutUp")) || (windowNum==0)) {
			document.getElementById('window-iframe').src="https://weibo.com";
			$(".weibo-iframe").removeClass("fadeOutUp");
			windowNum++;
		}else{windowNum=1;}
		$(".os-footer-min-ico").find(".footer-bar-weibo").remove();


		sIn($(".weibo-iframe"),"pulse","fadeOutDown",800);

		
	})

	/*系统打开*/
	$(".message").click(function(){
		minWindow(this);
		
	})

	$(".os-salmon-cog").click(function(){
		sIn($(".cog-iframe").eq(0),"pulse","fadeOutDown",500);
		sOut($(".os-right-control"),"fadeInRight","fadeOutRight",1000);
	})



	



})