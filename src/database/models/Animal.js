module.exports = (sequelize, dataTypes) => {
    let alias = "Animal";
    
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


    return Animal;
}