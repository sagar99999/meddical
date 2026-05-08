"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useEffect } from "react"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import Image from "next/image"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { createNews, deleteNewsById, updateNewsById } from "@/actions/news"
import { type BlogCategory } from "@/models/news"

export const formSchema = z.object({
    title: z.string().min(3, "News title must be at least 3 characters."),
    author: z.string().min(3, "News author name must be at least 3 characters."),
    description: z.string().min(10, "News description must be minimum 10 characters long."),
    slug: z.string(),
    image: z.string().min(3, "Image url is required."),
    views: z.coerce.number().int().nonnegative().optional().default(0),
    likes: z.coerce.number().int().nonnegative().optional().default(0),
    category: z.enum(['Surgery', 'Health Care', 'Medical', 'Professional']),
})

export type DashboardNewsUpdateFormProps = {
    id: string;
    title: string;
    author: string;
    description: string;
    image: string;
    category: BlogCategory;
    slug: string;
    views: number;
    likes: number;
}

// dashboard news update form
export default function DashboardNewsUpdateForm({ id, title, author, description, image, category, slug, views, likes }: DashboardNewsUpdateFormProps) {

    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

    // rhf with zod resolver and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            title,
            author,
            description,
            slug,
            image,
            views,
            likes,
            category
        }
    })

    // delete handler
    const deleteHandler = async () => {
        try {
            await deleteNewsById(id)
            toast.success("News delete successful")
            router.push("/dashboard/news")
        } catch (error: any) {
            console.log(error.message)
            toast.success("News delete failed")
        }
    }

    // submit handler
    const submitHandler = async (data: z.infer<typeof formSchema>) => {

        // check if the form has been changed
        if (title !== data.title || author !== data.author || description !== data.description || slug !== data.slug || image !== data.image || category !== data.category) {

            try {
                let formData: FormData | null = null;

                if (selectedImgFile) {
                    formData = new FormData()
                    formData.append("image", selectedImgFile)
                }

                const result = await updateNewsById(id, data, formData)

                if (!result.success) {
                    toast.error("News update failed")
                    return;
                }

                toast.success("News update successful")

            } catch (error: any) {
                console.log(error.message)
                toast.success("News update failed")
            } finally {
                router.push("/dashboard/news")
            }
        }
    }

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (previewUrl?.startsWith('blob:')) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <form onSubmit={form.handleSubmit(submitHandler)}>
            <FieldGroup>

                {/* News Profile picture */}
                <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="news-profile-pic">
                                News Profile picture
                            </FieldLabel>
                            <div className="relative h-50! w-50! mb-4 rounded-sm overflow-hidden">
                                <Image src={previewUrl || image} alt={title} fill sizes="20rem" className="object-cover object-center" />
                            </div>
                            <Input accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                id="news-profile-pic"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    // Clean up old blob URL
                                    if (previewUrl && previewUrl.startsWith('blob:')) {
                                        URL.revokeObjectURL(previewUrl);
                                    }

                                    if (file) {
                                        const url = URL.createObjectURL(file);
                                        field.onChange(url);
                                        setSelectedImgFile(file)
                                        setPreviewUrl(url);
                                    } else {
                                        field.onChange(undefined);
                                        setSelectedImgFile(null)
                                        setPreviewUrl(null);
                                    }
                                }}

                                type="file" className="w-50! cursor-pointer" />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Title */}
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="title">
                                Title
                            </FieldLabel>
                            <Input
                                {...field}
                                id="title"
                                aria-invalid={fieldState.invalid}
                                placeholder="News title"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Author */}
                <Controller
                    name="author"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="author">
                                Author
                            </FieldLabel>
                            <Input
                                {...field}
                                id="author"
                                aria-invalid={fieldState.invalid}
                                placeholder="News author"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Description */}
                <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="description">
                                Description
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="description"
                                aria-invalid={fieldState.invalid}
                                placeholder="News description"
                                autoComplete="off"
                                className="py-4 ps-4 h-50 resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Category */}
                <Controller
                    name="category"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="category">
                                Category
                            </FieldLabel>

                            <Select aria-invalid={fieldState.invalid} autoComplete="off"
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger id="category" className="w-full py-7! ps-4! cursor-pointer">
                                    <SelectValue placeholder="Select news category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Medical Departments</SelectLabel>
                                        <SelectItem value="Surgery">Surgery</SelectItem>
                                        <SelectItem value="Health Care">Health Care</SelectItem>
                                        <SelectItem value="Medical">Medical</SelectItem>
                                        <SelectItem value="Professional">Professional</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

            </FieldGroup>
            <div className="my-4 flex justify-between">
                <div className="flex gap-3">
                    <Button variant={"outline"} className="p-5! cursor-pointer" onClick={() => form.reset()}>Reset</Button>
                    <Button variant={"destructive"} className="p-5! cursor-pointer" onClick={() => deleteHandler()}>Delete</Button>
                </div>
                <Button disabled={form.formState.isSubmitting} className="p-5! bg-brand-1 cursor-pointer rounded-sm!" type="submit">Update</Button>
            </div>
        </form>
    )
}

