
$(document).ready(function() {
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

 $("#stripe1").addClass("mobile");
 
 alert("test")


  //background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,1),white),url("paypage2.png") no-repeat; /* W3C */
  
} else{
   
   
 $("#stripe1").addClass("mobile");
 alert("test2")

}
})


