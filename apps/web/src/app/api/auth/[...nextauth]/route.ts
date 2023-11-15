import { prisma } from '~/app/lib/prisma'
import { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from 'next/navigation';

type User = {
  id: number
  email: string,
  name?: string,
  active?: boolean,
  randomKey: string | number
}

function getGoogleCredentials(){
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET

  if(!clientId || clientId.length === 0){
    throw new Error('No clientID for google provider set')
  }

  if(!clientSecret || clientSecret.length === 0){
    throw new Error('No clientSecret for google provider set')
  }

  return { clientId, clientSecret }
}

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials){
              if (!credentials?.email || !credentials.password){
                return null
              }

              const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
              })

              if(!user){
                return null
              }

              if(!user.active){
                throw new Error('user is not active')
                // TODO: show error page that user is not active. Tell user to register account or send email again
              }

              const isPasswordValid = await compare(
                credentials.password, 
                user.password ?? ''
              )

              if(!isPasswordValid){
                return null
              }

              return {
                id: user.id + '',
                email: user.email,
                name: user.name,
                randomKey: 'Hey cool',
                active: user.active
              }
            }
        }),
        GoogleProvider({
          clientId: getGoogleCredentials().clientId,
          clientSecret: getGoogleCredentials().clientSecret
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            console.log('Session Callback', { session, token })
            return {
              ...session,
              user: {
                ...session.user,
                id: token.id,
                randomKey: token.randomKey
              }
            }
        },
        jwt: ({ token, user }) => {
          console.log('JWT Callback', { token, user })
          if (user) {
            const u = user as unknown as User 
            return {
              ...token,
              id: u.id,
              randomKey: u.randomKey,
              active: u.active
            }
          }
          return token
        },
        async signIn({ account, profile, email, credentials }){

          console.log(email)
          console.log(account)
          console.log(credentials)

          if(account?.provider !== 'google'){
            return true
          }

          if(!profile?.email){
            throw new Error('no profile')
          }

          await prisma.user.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name,
              active: true
            },
            update: {
              name: profile.name,
            }
          })

          // redirect('/dashboard')

          return true

        }
      }
}

const handler:unknown = NextAuth(authOptions)
export { handler as GET, handler as POST}