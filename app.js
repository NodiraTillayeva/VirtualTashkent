// Initialize the map and set its view to Tashkent's coordinates
const map = L.map('map').setView([41.3111, 69.2797], 13); // Tashkent

// Add Esri National Geographic World Map as a custom tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.carto.com">CartoDB</a> contributors'
}).addTo(map);


// Define a custom icon
const customIcon = L.icon({
    iconUrl: 'quest.png', // Replace with your custom image URL or file path
    iconSize: [30, 30], // Size of the icon [width, height]
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