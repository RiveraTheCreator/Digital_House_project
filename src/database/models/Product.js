module.exports = (sequealize,dataTypes) => {
    let alias = "Products";
    
    let cols = {
        product_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        image_p: {
            type:dataTypes.STRING(50)
        },
        p_name: {
            type :dataTypes.STRING(50)
        },
        p_description:{
            type : dataTypes.TEXT
        },
        caracteristic:{
            type: dataTypes.TEXT
        },
        specs:{
            type: dataTypes.TEXT
        },
        price:{
            type:dataTypes.FLOAT
        }
    };

    let config = {
        tableName: "products",
        timestamps: false 
    }

    const Product = sequealize.define(alias,cols,config);

    //Un producto tiene solo una categoría
    Product.associate = function(models) {
        Product.belongsTo(models.Categories, {
            as: "category",
            foreignKey: "category_id"
        })
    }

    //Un producto pertenece sólo a un tipo de animal
    Product.associate = function(models) {
        Product.belongsTo(models.Animals, {
            as: "animal",
            foreignKey: "animal_id"
        })
    }
    
    //Llave foránea parra tabla de unión
    Product.associate = function(models) {
        Product.hasMany(models.OrderDetails, {
            as: "orderdetail",
            foreignKey: "product_id"
        })
    }

    return Product;
}