// dashboard news create form
export function DashboardNewsCreateForm() {

    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

    // rhf with zod resolver and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            title: "",
            author: "",
            description: "",
            slug: "",
            image: "",
            views: 0,
            likes: 0,
            category: "Surgery"
        }
    })

    // submit handler
    const submitHandler = async (data: z.infer<typeof formSchema>) => {
        try {
            let formData: FormData | null = null;

            if (selectedImgFile) {
                formData = new FormData()
                formData.append("image", selectedImgFile)
            }

            const result = await createNews(data, formData)

            if (!result.success) {
                toast.error("News create failed")
                return;
            }

            toast.success("News create successful")
            router.push("/dashboard/news")
        } catch (error: any) {
            console.log(error.message)
            toast.success("News create failed")
        }
    }

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (previewUrl?.startsWith('blob:')) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <form onSubmit={form.handleSubmit(submitHandler)}>
            <FieldGroup>

                {/* News Profile picture */}
                <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="news-profile-pic">
                                News Profile picture
                            </FieldLabel>
                            <div className="relative h-50! w-50! mb-4 rounded-sm overflow-hidden">
                                {
                                    previewUrl ? <Image src={previewUrl!} alt={"doctor profile"} fill sizes="20rem" className="object-cover object-center" /> : <div className="size-full items-center justify-center flex bg-[#f1f1f1]">
                                        <span className="text-sm">Select News Image</span>
                                    </div>
                                }

                            </div>
                            <Input accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                id="news-profile-pic"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    // Clean up old blob URL
                                    if (previewUrl && previewUrl.startsWith('blob:')) {
                                        URL.revokeObjectURL(previewUrl);
                                    }

                                    if (file) {
                                        const url = URL.createObjectURL(file);
                                        field.onChange(url);
                                        setSelectedImgFile(file)
                                        setPreviewUrl(url);
                                    } else {
                                        field.onChange(undefined);
                                        setSelectedImgFile(null)
                                        setPreviewUrl(null);
                                    }
                                }}

                                type="file" className="w-50! cursor-pointer" />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Title */}
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="title">
                                Title
                            </FieldLabel>
                            <Input
                                {...field}
                                id="title"
                                aria-invalid={fieldState.invalid}
                                placeholder="News title"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Author */}
                <Controller
                    name="author"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="author">
                                Author
                            </FieldLabel>
                            <Input
                                {...field}
                                id="author"
                                aria-invalid={fieldState.invalid}
                                placeholder="News author"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Description */}
                <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="description">
                                Description
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="description"
                                aria-invalid={fieldState.invalid}
                                placeholder="News description"
                                autoComplete="off"
                                className="py-4 ps-4 h-50 resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* News Category */}
                <Controller
                    name="category"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="category">
                                Category
                            </FieldLabel>

                            <Select aria-invalid={fieldState.invalid} autoComplete="off"
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger id="category" className="w-full py-7! ps-4! cursor-pointer">
                                    <SelectValue placeholder="Select news category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Medical Departments</SelectLabel>
                                        <SelectItem value="Surgery">Surgery</SelectItem>
                                        <SelectItem value="Health Care">Health Care</SelectItem>
                                        <SelectItem value="Medical">Medical</SelectItem>
                                        <SelectItem value="Professional">Professional</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            <div className="my-4 flex justify-end">
                <Button disabled={form.formState.isSubmitting} className="p-5! bg-brand-1 cursor-pointer rounded-sm!" type="submit">Create</Button>
            </div>
        </form>
    )
}