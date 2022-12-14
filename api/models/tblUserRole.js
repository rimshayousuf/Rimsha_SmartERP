const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblUserRole', {
    RID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tblUser',
        key: 'UserID'
      }
    },
    RoleID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tblRole',
        key: 'RoleID'
      }
    },
    Remarks: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tblUserRole',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__UserRole__AF27604FC5AE1B28",
        unique: true,
        fields: [
          { name: "UserID" },
          { name: "RoleID" },
        ]
      },
    ]
  });
};
