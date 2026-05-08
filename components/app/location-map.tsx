export default function LocationMap() {
    return (
        <div className="p-5 pt-15">
            <div className='max-w-340 mx-auto'>
                <iframe
                    className="rounded-sm"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=27.7011659,85.3211359&z=17&output=embed"
                />
            </div>
        </div>
    )
}
