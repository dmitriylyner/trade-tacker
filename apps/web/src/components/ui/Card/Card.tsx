import { ReactNode } from 'react'
import IconLogo from '~/components/atoms/IconLogo'


function Card({ 
    children 
}: {children: ReactNode}){
    return (
        <section className="flex flex-col items-center m-auto mx-6 min-w-max md:mx-auto max-w-3xl w-full bg-slate-50 p-8 py-10 rounded-lg drop-shadow-lg lg:w-1/3 lg:min-w-[550px] ">
            {children}
            <IconLogo className="relative mt-8 scale-[0.7]"/>
        </section>
    )
}

export default Card