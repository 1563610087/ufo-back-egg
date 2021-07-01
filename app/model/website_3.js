'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.model;
  const attributes = {
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "site_id"
    },
    site_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "网站名称",
      field: "site_name"
    },
    site_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "网站地址",
      field: "site_url"
    },
    website_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "父级分类id",
      field: "website_id",
      references: {
        key: "website_id",
        model: "website_2_model"
      }
    },
    site_describe: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "网站描述",
      field: "site_describe"
    },
    icon_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "网站图标地址",
      field: "icon_url"
    }
  };
  const options = {
    tableName: "website_3",
    comment: "",
    indexes: [{
      name: "二级分类",
      unique: false,
      type: "BTREE",
      fields: ["website_id"]
    }]
  };
  const Website3Model = sequelize.define("website_3_model", attributes, options);
  return Website3Model;
};