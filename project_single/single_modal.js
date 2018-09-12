//single_modal.js
$(function(){

	 //미디어 left-top 파일 아이프레임 src적용
	$(".me_l .me_lt  a").on("click",function(){
		
		lt=$(this).attr("data-me");
		$(".me_modal iframe").attr("src",lt);

		$(".me_modal").fadeIn(function(){
			$("iframe").fadeIn();
		});
	});//fadein left
	
	 //미디어 right 파일 아이프레임 src적용
	$(".section .me .me_box .me_r a").on("click",function(){
		
		rt=$(this).attr("data-me");
		$(".me_modal iframe").attr("src",rt);

		$(".me_modal").fadeIn(function(){
			$("iframe").fadeIn();
		});
	});//fadein right

  //모달창 닫기
	$(".me_modal , #mm_close").on("click",function(){
		$("iframe").fadeOut(function(){
			$(".me_modal").fadeOut();
		});
	});//on click
});