'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.model;
  const attributes = {
    website_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "website_id"
    },
    web_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "web_name"
    },
    classify_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "classify_id",
      references: {
        key: "classify_id",
        model: "website_1_model"
      }
    }
  };
  const options = {
    tableName: "website_2",
    comment: "",
    indexes: [{
      name: "classify_id",
      unique: false,
      type: "BTREE",
      fields: ["classify_id"]
    }]
  };
  const Website2Model = sequelize.define("website_2_model", attributes, options);
  return Website2Model;
};