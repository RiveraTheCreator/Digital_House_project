module.exports = (sequelize, dataTypes) => {
    let alias = "Carritos";
    
    let cols = {
        order_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        total_items: {
            type: dataTypes.INTEGER
        },
        total_amount: {
            type: dataTypes.FLOAT
        },
        carrito_date: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "carrito",
        timestamps: false
    }
    
    const Carrito = sequelize.define(alias, cols, config);

    //Un carrito tiene sólo un usuario
    Carrito.associate = function(models) {
        Carrito.belongsTo(models.Users, {
            as: "user",
            foreignKey: "user_id"
        })
    }
    //Llave foránea parra tabla de unión
    Carrito.associate = function(models) {
        Carrito.hasMany(models.OrderDetails, {
            as: "orderdetail",
            foreignKey: "carrito_id"
        })
    }

    return Carrito;
}