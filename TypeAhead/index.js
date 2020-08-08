const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// inbuilt method to fetch response, returns a promise rather than data
fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));

searchBox.addEventListener('input', handleSearchChange);

function handleSearchChange() {
    const foundPlaces = searchHelper(this.value, cities);
    const placesMap = foundPlaces.map(place => {
        // regex flags
        // g - search globally, i.e. search the complete string
        // i - search case insensitive
        const regex = new RegExp(this.value, 'gi');
        const city = place.city.replace(regex, `<span class='highlight'>${this.value}</span>`);
        const state = place.state.replace(regex, `<span class='highlight'>${this.value}</span>`);
        return `<li><span>${city}, ${state}</span><span class='population'>${numberWithCommas(place.population)}</span></li>`;
    }).join('');
    suggestions.innerHTML = placesMap;
}

function searchHelper(searchText, data) {
    return data.filter(entry => entry.city.toLowerCase().includes(searchText.toLowerCase()) || entry.state.toLowerCase().includes(searchText.toLowerCase()));
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}