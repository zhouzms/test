$(document).ready(function(){
	var arrimg=["static/home/img/barimg/it.png","static/home/img/barimg/yunwei.png","static/home/img/barimg/pingduoduo.jpg","static/home/img/barimg/640.jpg","static/home/img/barimg/650.jpg"];
	var text=["阿里云智能首席官丁险锋：阿里全面进军人工智能","阿里云自动运维的三剑客","拼多多市值过千亿","华为全球最快AI训练师诞生","阿里云数据库稳步增长"]
	var imghref=["http://www.baidu.com","http://www.jidong.com","http://www.huya.com","http://www.xinlang.com","#","#"];
	var i=0;
	//左切图
	function togle(){
			i++;
			if(i>arrimg.length-1){
				i=0;
			}
			spanli();
			$("#sidebartext li").text(text[i]);
			$(".lunbo img").attr("src",arrimg[i]);
			$(".lunbo a").attr("href",imghref[i])
	}
	//下面的小点
	function spanli(){
		$("#sidebarrudis li").each(function(n){
				$("#sidebarrudis li").css("background","white");
				if(n==i){
					$(this).css("background","red");
					return false;
				}
			});
	}
	//左切图
	$("#toright").click(function(){	
			togle();
	});
	//右切图
	$("#toleft").click(function(){
				i--;
			if(i<0){
				i=arrimg.length;
			}
			spanli();
			$(".lunbo img").attr("src",arrimg[i]);
			$(".lunbo a").attr("href",imghref[i]);
			$("#sidebartext li").text(text[i]);
	});
	//自动轮播
	var timeer=setInterval(function(){
		togle();
	},4000);
	$("#sidebar").mouseenter(function(){
		clearInterval(timeer);
	});
	$("#sidebar").mouseleave(function(){
		timeer=setInterval(function(){
		togle();
	},4000);
	});
	//监视鼠标的移动侧边栏不动
		var navOffset=$("nav").offset().top; 
            $(window).scroll(function(){  
                var scrollPos=$(window).scrollTop();
                if(scrollPos >=navOffset){  
                    $("nav").addClass("fixed");  
                }else{  
                   $("nav").removeClass("fixed");  
                }  
            });  
    //鼠标悬浮事件
    $(".article-auto").each(function(n){
  		$(this).mouseenter(function(){
  			$(this).addClass("tagboder");
  		});
 	});
    $(".article-auto").mouseleave(function(){
    	$(".article-auto").removeClass("tagboder");
    });
     $(".recommend-article").each(function(n){
  		$(this).mouseenter(function(){
  			$(this).addClass("tagboder");
  		});
 	});
    $(".recommend-article").mouseleave(function(){
    	$(".recommend-article").removeClass("tagboder");
    });
    
});
