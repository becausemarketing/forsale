function initMap() {

	var thompson = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>704 N. Thompson Street</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/ckiz5thcvohobkb/forsale.png?dl=0',
            scaledSize: new google.maps.Size(64, 64)
        },
		lat: 30.315419,
		long: -95.457839 
	};

	var sloop336 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>2010 South Loop 336 West</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/ckiz5thcvohobkb/forsale.png?dl=0',
            scaledSize: new google.maps.Size(64, 64)
        },
		lat: 30.285230,
		long: -95.481558
	};

	var riverwood = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>800 Riverwood Court</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/ckiz5thcvohobkb/forsale.png?dl=0',
            scaledSize: new google.maps.Size(64, 64)
        },
		lat: 30.284683,
		long: -95.465154 
	};
    
    var fourthst = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>1006 South 4th Street</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/ckiz5thcvohobkb/forsale.png?dl=0',
            scaledSize: new google.maps.Size(64, 64)
        },
		lat: 31.303973,
		long: -95.459155  
	};

    var loop304 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>200 NW Loop 304</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/ckiz5thcvohobkb/forsale.png?dl=0',
            scaledSize: new google.maps.Size(64, 64)
        },
		lat: 31.331857 ,
		long: -95.471048  
	};

    var hill110 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>110 Hill Ave</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/ckiz5thcvohobkb/forsale.png?dl=0',
            scaledSize: new google.maps.Size(64, 64)
        },
		lat: 30.593142,
		long: -95.131412  
	};
    
	var locations = [
      [thompson.info, thompson.lat, thompson.long, thompson.icon, 0],
      [sloop336.info, sloop336.lat, sloop336.long, sloop336.icon, 1],
      [riverwood.info, riverwood.lat, riverwood.long, riverwood.icon, 2],
      [fourthst.info, fourthst.lat, fourthst.long, fourthst.icon, 3],
      [loop304.info, loop304.lat, loop304.long, loop304.icon, 4],
      [hill110.info, hill110.lat, hill110.long, hill110.icon, 5],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(30.284683, -95.465154),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: 
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
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
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
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
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
	});

	var infowindow = new google.maps.InfoWindow({
            maxWidth: 200
    });

	var marker, i;
    var markers = [];
    var bounds = new google.maps.LatLngBounds();

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
            icon: locations[i][3]
		});
        markers.push(marker);
        
        bounds.extend(marker.position);

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
    map.fitBounds(bounds);

    showme = function (index) {
        map.setZoom(16);
        map.setCenter(markers[index].getPosition());
        infowindow.setContent(locations[index][0]);
        infowindow.open(map, markers[index]);
    }
    
    resetview = function () {
        map.fitBounds(bounds);   
    }
}
