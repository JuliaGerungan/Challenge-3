function getAPIdata() {

	// get current weather
	fetch('https://www.triposo.com/api/20181213/location.json?part_of=United_States&tag_labels=city&count=10&fields=id,name,score,snippet&order_by=-score&account=OBP16QXX&token=uhn0k0fhlou5m4h52poe8c0fjpejzwta')


	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {	

		// var randomItaly = Math.floor((Math.random() * response.results.length -1) + 1);
  //   	console.log(response.results[randomItaly]);

  //   	var placeItaly =  '<div class="placeItaly">';
		// 	placeItaly +=   '<div class="name"> '+response.results[randomItaly].name+' </div>';
  //       	placeItaly +=	 '<div class="snippet"> '+ response.results[randomItaly].snippet +' </div>';
		// 	placeItaly += '</div>';

  //   	document.getElementById("hotspots").innerHTML=placeItaly;

  		var name = response.results[0].name;
  		var beschrijving = response.results[0].snippet;

  		var name1 = response.results[1].name;
  		var beschrijving1 = response.results[1].snippet;

  		var name2 = response.results[2].name;
  		var beschrijving2 = response.results[2].snippet;

  		var response = document.getElementById("hotspots").innerHTML = 	name + "</br>" + beschrijving + "</br>"  + "</br>" +
  																		name1 + "</br>" + beschrijving1 + "</br>"  + "</br>" +
  																		name2 + "</br>" + beschrijving2 ;
	})
	
	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});

}

// init data stream
getAPIdata();




