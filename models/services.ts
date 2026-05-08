import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * 1. Strict category type (TypeScript)
 */
export type ServiceCategory =
    | "Free Checkup"
    | "Cardiogram"
    | "Dna Test"
    | "Blood Bank"
    | "Dermalogy"
    | "Orthopedic";

/**
 * 2. Interface for Service document
 */
export interface IService extends Document {
    title: string;
    category: ServiceCategory;
    slug: string;
    image: string;
    description: string;
    highlights: string;
    createdAt: Date;
    updatedAt: Date;
    fileId: string;
}

/**
 * 3. Schema
 */
const ServiceSchema: Schema<IService> = new Schema(
    {
        title: { type: String, required: true, trim: true },
        category: {
            type: String,
            required: true,
            enum: ["Free Checkup", "Cardiogram", "Dna Test", "Blood Bank", "Dermalogy", "Orthopedic"],
        },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        image: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        fileId: { type: String, trim: true, default: "" },
        highlights: { type: String, required: true, trim: true },
    },
    {
        timestamps: true,
    }
);

/**
 * 4. Prevent model overwrite in Next.js
 */
const Services: Model<IService> =
    mongoose.models.Services || mongoose.model<IService>("Services", ServiceSchema);

export default Services;