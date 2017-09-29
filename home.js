//-------Toggles for Mobile version-----//

 function IsMobile() {
          var Uagent = navigator.userAgent||navigator.vendor||window.opera;
            return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(Uagent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Uagent.substr(0,4))); 
        };
        if (IsMobile()) 
        {
          setTimelineWidth = function(timelineComponents, width) {
            //Line 3 is set width 100%
            totalWidth = $(window).width((timelineComponents['timelineDates'].length * 100));
            //}
            timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
            updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
            updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);

            return totalWidth;
          }
        } 
        else 
        {
          setTimelineWidth = function(timelineComponents, width) {
            var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
              timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
              timeSpanNorm = Math.round(timeSpanNorm) + 3,
              //totalWidth = (timelineComponents['timelineDates'].length * 100)
              totalWidth = $(window).width((timelineComponents['timelineDates'].length * 100));
            timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
            updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
            updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);

            return totalWidth;
          }
        }

//---------main functions---------------------------//

$(document).ready( function(){

	var active = false;

$(".box").hover(
	

	function(){
	var box = this
	if($(box).hasClass("hover")){
		$("h2",box ).css({"font-size":"24px"})
	$("p",box ).css({"font-size":"14px"})
		$(box).css({"z-index":"2","height": "45%","width":"33%","box-shadow": "20px 20px 15px #777777"})
		

	}
},

	function(){
		var box = this
		
		if($(box).hasClass("hover")){
		$(box).css({"height": "40%","width":"30%","box-shadow": "10px 10px 5px #888888"})
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
	var top2 = "-220px"
	var left = "31%"
	var left2 = "1%"
	var width= "100%"
	if($(box).hasClass("top")){
		top="160px"
		top2="14px"
	}
	if($(box).hasClass("left")){
		left="111%"
		left2="2%"
	} else if($(box).hasClass("right")){ 
		left="-100%"
		left2="-208%"

	} else if ($(box).hasClass("bottom")){
		width = "265%"}

		$(".box").css({"transition": "all .8s"});
		$(box).css({"z-index": "3","top":top, "left":"32%", "height":"44%", "width": "33%"

		})

		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});
						$("h2",box ).css({"font-size":"62px","transition":"all 1s linear .5s" })
						$("p",box ).css({"font-size":"40px","transition":"all 1s linear .5s"})

                       
				$(box).css({"width": "98%","height":"100%", "z-index": "3","left":"1%","top":"160px","top":"0%","box-shadow": "50px 50px 25px","border-width":"15px"});
		         /*position:absolute;top:0;left:0;width:100%;height:100%;background-color:white*//*"margin-top":top2,"margin-left":left2,"top":"0","left":"0",*/
			},1200)
				
		}
	


	/*$(this).css({"grid-column-start": "1","grid-column-end": "4","grid-row-start":"1","grid-row-end":"3", "width": "100%","height":"100%", "margin":"2%"});
	*/

})


$(".close").click(function(){
	var box = this.closest(".box")
	$(box).find(".close").css({"visibility":"hidden"})

	var top ="45%"
	var left = "34%"
	if($(box).hasClass("top")){
		top="0%"
	}
	if($(box).hasClass("left")){
		left="1%"
	} else if($(box).hasClass("right")){ 
		left="67%"}

	$(box).css({"width": "33%","height":"44%",  "top":"23%", "left":"31%", "box-shadow": "15px 15px 10px","border-width":"5px"})
	$("h2",box ).css({"font-size":"20px"})
	$("p",box ).css({"font-size":"12px"})

	setTimeout(
		function(){

			
			$(box).css({ "height":"40%", "width": "30%","top":top,"left":left, "box-shadow":"10px 10px 5px #888888"	})

		},1500)
	setTimeout(
		function(){
			
			$(".box").css({"transition": "all .4s linear .2s"});
			$("h2",box ).css({"font-size":"20px","transition": "all .4s linear .2s"})
	$("p",box ).css({"font-size":"12px","transition": "all .4s linear .2s"})
			//$(".box").addClass("hover");
			$(".box").addClass("hover");
			active=false;

		},2500)
	setTimeout(
		function(){
			$(box).css({"z-index": "1"	})
				$(box).attr("href", "#")
		},3000)


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