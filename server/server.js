const express = require('express')
const path = require('path')
const https = require('https')
const http = require('http')
const fs = require('fs')

const app = express()

app.use((req, res, next) => {
    if(req.secure) {
        next()
    } else {
        res.redirect('https://' + req.hostname + req.url)
    }
})

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '../..', 'vkapp', 'build')));

const dir = path.normalize(`${__dirname}/../private-keys/web/crypt`)

const options = {
    key: fs.readFileSync(`${dir}/private.key`),
    cert: fs.readFileSync(`${dir}/certificate.crt`),
    ca: fs.readFileSync(`${dir}/certificate_ca.crt`),
    requestCert: false,
    rejectUnauthorized: false
}

const httpServer = new http.Server(app)
const server = https.createServer(options, app)

app.get('/test', function (req, res) {
    res.json({ test: 'test testikon' })
})

app.get('/vkapp/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../..', 'vkapp', 'build', 'index.html'))
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

httpServer.listen(80)
server.listen(443)
