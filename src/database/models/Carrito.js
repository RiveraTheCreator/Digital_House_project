module.exports = (sequelize, dataTypes) => {
    let alias = "Carrito";
    let cols = {
        order_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: dataTypes.INTEGER,

        },
        detail_id: {

        },
        total_items: {

        },
        total_amount: {

        }
    };
    let config = {
        tableName: "carrito",
        timestamps: false
    }
    
    const Carrito = sequelize.define(alias, cols, config);


    return Carrito;
}