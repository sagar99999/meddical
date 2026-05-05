export default function Form1() {
    return (
        <form className='bg-brand-1 rounded-sm overflow-hidden text-white'>
            <div className='flex'>
                <input className='basis-[50%] font-light p-4 border-white border-r placeholder:text-white tracking-wider' type="text" placeholder='Name' />
                <select className="basis-[50%] font-light p-4 border-white placeholder:text-white tracking-wider" name="" defaultValue={""} id="">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex">
                <input className='basis-[50%] border-t border-r font-light p-4 placeholder:text-white tracking-wider' type="email" placeholder='Email' />
                <input className='basis-[50%] border-t font-light p-4 placeholder:text-white tracking-wider' type="text" placeholder='Phone' />
            </div>

            <div className="flex">
                <select className="basis-[50%] border-t font-light p-4 border-white border-r placeholder:text-white tracking-wider" name="" defaultValue={""} id="">
                    <option value="male">Date</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <select className="basis-[50%] font-light p-4 border-white border-t placeholder:text-white tracking-wider" name="" defaultValue={""} id="">
                    <option value="male">Time</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="flex">
                <select className="basis-[50%] border-t font-light p-4 border-white border-r placeholder:text-white tracking-wider" name="" defaultValue={""} id="">
                    <option value="male">Doctor</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <select className="basis-[50%] font-light p-4 border-white border-t placeholder:text-white tracking-wider" name="" defaultValue={""} id="">
                    <option value="male">Depatment</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <textarea placeholder='Message...' className='resize-none p-4 h-60 w-full border-white border-t placeholder:text-white tracking-wider' />
            <button className='p-3 border-none outline-0 py-4 cursor-pointer text-black bg-brand-2 w-full placeholder:text-white tracking-wider' type="submit">SUBMIT</button>
        </form>
    )
}
