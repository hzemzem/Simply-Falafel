module.exports = function(sequelize, DataTypes) {
    var MenuItem = sequelize.define("MenuItem", {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        menuItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });
    MenuItem.associate = function(models) {
        MenuItem.hasMany(models.ShoppingCart, {
            onDelete: "cascade"
        });
    };
    return MenuItem;
};