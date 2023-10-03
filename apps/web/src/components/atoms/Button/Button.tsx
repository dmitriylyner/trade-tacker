import Link from "next/link";
import React, { ReactNode } from 'react'


type ButtonWidth = "full"
type ButtonPos = "center"

interface Props {
    children?: ReactNode | string
    position?: ButtonPos
    width?: ButtonWidth 
    to: string
}

const getBtnWidth = (width?: ButtonWidth) => {
    switch(width){
        case "full": 
            return "block text-center"
        default:
            return "inline-block"
    }
}

const Button: React.FC<Props> = ({
    to,
    position,
    width,
    children
}) => {

   
    return (
        <Link
            className={`shadow-md max-w-xl rounded-sm bg-main-color-400 py-4 px-12 text-slate-950 hover:bg-color-500 transition-colors 
                ${position === 'center' ? "relative left-1/2 -translate-x-2/4 " : ''}
                ${getBtnWidth(width)}
            `}
            href={to}
            target="_blank"
        >
            <span className="font-bold text-slate-50 ">{children}</span>
        </Link>
    )
}


export function ButtonSecondary({ children }: {children: string } ){
    return (
        <Link
            className="inline-block shadow-md max-w-xl rounded-sm  py-4 px-12 text-slate-950 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
        >
            <span className="font-bold text-slate-50 ">{children}</span>
        </Link>
    )
}
   // ${width === 'full' ? "block text-center" : 'inline-block '}


export default Button
