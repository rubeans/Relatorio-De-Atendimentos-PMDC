const express = require(`express`)
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))


app.get(`/`, (req, res) => {
    if (res.statusCode >= 200 || res.statusCode < 300) {
        console.log(`Servidor está respondendo sem problemas, código http: ${res.statusCode}`)
        res.sendFile(`${__dirname}/index.html`)
    }
    else {
        console.log(`Algo parece não está certo, código http: ${res.statusCode}`)
    }
})

app.post(`/`, (req, res) => {
    if (res.statusCode >= 200 || res.statusCode < 300) {
        res.sendFile(`${__dirname}/sucesso.html`)
        console.log(req.body)
    }
    else {
        res.sendFile(`${__dirname}/falha.html`)
    }
})


app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})