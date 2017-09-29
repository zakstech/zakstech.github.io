var iTimesLength=1;
var rTimesLength=1;
var missing=false;
var copyTextareaBtn = document.querySelector('#htmlText');
$(document).ready(
  
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    $( "#cDate" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    }
	
);$( "#iDate1" ).datepicker();
$( "#rDate1" ).datepicker();
$("#cETime").clockpicker({autoclose: true,twelvehour:true});
$("#cSTime").clockpicker({autoclose: true,twelvehour:true});
$("#iETime1").clockpicker({autoclose: true,twelvehour:true});
$("#iSTime1").clockpicker({autoclose: true,twelvehour:true});
$("#rETime1").clockpicker({autoclose: true,twelvehour:true});
$("#rSTime1").clockpicker({autoclose: true,twelvehour:true});
$("#city").val(localStorage.getItem('city'));
$("#name").val(localStorage.getItem('name'));
$("#state").val(localStorage.getItem('state'));
$("#zip").val(localStorage.getItem('zip'));
$("#name").val(localStorage.getItem('name'));
$("#streetLoc").val(localStorage.getItem('streetLoc'));
$("#pNumber").val(localStorage.getItem('pNumber'));
$("#eAddress").val(localStorage.getItem('eAddress'));


var rTimesLength=localStorage.getItem('rTimesLength');

if (rTimesLength=== null){
rTimesLength=1
}

for(x=1;x<rTimesLength;x++){
plusRTimes()

}

for(x=1;x<rTimesLength+1;x++){
var temp=JSON.parse(localStorage.getItem('rtimes'+x))
if (temp===null){}
else{
  $("#rDate"+x).val(temp[0])
  $("#rSTime"+x).val(temp[1])
  $("#rETime"+x).val(temp[2])
  }
  }





  }
       
);

var setCookie = function( cookie_name, cookie_value, lifespan_in_days)
{
  // http://www.thesitewizard.com/javascripts/cookies.shtml
  //var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
  document.cookie = cookie_name + "=" + encodeURIComponent( cookie_value ) +
      "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
      "; path=/";// + domain_string ;
}

var getCookie = function( cookie_name )
{
  // http://www.thesitewizard.com/javascripts/cookies.shtml
  var cookie_string = document.cookie ;
  if (cookie_string.length != 0) {
    var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
    return decodeURIComponent ( cookie_value[2] ) ;
  }
  return '' ;
}

var copyTextToClipboard= function(text) {

var textArea= document.getElementById(text);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }


}

$("#cDate").click(function(){
     $("#cDate").datepicker();
    
});

function plusITimes(){

iTimesLength++;
$('#iTimes').append('<p id="i'+iTimesLength+'" class="inputLine">Date:<input type="int" id="iDate'+iTimesLength+'" /> Start Time:<input type="int" id="iSTime'+iTimesLength+'" size="9" class="input" /> End Time:<input type="int" id="iETime'+iTimesLength+'" size="9" class="input"/></p>')
$( "#iDate"+iTimesLength ).datepicker();
$("#iETime"+iTimesLength).clockpicker({autoclose: true,twelvehour:true});
$("#iSTime"+iTimesLength).clockpicker({autoclose: true,twelvehour:true});
$("#top-container").height("+=31");
}
function minusITimes(){

if(iTimesLength>1){
$('#i'+iTimesLength).empty().remove()
iTimesLength--;
$("#top-container").height("-=31");
}
}
function plusRTimes(){

rTimesLength++;
$('#rTimes').append('<div id="r'+rTimesLength+'" class="inputWrapper"><div class="time"><p>Date:</p><input type="int" id="rDate'+rTimesLength+'" size="12"/></div> <div class="time"><p> Start Time:</p><input type="int" id="rSTime'+rTimesLength+'" size="6" class="input" /></div> <div class="time"><p> End Time:</p><input type="int" id="rETime'+rTimesLength+'"size="6" class="input" /></div></div>')
$( "#rDate"+rTimesLength).datepicker();
$("#rETime"+rTimesLength).clockpicker({autoclose: true,twelvehour:true});
$("#rSTime"+rTimesLength).clockpicker({autoclose: true,twelvehour:true});
//$("#top-container").height("+=31");
}
function minusRTimes(){

if(rTimesLength>1){
$('#r'+rTimesLength).empty().remove()
rTimesLength--;
$("#top-container").height("-=31");
}
}

