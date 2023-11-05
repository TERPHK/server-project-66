module.exports = (sequelize, DataTypes) => {
    const North = sequelize.define('North', {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        time: DataTypes.STRING,
        tel:DataTypes.INTEGER,
        web:DataTypes.STRING,
    })
    return North
  }