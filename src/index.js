import './css/styles.css';
import contryCard from './contry-card.hbs'
import { fetchCountries } from './fetchCountries'

const DEBOUNCE_DELAY = 300;

const refs = {
    cardContainer: document.querySelector(".country-list")
}
fetchCountries('Uk')
    .then(renderCountryCard)
    .catch(error => {
    console.log(error)
    })
    


function renderCountryCard(contry) {
    const markup = contryCard(contry)
    console.log(markup)
    refs.cardContainer.innerHTML = markup   
}
