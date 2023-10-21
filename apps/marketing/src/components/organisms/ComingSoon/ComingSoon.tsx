import {useState} from 'react'
// import Tabs from "~/components/molecules/Tabs"
import IconLogo from '~/components/atoms/IconLogo'
import { useRouter } from 'next/navigation'
// import SignInButton from '~/components/molecules/SignInButton/SignInButton'

export default function ComingSoon(){

    const [controlledValue, setControlledValue] = useState("tab1")
    const router = useRouter();

    return(
               
                <div >
                    <section className="mt-4">
                        <h1 className="text-2xl mb-4">Sign Up</h1>
                        <fieldset className="Fieldset mb-2">
                            <label className="Label" htmlFor="email">
                            Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="password">
                            Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="password"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </fieldset>
                        
                        <button 
                            className="mt-8 block text-center w-full shadow-md max-w-xl rounded-sm bg-main-color-400 py-4 px-12 text-slate-50 text-lg hover:bg-color-500 transition-colors "
                        >
                            Login →
                        </button>


                        {/* <SignInButton /> */}


                        <p className="text-center mt-8">
                            Already have an account? &nbsp;
                            <button onClick={() => setControlledValue("tab2")} className="underline decoration-inherit text-color-500">
                                Sign In Here
                            </button>
                        </p>
                    </section>
                </div>
    )
}