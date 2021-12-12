let products = []
module.exports = class Product{
    constructor(id,name,price,description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    save(){
        this.id = Math.floor(Math.random()*100000);
        products.push(this)
        return this;
    }
    static getAll(){
        return products;
    }
    static deleteById(prodId){
        let index = products.findIndex(p => p.id == prodId)
        if(index > -1){
            products = products.filter(p => p.id != prodId)
        }else{
            throw new Error('Product Not Found')
        }
    }
}