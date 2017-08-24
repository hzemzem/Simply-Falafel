module.exports = function(sequelize, DataTypes) {
    var OrderHistory = sequelize.define("OrderHistory", {
        Order: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        TotalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    OrderHistory.associate = function (models) {
        OrderHistory.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return OrderHistory; 
};