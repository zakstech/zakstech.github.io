//var copyTextareaBtn = document.querySelector('#htmlText');


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

function make(){
 


 
var html = '<br> Buyer authorizes auctioneer to release buyer'+"'"+'s assets to any individual in possession of the Buyer'+"'"+  's sales receipt.</br><P></P><div align="right">I ACKNOWLEDGE THAT I ACCEPT MY ITEMS IN ACCORDANCE WITH THE TERMS OF SALE.<P><table><tr><td>PRINTED NAME</td><td> _______________________________________</td></tr><tr><td>SIGNATURE</td><td> _______________________________________</td></tr><tr><td>ON BEHALF OF</td><td> _______________________________________</td></table></P></div>Buyers should bring 4 wheel dollies, tools, proper size truck, and labor to safely move items from the floor to the loading area.<p>Buyers who are unfamiliar with the requirements of moving or disassembling items should arrange for professional assistance.</p><p>Please note: In the unlikely event an item is not available for pickup, the buyer must, notify our onsite staff and forward a claim to the Auctioneer by using the contact form on the auctioneers website within 24 hours of the pickup date.</p><p>After 24 hours, the Auctioneer and buyer agrees that that no adjustment or refund will be made.</p><p>Remember, NO refunds or chargebacks will be granted due to a lack of removal at the designated times. After the scheduled removal, items will be considered abandoned and you will be charged a removal fee.</p><p>Buyers that do not remove their items within the specified removal times will have their bidding privileges suspended you will be required to contact the administrator to reactivate your account. (2) Occurrences will result in permanent suspension of bidding privileges.</p><p>Buyer has read understands and agrees to the terms and conditions of the auction. All items sold as-is, where-is, without any expressed or implied warranty. Buyer acknowledges receipt and responsibility for all merchandise. No adjustments, returns or refunds will be issued.</p>'

var css = '<style> @media print {h1 {page-break-before:always}}</style>'

newtext=HTMLFormat(html);

var newcss = CSSFormat(css);



$('.myspan').empty();
$('.myspan').append(escapeHTML("<style>")+"\r\n")

$('.myspan').append(newcss)

$('.myspan').append(escapeHTML("</style>")+"\r\n")
$('.myspan').append(newtext)


}
