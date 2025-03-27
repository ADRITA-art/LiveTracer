const socket=io();

console.log('hey');
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
                    const {latitude, longitude} =   position.coords;
                    console.log(latitude,longitude);
                    socket.emit('sendLocation', {latitude,longitude});
                   
                        
},
(error)=>{
                        console.log(error);
},
{
                        enableHighAccuracy:true,
                        timeout:5000,
                        maximumAge:0
})

};

const map=L.map("map").setView([0,0],16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
                        attribution: 'Adrita Chakraborty'
}).addTo(map);

const markers={};

socket.on('receiveLocation',(data)=>{
const {id, latitude,longitude}=data;
if (Object.keys(markers).length === 0) {
                        map.setView([latitude, longitude], 16);
                    }
                
                    if (markers[id]) {
                        markers[id].setLatLng([latitude, longitude]); 
                    } else {
                        markers[id] = L.marker([latitude, longitude]).addTo(map);
                        // markers[id].bindPopup().openPopup();
                        markers[id].bindPopup(`<div class="popup-content">
                                                <h4>User: ${id}</h4>
                                                <p>Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}</p>
                                            </div>`).openPopup();
                    }
});


socket.on('userDisconnected',(data)=>{
                        if(markers[data.id]){
                            map.removeLayer(markers[data.id]);
                            delete markers[data.id];
                        }                       
});