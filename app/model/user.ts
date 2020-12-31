
import {
  Model,
  Optional,
  DataTypes,
} from 'sequelize';

interface UserAttributes {
  id: number,
  name: string,
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model <UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id: number;
  public name: string;
}

export const model = {
  name: 'users',
  schema: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    updatedAt: {
      field: 'update_at',
      type: DataTypes.DATE,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
  },
};

export default (...args) => {
  const sequelize = args[1];
  const user = User.init(
    model.schema,
    {
      tableName: model.name,
      sequelize,
    },
  );

  return user;
};
