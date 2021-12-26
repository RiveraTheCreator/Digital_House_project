module.exports = (sequelize, dataTypes) => {
    let alias = "Animals";
    
    let cols = {
        animal_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        animal_name: {
            type: dataTypes.STRING(50)
        }
    };
    
    let config = {
        tableName: "animals",
        timestamps: false
    }
    
    const Animal = sequelize.define(alias, cols, config);

    //Un animal tiene muchos productos
    Animal.associate = function(models) {
        Animal.hasMany(models.Products, {
            as: "product",
            foreignKey: "animal_id"
        })
    }

    return Animal;
}