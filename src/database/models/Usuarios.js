

module.exports = function(sequealize,dataTypes){
    let alias = "Usuario";
    
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type:dataTypes.STRING
        },
        lastName: {
            type :dataTypes.STRING
        },
        email: {
            type : dataTypes.STRING
        },
        u_password:{
            type : dataTypes.STRING
        },
        phone:{
            type : dataTypes.STRING
        },
        streetNumber:{
            type: dataTypes.STRING
        },
        postalCode:{
            type: dataTypes.STRING
        },
        country:{
            type:dataTypes.STRING
        },
        picture:{
            type: dataTypes.STRING
        }

    }
    let config = {
        tableName: "users",
        timestamps: false 
    }

    let Usuario = sequealize.define(alias,cols,config);

    Usuario.associate = function(models){
        Usuario
    }


    return Producto;
}