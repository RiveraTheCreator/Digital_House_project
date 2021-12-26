module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    
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

    //Una categoría tiene muchos productos
    Category.associate = function(models) {
        Category.hasMany(models.Products, {
            as: "product",
            foreignKey: "category_id"
        })
    }

    return Category;
}