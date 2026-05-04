"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useEffect } from "react"
import {
    Field,
    FieldDescription,
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
import { updateServiceById, deleteServiceById, createService } from "@/actions/service"
import { type ServiceCategory } from "@/models/services"

export const formSchema = z.object({
    title: z.string().min(3, "Service title must be at least 3 characters."),
    highlights: z.string().min(3, "Service hightlights must be comma saperated."),
    description: z.string().min(10, "Service description must be minimum 10 characters long."),
    slug: z.string(),
    image: z.string().min(3, "Service url is required."),
    category: z.enum(["Free Checkup", "Cardiogram", "Dna Test", "Blood Bank", "Dermalogy", "Orthopedic"]),
})

export type DashboardServiceUpdateFormProps = {
    id: string;
    title: string;
    highlights: string;
    description: string;
    image: string;
    category: ServiceCategory;
    slug: string;
}

// dashboard news update form
export default function DashboardServiceUpdateForm({ id, title, highlights, description, image, category, slug }: DashboardServiceUpdateFormProps) {

    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

    // rhf with zod resolver and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            title,
            description,
            image,
            category,
            slug,
            highlights
        }
    })

    // delete handler
    const deleteHandler = async () => {
        try {
            await deleteServiceById(id)
            toast.success("Service delete successful")
            router.push("/dashboard/services")
        } catch (error: any) {
            console.log(error.message)
            toast.success("Services delete failed")
        }
    }

    // submit handler
    const submitHandler = async (data: z.infer<typeof formSchema>) => {

        // check if the form has been changed
        if (title !== data.title || description !== data.description || slug !== data.slug || image !== data.image || category !== data.category || highlights !== data.highlights) {

            try {
                let formData: FormData | null = null;

                if (selectedImgFile) {
                    formData = new FormData()
                    formData.append("image", selectedImgFile)
                }

                const result = await updateServiceById(id, data, formData)

                if (!result.success) {
                    toast.error("Service update failed")
                    return;
                }

                toast.success("Service update successful")

            } catch (error: any) {
                console.log(error.message)
                toast.success("service update failed")
            } finally {
                router.push("/dashboard/services")
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

                {/* Service Profile picture */}
                <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="service-profile-pic">
                                Service Profile picture
                            </FieldLabel>
                            <div className="relative h-50! w-50! mb-4 rounded-sm overflow-hidden">
                                <Image src={previewUrl || image} alt={title} fill sizes="20rem" className="object-cover object-center" />
                            </div>
                            <Input accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                id="service-profile-pic"
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

                {/* Service Title */}
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
                                placeholder="Service title"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Service Description */}
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
                                placeholder="Service description"
                                autoComplete="off"
                                className="py-4 ps-4 h-50 resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Service Category */}
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
                                    <SelectValue placeholder="Select service category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Service Category</SelectLabel>
                                        <SelectItem value="Free Checkup">Free Checkup</SelectItem>
                                        <SelectItem value="Cardiogram">Cardiogram</SelectItem>
                                        <SelectItem value="Dna Test">Dna Test</SelectItem>
                                        <SelectItem value="Blood Bank">Blood Bank</SelectItem>
                                        <SelectItem value="Dermalogy">Dermalogy</SelectItem>
                                        <SelectItem value="Orthopedic">Orthopedic</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Service Highlights */}
                <Controller
                    name="highlights"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="highlights">
                                Highlights
                            </FieldLabel>
                            <Input
                                {...field}
                                id="highlights"
                                aria-invalid={fieldState.invalid}
                                placeholder="Service highlights eg: good care, great service"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

            </FieldGroup>
            <div className="my-4 flex justify-between">
                <div className="flex gap-3">
                    <Button type="button" variant={"outline"} className="p-5! cursor-pointer" onClick={() => form.reset()}>Reset</Button>
                    <Button type="button" variant={"destructive"} className="p-5! cursor-pointer" onClick={() => deleteHandler()}>Delete</Button>
                </div>
                <Button disabled={form.formState.isSubmitting} className="p-5! bg-brand-1 cursor-pointer rounded-sm!" type="submit">Update</Button>
            </div>
        </form>
    )
}

// dashboard service create form
export function DashboardServiceCreateForm() {

    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

    // rhf with zod resolver and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            title: "",
            description: "",
            image: "",
            category: "Free Checkup",
            slug: "",
            highlights: ""
        }
    })

    // submit handler
    const submitHandler = async (data: z.infer<typeof formSchema>) => {
        console.log(selectedImgFile)
        try {
            let formData: FormData | null = null;

            if (selectedImgFile) {
                formData = new FormData()
                formData.append("image", selectedImgFile)
            }

            const result = await createService(data, formData)

            if (!result.success) {
                toast.error("Service create failed")
                return;
            }

            toast.success("Service create successful")
            router.push("/dashboard/services")
        } catch (error: any) {
            console.log(error.message)
            toast.success("Service create failed")
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


                {/* Service Profile picture */}
                <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="service-pic">
                                Service Profile picture
                            </FieldLabel>
                            <div className="relative h-50! w-50! mb-4 rounded-sm overflow-hidden">
                                {
                                    previewUrl ? <Image src={previewUrl!} alt={"doctor profile"} fill sizes="20rem" className="object-cover object-center" /> : <div className="size-full items-center justify-center flex bg-[#f1f1f1]">
                                        <span className="text-sm">Select Service Image</span>
                                    </div>
                                }

                            </div>
                            <Input accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                id="service-pic"
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

                {/* Service Title */}
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
                                placeholder="Service title"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Service Description */}
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
                                placeholder="Service description"
                                autoComplete="off"
                                className="py-4 ps-4 h-50 resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Service Category */}
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
                                    <SelectValue placeholder="Select service category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Service Category</SelectLabel>
                                        <SelectItem value="Free Checkup">Free Checkup</SelectItem>
                                        <SelectItem value="Cardiogram">Cardiogram</SelectItem>
                                        <SelectItem value="Dna Test">Dna Test</SelectItem>
                                        <SelectItem value="Blood Bank">Blood Bank</SelectItem>
                                        <SelectItem value="Dermalogy">Dermalogy</SelectItem>
                                        <SelectItem value="Orthopedic">Orthopedic</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Service Highlights */}
                <Controller
                    name="highlights"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="highlights">
                                Highlights
                            </FieldLabel>
                            <Input
                                {...field}
                                id="highlights"
                                aria-invalid={fieldState.invalid}
                                placeholder="Service highlights eg: good care, great service"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
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