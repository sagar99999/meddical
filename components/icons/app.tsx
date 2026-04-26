export function BandAidIcon({ styleClass }: { styleClass?: string }) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className={`bi ${styleClass || "size-5"} bi-linkedin`} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M184.57,128l27.71-27.72a40,40,0,1,0-56.56-56.56L128,71.43,100.28,43.72a40,40,0,1,0-56.56,56.56L71.43,128,43.72,155.72a40,40,0,1,0,56.56,56.56L128,184.57l27.72,27.71a40,40,0,1,0,56.56-56.56ZM167,55A24,24,0,1,1,201,89l-27.72,27.72L139.31,82.75Zm-5.09,73L128,161.94,94.06,128,128,94.06ZM55,89h0A24,24,0,1,1,89,55l27.72,27.72L82.75,116.69ZM89,201A24,24,0,1,1,55,167l27.72-27.72,33.94,33.94Zm112,0A24,24,0,0,1,167,201l-27.72-27.72,33.94-33.94L201,167A24,24,0,0,1,201,201Zm-85-73a12,12,0,1,1,12,12A12,12,0,0,1,116,128Z"></path></svg>
}

export function QuoteIcon({ styleClass }: { styleClass?: string }) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className={`${styleClass || "size-5"}`} viewBox="0 0 45 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.25 0V18.75H36.5625L30 30H38.4375L45 18.75V0H26.25ZM0 18.75H10.3125L3.75 30H12.1875L18.75 18.75V0H0V18.75Z" />
    </svg>
}