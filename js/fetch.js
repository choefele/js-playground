const fetch = require('node-fetch');

function fetchData() {
    return fetch("https://httpbin.org/get")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

module.exports = fetchData;