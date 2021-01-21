
import {
  Model,
  Optional,
  DataTypes
} from 'sequelize';

interface MenuAttributes {
  id: number,
  name: string,
}

interface MenuCreationAttributes extends Optional<MenuAttributes, 'id'> {}

class Menu extends Model <MenuAttributes, MenuCreationAttributes> implements MenuAttributes {
  public id: number;
  public name: string;
  public url: string;
  public icon: string;
  public position: number;
}

export const model = {
  name: 'menu',
  schema: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },

    url: {
      type: DataTypes.STRING(256)
    },

    icon: {
      type: DataTypes.STRING(256)
    },

    position: {
      type: DataTypes.STRING(256)
    },

    updatedAt: {
      field: 'update_at',
      type: DataTypes.DATE
    },

    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    }
  }
};

export default (...args) => {
  const sequelize = args[1];
  const menu = Menu.init(
    model.schema,
    {
      tableName: model.name,
      sequelize
    }
  );

  return menu;
};
