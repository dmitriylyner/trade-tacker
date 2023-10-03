import { FC, ReactNode } from 'react'
import Link from "next/link";
import IconLogoWhite from '~/images/svgs/icon-logo-white.svg'

import { NextAuthProvider } from '../providers';
// import { authOptions } from '~/server/auth';
// import { prisma as db } from '~/server/db';
// import { notFound } from 'next/navigation';
// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";

import AuthShowcase from '~/components/molecules/AuthShowcase';
import "~/styles/globals.css";

import { api } from "~/utils/api";


interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {

    // const user = await getServerSession(authOptions)
    // if(!user) return notFound()

    // const apiKey = await db.

    return (
        <NextAuthProvider>
            <body className="flex">
                <header>
                    <nav
                        className="
                        flex
                        items-center
                        flex-col
                        w-56
                        px-4
                        text-lg text-gray-700
                        relative
                        z-10
                        h-[100vh]
                        bg-dashboard-pattern
                        bg-cover
                        bg-top
                        "
                    >
                        <div className="mt-4">
                            <IconLogoWhite width="10rem" height="5rem" />
                        </div>

                        <svg
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
                        </svg>
                    
                        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                            <ul
                            className="
                                pt-4
                                text-base text-gray-700
                                md:flex
                                flex-col
                                items-start
                                md:justify-between 
                                md:pt-0
                                mt-8"
                                

                            >
                            <li className="p-2">
                                <Link
                                className="text-slate-50 block hover:text-main-color-400 text-[var(--dark-1)] transition-colors"
                                href="overview">Overview</Link>
                            </li>
                            <li className="p-2">
                                <Link className="text-slate-50  block hover:text-main-color-400 transition-colors" href="journal">Journal</Link>
                            </li>
                            <li className="p-2">
                                <Link className="text-slate-50  block hover:text-main-color-400 transition-colors" href="progress">Progress</Link>
                            </li>
                            <li className="p-2">
                                <Link className="text-red-600  block hover:text-main-color-400 transition-colors" href="/">HOME</Link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </header>

            <main>
                <AuthShowcase />
                {children}
            </main>
            </body>
        </NextAuthProvider>
    )
}

export default api.withTRPC(Layout);


