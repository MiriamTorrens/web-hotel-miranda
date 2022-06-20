
const comunidadesAutonomas = [
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

const hotels = [
	{ lat: 43.019750, lng:-7.557101, dir: "Rúa Via Láctea, 10, 27003 Lugo" },
	{ lat: 39.474725, lng:3.144092, dir:"Carrer del Rector Planes, 45, 07200 Felanitx, Illes Balears"},
	{ lat:28.480591, lng: -13.995675, dir: "Puerto del Rosario, Las Palmas"},
	{ lat: 36.726546, lng: -4.449570, dir: "Av. de Valle-Inclán, 43, 29010 Málaga" },
	{ lat: 39.438505, lng: -6.270662, dir:"C. Trujillo, 44, 10181 Sierra de Fuentes, Cáceres"},
	{ lat: 41.417110, lng: 2.128858, dir: "Sant Gervasi-La Bonanova, 08035 Barcelona"},
	{ lat: 40.755523, lng: -3.750386, dir: "Miraflores de la Sierra, Madrid" },
	{ lat: 40.032768, lng: -2.185388, dir: "Villar de Olalla, Cuenca" },
	{ lat: 39.493552, lng: -0.359778, dir: "C/ Alfahuir, 47, 46019 Valencia" },
	{ lat: 41.927796, lng:-4.780745, dir: "Ampudia, Palencia"},
	{ lat: 43.339641, lng: -5.562788, dir: "San Julián, 107, 33527 San Julián, Asturias"}
]
const iconMarker = "../img/marker.png";

let map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.12103360652701, lng: -3.729048909994247},
		zoom: 5
	});
	for(let hotel of hotels){
		const marker = new google.maps.Marker({
			position: hotel,
			map: map,
			icon: iconMarker
		});
	};
	
	infoWindow = new google.maps.InfoWindow();

	const locationButton = document.createElement("button");
  
	locationButton.textContent = "Pan to Current Location";
	locationButton.classList.add("custom-map-control-button");
	map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(locationButton);
	locationButton.addEventListener("click", () => {
	  // Try HTML5 geolocation.
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		  (position) => {
			const pos = {
			  lat: position.coords.latitude,
			  lng: position.coords.longitude,
			};
			infoWindow.setPosition(pos);
			infoWindow.setContent("You're here!");
			infoWindow.open(map);
			map.setCenter(pos);
		  },
		  () => {
			handleLocationError(true, infoWindow, map.getCenter());
		  }
		);
	  } else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	  }
	});
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(
	  browserHasGeolocation
		? "Error: The Geolocation service failed."
		: "Error: Your browser doesn't support geolocation."
	);
	infoWindow.open(map);
}

window.initMap = initMap;

