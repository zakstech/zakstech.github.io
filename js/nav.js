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
  

    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
})