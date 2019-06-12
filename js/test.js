

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  
  
  var scrollBar = {"#scroll1Bar":100, "#scroll2Bar":0, "#scroll3Bar": -100, "#scroll4Bar":-200}
 var reffernce = {"#scroll1Bar":100, "#scroll2Bar":0, "#scroll3Bar": -100, "#scroll4Bar":-200}  
 var move2=100;// Take the user to a different screen here.
 var barReset=-200;


 
 


} else{

     var scrollBar = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
 var reffernce = {"#scroll1Bar":75, "#scroll2Bar":25, "#scroll3Bar": -25, "#scroll4Bar":-75}
 var move2=50;
 var barReset=-75;
}
active=true;
$(".leftScroll").click(  function(){if(active){  clearInterval(timer);TimerSwitch(100,-move2);timer= setInterval(TimerSwitch,10000); active=false; setTimeout(function(){active=true},1200)}}) //timer= setInterval(TimerSwitch,10000)})
 $(".rightScroll").click( function(){if (active){clearInterval(timer);TimerSwitch(-100,move2);timer= setInterval(TimerSwitch,10000); active=false; setTimeout(function(){active=true},1200)}})
 var scroll = {"#scroll1":-100, "#scroll2": 0, "#scroll3": 100, "#scroll4":200}

//var timer;

;
function BarUpdate(val1=-100,val2=50){
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

            }, 1500)
            		


            		;  

            	}else if(temp>200&&val2<0){
            		
            		
                    var tempId = id;
                    var tempBarId=bar
                    
                        $(tempId).hide()
                        $(tempId).css('left', '-200%')
                       // $(tempBarId).hide()
                       $(tempBarId).addClass('notransition'); 
                       $(tempBarId).css('left','0%')//clear css
                        $(tempBarId).css('left',(48-barReset)+'%')
                        
                        scroll[tempId]=-100;
                        scrollBar[tempBarId]=-barReset;
                   
            
                    var timer3 = setTimeout(function(){
                        $(tempBarId).removeClass('notransition');
                        $(tempId).show();

                        $(tempId).css('left', '-100%')
                        $(tempBarId).show();
                         $(tempBarId).css('left',-barReset+'%')

            }, 1)

            	} else {
            		scroll[id]=temp;
            		scrollBar[bar]=tempBar


            		

            	}

            	


            }
            // timer = setTimeout('TimerSwitch()', 10000);  
          

        }
        var timer= setInterval(TimerSwitch,10000)
