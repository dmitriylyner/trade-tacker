'use client'

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
// import { Button } from './Button'
// import { toast } from './toast'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

// interface SignInButtonProps {}

const SignInButton: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google')
    } catch (error) {
    //   toast({
    //     title: 'Error signing in',
    //     message: 'Please try again later.',
    //     type: 'error',
    //   })
    console.log("error signing in", error)
    }
  }

  return (
    // <button className="bg-orange-600 p-4 m-4" onClick={signInWithGoogle}>
    //   SIGN IN WITH GOOGLE
    // </button>
    <button>signin - change in SignInButton</button>
  )
}

export default SignInButton