function init() {
	alert('it works');
}

function initMap() {
  const myLatLng = { lat: 41.76999521182157, lng: -87.70415171237143};
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
	zoom:10,
  });

 const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Marquette Park",
	icon: {
    url:"media/marquette.png",
	scaledSize: new google.maps.Size(86,80),
	},
	animation: google.maps.Animation.DROP
 });
   museum= new google.maps.Marker({
    position: { lat: 41.790780214781634, lng: -87.58321264239794 },
    map,
    title: "The Museum of Science and Industry",
	icon: {
    url:"media/museum.png",
	scaledSize: new google.maps.Size(86,80),
	},
	animation: google.maps.Animation.DROP
	
  });
  
  const infowindow = new google.maps.InfoWindow({
    content: "The Museum of Science and Industry",
   
  });
  
   marker.addListener("click", () => {
    infowindow.open(map,marker);
	  });
	  
	  

}

let map;

