import Link from "next/link";
import React, { ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils'

export const buttonVariants = cva(
    "text-slate-50 font-bold py-2 px-6 sm:py-2 lg:py-3 lg:px-10 xl:py-4 md:px-8 xl:px-16 relative block after:border after:absolute  after:w-[10px] after:h-[10px] lg:after:w-[13px] lg:after:h-[13px] xl:after:w-[15px] xl:after:h-[15px] after:bg-transparent after:right-[5px] after:bottom-[5px] after:border-transparent after:duration-500 text-sm md:text-base",
    {
        variants: {
            variant: {
                // default: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300",
                // default: "btn-animate  bg-color-500 font-bold border border-white hover:bg-[var(--dark-1)] transition-colors",
                default: "bg-gradient-to-r from-[#119B81] via-[#28866B] to-[#00805B] hover:bg-gradient-to-br focus:ring focus:outline-none focus:ring-green-300 border border-white transition-all",
                main: " bg-gradient-to-r from-[#119B81] via-[#28866B] to-[#00805B] hover:bg-gradient-to-br btn-animate transition-all",
                mainWhite: " bg-white btn-animate text-slate-950",
                whiteMain: "btn-animate-lg text-lg md:w-3/4 w-full mr-4 md:ml-4 after:border-r-color-400 after:border-r-2 after:border-b-2 border-2 after:border-b-color-400 border-color-400 text-color-400",
                whiteMainLarge: "btn-animate-lg mx-6 md:mx-[unset] xl:px-24  md:text-xl lg:text-2xl after:border-r-color-400 after:border-r-[3px] after:border-b-[3px] border-[3px] after:border-b-color-400 border-color-400 text-color-400",
                whiteMainSmall: "btn-animate-sm mx-16 md:mx-[unset] xl:px-10 xl:py-3 after:border-r-color-400 after:border-r-2 after:border-b-2 border-2 after:border-b-color-400 border-color-400 text-color-400"
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

type ButtonDisplay = "primary" | "secondary"

interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children?: ReactNode | string
    display: ButtonDisplay
}

interface LinkButtonProps extends ButtonProps {
    to: string | object
    target?: "_blank" | "_self" | "_parent" | "_top"
    scroll?: boolean
}

interface ExternalBtnProps extends ButtonProps {
    to: string 
}


const getBtnDisplay = (display?: ButtonDisplay) => {
    switch(display){
        case "primary": 
            return "block sm:inline-block text-center"
        case "secondary": 
            return "block text-center"
        default:
            return "inline-block"
    }
}

function ButtonLink ({
    children,
    to,
    display,
    variant,
    ...props
}:LinkButtonProps) {

    return (
        <Link
            className={`
              
                ${getBtnDisplay(display)}
            `}
            href={to}
            {...props}
        >
            <span className={cn(buttonVariants({ variant }))}>
                {children}
            </span>
        </Link>
    )
}

export function ExternalButtonLink ({
    children,
    to,
    display,
    variant,
    ...props
}:ExternalBtnProps) {

    return (
        <a
            className={`
              
                ${getBtnDisplay(display)}
            `}
            href={to}
            target="_blank"
            {...props}
        >
            <span className={cn(buttonVariants({ variant }))}>
                {children}
            </span>
        </a>
    )
}

export default ButtonLink
