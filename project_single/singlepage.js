//singlepage.js
$(document).ready(function(){


	//윈도우 리사이즈 헤이트 적용
	$(window).on({"load resize":function(){
		var ww=$(window).width();
		var wh=$(window).height();
		console.log(ww,wh);
		$(".section > div").css({"height":wh,
			"width":ww})
	}});
	
	ww=$(window).width();
    wh=$(window).height();
	

	$(".section > div").css({"height":wh,
			"width":ww});
	
	//배열 선언
	
	var docpos=new Array(0,wh,wh*2,wh*3,wh*4);

	// console.log(docpos)

	$(".header .gnb li a").on("click",function(e){
		idx=$(".header .gnb li a").index($(this));
		console.log(idx);
		$(this).parent().addClass("active").siblings().removeClass("active");

		$("html, body").animate({scrollTop:docpos[idx]});
		e.preventDefault();
	});//gnb click page scroll
	
	//.header .logo
	$(".header .logo").on("click",function(e){

		$("html, body").animate({scrollTop:docpos[0]});

		e.preventDefault();
	});//.header .logoclick page scroll

	//mobile------------------------------------------------------
	//클릭 이동 배열
	$(".header .mo_gnb li a").on("click",function(e){
		idx=$(".header .mo_gnb li a").index($(this));
		console.log(idx);
		$(this).parent().addClass("moactive").siblings().removeClass("moactive");

		$("html, body").animate({scrollTop:docpos[idx]});
		e.preventDefault();
	});//gnb click page scroll
	
	$(".header .mo_gnb").hide();

	$(".header .mo_btn").on("click",function(){
		if($(".header .mo_gnb").css("display")=="none"){
			
			$(".header .mo_btn i:first-child").hide();
			$(".header .mo_btn i:last-child").show();
			$(".header .mo_gnb").slideDown();

		}else{

			$(".header .mo_btn i:last-child").hide();
			$(".header .mo_btn i:first-child").show();
			
			$(".header .mo_gnb").slideUp();

		};//if
	});
	//페이지네이션 ------------------------------------------------------
	//페이지네이션 클릭 배열
	$(".paginaition > li").on("click",function(e){
		idxp=$(".paginaition li").index($(this));
		console.log(idxp);
		//$(this).addClass("pgactive").siblings().removeClass("pgactive");

		$("html, body").animate({scrollTop:docpos[idxp]});
		e.preventDefault();
	});//pagination click page scroll
	
	//윈도우 스크롤 할시 클래스 적용 gnb,페이지 네이션---------------------------------------------
	$(window).scroll(function(){
		
		if($(this).scrollTop()>=wh*4-60)
		{
			$(".header .gnb li").eq(4).addClass("active").siblings().removeClass("active");
			$(".paginaition li:last-child").addClass("pgactive").siblings().removeClass("pgactive");
			

			$(".paginaition li .bd").css("display","none");
			$(".paginaition li:last-child >.bd").css("display","block");

		}else if($(this).scrollTop()>=wh*3-40&&$().scrollTop()< wh*4-60){

			$(".header .gnb li").eq(3).addClass("active").siblings().removeClass("active");
			$(".paginaition li:nth-child(4)").addClass("pgactive").siblings().removeClass("pgactive");
			

			$(".paginaition li .bd").css("display","none");
			$(".paginaition li:nth-child(4) >.bd").css("display","block");

		}else if($(this).scrollTop()>=wh*2&&$().scrollTop()< wh*3){

			$(".header .gnb li").eq(2).addClass("active").siblings().removeClass("active");
			$(".paginaition li:nth-child(3)").addClass("pgactive").siblings().removeClass("pgactive");
			
			$(".paginaition li .bd").css("display","none");
			$(".paginaition li:nth-child(3) >.bd").css("display","block");

		}else if($(this).scrollTop()>=wh &&$().scrollTop()< wh*2){

			$(".header .gnb li").eq(1).addClass("active").siblings().removeClass("active");
			$(".paginaition li:nth-child(2)").addClass("pgactive").siblings().removeClass("pgactive");
			
			$(".paginaition li .bd").css("display","none");
			$(".paginaition li:nth-child(2) >.bd").css("display","block");

		}else {

			$(".header .gnb li").eq(0).addClass("active").siblings().removeClass("active");
			$(".paginaition li:first-child").addClass("pgactive").siblings().removeClass("pgactive");
			
			
			$(".paginaition li .bd").css("display","none");
			$(".paginaition li:first-child >.bd").css("display","block");


		};//if

	});//window.scroll active
	
	//윈도우 스크롤 헤더 배경컬러 변경 & fixed
	$(window).scroll(function(){

		if($(this).scrollTop()>=80)
		{
			$(".header").css({"position":"fixed",
									  "z-index":"150",
										"width":"100%",
										"background":"#EEE2D1"});
		};
		
		if($(this).scrollTop()>=wh*4-60)
		{
			
			$(".header").css({"background":"#E7E9CB",
										"transition":"0.5s"});

		}else if($(this).scrollTop()>=wh*3-60&&$().scrollTop()< wh*4-60){
			
			$(".header").css({"background":"#AFE0E0",
										"transition":"0.5s"});

		}else if($(this).scrollTop()>=wh*2-60&&$().scrollTop()< wh*3-60){
	
		$(".header").css({"background":"#EED4CD",
										"transition":"0.5s"});


		}else if($(this).scrollTop()>=wh-60 &&$().scrollTop()< wh*2-60){
			
			$(".header").css({"background":"#A9B8B8",
										"transition":"0.5s"});

		}else{
			
			$(".header").css({"background":"#F4E9DA",
										"transition":"0.5s"});
			$(".section").css({"padding-top":"60px",
									"background":"#F4E9DA"});
			
		};//if
	});//header fixed scroll

	
	//home요소 fade적용
		$("#fl,#fl1,#fl2, .ho_txt").hide();
		
		/*$("html").on("mouseover",function(){});*/
			$("#fl").fadeIn(1000);
				$("#fl1").fadeIn(2000);
				$("#fl2").fadeIn(3000);
				$(".ho_txt").fadeIn(3200);
		

		//스크롤 할때 각 페이지 요소들 fade적용
		$(".section .pro .pro_t_bg , #pro_img, #pro_img1, #pro_img2 ,.section .me .me_box").hide();
		
		$(".section .gall .gall_box").hide();
		
		//fade in out
		$(window).scroll(function(){
			if($(this).scrollTop()>=0){
				
				/*$("#fl").fadeIn(1000);
				$("#fl1").fadeIn(2000);
				$("#fl2").fadeIn(2800);
				$(".ho_txt").fadeIn(2800);*/

			};//if
			
			if($(this).scrollTop()>=wh){
				
				$("#pro_img").fadeIn(1500);
				$("#pro_img1").fadeIn(2000);
				$("#pro_img2").fadeIn(2500);
				$("section .pro .pro_t_bg").fadeIn(2500);

			}if($(this).scrollTop()>=wh*2){
				
				$(".section .gall .gall_box").fadeIn(1000);

			}if($(this).scrollTop()>=wh*3){
				
				$(".section .me .me_box").fadeIn(1000);

			}if($(this).scrollTop()>=wh*4){
				
			};//if
		});//home fade
		
		
});//doc