function make(){
 $("#error-msg").css("visibility","hidden")

$(".input").css("background-color","white");

var name= document.getElementById("name").value;
if(name==""){
missing=true;
$("#name").css("background-color","red")
}
else{
localStorage.setItem('name',name);
}
var city = document.getElementById("city").value;
if(city==""){
missing=true;
$("#city").css("background-color","red")
}
else{
localStorage.setItem('city',city);
}
var state = document.getElementById("state").value;
if(state==""){
missing=true;
$("#state").css("background-color","red")
} 
else{
localStorage.setItem('state',state);
}
var zip = document.getElementById("zip").value;
if(zip==""){
missing=true;
$("#zip").css("background-color","red")

}
else{
localStorage.setItem('zip',zip);
}
var streetLoc= document.getElementById("streetLoc").value;
if(streetLoc==""){
missing=true;
$("#streetLoc").css("background-color","red")
}
else{
localStorage.setItem('streetLoc',streetLoc);
}

rtimes=""
for(i=1;i<rTimesLength+1;i++){
var misscount=0;

var temp1 = document.getElementById("rDate"+i+"").value

if(temp1==""){
$("#rDate"+i+"").css("background-color","red")
missing=true;
misscount++;
}

var temp2 = document.getElementById("rSTime"+i+"").value
if(temp2==""){
$("#rSTime"+i+"").css("background-color","red")
missing=true;
misscount++;
}
var temp3 = document.getElementById("rETime"+i+"").value
if(temp3==""){
$("#rETime"+i+"").css("background-color","red")
missing=true;
misscount++;
}
if (misscount<3){
rtimes+='<p>&nbsp;'+temp1+'&nbsp;</td><td style="text-align: right">&nbsp;'+temp2+'&nbsp;</td><td>to&nbsp;</td><td>'+temp3+' </p>'
 rtimes+='<tr><td><b>Removal:</b></td><td>&nbsp;'+temp1+'&nbsp;</td><td style="text-align: right">&nbsp;'+temp2+'&nbsp;</td><td>to&nbsp;</td><td>'+temp3+' </td></tr>'
localStorage.setItem('rtimes'+i,JSON.stringify([temp1,temp2,temp3])); 
 }
 }
 localStorage.setItem('rTimesLength',rTimesLength); 
 
var misscount=0;
var conjuction ="";

var temp1 = document.getElementById("eAddress").value

if(temp1==""){
$("#eAddress").css("background-color","red")

misscount++;
}
else{
localStorage.setItem('eAddress',temp1);
}
var temp2 = document.getElementById("pNumber").value
if(temp2==""){
$("#pNumber").css("background-color","red")
misscount++;
}
else{
localStorage.setItem('pNumber',temp2);
}
if (misscount===0){
conjuction=" or "
}
if (misscount===2){
missing=true;
var contact=""
}

if(misscount<2){
 var contact='<tr><td><td>'+temp1+conjuction+'</td><td style="text-align: right">'+temp2+'</td></tr>'
  }
 

if(missing){
//alert("The fields in red are missing informantion");
 $("#error-msg").css("visibility","visible")
missing=false;
}


var optionalMess = document.getElementById("optionalMess").value
if (optionalMess!=""){
optionalMess='<table class="OrangeBarTableHeader" id="MobilTimes" ><tr><td><center > <div class="GroupLotStyle">'+optionalMess+'</div></center></td></tr></table>'
}
$("#preview").css("visibility","visible")
$("#notify").css("visibility","visible")



 
var html = '<div style="display: table; border-spacing:50px; margin:auto "><div style="display: table-cell"><h3>AUCTION</h3><p>'+name+' </p></div><div style="display: table-cell"><h3>ADDRESS</h3><p>'+streetLoc+" "+city+","+state+" "+zip+' </p></div><div style="display: table-cell" ><h3> REMOVAL TIME</h3>'+rtimes+'</div><div style="display: table-cell" ><h3> CONTACT </h3><p>'+contact+'</p></div></div><p>REMOVAL DATE AND TIMES ARE FIRM:</p><p>***YOU MUST BRING A PRINTED COPY (WE MUST HAVE A PAPER COPY) OF THIS EMAILED INVOICE WITH YOU FOR REMOVAL NO EXCEPTIONS!!******</p>'
//var css = ' .GroupLotStyle{ background: linear-gradient(toright, white, rgba(242, 176, 121, 0.51)); display:inline;	padding:1%; margin:1%;} .OrangeBarTableHeader{ border-top: 31px solid #FF9900; width:100%; margin-left: 0px; } #TableTop{ width:88vw; margin-left: 120px; }#DataTable{ width:88vw; margin-left: 120px;}#TableTop{ width: 100%; margin-left: 0px; }#DataTable{ width: 100%; margin-left: 0px; }.GroupLotStyle{ width: 100%; margin-left: 0px; }'
newtext=HTMLFormat(html);

//var newcss = CSSFormat(css);
document.getElementById("page").innerHTML= html

$('.myspan').empty();
//$('.myspan').append(escapeHTML("<style>")+"\r\n")
//$('.myspan').append(newcss)
//$('.myspan').append(escapeHTML("</style>")+"\r\n")
$('.myspan').append(newtext)


}


