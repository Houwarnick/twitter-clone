$(document).ready(function() {
//selectors
var tweetCompose = $(".tweet-compose");
var tweetSubmit = $("#tweet-submit");
console.log('It worked!')

//hides and shows tweet submit and count on focus
tweetCompose.on("click",function() {
  tweetCompose.css("height","5em");
  $("#tweet-controls").css("display", "inherit");
  tweetSubmit.attr("disabled", true);
});
//Tweet length detection code below
  tweetCompose.on("keyup",function(){
  	var tweetLength = tweetCompose.val().length;
  	var count = 140 - tweetLength;
  	$("#char-count").html(count);
  	if(count < 0 || count === 140)
  		tweetSubmit.attr("disabled",true);
  	else
  		tweetSubmit.removeAttr("disabled");

  	if(count < 10){
  		$('#char-count').css("color","red");
  	}
  	else {
  		$('#char-count').css("color","#999")
  	}
 
  });

 //submitting a new tweet code below 
tweetSubmit.on("click",function() {

  var el = $('.tweet:first').clone();
  el.find('.avatar').prop('src', 'img/alagoon.jpg');
  el.find('.fullname').html('Houston Warnick');
  el.find('.username').html('@HouWarnick');
  el.find('.tweet-text').html(tweetCompose.val());

  $("#stream").prepend(el);
});
//Reply Box animation
$(".tweet-actions ul:first-child").on("click",function(){
  $(this).parent().parent().parent().find('.reply').show(400);
});

});



