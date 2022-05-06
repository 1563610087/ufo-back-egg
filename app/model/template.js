'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.model;
  const attributes = {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "模板名称",
      field: "name"
    },
    tag: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "0项目模板，1组件模板",
      field: "tag"
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "模板版本号",
      field: "version"
    },
    npmName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "npm包名",
      field: "npmName"
    }
  };
  const options = {
    tableName: "template",
    comment: "",
    indexes: []
  };
  const TemplateModel = sequelize.define("template_model", attributes, options);
  return TemplateModel;
};