import config from '../config'
const { Response } = require('whatwg-fetch');

let apiKey= config.apiKey
let baseUrl = config.baseUrl


export function callAPI() {
    console.log(config)
    var request = new Request(`${baseUrl}search/movie?api_key=${apiKey}&query=Jack+Reacher`, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        "Content-Type": "application/json",
      })
    });
    return fetch(request)
      .then((response) => {
          console.log(response)
        return response.json();
    })
      .then((payload) => {
        return Promise.resolve(payload);
    })
}