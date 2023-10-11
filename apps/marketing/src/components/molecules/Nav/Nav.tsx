import { useState } from 'react'
import IconLogo from '~/components/atoms/IconLogo'
import Link from "next/link";
import DialogNav from '~/components/molecules/DialogNav'


export default function Nav(){

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            {/* <button className="fixed z-20 top-5 right-5 flex-col justify-center items-center lg:hidden flex mt-5 ml-5" onClick={handleClick}>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 translate-y-1' : 'translate-y-0.5'}`}></span>
            </button> */}
                <nav
                    className="
                            flex flex-wrap
                            items-center
                            justify-between
                            w-full
                            px-4
                            text-lg text-gray-700
                            relative
                            z-10
                            h-20
                            max-w-maximum min-w-minimum
                            m-auto
                        "
                        >
                    <IconLogo className="p-4"/>

                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg> */}

                    <div className='flex gap-5 md:hidden'>
                        <DialogNav />
                        <Link
                            className="px-6 py-2 block  text-base hover:bg-main-color-400 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                            href="/login">Sign Up →
                        </Link>
                    </div>

                    
                    <div className={`md:flex flex-grow w-full md:items-center md:w-auto sm:w-auto sm:items-center sm:justify-end ${isOpen ? 'flex bg-black/75' : 'hidden'}`} id="menu">
                    {/* <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu"> */}
                        <ul
                            className="
                            pt-4
                            text-base text-gray-700
                            md:flex
                            items-center
                            md:justify-between 
                            md:pt-0"
                        >
                            <li className="p-4">
                            <a className="block hover:text-main-color-400 transition-colors" href="#features">Features</a>
                            </li>
                            <li className="p-4">
                            <a className=" block hover:text-main-color-400 transition-colors" href="#plans">Pricing</a>
                            </li>
                            <li className="p-4">
                            <Link
                                className="md:px-6 md:py-2 block hover:bg-main-color-400 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                                href="/login">Sign Up →</Link>
                            </li>
                            <li className="p-4">
                            <a
                                className=" block hover:text-main-color-400 text-[var(--dark-1)] transition-colors"
                                href="https://app.tradetracker.ai/login">Log In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}