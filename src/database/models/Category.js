module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    
    let cols = {
        category_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: dataTypes.STRING(50)
        }
    };
    
    let config = {
        tableName: "categories",
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);


    return Category;
}