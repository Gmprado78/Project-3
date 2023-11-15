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
    zoom: 8,
  });
}

initMap();



Google Maps Platform

    Maps Platform

Overview
Products
Pricing
Documentation

    Get Started with Google Maps Platform
    API Picker
    Billing & Pricing
    Security & Compliance
    Reporting & Monitoring
    FAQ
    Support and Resources
    Customer Care
    Incident Management

    Maps JavaScript API
    Maps SDK for Android
    Maps SDK for iOS
    Google Maps for Flutter
    Maps Embed API
    Maps Static API
    Street View Static API
    Maps URLs
    Aerial View API
    Elevation API
    Map Tiles API
    Maps Datasets API (Preview)
    Web Components (Preview)

    Routes API
    Roads API
    Directions API
    Distance Matrix API

    Industry solutions
    Mobility services

    Places API
    Places SDK for Android
    Places SDK for iOS
    Places Library, Maps JavaScript API
    Geocoding API
    Geolocation API
    Address Validation API
    Time Zone API

    Air Quality API
    Pollen API
    Solar API

    API Security Best Practices
    Digital Signature Guide
    Map Coverage Details
    Optimization Guide
    Mobile OS and software support
    Launch stages
    Deprecations
    Asset Tracking Plan
    URL Encoding
    WordPress Users

Blog
More
Community
Sign in

    Web
    Maps JavaScript API

Get Started
Contact sales
Guides
Reference
Samples
Support

Updated Nov 9, 2023
Updated Nov 9, 2023

    Updated Nov 9, 2023

    Home
    Products
    Google Maps Platform
    Documentation
    Web
    Maps JavaScript API

Was this helpful?
Markers
Select platform: Android iOS JavaScript
Introduction

A marker identifies a location on a map. By default, a marker uses a standard image. Markers can display custom images, in which case they are usually referred to as "icons." Markers and icons are objects of type Marker. You can set a custom icon within the marker's constructor, or by calling setIcon() on the marker. See more about customizing the marker image.

Broadly speaking, markers are a type of overlay. For information on other types of overlay, see Drawing on the map.

Markers are designed to be interactive. For example, by default they receive 'click' events, so you can add an event listener to bring up an info window displaying custom information. You can allow users to move a marker on the map by setting the marker's draggable property to true. For more information about draggable markers, see below.
Add a marker

The google.maps.Marker constructor takes a single Marker options object literal, specifying the initial properties of the marker.

The following fields are particularly important and commonly set when constructing a marker:

    position (required) specifies a LatLng identifying the initial location of the marker. One way of retrieving a LatLng is by using the Geocoding service.
    map (optional) specifies the Map on which to place the marker. If you do not specify the map on construction of the marker, the marker is created but is not attached to (or displayed on) the map. You may add the marker later by calling the marker's setMap() method.

The following example adds a simple marker to a map at Uluru, in the center of Australia:
TypeScript
JavaScript

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
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

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell

In the above example, the marker is placed on the map at construction of the marker using the map property in the marker options. Alternatively, you can add the marker to the map directly by using the marker's setMap() method, as shown in the example below:

var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);

The marker's title will appear as a tooltip.

If you do not wish to pass any Marker options in the marker's constructor, instead pass an empty object {} in the last argument of the constructor.

View example
Remove a marker

To remove a marker from the map, call the setMap() method passing null as the argument.

marker.setMap(null);

Note that the above method does not delete the marker. It removes the marker from the map. If instead you wish to delete the marker, you should remove it from the map, and then set the marker itself to null.

If you wish to manage a set of markers, you should create an array to hold the markers. Using this array, you can then call setMap() on each marker in the array in turn when you need to remove the markers. You can delete the markers by removing them from the map and then setting the array's length to 0, which removes all references to the markers.

View example
Customize a marker image

You can customize the visual appearance of markers by specifying an image file or vector-based icon to display instead of the default Google Maps pushpin icon. You can add text with a marker label, and use complex icons to define clickable regions, and set the stack order of markers.
Markers with image icons

In the most basic case, an icon can specify an image to use instead of the default Google Maps pushpin icon. To specify such an icon, set the marker's icon property to the URL of an image. The Maps JavaScript API will size the icon automatically.
TypeScript
JavaScript

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
  });
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map,
    icon: image,
  });
}

window.initMap = initMap;

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell
Markers with vector-based icons

You can use custom SVG vector paths to define the visual appearance of markers. To do this, pass a Symbol object literal with the desired path to the marker's icon property. You can define a custom path using SVG path notation, or use one of the predefined paths in google.maps.SymbolPath. The anchor property is required in order for the marker to render correctly when the zoom level changes. Learn more about using Symbols to create vector-based icons for markers (and polylines).
TypeScript
JavaScript

// This example uses SVG path notation to add a vector-based symbol
// as the icon for a marker. The resulting icon is a marker-shaped
// symbol with a blue fill and no border.
function initMap() {
  const center = new google.maps.LatLng(-33.712451, 150.311823);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: center,
  });
  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(0, 20),
  };

  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });
}

window.initMap = initMap;

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell
Marker labels

A marker label is a letter or number that appears inside a marker. The marker image in this section displays a marker label with the letter 'B' on it. You can specify a marker label as either a string or a MarkerLabel object that includes a string and other label properties.

When creating a marker, you can specify a label property in the MarkerOptions object. Alternatively, you can call setLabel() on the Marker object to set the label on an existing marker.

The following example displays labeled markers when the user clicks on the map:
TypeScript
JavaScript

// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
  const bangalore = { lat: 12.97, lng: 77.59 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: bangalore,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}

