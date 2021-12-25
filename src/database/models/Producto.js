module.exports = (sequealize,dataTypes) => {
    let alias = "Producto";
    
    let cols = {
        product_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        animal_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        category_id: {
            type: dataTypes.INTEGER.UNSIGNED
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

    const Producto = sequealize.define(alias,cols,config);


    return Producto;
}