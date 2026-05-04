import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * 1. Strict department type (TypeScript)
 */
export type Department =
    | "Neurology"
    | "Cardiology"
    | "Orthopedics"
    | "Dermatology"
    | "Pediatrics"
    | "Oncology"
    | "Psychiatry"
    | "Ophthalmology"
    | "Gastroenterology"
    | "Endocrinology";

/**
 * 2. Interface for social links (only allowed keys)
 */
export interface SocialLinks {
    facebook: string;
    linkedin: string;
    instagram: string;
}

/**
 * 3. Interface for Doctor document
 */
export interface IDoctor extends Document {
    name: string;
    department: Department;
    socialLinks: SocialLinks;
    description: string;
    slug: string;
    image: string;
    fileId: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * 4. Schema
 */
const DoctorSchema: Schema<IDoctor> = new Schema(
    {
        name: { type: String, required: true, trim: true },
        department: {
            type: String,
            required: true,
            enum: [
                "Neurology",
                "Cardiology",
                "Orthopedics",
                "Dermatology",
                "Pediatrics",
                "Oncology",
                "Psychiatry",
                "Ophthalmology",
                "Gastroenterology",
                "Endocrinology",
            ],
        },
        socialLinks: {
            facebook: { type: String, default: "" },
            linkedin: { type: String, default: "" },
            instagram: { type: String, default: "" },
        },
        description: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        image: { type: String, required: true, trim: true },
        fileId: { type: String, trim: true, default: "" }
    },
    {
        timestamps: true,
    }
);

/**
 * 5. Prevent model overwrite in Next.js
 */
const Doctors: Model<IDoctor> =
    mongoose.models.Doctors || mongoose.model<IDoctor>("Doctors", DoctorSchema);

export default Doctors;