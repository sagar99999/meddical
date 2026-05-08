"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { type Department } from "@/models/doctors"
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
import { deleteDoctorById, updateDoctorById, createDoctor } from "@/actions/doctor"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const formSchema = z.object({
    name: z.string().min(3, "Name of the doctor must be at least 3 characters."),
    department: z.enum([
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
    ]),
    description: z.string().min(10, "Profile description must be minimum 10 characters long."),
    slug: z.string(),
    image: z.string().min(3, "Image url is required."),
    socialLinks: z.object({
        facebook: z.string(),
        linkedin: z.string(),
        instagram: z.string()
    })
})

export type DashboardDoctorUpdateFormProps = {
    id: string;
    name: string;
    department: Department;
    description: string;
    slug: string;
    image: string;
    socialLinks: {
        facebook: string | "";
        linkedin: string | "";
        instagram: string | ""
    };
}

// dashboard doctor update form
export default function DashboardDoctorUpdateForm({ id, name, department, description, slug, image, socialLinks }: DashboardDoctorUpdateFormProps) {

    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

    // rhf with zod resolver and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            name,
            department,
            description,
            socialLinks,
            slug,
            image
        }
    })

    // delete handler
    const deleteHandler = async () => {
        try {
            await deleteDoctorById(id)
            toast.success("Profile delete successful")
            router.push("/dashboard/doctors")
        } catch (error: any) {
            console.log(error.message)
            toast.success("Profile delete failed")
        }
    }

    // submit handler
    const submitHandler = async (data: z.infer<typeof formSchema>) => {

        // check if the form has been changed
        if (name !== data.name || department !== data.department || description !== data.description || slug !== data.slug || image !== data.image || socialLinks.facebook !== data.socialLinks.facebook || socialLinks.instagram !== data.socialLinks.instagram || socialLinks.linkedin !== data.socialLinks.linkedin) {

            try {
                let formData: FormData | null = null;

                if (selectedImgFile) {
                    formData = new FormData()
                    formData.append("image", selectedImgFile)
                }

                const result = await updateDoctorById(id, data, formData)

                if (!result.success) {
                    toast.error("Profile update failed")
                    return;
                }

                toast.success("Profile update successful")

            } catch (error: any) {
                console.log(error.message)
                toast.success("Profile update failed")
            } finally {
                router.push("/dashboard/doctors")
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

                {/* Doctor's Profile picture */}
                <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="doctor-profile-pic">
                                Doctor Profile picture
                            </FieldLabel>
                            <div className="relative h-50! w-50! mb-4 rounded-sm overflow-hidden">
                                <Image src={previewUrl || image} alt={name} fill sizes="20rem" className="object-cover object-center" />
                            </div>
                            <Input accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                id="doctor-profile-pic"
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
                {/* Doctor's Name */}
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="name">
                                Name
                            </FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                aria-invalid={fieldState.invalid}
                                placeholder="Doctor's name"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Profile slug */}
                <Controller
                    name="slug"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="slug">
                                Slug
                            </FieldLabel>
                            <Input
                                {...field}
                                id="slug"
                                readOnly
                                aria-invalid={fieldState.invalid}
                                placeholder="Profile slug"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Description */}
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
                                placeholder="Profile description"
                                autoComplete="off"
                                className="py-4 ps-4 h-50 resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Social Link Facebook */}
                <Controller
                    name="socialLinks.facebook"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="facebook">Facebook</FieldLabel>
                            <Input
                                {...field}
                                id="facebook"
                                aria-invalid={fieldState.invalid}
                                placeholder="https://facebook.com/profile"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* Social Link Linkedin */}
                <Controller
                    name="socialLinks.linkedin"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="linkedin">LinkedIn</FieldLabel>
                            <Input
                                {...field}
                                id="linkedin"
                                aria-invalid={fieldState.invalid}
                                placeholder="https://linkedin.com/profile"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}

                />
                {/* Social Link Instagram */}
                <Controller
                    name="socialLinks.instagram"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="instagram">Instagram</FieldLabel>
                            <Input
                                {...field}
                                id="instagram"
                                aria-invalid={fieldState.invalid}
                                placeholder="https://instagram.com/profile"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* Department */}
                <Controller
                    name="department"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="department">
                                Department
                            </FieldLabel>

                            <Select aria-invalid={fieldState.invalid} autoComplete="off"
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger id="department" className="w-full py-7! ps-4! cursor-pointer">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Medical Departments</SelectLabel>
                                        <SelectItem value="Neurology">Neurology</SelectItem>
                                        <SelectItem value="Cardiology">Cardiology</SelectItem>
                                        <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                                        <SelectItem value="Dermatology">Dermatology</SelectItem>
                                        <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                                        <SelectItem value="Oncology">Oncology</SelectItem>
                                        <SelectItem value="Psychiatry">Psychiatry</SelectItem>
                                        <SelectItem value="Ophthalmology">Ophthalmology</SelectItem>
                                        <SelectItem value="Gastroenterology">Gastroenterology</SelectItem>
                                        <SelectItem value="Endocrinology">Endocrinology</SelectItem>
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
                <Button disabled={form.formState.isSubmitting} className="p-5! bg-brand-1 cursor-pointer rounded-sm!" type="submit">Submit</Button>
            </div>
        </form>
    )
}

