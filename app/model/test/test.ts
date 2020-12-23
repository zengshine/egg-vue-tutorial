
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

class Test extends Model <UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id: number;
  public name: string;
}

export const model = {
  name: 'test',
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

export default (app, sequelize) => {
  console.log(app);
  const user = Test.init(
    model.schema,
    {
      tableName: model.name,
      sequelize,
    },
  );

  return user;
};