window.initMap = initMap;

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell
Complex icons

You can specify complex shapes to indicate regions that are clickable, and specify how the icons should appear relative to other overlays (their "stack order"). Icons specified in this manner should set their icon properties to an object of type Icon.

Icon objects define an image. They also define the size of the icon, the origin of the icon (if the image you want is part of a larger image in a sprite, for example), and the anchor where the icon's hotspot should be located (which is based on the origin).

If you are using a label with a custom marker, you can position the label with the labelOrigin property in the Icon object.
Note: Marker shadows were removed in version 3.14 of the Maps JavaScript API. Any shadows specified programmatically will be ignored.
TypeScript
JavaScript

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -33.9, lng: 151.2 },
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Bondi Beach", -33.890542, 151.274856, 4],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell
Converting MarkerImage objects to type Icon

Until version 3.10 of the Maps JavaScript API, complex icons were defined as MarkerImage objects. The Icon object literal was added in version 3.10, and replaces MarkerImage from version 3.11 onwards. Icon object literals support the same parameters as MarkerImage, allowing you to easily convert a MarkerImage to an Icon by removing the constructor, wrapping the previous parameters in {}'s, and adding the names of each parameter. For example:

var image = new google.maps.MarkerImage(
    place.icon,
    new google.maps.Size(71, 71),
    new google.maps.Point(0, 0),
    new google.maps.Point(17, 34),
    new google.maps.Size(25, 25));

becomes

var image = {
  url: place.icon,
  size: new google.maps.Size(71, 71),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(17, 34),
  scaledSize: new google.maps.Size(25, 25)
};

Optimize markers

Optimization enhances performance by rendering many markers as a single static element. This is useful in cases where a large number of markers is required. By default, the Maps JavaScript API will decide whether a marker will be optimized. When there is a large number of markers, the Maps JavaScript API will attempt to render markers with optimization. Not all Markers can be optimized; in some situations, the Maps JavaScript API may need to render Markers without optimization. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element. The following example shows creating an optimized marker:

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!",
    optimized: true 
});

Learn more about optimization and best practices.
Make a marker accessible

You can make a marker accessible by adding a click listener event, and setting optimized to false. The click listener causes the marker to have button semantics, which can be accessed using keyboard navigation, screen readers, and so on. Use the title option to present accessible text for a marker.

In the following example, the first marker receives focus when tab is pressed; you can then use the arrow keys to move between markers. Press tab again to continue moving through the rest of the map controls. If a marker has an info window, you can open it by clicking the marker, or by pressing the enter key or space bar when the marker is selected. When the info window closes, focus will return to the associated marker.
TypeScript
JavaScript

// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 34.84555, lng: -111.8035 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
    [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
    [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
    [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
    [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell
Animate a marker

You can animate markers so that they exhibit dynamic movement in a variety of different circumstances. To specify the way a marker is animated, use the marker's animation property, of type google.maps.Animation. The following Animation values are supported:

    DROP indicates that the marker should drop from the top of the map to its final location when first placed on the map. Animation will cease once the marker comes to rest and animation will revert to null. This type of animation is usually specified during creation of the Marker.
    BOUNCE indicates that the marker should bounce in place. A bouncing marker will continue bouncing until its animation property is explicitly set to null.

You may initiate an animation on an existing marker by calling setAnimation() on the Marker object.
TypeScript
JavaScript

// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 59.325, lng: 18.07 },
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.327, lng: 18.067 },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

window.initMap = initMap;

Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell

If you have many markers, you might not want to drop them on the map all at once. You can make use of setTimeout() to space your markers' animations using a pattern like that shown below:

function drop() {
  for (var i =0; i < markerArray.length; i++) {
    setTimeout(function() {
      addMarkerMethod();
    }, i * 200);
  }
}

View example
Make a marker draggable

To allow users to drag a marker to a different location on the map, set draggable to true in the marker options.

var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// Place a draggable marker on the map
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    draggable:true,
    title:"Drag me!"
});

Further Marker Customization

For a fully-customized marker, see the customized popup example.

For further extensions of the Marker class, marker clustering and management, and overlay customization, see open source libraries.
Was this helpful?
Recommended for you
Customizing a Google Map: Custom Markers

This tutorial teaches you how to change the icon of a Google maps marker. It is beneficial to know the basics of creating markers when using this tutorial. The following map is an example of a map that uses customized markers. The section below lists
Updated Nov 9, 2023
Simple Markers

This example identifies a location on the map with a marker. Read the documentation. Git and Node.js are required to run this sample locally. Follow these instructions to install Node.js and NPM. The following commands clone, install dependencies and
Updated Nov 9, 2023
Marker Labels

This example creates a map where each click by the user creates a marker that's labeled with a single alphabetic character. Read the documentation. Git and Node.js are required to run this sample locally. Follow these instructions to install Node.js
Updated Nov 9, 2023

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2023-11-09 UTC.

    Stack Overflow Stack Overflow
    Ask a question under the google-maps tag.
    GitHub GitHub
    Fork our samples and try them yourself.
    Discord Discord
    Chat with fellow developers about Google Maps Platform.
    Issue Tracker Issue Tracker
    Something wrong? Send us a bug report!

    Learn More
        FAQ
        API Picker
        Tutorials
    Platforms
        Android
        iOS
        Web
        Web Services
    Product Info
        Pricing and Plans
        Contact Sales
        Support
        Terms of Service

Google Developers

    Android
    Chrome
    Firebase
    Google Cloud Platform
    All products

    Terms
    Privacy
    Sign up for the Google for Developers newsletter
    Subscribe

The new page has loaded.

