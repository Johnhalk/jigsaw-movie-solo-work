const { Response } = require('whatwg-fetch');

export function callAPI() {
    var request = new Request('https://api.themoviedb.org/3/search/movie?api_key=121486b23802e0b6735125ff1892f340&query=Jack+Reacher', {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        "Content-Type": "application/json",
        // "api_key": "121486b23802e0b6735125ff1892f340"
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