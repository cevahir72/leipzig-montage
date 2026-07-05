import { Model, DataTypes } from 'sequelize';
import sequelize from '@/lib/db';

export interface ProductAttributes {
  id: number;
  productId: string;
  imageUrl: string | null;
  name: string;
  minCost: number | null;
  maxCost: number | null;
  userId: number;
}

export type ProductCreationAttributes = Omit<ProductAttributes, 'id'>;

class Product extends Model<ProductAttributes, ProductCreationAttributes> {
  declare id: number;
  declare productId: string;
  declare imageUrl: string | null;
  declare name: string;
  declare minCost: number | null;
  declare maxCost: number | null;
  declare userId: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    minCost: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    maxCost: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Product;
