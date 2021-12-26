module.exports = (sequelize, dataTypes) => {
    let alias = "OrderDetails";
    
    let cols = {
        order_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_quantity: {
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName: "orderdetail",
        timestamps: false
    }
    
    const OrderDetail = sequelize.define(alias, cols, config);

 ///Llaves foráneas de la tabla de unión

    OrderDetail.associate = function(models) {
        OrderDetail.belongsTo(models.Carritos, {
            as: "carrito",
            foreignKey: "carrito_id"
        })
    }

    OrderDetail.associate = function(models) {
        OrderDetail.belongsTo(models.Products, {
            as: "product",
            foreignKey: "product_id"
        })
    }

    return OrderDetail;
}