// dashboard doctor create form
export function DashboardDoctorCreateForm() {

    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

    // rhf with zod resolver and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            name: "",
            department: "Neurology",
            description: "",
            socialLinks: { facebook: "", linkedin: "", instagram: "" },
            slug: "",
            image: ""
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

            const result = await createDoctor(data, formData)

            if (!result.success) {
                toast.error("Profile create failed")
                return;
            }

            toast.success("Profile create successful")

        } catch (error: any) {
            console.log(error.message)
            toast.success("Profile create failed")
        } finally {
            router.push("/dashboard/doctors")
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

                {/* Doctor's Profile picture */}
                <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="doctor-profile-pic">
                                Doctor Profile picture
                            </FieldLabel>
                            <div className="relative h-50! w-50! mb-4 rounded-sm overflow-hidden">
                                {
                                    previewUrl ? <Image src={previewUrl!} alt={"doctor profile"} fill sizes="20rem" className="object-cover object-center" /> : <div className="size-full items-center justify-center flex bg-[#f1f1f1]">
                                        <span className="text-sm">Select Profile Image</span>
                                    </div>
                                }

                            </div>
                            <Input accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                id="doctor-profile-pic"
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

                {/* Doctor's Name */}
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="name">
                                Name
                            </FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                aria-invalid={fieldState.invalid}
                                placeholder="Doctor's name"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Description */}
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
                                placeholder="Profile description"
                                autoComplete="off"
                                className="py-4 ps-4 h-50 resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Social Link Facebook */}
                <Controller
                    name="socialLinks.facebook"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="facebook">Facebook</FieldLabel>
                            <Input
                                {...field}
                                id="facebook"
                                aria-invalid={fieldState.invalid}
                                placeholder="https://facebook.com/profile"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* Social Link Linkedin */}
                <Controller
                    name="socialLinks.linkedin"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="linkedin">LinkedIn</FieldLabel>
                            <Input
                                {...field}
                                id="linkedin"
                                aria-invalid={fieldState.invalid}
                                placeholder="https://linkedin.com/profile"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}

                />
                {/* Social Link Instagram */}
                <Controller
                    name="socialLinks.instagram"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="instagram">Instagram</FieldLabel>
                            <Input
                                {...field}
                                id="instagram"
                                aria-invalid={fieldState.invalid}
                                placeholder="https://instagram.com/profile"
                                autoComplete="off"
                                className="py-7 ps-4"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* Department */}
                <Controller
                    name="department"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="department">
                                Department
                            </FieldLabel>

                            <Select aria-invalid={fieldState.invalid} autoComplete="off"
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger id="department" className="w-full py-7! ps-4! cursor-pointer">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Medical Departments</SelectLabel>
                                        <SelectItem value="Neurology">Neurology</SelectItem>
                                        <SelectItem value="Cardiology">Cardiology</SelectItem>
                                        <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                                        <SelectItem value="Dermatology">Dermatology</SelectItem>
                                        <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                                        <SelectItem value="Oncology">Oncology</SelectItem>
                                        <SelectItem value="Psychiatry">Psychiatry</SelectItem>
                                        <SelectItem value="Ophthalmology">Ophthalmology</SelectItem>
                                        <SelectItem value="Gastroenterology">Gastroenterology</SelectItem>
                                        <SelectItem value="Endocrinology">Endocrinology</SelectItem>
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