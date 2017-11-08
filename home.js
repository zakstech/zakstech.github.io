//-------Toggles for Mobile version-----//

var md = new MobileDetect(window.navigator.userAgent);

//

//---------main functions---------------------------//

$(document).ready( function(){
	//$(".box").css({"visibility":"hidden"})

	var width="30%";
	var width2="33%"
	var height="40%"
	var height2="45%"

	//--Code to rearange boxes if on mobile device ---- //

	if (md.mobile()) {

		


		var width="40%"
	var width2="45%"
	var height="30%"
	var height2="33%"
	$(".box").css({"width":width,"height":height})

	$(".top" ).css({"left":"1%","margin-top":"0px"})
	$(".bottom" ).css({"left":"51%","margin-top":"0px"})
	$(".right" ).css({"top":"34%","margin-top":"160px"})
		$(".left" ).css({"top":"0%","margin-top":"160px"})
			$(".middle" ).css({"top":"67%","margin-top":"160px"})
			
       
    }

//$(".box").css({"visibility":"visible"})
	var active = false;

$(".box").hover(
	

	function(){
	var box = this
	if($(box).hasClass("hover")){
		$("h2",box ).css({"font-size":"24px"})
	$("p",box ).css({"font-size":"14px"})
		$(box).css({"z-index":"2","height": height2,"width":width2,"box-shadow": "20px 20px 15px #777777"})
		

	}
},

	function(){
		var box = this
		
		if($(box).hasClass("hover")){
		$(box).css({"height": height,"width":width,"box-shadow": "10px 10px 5px #888888"})
		$("h2",box ).css({"font-size":"20px"})
	$("p",box ).css({"font-size":"12px"})
	setTimeout(
			function(){

				$(box).css({"z-index":"1"});
                       
			},400)
				
		}
	}




)

$(".box").click(function(){
	var box = this
	

	
	if($(box).css("z-index")==="2"&&active===false){
		
		$(box).find(".close").css({"visibility":"visible"})
		active=true
			$(".box").removeClass("hover")
	
	var top ="35%"
	//var top2 = "-220px"
	var left = "31%"
	var left2 = "1%"
	var width= "100%"
	if($(box).hasClass("top")){
		top="160px"
		top2="14px"
	}
	/*if($(box).hasClass("left")){
		left="111%"
		left2="2%"
	} else if($(box).hasClass("right")){ 
		left="-100%"
		left2="-208%"

	} else if ($(box).hasClass("bottom")){
		width = "265%"}
		*/

		$(".box").css({"transition": "all .7s "});
		$(box).css({"z-index": "3","top":top, "left":"32%", "height":"44%", "width": "33%"

		})

		
		setTimeout(
			function(){

				$(".box").css({"transition": "all .8s linear .4s"});
						$("h2",box ).css({"font-size":"62px","transition":"all .8s linear .4s" })
						$("p",box ).css({"font-size":"40px","transition":"all .8s linear .4s"})

                       
				$(box).css({"width": "98%","height":"100%", "z-index": "3","left":"1%","top":"160px","top":"0%","box-shadow": "50px 50px 25px","border-width":"6px"});
		         /*position:absolute;top:0;left:0;width:100%;height:100%;background-color:white*//*"margin-top":top2,"margin-left":left2,"top":"0","left":"0",*/
			},710)
				
		}
	


	/*$(this).css({"grid-column-start": "1","grid-column-end": "4","grid-row-start":"1","grid-row-end":"3", "width": "100%","height":"100%", "margin":"2%"});
	*/

})


$(".close").click(function(){
	var box = this.closest(".box")
	$(box).find(".close").css({"visibility":"hidden"})

	var top ="45%"
	var left = "34%"
	//--- If statment for desktop version --//
	if (!md.mobile()){
		if($(box).hasClass("top")){
			top="0%"
		}
		if($(box).hasClass("left")){
			left="1%"
		} 
		else if($(box).hasClass("right")){ 
			left="67%"
		}
	}
	//--- If statment for mobile version --//
	else{
		var top ="67%"
	var left = "51%"
		if($(box).hasClass("top")){
			left="1%"
		}
		if($(box).hasClass("left")){
			top="0%"
		} 
		else if($(box).hasClass("right")){ 
			top="34%"
		}
	}

	

	$(box).css({"width": "33%","height":"44%",  "top":"23%", "left":"31%", "box-shadow": "15px 15px 10px","border-width":"2px"})
	$("h2",box ).css({"font-size":"20px"})
	$("p",box ).css({"font-size":"12px"})

	setTimeout(
		function(){

			
			$(box).css({ "height":height, "width": width,"top":top,"left":left, "box-shadow":"10px 10px 5px #888888"	})

		},1200)
	setTimeout(
		function(){
			
			$(".box").css({"transition": "all .4s linear .2s"});
			$("h2",box ).css({"font-size":"20px","transition": "all .4s linear .2s"})
	$("p",box ).css({"font-size":"12px","transition": "all .4s linear .2s"})
			//$(".box").addClass("hover");
			$(".box").addClass("hover");
			active=false;

		},1600)
	setTimeout(
		function(){
			$(box).css({"z-index": "1"	})
				$(box).attr("href", "#")
		},2800)


})

	
})

/*

$("#box2").click(function(){
	
	

	
	if($("#box2").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box2").css({"z-index": "2","margin-top":"50%",  "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box2").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})

$("#box3").click(function(){
	
	

	
	if($("#box3").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box3").css({"z-index": "2","margin-top":"50%", "margin-left":"-108%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box3").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%", "margin-left":"-208%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})


$("#box4").click(function(){
	
	

	
	if($("#box4").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box4").css({"z-index": "2","margin-top":"-50%", "margin-left":"111%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box4").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%","margin-top":"-90%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})

$("#box5").click(function(){
	
	

	
	if($("#box5").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box5").css({"z-index": "2","margin-top":"-50%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box5").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%","margin-top":"-90%", "margin-left":"-100%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})


$("#box6").click(function(){
	
	

	
	if($("#box6").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box6").css({"z-index": "2","margin-top":"-50%", "margin-left":"-111%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box6").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%","margin-top":"-85%", "margin-left":"-208%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	


	

})

*/