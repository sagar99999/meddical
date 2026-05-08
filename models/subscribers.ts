// models/Appointment.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriber extends Document {
    email: string;
}

const SubscriberSchema = new Schema<ISubscriber>(
    {
        email: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Subscribers || mongoose.model<ISubscriber>('Subscribers', SubscriberSchema);