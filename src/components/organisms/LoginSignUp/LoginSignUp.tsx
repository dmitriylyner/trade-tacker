import {useState} from 'react'
import Tabs from "~/components/molecules/Tabs"


export default function LoginSignUp(){

    const [controlledValue, setControlledValue] = useState("tab1")

    return(
            <Tabs defaultValue="tab1" value={controlledValue} onValueChange={(value) => setControlledValue(value)}>
                <Tabs.List className="grid w-full grid-cols-2">
                    <Tabs.Trigger value="tab1" className="rounded-sm py-2 text-slate-950 data-[state='active']:bg-main-color-400 data-[state='active']:text-white data-[state='active']:shadow-sm data-[state='active']:font-medium">
                        <span>Sign In</span>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab2" className="rounded-sm py-2 text-slate-950 data-[state='active']:bg-main-color-400 data-[state='active']:text-white data-[state='active']:shadow-sm data-[state='active']:font-medium">
                        <span>Sign Up</span>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <section className="mt-4">
                        <h1 className="text-2xl mb-4">Welcome back</h1>
                        <fieldset className="Fieldset">
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
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Save changes</button>
                        </div>
                        <p className="text-center">
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
                        <fieldset className="Fieldset">
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
                        <fieldset className="Fieldset">
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

                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Join →</button>
                        </div>
                    </section>
                </Tabs.Content>
            </Tabs>
    )
}