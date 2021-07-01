'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.model;
  const attributes = {
    classify_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "classify_id"
    },
    classify_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "classify_name"
    }
  };
  const options = {
    tableName: "website_1",
    comment: "",
    indexes: []
  };
  const Website1Model = sequelize.define("website_1_model", attributes, options);
  return Website1Model;
};