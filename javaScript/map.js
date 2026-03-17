// K3 coordinates
const k3 = [49.989023, 8.225469]

// Create map
const map = L.map('map').setView(k3, 17)

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap'
}).addTo(map)

// MARKERS

const markers = {
k3: L.marker([49.989023, 8.225469]).addTo(map)
.bindPopup("K3"),

rewe: L.marker([49.99717,8.23097]).addTo(map)
.bindPopup("Rewe"),

kaufland: L.marker([49.966955,8.229197]).addTo(map)
.bindPopup("Kaufland"),

aldi: L.marker([49.976431,8.235278]).addTo(map)
.bindPopup("Aldi"),

lidl: L.marker([49.968123,8.238088]).addTo(map)
.bindPopup("Lidl"),

mueller: L.marker([49.967566,8.228019]).addTo(map)
.bindPopup("Müller"),

dm: L.marker([50.000819,8.265538]).addTo(map)
.bindPopup("DM"),

apo: L.marker([49.981899,8.244306]).addTo(map)
.bindPopup("Sonnen Apotheke"),

arena: L.marker([49.989408,8.223943]).addTo(map)
.bindPopup(`
🚊 Tram Stop: Jakob-Heinz-Straße / Arena<br>
51, 53, 59
`),

campusbruecke: L.marker([49.990060,8.228261]).addTo(map)
.bindPopup(`
🚌 Bus Stop: Hochschule Mainz / Campusbrücke<br>
74, 93, E
`),

kisselberg: L.marker([49.992112,8.224806]).addTo(map)
.bindPopup(`
🚌🚊 Kisselberg<br>
Bus: 6, 54, 55, 56, 58, 68, 74, 76, 78, 91, 93, 630<br>
Tram: 51, 53, 59
`),

sw: L.marker([49.992726,8.233475]).addTo(map)
.bindPopup("Studierendenwerk"),

zm: L.marker([49.991801,8.234076]).addTo(map)
.bindPopup("Zentralmensa")

}

// Focus function
function focusMarker(name){

const marker = markers[name]

if(marker){

map.setView(marker.getLatLng(),17)

marker.openPopup()

}

}