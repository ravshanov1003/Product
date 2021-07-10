function getData(req,res) {
    const promise = new Promise((resolve, reject) => {
        let body = ''
        req.on('data', function(chunk) {
            body += chunk
        })
    
        req.on('end', function() {
            resolve(body)
        })
        req.on('error', function(err) {
            console.log(err)
            reject('Error')
        })
    })
    return promise
}

function writeToFile() {
    
}

module.exports = {
    getData
}