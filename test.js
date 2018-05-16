
$(document).ready(function() {
     
    // Put your offset checking in a function
    function checkOffset() {

        if ($("#head").offset().top > 77) {
        	$("#head").removeClass("tall");
            $("#head").addClass("collapsed");


            
        }     
        else if($("#head").offset().top < 20) {
        	$("#head").addClass("tall");
            $("#head").removeClass("collapsed");
            
        }
    }

    // Run it when the page loads
    checkOffset();
    TimerSwitch();

    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
})

 var scroll = {"#scroll1":-100, "#scroll2": 0, "#scroll3": 100, "#scroll4":200}
 var scrollBar = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
//var timer;

;
function TimerSwitch() {
   

	var temp;
	var bar;
	var tempBar;
            for (var id in scroll){

            	bar = id+"Bar"
            	temp = scroll[id]-100;
            	tempBar = scrollBar[bar]+50 
            	$(id).css('left', temp+'%');
            	$(bar).css('left', tempBar+'%')

            	if (temp<-101){
            		
            		
            		var tempId = id;
            		var tempBarId=bar
            		var timer = setTimeout(function(){
            			$(tempId).hide()
            			$(tempId).css('left', '200%')
            			$(tempBarId).hide()
            			$(tempBarId).css('left','-75%')
            			
            			scroll[tempId]=200;
            			scrollBar[tempBarId]=-75;

            }, 1000)
            		var timer = setTimeout(function(){
            			$(tempId).show();
            			$(tempBarId).show();

            }, 3000)
            		


            		;  

            	}else /* if(temp>75){
            		
            		scroll[id]=temp;

            	} else */{
            		scroll[id]=temp;
            		scrollBar[bar]=tempBar


            		

            	}

            	


            }
            // timer = setTimeout('TimerSwitch()', 10000);  
          

        }
        var timer= setInterval(TimerSwitch,10000)
