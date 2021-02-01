
import {
  Model,
  Optional,
  DataTypes
} from 'sequelize';

interface AuthorizationAttributes {
  id: number,
  user_id: number,
  provider: string,
  providerId: string,
  accessToken: string,
  name: string,
  displayName: string
}

interface AuthorizationCreationAttributes extends Optional<AuthorizationAttributes, 'id'> {}

class Authorization extends Model<AuthorizationAttributes, AuthorizationCreationAttributes> implements AuthorizationAttributes {
  public id: number;
  public user_id: number;
  public provider: string;
  public providerId: string;
  public accessToken: string;
  public name: string;
  public displayName: string;
}

export const model = {
  name: 'authorization',
  schema: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    providerId: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    accessToken: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    displayName: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  }
};

export default (...args) => {
  const sequelize = args[1];
  const authorization = Authorization.init(
    model.schema,
    {
      tableName: model.name,
      sequelize
    }
  );

  return authorization;
};
