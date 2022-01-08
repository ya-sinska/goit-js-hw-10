import './css/styles.css';
import contryCard from './contry-card.hbs'
import contryList from './contry-list.hbs'
import { fetchCountries } from './fetchCountries'
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    cardContainer: document.querySelector(".country-list"),
    input: document.querySelector('#search-box'),
    countryInfo: document.querySelector('.country-info'),
    countryList: document.querySelector('.country-list'),
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function onInput(e) {
    const inputValue = (e.target.value).trim();
    if (!inputValue) {
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
    } else {
        fetchCountries(inputValue)
            .then(renderCountryCard)
            .catch(catchError);
    }
}

function renderCountryCard(contries) {
    if (contries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (contries.length >= 2) {
       const markup = contryList(contries)
        refs.countryList.innerHTML = markup;
        refs.countryInfo.innerHTML = '';
    }
    else {
        const markup = contryCard(contries)
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = markup;
    }
    
}

function catchError(error) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}
