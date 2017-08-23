module.exports = function(sequelize, DataTypes) {
    var ShoppingCart = sequelize.define("ShoppingCart", {
        Items: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        Quantity: {
            type: DataTypes.INT,
            allowNull: false,
            defaultValue: 1
        }
        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });
    return ShoppingCart;
};