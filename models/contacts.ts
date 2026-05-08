import mongoose, { Schema, models, Model } from 'mongoose';

export interface IContact {
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
}

const ContactSchema = new Schema<IContact>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
},
    {
        timestamps: true
    });

const Contacts: Model<IContact> = models.Contacts || mongoose.model('Contacts', ContactSchema);
export default Contacts;