import {useState} from 'react'
import Tabs from "~/components/molecules/Tabs"
import IconLogo from '~/components/atoms/IconLogo'
import { useRouter } from 'next/navigation'
import SignInButton from '~/components/molecules/SignInButton/SignInButton'

export default function LoginSignUp(){

    const [controlledValue, setControlledValue] = useState("tab1")
    const router = useRouter();

    return(
            <Tabs defaultValue="tab1" value={controlledValue} onValueChange={(value) => setControlledValue(value)}>
                <div className="flex justify-between  items-center">
                    <div className="h-28 flex justify-center"> 
                        <IconLogo />
                    </div>
                    <Tabs.List >
                        <Tabs.Trigger value="tab1" className="text-lg h-14 p-4 text-slate-950 data-[state='active']:underline data-[state='active']:text-main-color-400 data-[state='active']:font-medium ">
                            <span>Login</span>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab2" className="text-lg h-14 p-4 text-slate-950 data-[state='active']:underline data-[state='active']:text-main-color-400 data-[state='active']:font-medium ">
                            <span>Sign Up</span>
                        </Tabs.Trigger>
                    </Tabs.List>
                </div>
                <Tabs.Content value="tab1">
                    <section className="mt-4">
                        <h1 className="text-2xl mb-4">Welcome back</h1>
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


                        <SignInButton />


                        <p className="text-center mt-8">
                            Don't have an account? &nbsp;
                            <button onClick={() => setControlledValue("tab2")} className="underline decoration-inherit text-color-500">
                                Sign up here
                            </button>
                        </p>
                    </section>
                </Tabs.Content>

                <Tabs.Content value="tab2">
                    <section className="mt-4">
                        <h1 className="text-2xl">Create Account</h1>
                        <p className="mb-4 text-gray-600">Let's get started with your 30 day free trial.</p>                    
                        <fieldset className="Fieldset mb-2">
                            <label className="Label" htmlFor="Name">
                            Name
                            </label>
                            <input
                                id="Name"
                                type="text"
                                placeholder="Name"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </fieldset>
                        <fieldset className="Fieldset mb-2">
                            <label className="Label" htmlFor="emailRegister">
                            Email
                            </label>
                            <input
                                id="emailRegister"
                                type="email"
                                placeholder="Email"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="passRegister">
                            Password
                            </label>
                            <input
                                id="passRegister"
                                type="password"
                                placeholder="password"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </fieldset>

                        <button className="mt-8 block text-center w-full shadow-md max-w-xl rounded-sm bg-main-color-400 py-4 px-12 text-slate-50 text-lg hover:bg-color-500 transition-colors " onClick={() => router.push('/dashboard/overview')}>Register →</button>
                        
                        <p className="text-center mt-8">
                            Already have an account? &nbsp;
                            <button onClick={() => setControlledValue("tab1")} className="underline decoration-inherit text-color-500">
                                Login here
                            </button>
                        </p>
                    </section>
                </Tabs.Content>
            </Tabs>
    )
}