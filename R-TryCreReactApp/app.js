// step 1...
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => console.log(data));

// step 2...
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => displayCountries(data));

// const displayCountries = countries =>{
//     console.log(countries);
// }

// step 3...
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => displayCountries(data));

// const displayCountries = countries =>{
//  for (let i = 0; i < countries.length; i++) {
//     const country = countries[i];
//     console.log(country.name);
//    }
// }

// step 4...
// fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountries(data));

// const displayCountries = countries => {
//     const ul =document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const li = document.createElement('li');
//         li.innerText = country.name;
//         ul.appendChild(li);
//     }
// }

// step 5 ...hobe short system...
// fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountries(data));

// const displayCountries = countries => {
//     const countriesDiv =document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement('div');

//         const h3 = document.createElement('h3');
//         h3.innerText = country.name;
//         countryDiv.appendChild(h3);

//         const p = document.createElement('p');
//         p.innerText = country.capital;
//         countryDiv.appendChild(p);

//         countriesDiv.appendChild(countryDiv);
//     }
// }

// step 6..
// fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountries(data));

// const displayCountries = countries => {
//     const countriesDiv =document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';
//         const countryInfo =`
//          <h3  class="country-name">${country.name}</h3>
//          <p>${country.capital}</p>
//          `;
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     }
// }

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv =document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo =`
         <h3  class="country-name">${country.name}</h3>
         <p>${country.capital}</p>
         <button onclick="displayCountryDetails('${country.name}')" >Details</button>
         `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);  
    });
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML =`
     <h1> ${country.name}</h1>
     <p> Population: ${country.population}</p>
     <p>Area: ${country.area}</p>
     <img src="${country.flag}">

    `
}