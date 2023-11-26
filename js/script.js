function init() {
	alert('it works');
	
}

google.maps.event.addDomListener(window, 'load', init);

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
  const myLatLng = { lat: 41.76999521182157, lng: -87.70415171237143};
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
	zoom:15,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Marquette Park",
  });
}