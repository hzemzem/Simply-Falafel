module.exports = function(sequelize, DataTypes) {
    var ShoppingCart = sequelize.define("ShoppingCart", {
        Items: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        SpecialRequest: {
            type: DataTypes.TEXT,
            allowNull: false
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