const products = require('../data/data.json')
const uuid = require('uuid')
const fs = require('fs')

async function getProducts() {
    return new Promise(function (resolve, reject) {
        resolve(products)
    })
}

async function getById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((product) => product.id === id)
        resolve(product)
    })
}

async function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {
            id: uuid.v4(),
            ...product,
        }
        products.push(newProduct)
        fs.writeFile('./data/data.json', JSON.stringify(products, null, 2), 'utf8', function(err) {
            if (err) {
                reject(err)
            } else {
                resolve(newProduct)
            }
        })
    })
}

async function deleteP(id) {
    return new Promise((resolve, reject) => {
        const updatedProducts = products.filter((product) => product.id !== id)
        fs.writeFile('./data/data.json', JSON.stringify(updatedProducts, null, 2), 'utf8', function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    getProducts,
    getById,
    create,
    deleteP
}