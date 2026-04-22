export default function ContactForm() {
    return (
        <div className='basis-150'>
            <p className='uppercase text-brand text-lg font-bold tracking-widest mb-2'>Get in touch</p>
            <h2 className='text-4xl font-semibold mb-9 tracking-wider'>Contact</h2>
            <form className='bg-brand-1 rounded-sm overflow-hidden text-white'>
                <div className='flex'>
                    <input className='font-light p-4 border-white border-r placeholder:text-white tracking-wider' type="text" placeholder='Name' />
                    <input className='font-light p-4 placeholder:text-white tracking-wider' type="email" placeholder='Email' />
                </div>
                <input className='font-light p-4 block border-white border-t w-full placeholder:text-white tracking-wider' type="text" placeholder='Subject' />
                <textarea placeholder='Message...' className='resize-none p-4 h-60 w-full border-white border-t placeholder:text-white tracking-wider' />
                <button className='p-3 border-none outline-0 py-4 cursor-pointer text-black bg-brand-2 w-full placeholder:text-white tracking-wider' type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
