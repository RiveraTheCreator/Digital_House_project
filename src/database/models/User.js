

module.exports = (sequealize,dataTypes) => {
    let alias = "Users";
    
    let cols = {
        user_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type:dataTypes.STRING(50)
        },
        lastName: {
            type :dataTypes.STRING(50)
        },
        email: {
            type : dataTypes.STRING(50)
        },
        u_password:{
            type : dataTypes.STRING(50)
        },
        phone:{
            type : dataTypes.STRING(10)
        },
        streetName:{
            type: dataTypes.STRING(50)
        },
        postalCode:{
            type: dataTypes.STRING(5)
        },
        country:{
            type:dataTypes.STRING(50)
        },
        picture:{
            type: dataTypes.STRING(50)
        }
    };

    let config = {
        tableName: "users",
        timestamps: false 
    }

    const User = sequealize.define(alias,cols,config);

    //Un usuario puede tener muchos carritos
    User.associate = function(models) {
        User.hasMany(models.Carritos, {
            as: "carrito",
            foreignKey: "user_id"
        })
    }


    return User;
}