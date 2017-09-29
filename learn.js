

$(document).ready( function(){
	$(".close-border").click(function(){$("#second-info").hide()})
$("#khan").click(function(){$("#second-info .wrapper").hide(), $("#khan-info").css('display', 'inline-block'),$("#second-info").css('display', 'inline-block'),$("#point2").css({left: '11%'})})
$("#stack").click(function(){$("#second-info .wrapper").hide(), $("#stack-info").show(),$("#second-info").show(),$("#point2").css({left: '49%'})})
$("#cdemy").click(function(){$("#second-info .wrapper").hide(), $("#cdemy-info").css('display', 'inline-block'),$("#second-info").css('display', 'inline-block'),$("#point2").css({left: '85%'})})


$("#freeCodeCamp").click(function(){$("#third-info .wrapper").hide(), $("#fcc-info").show(),$("#third-info").show(),$("#point3").css({left: '20%'})})
//$("#stack").click(function(){$(".slide-out").hide(), $("#stack-info").show(),$("#second-info").show(),$("#point2").css({left: '48%'})})


$("#EDX").click(function(){$("#third-info .wrapper").hide(), $("#EDX-info").show(),$("#third-info").show(),$("#point3").css({left: '78%'})})
//$("#stack").click(function(){$(".slide-out").hide(), $("#stack-info").show(),$("#second-info").show(),$("#point2").css({left: '48%'})})
	$(".close-border").click(function(){$("#third-info").hide()})	

$("#consulatation").click(function(){$("#fourth-info .wrapper").hide(), $("#consulatation-info").show(),$("#fourth-info").show(),$("#point4").css({left: '20%'})})
$("#lesson").click(function(){$("#fourth-info .wrapper").hide(), $("#lesson-info").show(),$("#fourth-info").show(),$("#point4").css({left: '78%'})})
	$(".close-border").click(function(){$("#fourth-info").hide()})
})