const fs = require('fs')
const http = require('http')
const uuid = require('uuid')
const port = process.env.PORT || 3000;

const products = require('./data/data.json')
const { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct } = require('./contollers/productController')

const server = http.createServer(function(req, res) {
        if (req.url === '/products' && req.method === 'GET') {
            getAllProducts(req, res)
        } else if (req.url.match(/\/products\/\w+/) && req.method === 'GET') {
            const id = req.url.split('/')[2]
            getProductById(req, res, id)

        } else if (req.url === '/products' && req.method === 'POST') {
            createProduct(req, res)
        } else if (req.url.match(/\/products\/\w+/) && req.method === 'DELETE') {
            const id = req.url.split('/')[2]
            deleteProduct(req, res, id)

        } else if (req.url.match(/\/products\/\w+/) && req.method === 'PUT') {
            const id = req.url.split('/')[2]
            updateProduct(req, res, id)
        } else {
            console.log('Invalid url');
        }
    })
    // CRUD => C - Create, R - Read, U - Update, D - Delete
server.listen(port, () => console.log('Server is running'))