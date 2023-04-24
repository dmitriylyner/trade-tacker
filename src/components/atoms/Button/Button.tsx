import Link from "next/link";
import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode | string
    to: string
}

const Button: React.FC<Props> = ({
    to,
    children
}) => {
    return (
        <Link
            className="inline-block shadow-md max-w-xl rounded-sm bg-main-teal py-4 px-12 text-slate-950 hover:bg-white/20"
            href={to}
            target="_blank"
        >
            <span className="font-bold text-slate-50 ">{children}</span>
        </Link>
    )
}


export function ButtonSecondary({
    children
}){
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



export default Button
