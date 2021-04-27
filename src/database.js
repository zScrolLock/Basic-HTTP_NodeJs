const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function saveProduct(product){
    if(!product.id){
        product.id = sequence.id
    }

    products[product.id] = product
    return product
}

function searchbyId(id){
    return products[id] || {} //Não encontrou retorna objeto vazio
}

function getAllProducts(){
    return Object.values(products) //Retorna apenas os valores 
}

function deleteProduct(id){
    delete products[id]
    return
}

module.exports = { saveProduct, searchbyId, getAllProducts, deleteProduct }