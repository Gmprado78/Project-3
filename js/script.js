function init() {
	alert('it works');
	
}

google.maps.event.addDomListener(window, 'load', init);


function initMap() {
  const myLatLng = { lat: 41.76999521182157, lng: -87.70415171237143};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat:  41.76999521182157, lng:-87.70415171237143},
    zoom: 15,
  });
}

initMap();
