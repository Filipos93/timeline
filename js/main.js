$(function(){

	var array = [
		[new Date(2015, 6, 5), "Event 1", "fa-heart"],
		[new Date(2015, 6, 15), "Event 3", "fa-heart"],
		[new Date(2015, 6, 16), "Event 3", "fa-heart"],
		[new Date(2015, 6, 3), "Event 2", "fa-heart"],
		[new Date(2015, 6, 1), "Event 2", "fa-heart"],
		[new Date(2015, 6, 29), "Event 2", "fa-heart"],
		[new Date(2015, 6, 30), "Event 2", "fa-heart"]

	];

	var today = new Date(2015, 6, 10);
	var actualDay = today.getDate();
	var barLength = $('#timeline').width();
	var oneDay = barLength / 30;

	$('.progress-bar').width(oneDay*actualDay);

	function appendEvents(array){
		for(var i=0; i<array.length; i++){
			var dayOfMonth = array[i][0].getDate();
			$eventToAppend = $('<div class="event"><span class="fa ' + array[i][2] + '"></span></div>');
			
			if(actualDay >= dayOfMonth){
				$eventToAppend.addClass('past');
			}

			$eventToAppend.appendTo('#timeline');

			if(dayOfMonth==1){
				$eventToAppend.css("left", -Math.abs($eventToAppend.width()/2));
			}
			else{
				$eventToAppend.css("left", (oneDay * dayOfMonth) - ($eventToAppend.width()/2) );
			}
		}
	}
	
	appendEvents(array);
});