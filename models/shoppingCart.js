module.exports = function(sequelize, DataTypes) {
    var ShoppingCart = sequelize.define("ShoppingCart", {
        Items: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        specialRequest: {
            type: DataTypes.TEXT,
        },
        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });
    ShoppingCart.associate = function (models) {
        ShoppingCart.belongsTo(models.MenuItem, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return ShoppingCart; 
}; 