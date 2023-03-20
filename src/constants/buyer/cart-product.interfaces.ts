import mongoose from 'mongoose';
import {ProductDoc} from '../seller/product.interfaces';
import {CartDoc} from './cart.interfaces';

export interface CartProductDoc extends mongoose.Document {
  cart: CartDoc | string,
  product: ProductDoc | string,
  quantity: number
};

export interface CartProductModel extends mongoose.Model<CartProductDoc> {};