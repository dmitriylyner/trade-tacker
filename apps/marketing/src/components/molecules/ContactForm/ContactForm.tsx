import { useForm, ValidationError } from "@formspree/react";


export default function ContactForm() {

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

    return (
        <form onSubmit={(event) => void handleSubmit(event)} className="px-8 pt-8 pb-12 mb-20">
            <div className="mb-4">
            <h4 className="text-center leading-7 mb-8">Woah, you made it all the way down here. <br/> Reward yourself by signing up to our awesome newsletter.</h4>

            <input 
                id="email" 
                type="email"
                name="email" 
                placeholder="Email"
                className="flex h-10 w-full border shadow-md border-[#06BD9A] border-input bg-white px-3 py-2 text-sm ring-offset-background ring-main-color-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            
            {state.succeeded ?
                <div>
                    <p className="text-center mt-4">Thank you!</p>
                </div>
            :
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="block text-center mt-4 w-full border-color-500"
                >
                    <span className="underline">Join for secret sauce →</span>
                </button>
            }
            <ValidationError 
                errors={state.errors} 
                className="text-center italic mt-1"
            />

            </div>
        </form>
    )

}