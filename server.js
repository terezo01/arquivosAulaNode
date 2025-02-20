
var http = require('http');
var url = require('url')
var fs = require('fs');

function readFile(response, file) {

    fs.readFile(file, function (err, data) {

        response.end(data);
    });
}

function callback(request, response) {

    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

    var parts = url.parse(request.url);
    var path = parts.path;

    if (path == '/') {

        response.end('Esse servidor tem caminhos para: \n /produtos; \n /categorias; \n /pedidos; \n /clientes')
    } else if (path == '/produtos') {

        readFile(response, "produtos.json");
    } else if (path == '/categorias') {

        readFile(response, "categorias.json");
    } else if (path == '/pedidos') {

        readFile(response, "pedidos.json");
    }
    else if (path == '/clientes') {

        readFile(response, "clientes.json");
    } else {
        response.end("Path não mapeado: " + path);
    }
}

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000");