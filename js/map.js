mapboxgl.accessToken = 'pk.eyJ1Ijoia2VtaW93b3llbGUiLCJhIjoiY2tvcmMxdDByMTNqcjJybnV3bzBzanZpdyJ9.OFjl75Vb1811YVCX05Vg8w';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
console.log(position);
// setUpMap([position.coords.longitude, position.coords.latitude]);
// setUpMap([-2.24, 53.48])
setUpMap([ -80.19366,  25.77427])

}
function errorLocation() {
setUpMap([-2.24, 53.48])
}

function setUpMap(center){

    const map = new mapboxgl.Map({ 
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
      });
      
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
 
});


map.addControl(directions, 'top-left');


}

