let map = L.map('map').setView([40.446592, -3.676032], 18)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: "mi openStreemap" }).addTo(map)

//-------------------------- Añadir Tooltip---------------------------//
//L.marker = L.marker([40.446592, -3.676032]).BindToolTip('<a href="http://www.google.es"> Estoy aqui</a>').opentooltip().addTo(map);


//------------------------------Añadir popUp-----------------------------------//
let popup = L.popup().setLatLng([40.446592, -3.676032]).setContent('<a href="http://www.google.es"> Hola mundo</a>');

L.marker = L.marker([40.446592, -3.676032]).bindPopup(popup).openPopup().addTo(map);

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(succes,
        error,
        options)
} else {
    alert("los servicios de geolocalizacion no estan disponible")
}
function succes(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 18
    })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: "mi openStreemap" }).addTo(map)

    //---- Calcular Ruta-----

    let control = L.Routing.control({
        waypoints: [
            L.LatLng(latitude, longitude),
            L.LatLng(40.446592, -3.676032)
        ],
        language: "es",

    }).addTo(map);


}
function error() {
    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 18
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: "mi openStreemap" }).addTo(map)

}

