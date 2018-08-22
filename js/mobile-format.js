$(document).ready(function() {
     
    // Put your offset checking in a function
   
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  
    $("#head").removeClass("tall");
            $("#head").addClass("collapsed");
            $("body").addClass("mobile")


           // $("#loboBar").css("max-width","80%")
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