type TitleSectionProps = {
    title: string,
    subtitle: string
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
    return (
        <>
            <p className="uppercase text-center text-brand text-lg font-bold tracking-wider mb-2">
                {title}
            </p>
            <h2 className="text-brand-1 text-4xl text-center font-semibold mb-15 tracking-wide">
                {subtitle}
            </h2>
        </>
    )
}
