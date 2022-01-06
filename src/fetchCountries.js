// функція для отримання даних з бекенду по назві країни
// повертає масив об єктів країн відповідно до запиту
export function fetchCountries (contryName) {
  return fetch(`https://restcountries.com/v3.1/name/${contryName}`)
    .then(r => {
        return r.json()  
    })
}