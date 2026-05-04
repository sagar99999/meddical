import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from "nanoid"
import slugify from "slugify"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generate a slug: title + random suffix
export function generateSlug(title: string, suffixLength: number = 6): string {
  const base = slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  }) || "untitled";

  const nano = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", suffixLength);
  const randomPart = nano();
  return `${base}-${randomPart}`;
}