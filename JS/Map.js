var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
var crd

fetchData()

function success(pos) {
    crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGFudC1jaGFuZGxhIiwiYSI6ImNrOGs4eWw3djBrbjEzZHFob3hiOHp1bDgifQ.l4Vjz4vaAKos0VKLAEDKxg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [crd.longitude, crd.latitude], // starting position
        zoom: 15,
        trackUserLocation: true
    });
    map.on('load', function () {
        map.loadImage(
            'Art/yourL.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('cat', image);
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [crd.longitude, crd.latitude]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'cat',
                        'icon-size': 0.10,
                    }
                });
            }
        );
    });
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


function fetchData(){
  fetch("https://api.covid19india.org/v2/state_district_wise.json")
  .then(response => response.json())
  .then(data => {
    //  for(var Nstate in data){
        // console.log( data[Nstate].state)
      //   for(var dis in data[Nstate].districtData){
           // console.log(data[Nstate].districtData[dis].district)
            //  if(data[Nstate].districtData[dis].district=="unknown"){
            //     fetchData(data[Nstate].state,"",data[Nstate.districtData[dis].confirmed])
            //  }
            //  else{
            //  fetchData(data[Nstate].state,data[Nstate].districtData[dis].district,data[Nstate].districtData[dis].confirmed)
            // }
  //  }


     // }





  });  
}


function fetchLocation(State, District, Numberofcases){


    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+State+"%20"+District+".json?access_token=pk.eyJ1IjoibmlzaGFudC1jaGFuZGxhIiwiYSI6ImNrOGs4eWw3djBrbjEzZHFob3hiOHp1bDgifQ.l4Vjz4vaAKos0VKLAEDKxg")
    .then(response => response.json())
    .then(data => {

  
        console.log(data.features[0].center[0])
        
        console.log(data.features[0].center[1])
  
  
  
  
  
    }); 
    

}
function calcRadius(){



}

function placeCircle(){

}




