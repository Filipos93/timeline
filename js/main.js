$(function(){

	var eventArray = [
		[new Date(2015, 6, 15), "lorem ipsum dolor sit", "fa-heart"],
		[new Date(2015, 6, 2), "lorem ipsum dolor sit", "fa-heart"],
		[new Date(2015, 6, 16), "Event 3", "fa-heart"],
		[new Date(2015, 6, 3), "Event 2", "fa-heart"],
		[new Date(2015, 6, 1), "Event 2", "fa-heart"],
		[new Date(2015, 6, 30), "Event 2", "fa-heart"],
		[new Date(2015, 7, 30), "Event 2", "fa-heart"]

	];

	var today = new Date(2015, 6, 10);
	var actualDay = today.getDate();
	var actualMonth = today.getMonth();
	var barLength = $('#timeline').width();
	var oneDay = barLength / 30;
	
	$("#timeline").width(function(i, w) { return w - oneDay; });

	$('.progress-bar').width(oneDay*actualDay);

	function appendEvents(array){
		for(var i=0; i<array.length; i++){
			if(array[i][0].getMonth()==actualMonth){
				var eventDate = array[i][0];
				var dayOfMonth = eventDate.getDate();
				var dayToPrint = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

				$eventToAppend = $('<div class="event"><span class="fa ' + array[i][2] + '"></span><div class="tooltip"><p class="date">' + dayToPrint + '.' + eventDate.getMonth() + '.' + eventDate.getFullYear() + '</p><p class="name">' + array[i][1] + '</p></div></div>');

				$eventToAppend.css("order", dayOfMonth);
				
				if(actualDay >= dayOfMonth){
					$eventToAppend.addClass('past');
				}

				$eventToAppend.appendTo('#timeline');
				$eventToAppend.css("left", (oneDay * (dayOfMonth -1)) - ($eventToAppend.width()/2) );
				
			}
		}
	}

	function checkSize(){
		if ($("#timeline").css("flex-direction") != "column" ){
			
			$('.event').hover(function(){
				$(this).children('.tooltip').fadeIn(200);
			}, 
			function(){
				$(this).children('.tooltip').fadeOut(200);
			});
		}
	}
	
	appendEvents(eventArray);
	checkSize();
	$(window).resize(checkSize);

	

});