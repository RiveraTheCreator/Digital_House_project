module.exports = (sequelize, dataTypes) => {
    let alias = "OrderDetail";
    
    let cols = {
        order_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        carrito_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        product_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        product_quantity: {
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName: "animals",
        timestamps: false
    }
    
    const OrderDetail = sequelize.define(alias, cols, config);


    return OrderDetail;
}