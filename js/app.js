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

(function(){

	const initMap = () => {

		let coords = places[0].coords;
		let latlng = new google.maps.LatLng(coords.lat, coords.lng);
		let mapOptions = {
			zoom: 2,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: map_custom_styles
		}

		const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    fetch("https://api.myjson.com/bins/15fs25")
      .then(data => data.json())
      .then(data => {
        data.forEach(item => {
        // marker popup content
          let infowindow = new google.maps.InfoWindow({
            content: item.title,
            maxWidth: 500
          });
          // marker setup
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.coords.lat, item.coords.lng),
            map: map,
            icon: 'images/marker.png'
          });

          // show popup when a marker is clicked
          google.maps.event.addListener(marker, 'click', () => {
            infowindow.open(map, marker);
          });
        })
      })


		// let marker = new google.maps.Marker({
		// 	position: latlng,
		// 	map: map,
		// 	icon: markerIcon,
		// 	title: 'a title for a marker'
		// });

 
		// google.maps.event.addListener(marker, 'click', () => {
		// 	infowindow.open(map,marker);
		// });

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
        	  degree += 0.2;
        	  if (degree >= 360) degree = 0;

        	  panorama.setPov({
        		heading: degree,
        		pitch: 0
              })
        	}, 100);
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

})();
