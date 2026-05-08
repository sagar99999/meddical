// models/Appointment.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
    name: string;
    gender: 'male' | 'female' | 'other';
    email: string;
    phone: string;
    date: string;
    time: string;
    doctor: string;
    department: 'Free Checkup' | 'Cardiogram' | 'Dna Test' | 'Blood Bank' | 'Dermalogy' | 'Orthopedic';
    message: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
}

const AppointmentSchema = new Schema<IAppointment>(
    {
        name: { type: String, required: true },
        gender: { type: String, enum: ['male', 'female', 'other'], required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true, match: /^([01]\d|2[0-3]):([0-5]\d)$/ },
        doctor: { type: String, required: true },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        department: {
            type: String,
            enum: ['Free Checkup', 'Cardiogram', 'Dna Test', 'Blood Bank', 'Dermalogy', 'Orthopedic'],
            required: true,
        },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Appointments || mongoose.model<IAppointment>('Appointments', AppointmentSchema);