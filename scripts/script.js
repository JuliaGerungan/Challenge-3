

// HUIDIG WEER
function getAPIdata2() {

	// get current weather
	fetch('https://app.ticketmaster.com/discovery/v2/events.json?&apikey=mNJ2EWTGPJATg216GzSqIelBK4MJXhCE')
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {	

		var name1 = response._embedded.events[1].name;
		var merk1 = response._embedded.events[1].type;
		var categorie1 = response._embedded.events[1].url;

		var name2 = response._embedded.events[2].name;
		var merk2 = response._embedded.events[2].type;
		var categorie2 = response._embedded.events[2].url;

		var name3 = response._embedded.events[3].name;
		var merk3 = response._embedded.events[3].type;
		var categorie3 = response._embedded.events[3].url;



		var events = document.getElementById('evenementen').innerHTML = 
																		name1 + "<br>" + merk1 + "<br>" + categorie1 + "</br>" + "</br>" +
																		name2 + "</br>" + merk2 + "</br>" + categorie2 + "</br>" +"</br>" +
																		name3 + "<br>" + merk3 + "<br>" + categorie3 + "</br>" + "</br>" ;


		console.log(response);
	})
	
	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});

}

// init data stream
getAPIdata2();



