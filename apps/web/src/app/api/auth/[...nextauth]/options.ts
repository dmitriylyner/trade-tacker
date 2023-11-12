import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [],
    // pages: {
    //     signIn: "/signin"
    // },
    callbacks:{
        async signIn({user, account, profile, email, credentials}) { // eslint-disable-line @typescript-eslint/require-await
            return '/dashboard'
        }
    }

}