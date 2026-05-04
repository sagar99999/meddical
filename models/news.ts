import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * 1. Strict category type (TypeScript)
 */
export type BlogCategory =
    | "Surgery"
    | "Health Care"
    | "Medical"
    | "Professional";

/**
 * 2. Interface
 */
export interface News extends Document {
    title: string;
    description: string;
    image: string;
    author: string;
    views: number;
    likes: number;
    fileId: string;
    slug: string;
    category: BlogCategory;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * 3. Schema
 */
const NewsSchema: Schema<News> = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        author: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        views: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        fileId: { type: String, trim: true, default: "" },
        category: {
            type: String,
            required: true,
            enum: ["Surgery", "Health Care", "Medical", "Professional"],
        },
    },
    {
        timestamps: true,
    }
);

/**
 * 4. Prevent model overwrite in Next.js
 */
const News: Model<News> =
    mongoose.models.News || mongoose.model<News>("News", NewsSchema);

export default News;