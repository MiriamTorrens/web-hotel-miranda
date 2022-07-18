
let map;
let currentPosition = [];
let address;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.12103360652701, lng: -3.729048909994247},
		zoom: 5
	});
	infoWindow = new google.maps.InfoWindow();

	//Marcar hoteles en el mapa
	const iconMarker = "../img/marker.png";
	for(let hotel of hotels){
		const marker = new google.maps.Marker({
			position: hotel,
			map: map,
			icon: iconMarker
		});
	};

	//Encontrar la dirección que se introduce en el input
	const geocoder = new google.maps.Geocoder();
	const input = document.getElementById("inputAddress");
	const button = document.getElementById("searchLocation");
	button.addEventListener("click", () => {
		address = input.value;
        geocoder.geocode({ address: address}, function(results, status){
			const pos = results[0].geometry.location;
			infoWindow.setPosition(pos);
			infoWindow.setContent("You're here!");
			infoWindow.open(map);
			map.setCenter(pos);
        });
	});

	//Encontrar ubicación actual al pinchar en el botón
	const locationButton = document.getElementById("location");
	locationButton.addEventListener("click", () => {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		  (position) => {
			const pos = {
			  lat: position.coords.latitude,
			  lng: position.coords.longitude,
			};
			currentPosition.push(pos);
			infoWindow.setPosition(pos);
			infoWindow.setContent("You're here!");
			infoWindow.open(map);
			map.setCenter(pos);
		  },
		  () => {
			handleLocationError(true, infoWindow, map.getCenter());
		  },
		);
	  } else {
		handleLocationError(false, infoWindow, map.getCenter());
	  }
		});
	}

	//Devolver lista de hoteles ordenados
	const nearestButton = document.getElementById("nearest");
	nearestButton.addEventListener("click", () => {
		const destinations = hotels.map((hotel) => ({
			lat: hotel.lat,
			lng: hotel.lng
		}));
		if(currentPosition.length){
			if(address){
				document.getElementById("results").innerHTML = "";
				calculateDistance(address, destinations);
			}else{
				const origin = new google.maps.LatLng(
					currentPosition[0].lat,
					currentPosition[0].lng
				);
				document.getElementById("results").innerHTML = "";
				calculateDistance(origin, destinations);
			}
		}else if(address){
			document.getElementById("results").innerHTML = "";
			calculateDistance(address, destinations);
		}else{
			alert("Define your position");
		}
	});

	function calculateDistance(origin, destinations){
		var service = new google.maps.DistanceMatrixService();
		service
			.getDistanceMatrix({
				origins: [origin],
				destinations: destinations,
				travelMode: 'DRIVING',
			})
			.then((response) => {
				const hotels = response.destinationAddresses.map(hotel => ({name: hotel}));
				const distances = response.rows[0].elements.map(dist => ({distance: dist.distance}));
				const sortedHotels = [];
				for (let i = 0; i < hotels.length; i++){
					sortedHotels.push({...hotels[i], ...distances[i]});
				}
				sortedHotels.sort((a,b) => a.distance.value - b.distance.value);
				for(let hotel of sortedHotels){
					const distance = document.createElement("li");
					distance.innerText = `${hotel.name} - ${hotel.distance.text}`;
					document.getElementById("results").appendChild(distance);
				}
			});
	}

	window.initMap = initMap;

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(
		browserHasGeolocation
			? "Error: The Geolocation service failed."
			: "Error: Your browser doesn't support geolocation."
		);
		infoWindow.open(map);
	}

	//Crear el Select para las Comunidades Autónomas
	const communities = [
		'Andalucía',
		'Aragón',
		'Asturias, Principado de',
		'Balears, Illes',
		'Canarias',
		'Cantabria',
		'Castilla y León',
		'Castilla - La Mancha',
		'Cataluña / Catalunya',
		'Comunitat Valenciana',
		'Extremadura',
		'Galicia',
		'Madrid, Comunidad de',
		'Murcia, Región de',
		'Navarra, Comunidad Foral de',
		'País Vasco / Euskadi',
		'Rioja, La',
		'Ceuta',
		'Melilla',
	];
	const select = document.getElementById("select");
	for(let community of communities){
		const option = document.createElement("option");
		option.value = community;
		option.text = community;
		select.appendChild(option);
	};

	//Listado de hoteles en el mapa
	const hotels = [
		{ lat: 43.019750, lng:-7.557101 },
		{ lat: 39.474725, lng:3.144092 },
		{ lat:28.480591, lng: -13.995675 },
		{ lat: 36.726546, lng: -4.449570 },
		{ lat: 39.438505, lng: -6.270662 },
		{ lat: 41.417110, lng: 2.128858 },
		{ lat: 40.755523, lng: -3.750386 },
		{ lat: 40.032768, lng: -2.185388 },
		{ lat: 39.493552, lng: -0.359778 },
		{ lat: 41.927796, lng:-4.780745 },
		{ lat: 43.339641, lng: -5.562788 }
	]

	
	














