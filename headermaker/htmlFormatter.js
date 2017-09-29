var HTMLFormat= function(html){
//alert("test");

var space="";
var formated=""
var word="test"
var line=false;
var yes = true;
var push = true;
var previous = false;
for(i=0;i<html.length;i++){

if (html.charAt(i)==='/'){
yes=false;
space=space.substring(0,space.length-2)
}

else if(html.charAt(i)==">"){
line=true;
previous=true;
push=false
formated+="&gt;"
}

else if(html.charAt(i)=="<"){
if (previous){
formated+="\r\n"
//alert(test);
if(yes){
space+="  "


}

else{
yes=true;

}
formated+=space
}

else{
previous=false;
}
formated+="&lt;"
push=false
}
else if(html.charAt(i)=="'"){
formated+="&#039;"
push=false
}
else if(html.charAt(i)=='"'){
formated+="&quot;"
push=false
}
else if(html.charAt(i)=='&'){
formated+="&amp;"
push=false
}
if(push){
formated+=html.charAt(i);
}

else{
push=true;

}

}
//return "test"
return formated

}

var escapeHTML= function(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
 
 var CSSFormat=function(css){

var newline=false;
var formated="";
var space="    ";
for(i=0;i<css.length;i++){
while(css.charAt(i)==' '){
formated+=css.charAt(i);
i++;

}
if(newline){
// alert(css.charAt(i))
newline=false;
if(css.charAt(i)=='}'){
space=""
//alert("test")
}
formated+="\r\n"+space;
space="    "
}
if (css.charAt(i)===';'||css.charAt(i)===';'||css.charAt(i)==='}'||css.charAt(i)==='{'){
newline=true;
if(css.charAt(i)=='}'){
space=""
//alert("test")
}
}
formated+=css.charAt(i);
}
return formated;
//return escapeHTML(foramted);
}