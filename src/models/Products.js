const Producto = {
    catchProduct: function(producto){
        this.product = producto;
    },
    product: undefined,
    sendProduct: function(){
        return this.product;
        
    }
}
module.exports = Producto;