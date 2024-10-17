// Initialize the map and set its view to Tashkent's coordinates
const map = L.map('map').setView([41.3111, 69.2797], 13); // Tashkent

// Add Esri National Geographic World Map as a custom tile layer
L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com">Esri</a> contributors',
    maxZoom: 16
}).addTo(map);

// Define a custom icon
const customIcon = L.icon({
    iconUrl: 'quest.png', // Replace with your custom image URL or file path
    iconSize: [20, 20], // Size of the icon [width, height]
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // Position of the popup relative to the icon
});

// Quest locations
const questLocations = [
    {
        name: "Amir Timur Square",
        coordinates: [41.3111, 69.2797],
        quest: "Learn about the history of Amir Timur and answer a quiz to earn rewards."
    },
    {
        name: "Chorsu Bazaar",
        coordinates: [41.3287, 69.2369],
        quest: "Find the oldest spice shop and discover its secrets."
    }
];

// Function to add quest markers with custom icons and popups
questLocations.forEach(location => {
    const marker = L.marker(location.coordinates, { icon: customIcon }).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.quest}`);
});