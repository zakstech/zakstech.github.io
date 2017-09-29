$("#img1").click( function() { 
	//var imgloc = ["ztech.png",]
	if($("#img1").attr("inactive")==="true"){
		document.getElementsByClassName('transition')[0].classList.add('translateAnimationClass');
	$("#img1").attr("inactive",false)
	setTimeout(function(){
		if ($("#img1").attr("src")=="fill.png"){
				$("#img1").attr("src","html.png");}else{
					$("#img1").attr("src","fill.png");
				}


		document.getElementsByClassName('transition')[0].classList.remove('translateAnimationClass')
		setTimeout(function(){
			$("#img1").attr("inactive","true")
		},1000)


	},1000)
}

})