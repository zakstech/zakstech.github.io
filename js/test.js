
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
$(".leftScroll").click( function(){clearInterval(timer);TimerSwitch(100,-50)}) //timer= setInterval(TimerSwitch,10000)})
 $(".rightScroll").click( function(){clearInterval(timer);TimerSwitch();timer= setInterval(TimerSwitch,10000)})
 var scroll = {"#scroll1":-100, "#scroll2": 0, "#scroll3": 100, "#scroll4":200}
 var scrollBar = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
 var reffernce = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
//var timer;

;
function BarUpdate(id,val1=-100,val2=50){
var temp;
    var bar;
    var tempBar;


}
function TimerSwitch(val1=-100,val2=50) {
   

	var temp;
	var bar;
	var tempBar;
            for (var id in scroll){

            	bar = id+"Bar"
            	temp = scroll[id]+val1;
            	tempBar = scrollBar[bar]+val2 
            	$(id).css('left', temp+'%');
            	$(bar).css('left', tempBar+'%')

            	if (temp<-101){
            		
            		
            		var tempId = id;
            		var tempBarId=bar
            		var timer2 = setTimeout(function(){
            			$(tempId).hide()
            			$(tempId).css('left', '200%')
            			$(tempBarId).hide()
            			$(tempBarId).css('left','-75%')
            			
            			scroll[tempId]=200;
            			scrollBar[tempBarId]=-75;

            }, 1000)
            		var timer3 = setTimeout(function(){
            			$(tempId).show();
            			$(tempBarId).show();

            }, 3000)
            		


            		;  

            	}else if(temp>200){
            		
            		
                    var tempId = id;
                    var tempBarId=bar
                    
                        $(tempId).hide()
                        $(tempId).css('left', '-200%')
                        $(tempBarId).hide()
                        $(tempBarId).css('left','125%')
                        
                        scroll[tempId]=-100;
                        scrollBar[tempBarId]=75;

            
                    var timer3 = setTimeout(function(){
                        $(tempId).show();
                        $(tempId).css('left', '-100%')
                        $(tempBarId).show();
                         $(tempBarId).css('left','75%')

            }, 2)

            	} else {
            		scroll[id]=temp;
            		scrollBar[bar]=tempBar


            		

            	}

            	


            }
            // timer = setTimeout('TimerSwitch()', 10000);  
          

        }
        var timer= setInterval(TimerSwitch,10000)
