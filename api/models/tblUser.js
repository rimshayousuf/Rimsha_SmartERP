const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tblUser', {
    UserID: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    UserCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "IX_User"
    },
    UserName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Designation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UserType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    AuthType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LocationId: {
      type: DataTypes.STRING(1500),
      allowNull: false
    },
    Token: {
      type: DataTypes.STRING(1500),
      allowNull: false
    },
    ProfileImage: {
        type: DataTypes.STRING(1500),
        allowNull: false
      },
    TokenExpireOn: {
        type: DataTypes.datetimeoffset,
        allowNull: false
      },
    CreatedOn: {
      type: DataTypes.datetimeoffset,
      allowNull: false
    },
    UpdatedOn: {
        type: DataTypes.datetimeoffset,
        allowNull: false
      },
    DeletedOnOn: {
        type: DataTypes.datetimeoffset,
        allowNull: false
      },
    CreatedBy: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    CreatedBy: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      DeletedByBy: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      FcmToken: {
        type: DataTypes.STRING(1500),
        allowNull: false
      },
      UserName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EmailConfirmed: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    PhoneNumberConfirmed: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    TwoFactorEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LockoutEnd: {
      type: DataTypes.date,
      allowNull: false
    },
    LockoutEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AccessFailedCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DepartmentId: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
},
{
    sequelize,
    tableName: 'tblUser',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "User_Code_123AB43C",
        unique: true,
        fields: [
          { name: " UserCode" },
        ]
      },
      {
        name: "PK__User__969527485",
        unique: true,
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
