import mongoose from 'mongoose';
import { UserDoc } from '../auth/user.interfaces';
export interface OrderDoc extends mongoose.Document {
    user: UserDoc | string;
    totalAmount: number;
    chargeId: string | number;
}
export interface OrderModel extends mongoose.Model<OrderDoc> {
}
