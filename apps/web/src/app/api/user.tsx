'use client'

import { useSession } from "next-auth/react"

export const User = () => {
    const { data: session } = useSession()

    // client session call will be undefined on first call...
    return <pre>{JSON.stringify(session)}</pre>
}