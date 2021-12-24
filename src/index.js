const fetch = require('node-fetch')

async function getData () {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
    return data 
}

module.exports = getData