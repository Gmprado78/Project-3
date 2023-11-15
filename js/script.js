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

<<<<<<< HEAD
var map;
function initmap() {
  map = new google.maps.Map(document.getElementByID('map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom 8
  });
}

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
=======


>>>>>>> a01ab216277d50e1829d88eeee484d01aa1a6f5e
