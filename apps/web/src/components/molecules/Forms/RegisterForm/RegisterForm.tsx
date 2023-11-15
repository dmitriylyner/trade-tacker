"use client"

import { useState } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from '~/components/ui/Loader';
import CloseCircle from '~/images/svgs/close-circle-icon.svg'
import CheckBox from '~/images/svgs/checkbox-icon.svg'
import { Button } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'


type Inputs = {
    email: string
    password: string
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(18).required(),
  });

export default function RegisterForm(){

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm<Inputs>({resolver: yupResolver(schema)});


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [checkEmail, setCheckEmail] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true)
        try{
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(res.ok){
                // redirect
                // signIn()
                setCheckEmail(true)
                // reset();
            } else{
                // console.log({res})
                setIsLoading(false)
                reset()
                setErrorMsg(res.statusText)
            }
        } catch(error){
            // console.error(error)
            reset()
        }
    }

    return(<>
        {!checkEmail && 
            <form
                name="Register" 
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-5 w-3/4'
            >
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                        required
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        {...register('email', {required: true, pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }})} 
                        id='email' 
                        type='email'
                        aria-label="Enter Email"
                    />
                    <p>{errors.email?.message}</p>

                </div>



                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor='password'>Password</Label>
                    <Input 
                        required
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        {...register('password', {required: true})}
                        id='password' 
                        type='password'
                        aria-label="Enter Password"
                     />
                    {errors.password?.message && <p><CloseCircle className="inline mb-[4px]"/> {errors.password?.message}</p>}

                </div>

            {!!errorMsg ? <p className="text-center"><CloseCircle className="inline mb-[4px]"/>{errorMsg}</p> : null}

            {
                isLoading ?
                        <Loader/>
                    :
                        
                        <Button type="submit" className="w-full" variant="default" size="lg">Register →</Button>
            }

        </form>}

        {checkEmail && <p><CheckBox />Success! Please check your email to confirm you account.</p>}

        
    </>)
}