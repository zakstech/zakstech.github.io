var stateLength=1;
var pitchLength=1;
var missing=false;

/*
$(document).ready(
  

$("#name").val(localStorage.getItem('name'));



var stateLength=localStorage.getItem('stateLength');

if (stateLength=== null){
stateLength=1
}

for(x=1;x<stateLength;x++){
plusState()

}

for(x=1;x<stateLength+1;x++){
var temp=JSON.parse(localStorage.getItem('state'+x))
if (temp===null){}
else{
  $("#state"+x).val(temp[0])
  $("#pNumber"+x).val(temp[1])
  
  }
  }

 

var pitchLength=localStorage.getItem('pitchLength');  

   if (pitchLength=== null){
pitchLength=1
}
for(x=1;x<pitchLength;x++){

plusPitch()

}
for(x=1;x<pitchLength+1;x++){
var temp=JSON.parse(localStorage.getItem('pitch'+x))
if (temp===null){}
else{
  $("#pitch"+x).val(temp[0])
 
  }
  }
   
   
   }    
);*/

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

function plusPitch(){

pitchLength++;
$('#pitch').append('<div id="p'+pitchLength+'" class="inputWrapper"><p  class="inputLine">Pitch:</p><input type="text" id="pitch'+pitchLength+'" /> </div>')

$("#top-container").height("+=31");
}

function minusPitch(){

if(pitchLength>1){
$('#p'+pitchLength).empty().remove()
pitchLength--;
$("#top-container").height("-=31");
}
}

function plusState(){

stateLength++;
$('#state').append('<div id="s'+stateLength+'" class="inputWrapper"> <div class="inline"> <p "class="inputLine">State:</p><input type="text"  id="state'+stateLength+'" class="input" /></div> <div class="inline"><p class="inputLine">Phone number:</p><input type="int" id="pNumber'+stateLength+'" class="input" size="9"/></div></div>')

$("#top-container").height("+=31");
}
function minusState(){

if(stateLength>1){
$('#s'+stateLength).empty().remove()
stateLength--;
$("#top-container").height("-=31");
}
}

function make(){
 $("#error-msg").css("visibility","hidden")
$(".input").css("background-color","white")


var name = document.getElementById("name").value;

if(name==""){
missing=true;
$("#name").css("background-color","red")
}
else{
//localStorage.setItem('name',name);
}
var state=""
for(i=1;i<stateLength+1;i++){
var misscount=0;
var temp1 = document.getElementById("state"+i+"").value

if(temp1==""){
$("#state"+i+"").css("background-color","red")
missing=true;
misscount++;
}

var temp2 = document.getElementById("pNumber"+i+"").value
if(temp2==""){
$("#pNumber"+i+"").css("background-color","red")
missing=true;
misscount++;
}

}

if (misscount<2){
state+=temp1+' '+temp2
//localStorage.setItem('State'+i,JSON.stringify([temp1,temp2])); 
 }
 
  
 //localStorage.setItem('stateLength',stateLength); 


pitch=""
for(i=1;i<pitchLength+1;i++){

var temp1 = document.getElementById("pitch"+i+"").value
var misscount=0

if(temp1==""){
$("#pitch"+i+"").css("background-color","red")
missing=true;
misscount++;
}

else{
 pitch+='<h2>'+temp1+'</h2>'
 
  //localStorage.setItem('pitch'+i,temp1);
}
 }
 //localStorage.setItem('pitchLength',pitchLength); 

if(missing){

 
 $("#error-msg").css("visibility","visible")
missing=false;
}


$("#preview").css("visibility","visible")
$("#notify").css("visibility","visible")




var html = '<div id="Box"><div id="InvoiceBox">    <h1>'+name+'<br/> '+state+' </h1></div><div id="HeaderWithTagline">'+pitch+'</div></div><div style="width: 100%"></div>'
var css = '#Box{    display: inline-block;    width: 40%;}#InvoiceBox{  margin: 0 auto;    display: block;    width: 100%;}#InvoiceBox h1 {    border-style: double;    border-width: 10px;    border-color: Black;    font-size: 3em;    display: inherited;    float: left;    padding: 20px;}#HeaderWithTagline{  text-align: left;  margin: 0 auto;    display: block;    width: 100%;    float: right;}#HeaderWithTagline h1{font-size: 2em;}}#HeaderWithTagline h2{font-size: 1em;}'
newtext=HTMLFormat(html);

var newcss = CSSFormat(css);
document.getElementById("page").innerHTML= html

$('.myspan').empty();
$('.myspan').append(escapeHTML("<style>")+"\r\n")
$('.myspan').append(newcss)
$('.myspan').append(escapeHTML("</style>")+"\r\n")
$('.myspan').append(newtext)


}
