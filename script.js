// "https://api.sampleapis.com/wines/reds"
// import fs from "fs";
// import https from "https";

const fs = require('fs')
const https = require('https')

https.get("https://api.sampleapis.com/wines/reds", res => {
    let data = ''

    res.on('data', chunk => {
        data += chunk
    })

    res.on('end', () => {
        fs.writeFile("wine.js", data, () => {
            console.log("Success")
        })
    })
})