var iTimesLength=1;
var rTimesLength=1;
/*
function popup() {
alert("Hello World")
}



function escapeHTML(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
*/
$(document).ready(
  
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    $( "#cDate" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    }
	
)

;$( "#iDate1" ).datepicker();
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
$("#cDate").val(localStorage.getItem('cDate'));
$("#cSTime").val(localStorage.getItem('cSTime'));
//$("#cETime").val(localStorage.getItem('cETime'));

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

var iTimesLength=localStorage.getItem('iTimesLength');  

   if (iTimesLength=== null){
iTimesLength=1
}
for(x=1;x<iTimesLength;x++){

plusITimes()

}
for(x=1;x<iTimesLength+1;x++){
var temp=JSON.parse(localStorage.getItem('itimes'+x))
if (temp===null){}
else{
  $("#iDate"+x).val(temp[0])
  $("#iSTime"+x).val(temp[1])
  $("#iETime"+x).val(temp[2])
  }
  }
   
   
   }    
);

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

/*
$("#cDate").click(function(){
     $("#cDate").datepicker();
    
});/*
$(fuuntion(){
$("#cDate").datepicker()})
$("#iDate1").datepicker()*/
function plusITimes(){

iTimesLength++;

$('#iTimes').append('<div id="i'+iTimesLength+'" class="inputWrapper"><div class="time"><p>Date:</p><input type="text" data-format="MM/dd" id="iDate'+iTimesLength+'" class="input" size="12"/></div> <div class="time"><p> Start Time:</p><input type="int" id="iSTime'+iTimesLength+'" size="6" class="input" /></div> <div class="time"><p> End Time:</p><input type="int" id="iETime'+iTimesLength+'"size="6" class="input" /></div></div>')

$( "#iDate"+iTimesLength ).datepicker();
$("#iETime"+iTimesLength).clockpicker({autoclose: true,twelvehour:true});
$("#iSTime"+iTimesLength).clockpicker({autoclose: true,twelvehour:true});

//$("#top-container").height("+=31");

}
function minusITimes(){

if(iTimesLength>1){
$('#i'+iTimesLength).empty().remove()
iTimesLength--;
//$("#top-container").height("-=31");
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
//$("#top-container").height("-=31");
}
}
function make(){
 // alert("test")
 $("#error-msg").css("visibility","hidden")
$(".input").css("background-color","white")

var missing = false;
var city = $("#city").val();

if(city==""){
missing=true;

$("#city").css("background-color","red")
}
else{
//  alert("test2")
localStorage.setItem('city',city);
//alert("test3")
}

var state = $("#state").val();
if(state==""){
missing=true;
$("#state").css("background-color","red")
} 
else{
localStorage.setItem('state',state);
}
var zip = $("#zip").val();
if(zip==""){
missing=true;
$("#zip").css("background-color","red")

}
else{
localStorage.setItem('zip',zip);
}
var streetLoc= $("#streetLoc").val();
if(streetLoc==""){
missing=true;
$("#streetLoc").css("background-color","red")
}
else{
localStorage.setItem('streetLoc',streetLoc);
}


var cDate= $("#cDate").val();
if(cDate==""){
missing=true;
$("#cDate").css("background-color","red")
}
else{
localStorage.setItem('cDate',cDate)
}

// alert("test3")

var cSTime= $("#cSTime").val();
if(cSTime==""){
missing=true;
$("#cSTime").css("background-color","red")
}
else{
localStorage.setItem('cSTime',cSTime)
}
/*
var cETime= document.getElementById("cETime").value;
if(cETime==""){
missing=true;
$("#cETime").css("background-color","red")
}
else{
localStorage.setItem('cETime',cETime)
}
*/
rtimes=""
for(i=1;i<rTimesLength+1;i++){
var misscount=0;
var temp1 = $("#rDate"+i+"").val()

if(temp1==""){
$("#rDate"+i+"").css("background-color","red")
missing=true;
misscount++;
}

var temp2 = $("#rSTime"+i+"").val()
if(temp2==""){
$("#rSTime"+i+"").css("background-color","red")
missing=true;
misscount++;
}
var temp3 = $("#rETime"+i+"").val()
if(temp3==""){
$("#rETime"+i+"").css("background-color","red")
missing=true;
misscount++;
}
if (misscount<3){
rtimes+='<tr><td><b>Removal:</b></td><td>&nbsp;'+temp1+'&nbsp;</td><td style="text-align: right">&nbsp;'+temp2+'&nbsp;</td><td>to&nbsp;</td><td>'+temp3+' </td></tr>'
localStorage.setItem('rtimes'+i,JSON.stringify([temp1,temp2,temp3])); 
 }
 }
  //alert("test")
 localStorage.setItem('rTimesLength',rTimesLength); 

itimes=""
for(i=1;i<iTimesLength+1;i++){

var temp1 = $("#iDate"+i+"").val()
var misscount=0
if(temp1==""){
$("#iDate"+i+"").css("background-color","red")
missing=true;
misscount++;
}

var temp2 = $("#iSTime"+i+"").val()
if(temp2==""){
$("#iSTime"+i+"").css("background-color","red")
missing=true;
misscount++;
}
var temp3 = $("#iETime"+i+"").val()
if(temp3==""){
$("#iETime"+i+"").css("background-color","red")
missing=true;
misscount++;
}
if(misscount<3){
 itimes+='<tr><td><b>Inspection:</b></td><td>'+temp1+'</td><td style="text-align: right">'+temp2+'&nbsp;</td><td> to </td><td>'+" "+temp3+' </td></tr>'
  }
  localStorage.setItem('itimes'+i,JSON.stringify([temp1,temp2,temp3])); 
 }
 localStorage.setItem('iTimesLength',iTimesLength); 
if(missing){
//alert("The fields in red are missing informantion");
 $("#error-msg").css("visibility","visible")
missing=false;
}

var optionalMess = $("#optionalMess").val()
if (optionalMess!=""){
optionalMess='<table class="OrangeBarTableHeader" id="MobilTimes" ><tr><td><center > <div class="GroupLotStyle">'+optionalMess+'</div></center></td></tr></table>'
}
$("#preview").css("visibility","visible")
$("#notify").css("visibility","visible")



var html = '<table class="OrangeBarTableHeader" id="MobilTimes" ><tr><td><center><table><tr><td><b>Inspection & Pickup Location:</b></td></tr><tr><td>'+streetLoc+'</td></tr><tr><td>'+city+', '+state+' '+zip+' </td></tr></table></center></td><td><center><table>'+itimes+'<tr><td><b>Closing:</b></td><td>'+cDate+'</td><td style="text-align: right">'+cSTime+'&nbsp;</td></tr>'+rtimes+'</table></center></td></tr></table>'+optionalMess;
var css = ' .GroupLotStyle{ background: linear-gradient(to'+" "+' right, white, rgba(242, 176, 121, 0.51)); display:inline;	padding:1%; margin:1%;} .OrangeBarTableHeader{ border-top: 31px solid #FF9900; width:100%; margin-left: 0px; } #TableTop{ width:88vw; margin-left: 120px; }#DataTable{ width:88vw; margin-left: 120px;}#TableTop{ width: 100%; margin-left: 0px; }#DataTable{ width: 100%; margin-left: 0px; }.GroupLotStyle{ width: 100%; margin-left: 0px; }'

newtext=HTMLFormat(html);

var newcss = CSSFormat(css);
$("#page").html(html)

$('.myspan').empty();
$('.myspan').append(escapeHTML("<style>")+"\r\n")
$('.myspan').append(newcss)
$('.myspan').append(escapeHTML("</style>")+"\r\n")
$('.myspan').append(newtext)


}


