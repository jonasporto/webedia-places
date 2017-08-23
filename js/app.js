// styles to custom color on map
var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

// data to be displayed on map
var places = [
{
  title: "Webedia França",
  phone: "+33 1 84 20 09 84",
  site: "https://webedia.fr",
  address: "2 Rue Paul Vaillant Couturier, 92300 Levallois-Perret, França",
  coords: {
  	lat: 48.8933176,
  	lng: 2.2755299
  } 
}];

(function(styles){

	const initMap = () => {

		let coords = places[0].coords;
		let latlng = new google.maps.LatLng(coords.lat, coords.lng);
		var markerIcon = 'http://www.webedia-group.com/web/skins/default/images/favicon.ico'
		let mapOptions = {
			zoom: 2,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles
		}

		const map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		// marker popup content
		let infowindow = new google.maps.InfoWindow({
			content: "infowindow content",
			maxWidth: 500
		});

		// marker setup
		let marker = new google.maps.Marker({
			position: latlng,
			map: map,
			icon: markerIcon,
			title: 'a title for a marker'
		});
        
        // show popup when a marker is clicked
		google.maps.event.addListener(marker, 'click', () => {
			infowindow.open(map,marker);
		});

		// resize to the viewport
		google.maps.event.addDomListener(window, "resize", () => {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});

	}
	

	const initPanorama = () => {

		// setup streetview panorama
		let coords = places[0].coords;
		let latlng = new google.maps.LatLng(coords.lat, coords.lng);

        const panorama = new google.maps.StreetViewPanorama(
            document.getElementById('panorama'), {
              position: new google.maps.LatLng(coords.lat, coords.lng),
              pov: {
                heading: 270,
                pitch: 0
              },
              visible: true
        });
        
        // 360 degrees of streetview panorama
        let degree = panorama.getPov().heading;
        setTimeout(() => {

        	setInterval(() => {
        	  degree += 1;
        	  if (degree >= 360) degree = 0;
        	  
        	  panorama.setPov({
        		heading: degree,
        		pitch: 0
              })
        	
        	}, 50);
        }, 2000)

        // panorama events
        panorama.addListener('pano_changed', ()=>{});
        panorama.addListener('links_changed', ()=>{});
        panorama.addListener('position_changed', ()=>{});
        panorama.addListener('pov_changed', ()=>{});
      }

	google.maps.event.addDomListener(window, 'load', () => { 
		initMap(); 
		//initPanorama();
	});


	fetch("https://api.myjson.com/bins/15fs25")
	  .then(data => data.json())
	  .then(data => {
	  	renderSidebar(data)
	  	return data;
      })


    const renderSidebar = (offices) => {
      $offices = `
	    <ul> 
	  	  ${offices.map(office => `<li>${office.title}</li>`).join('')}
	  	</ul>`;

	  document.querySelector('.sidebar nav').innerHTML = $offices;
    }

})(styles);
