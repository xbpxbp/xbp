onload=function(){

	
	$.ajax({
		//adjs
		url:"ajax/ad.json",
		success:function(data){
			var Img=$("#ad").find("img")[0];
				Img.src=data.src;
			
		}
	});
	//ad
		$(".adClose").click(function(){
			$(".topA").children("ul").css("top","29px");
//			$("#ad")[0].style.animation="donghua2 2s 1"
			$("#ad").fadeOut(2000,function(){
				$("#ad").remove();
			});

		});

		$(".adClose").mouseover(function(){
			$(this)[0].style.animation="donghua 0.5s infinite";
		});
		$(".adClose").mouseout(function(){
			
			$(this)[0].style.animationIterationCount=1;
		});
		//top
		$(".topA").mouseover(function(){
			$(this).children("ul:first").css({"display":"block","left":$(this)[0].offsetLeft-20});
		});
		$(".topA").mouseout(function(){
			$(this).children("ul:first").css("display","none");
		});
	//sort
	$(".sort li").mouseover(function(){
		$(this).children("div:first").css("display","block");
		$(this).children("a:first").css({"background":"#fff","color":"red"});
		
	})
	$(".sort li").mouseout(function(){
		$(this).children("div:first").css("display","none");
		$(this).children("a:first").css({"background":"#E5004A","color":"#fff"});
	});
	//轮播图
	$(function(){
		   //第一张显示
		   $(".pic li").eq(0).show();
		   //鼠标滑过手动切换，淡入淡出
		   $("#position li").mouseover(function() {
		    $(this).addClass('cur').siblings().removeClass("cur");
		    var index = $(this).index();
		    i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
		    // $(".pic li").eq(index).show().siblings().hide();
		    $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
		   });
		   //自动轮播
		   var i=0;
		   var timer=setInterval(play,2000);
		   //向右切换
		   var play=function(){
		    i++;
		    i = i > 2 ? 0 : i ;
		    $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
		    $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
		   }
		   //向左切换
		   var playLeft=function(){
		    i--;
		    i = i < 0 ? 2 : i ;
		    $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
		    $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
		   }
		   //鼠标移入移出效果
		   $("#container").hover(function() {
		    clearInterval(timer);
		   }, function() {
		    timer=setInterval(play,2000);
		   });
		   //左右点击切换
		   $("#prev").click(function(){
		    playLeft();
		   })
		   $("#next").click(function(){
		    play();
		   })
		  })
	//banner Json
	$.ajax({
		url:"ajax/banner.json",
		success:function(data){
			var Img=$("#slides li");
			for(var i=0;i<Img.length;i++){
				Img[i].style.background=data.data[i].background;
			}
		}
	});
	//优惠券json
	$.ajax({
		url:"ajax/youhui.json",
		success:function(data){
			var Img=$("#youhuiquan").find("img")[0];
			Img.src=data.src;
			
		}
	});
	//整点抢购
	$.ajax({
		url:"ajax/panicBuy.json",
		success:function(data){
			var Img=$(".panicShow").find("img");
			for(var i=0;i<Img.length;i++){
				Img[i].src=data.data[i].src;
			}
			var ps=$(".panicShow").find("p");
			for(var i=0;i<ps.length;i++){
				$(ps[i]).html(data.data[i].con);
			}
			var tejias=$(".panicShow").find(".tejia");
			for(var i=0;i<tejias.length;i++){
				$(tejias[i]).html(data.data[i].tejia);
			}
			var yuanjias=$(".panicShow").find(".yuanjia");
			for(var i=0;i<yuanjias.length;i++){
				$(yuanjias[i]).html(data.data[i].yuanjia);
			}
		}
	});
	$(".panicShow li").mouseenter(function(){
		$(this).children(".buyTangchu:first").children("div:first").css("left","-137px")
		$(this).children(".buyTangchu:first").css("display","block");
		$(this).children(".buyTangchu:first").children("div:first").animate({"left":"20px"},800);
	}).mouseleave(function(){
		$(this).children(".buyTangchu:first").css("display","none");
	});
}
