import { ReactNode } from 'react'


function Card({ 
    children 
}: {children: ReactNode}){
    return (
        <section className="flex flex-col items-center m-auto mt-24 lg:mt-auto mx-6 min-w-max md:mx-auto max-w-3xl w-full bg-slate-50 p-8 py-10 rounded-lg drop-shadow-lg lg:w-1/3 lg:min-w-[550px] ">
            {children}
        </section>
    )
}

export default Card