module.exports = function(sequealize,dataTypes){
    let alias = "Producto";
    
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image_p: {
            type:dataTypes.STRING
        },
        p_name: {
            type :dataTypes.STRING
        },
        animal: {
            type : dataTypes.STRING
        },
        category:{
            type : dataTypes.STRING
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

    }
    let config = {
        tableName: "products",
        timestamps: false 
    }

    let Producto = sequealize.define(alias,cols,config);


    return Producto;
}