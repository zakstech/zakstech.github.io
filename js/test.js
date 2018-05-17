
$(document).ready(function() {
     
    // Put your offset checking in a function
   
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  
    $("#head").removeClass("tall");
            $("#head").addClass("collapsed");
            $("#loboBar").css("max-width","80%")
 function checkOffset() {}
        }
    else{
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
       
    }
    TimerSwitch(); 

    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
})
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  var scrollBar = {"#scroll1Bar":100, "#scroll2Bar":0, "#scroll3Bar": -100, "#scroll4Bar":-200}
 var reffernce = {"#scroll1Bar":100, "#scroll2Bar":0, "#scroll3Bar": -100, "#scroll4Bar":-200}  
 var move2=100;// Take the user to a different screen here.
 var barReset=-200;

 $(".scrollBar").css("width","100%")
 
 


} else{

     var scrollBar = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
 var reffernce = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
 var move2=50;
 var barReset=-75;
}
$(".leftScroll").click( function(){clearInterval(timer);TimerSwitch(100,-val2)}) //timer= setInterval(TimerSwitch,10000)})
 $(".rightScroll").click( function(){clearInterval(timer);TimerSwitch(-100,val2);timer= setInterval(TimerSwitch,10000)})
 var scroll = {"#scroll1":-100, "#scroll2": 0, "#scroll3": 100, "#scroll4":200}

//var timer;

;
function BarUpdate(id,val1=-100,val2=50){
var temp;
    var bar;
    var tempBar;


}
function TimerSwitch(val1=-100,val2) {
    val2 = typeof val2 !== 'undefined' ? val2 : move2;
   

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
            			$(tempBarId).css('left',barReset+'%')
            			
            			scroll[tempId]=200;
            			scrollBar[tempBarId]=barReset;

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
                        $(tempBarId).css('left',(50-barRest)+'%')
                        
                        scroll[tempId]=-100;
                        scrollBar[tempBarId]=-barReset;

            
                    var timer3 = setTimeout(function(){
                        $(tempId).show();
                        $(tempId).css('left', '-100%')
                        $(tempBarId).show();
                         $(tempBarId).css('left',-barReset+'75%')

            }, 2)

            	} else {
            		scroll[id]=temp;
            		scrollBar[bar]=tempBar


            		

            	}

            	


            }
            // timer = setTimeout('TimerSwitch()', 10000);  
          

        }
        var timer= setInterval(TimerSwitch,10000)
