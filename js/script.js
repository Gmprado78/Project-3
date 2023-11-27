function init() {
	alert('it works');
}

function initMap() {
  const myLatLng = { lat: 41.76999521182157, lng: -87.70415171237143};
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
	zoom:10,
  });

 var marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Marquette Park",
	icon: {  "marquette.png",
	scaledsize: new google.maps.Size(100,31),
	}
 });
   var museum = new google.maps.Marker({
    position: { lat: 41.790780214781634, lng: -87.58321264239794 },
    map,
    title: "Museum",
  });
  
  
}

let map;

