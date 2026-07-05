import sequelize from '@/lib/db';
import User from './User';
import Product from './Product';

export type { UserAttributes, UserCreationAttributes } from './User';
export type { ProductAttributes, ProductCreationAttributes } from './Product';

User.hasMany(Product, { foreignKey: 'userId', as: 'products' });
Product.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export { sequelize, User, Product };
