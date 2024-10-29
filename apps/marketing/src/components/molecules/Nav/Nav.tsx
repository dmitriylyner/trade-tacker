import { useState } from 'react'
import IconLogo from '~/components/atoms/IconLogo'
import Link from "next/link";
import DialogNav from '~/components/molecules/DialogNav'


export default function Nav(){

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
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
                    <IconLogo className="md:p-4 w-[85px] md:w-[150px]"/>

                    <div className='flex gap-5 md:hidden'>
                        <DialogNav />
                        <Link
                            className="px-6 py-2 block text-xs sm:text-base hover:bg-color-500 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                            href="/?join=true">Sign Up →
                        </Link>
                    </div>

                    
                    <div className={`md:flex flex-grow w-full md:items-center md:w-auto sm:w-auto sm:items-center sm:justify-end ${isOpen ? 'flex bg-black/75' : 'hidden'}`} id="menu">
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
                                className="md:px-6 md:py-2 block hover:bg-color-500 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                                href="/?join=true">Sign Up →</Link>
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