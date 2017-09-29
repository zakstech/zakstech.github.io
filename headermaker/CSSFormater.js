var CSSFormat=function(css){
var newline=false;
var foramted="";
var space="    ";
for(i=0;i<css.length;i++){
if(newline){
newline=false;
if(html.charAt(i)==='{'){
space=""
}
formated+="\r\n"+space;
space="    ""
}
if (html.charAt(i)===';'||html.charAt(i)===';'||html.charAt(i)==='}'html.charAt(i)==='{'){
newline=true;
if(html.charAt(i)===!'}'){
space=""
}
}
formated+=charAt(i);
}
return escapeHTML(foramted);
}

var escapeHTML= function(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }