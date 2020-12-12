
import {
  Model,
  Optional,
  DataTypes,
} from 'sequelize';

interface UserAttributes {
  id: number,
  name: string
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
  },
};

export default app => {
  const user = User.init(
    model.schema,
    {
      tableName: model.name,
      sequelize: app.sequelize,
    },
  );

  return user;
};
