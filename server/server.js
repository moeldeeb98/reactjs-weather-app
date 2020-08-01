// import path module
const path = require('path')
// import express server
const express = require('express')
// create an instance of express server
const app = express()

// tell express to serve up public server and everything inside of it
const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))

// tell express which port to use
// heloku will assign a port for your app after deploying it
const port = process.env.PORT || 3000

//
app.get('*', (req, res) =>{
    res.sendFile(path.join(buildPath, 'index.html'))
    // res.send('hello')
})

// launch the server
app.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})