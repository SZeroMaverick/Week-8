<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
       

	$('#randomgenerator').on("tap",function(){
    var trueorfalse = random();
	beepthreetime();
	alert(trueorfalse);
 	}); 


});

function random() { 
 return !Math.round(Math.random()); 
}

function beepthreetime () { 
  navigator.notification.beep(3);

 }